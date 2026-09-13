#!/usr/bin/env node
/**
 * Pure-JS MP4 faststart (qt-faststart): move moov before mdat and patch
 * chunk offsets so browsers can start playback without downloading the whole file.
 * No ffmpeg / no re-encode — identical A/V to the source.
 */
import {
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
  renameSync,
  unlinkSync,
  statSync,
  copyFileSync,
} from "fs";
import { join, dirname, basename } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const heroDir = join(root, "public", "assets", "hero");

function readAtom(buf, offset) {
  if (offset + 8 > buf.length) return null;
  let size = buf.readUInt32BE(offset);
  const type = buf.toString("ascii", offset + 4, offset + 8);
  let header = 8;
  if (size === 1) {
    if (offset + 16 > buf.length) return null;
    size = Number(buf.readBigUInt64BE(offset + 8));
    header = 16;
  } else if (size === 0) {
    size = buf.length - offset;
  }
  if (size < header || offset + size > buf.length) return null;
  return { type, size, header, offset, end: offset + size };
}

function findTopLevel(buf) {
  const atoms = [];
  let offset = 0;
  while (offset + 8 <= buf.length) {
    const atom = readAtom(buf, offset);
    if (!atom) break;
    atoms.push(atom);
    offset = atom.end;
  }
  return atoms;
}

function patchChunkOffsets(moov, delta) {
  const walk = (buf, start, end) => {
    let offset = start;
    while (offset + 8 <= end) {
      const atom = readAtom(buf, offset);
      if (!atom || atom.end > end) break;
      if (atom.type === "stco") {
        const entryCount = buf.readUInt32BE(atom.offset + atom.header + 4);
        let p = atom.offset + atom.header + 8;
        for (let i = 0; i < entryCount; i++) {
          const v = buf.readUInt32BE(p);
          buf.writeUInt32BE(v + delta, p);
          p += 4;
        }
      } else if (atom.type === "co64") {
        const entryCount = buf.readUInt32BE(atom.offset + atom.header + 4);
        let p = atom.offset + atom.header + 8;
        for (let i = 0; i < entryCount; i++) {
          const v = buf.readBigUInt64BE(p);
          buf.writeBigUInt64BE(v + BigInt(delta), p);
          p += 8;
        }
      } else if (
        atom.type === "trak" ||
        atom.type === "mdia" ||
        atom.type === "minf" ||
        atom.type === "stbl" ||
        atom.type === "moov" ||
        atom.type === "udta" ||
        atom.type === "edts" ||
        atom.type === "mdra"
      ) {
        walk(buf, atom.offset + atom.header, atom.end);
      }
      offset = atom.end;
    }
  };
  walk(moov, 0, moov.length);
}

function faststart(inputPath) {
  const buf = readFileSync(inputPath);
  const atoms = findTopLevel(buf);
  const ftyp = atoms.find((a) => a.type === "ftyp");
  const moov = atoms.find((a) => a.type === "moov");
  const mdat = atoms.find((a) => a.type === "mdat");
  if (!ftyp || !moov || !mdat) {
    return { ok: false, reason: "missing ftyp/moov/mdat" };
  }
  if (moov.offset < mdat.offset) {
    return { ok: false, reason: "already-faststart", skipped: true };
  }

  const ftypBuf = buf.subarray(ftyp.offset, ftyp.end);
  const moovBuf = Buffer.from(buf.subarray(moov.offset, moov.end));
  // Moving moov in front of mdat shifts mdat (and its samples) forward by moov.size.
  patchChunkOffsets(moovBuf, moov.size);

  const parts = [ftypBuf, moovBuf];
  for (const atom of atoms) {
    if (atom.type === "ftyp" || atom.type === "moov") continue;
    parts.push(buf.subarray(atom.offset, atom.end));
  }
  const out = Buffer.concat(parts);
  return { ok: true, buffer: out, before: buf.length, after: out.length };
}

const files = readdirSync(heroDir).filter((f) => f.toLowerCase().endsWith(".mp4"));

for (const name of files) {
  const input = join(heroDir, name);
  const result = faststart(input);
  if (!result.ok) {
    console.log(`${name}: ${result.reason}`);
    continue;
  }
  const tmp = join(heroDir, `${basename(name, ".mp4")}.faststart.tmp.mp4`);
  const backup = `${input}.bak`;
  writeFileSync(tmp, result.buffer);
  copyFileSync(input, backup);
  try {
    unlinkSync(input);
    renameSync(tmp, input);
    unlinkSync(backup);
  } catch (err) {
    if (existsSync(backup) && !existsSync(input)) renameSync(backup, input);
    if (existsSync(tmp)) unlinkSync(tmp);
    throw err;
  }
  console.log(
    `faststart: ${name}  ${(result.before / 1024 / 1024).toFixed(2)} → ${(result.after / 1024 / 1024).toFixed(2)} MB`
  );
}

console.log("Hero faststart remux complete.");
