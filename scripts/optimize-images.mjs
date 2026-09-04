#!/usr/bin/env node
/**
 * Compresses local public assets for faster loads.
 * - JPG/JPEG: max 1600px wide, quality 78
 * - PNG → WebP companions (leaves, logo, diagnostics)
 * Safe to re-run; writes via temp files for Windows compatibility.
 */

import {
  readdirSync,
  statSync,
  existsSync,
  mkdirSync,
  writeFileSync,
  renameSync,
  unlinkSync,
} from "fs";
import { join, dirname, extname, basename, relative } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const assetsRoot = join(root, "public", "assets");

const JPG_MAX_WIDTH = 1600;
const JPG_QUALITY = 78;
const WEBP_QUALITY = 72;
const PNG_WEBP_MAX = 1200;
const LOGO_MAX_WIDTH = 640;

/** @param {string} dir */
function walk(dir) {
  /** @type {string[]} */
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

/** @param {number} n */
function kb(n) {
  return `${(n / 1024).toFixed(1)} KB`;
}

/**
 * @param {string} input
 * @param {string} output
 * @param {import('sharp').Sharp} pipeline
 */
async function writeIfBetter(input, output, pipeline) {
  const before = existsSync(output) ? statSync(output).size : Infinity;
  const buf = await pipeline.toBuffer();
  if (buf.length >= before && existsSync(output)) {
    return { skipped: true, before, after: before };
  }
  mkdirSync(dirname(output), { recursive: true });
  const tmp = `${output}.tmp-${process.pid}`;
  writeFileSync(tmp, buf);
  try {
    if (existsSync(output)) unlinkSync(output);
    renameSync(tmp, output);
  } catch {
    try {
      writeFileSync(output, buf);
      if (existsSync(tmp)) unlinkSync(tmp);
    } catch (err) {
      if (existsSync(tmp)) unlinkSync(tmp);
      throw err;
    }
  }
  const inputSize = existsSync(input) ? statSync(input).size : buf.length;
  return {
    skipped: false,
    before: before === Infinity ? inputSize : before,
    after: buf.length,
  };
}

async function optimizeJpg(file) {
  const meta = await sharp(file, { failOn: "none" }).metadata();
  const width = meta.width && meta.width > JPG_MAX_WIDTH ? JPG_MAX_WIDTH : undefined;
  const pipeline = sharp(file, { failOn: "none" })
    .rotate()
    .resize(width ? { width, withoutEnlargement: true } : undefined)
    .jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true });
  const result = await writeIfBetter(file, file, pipeline);
  const label = relative(root, file);
  if (result.skipped) console.log(`skip jpg: ${label}`);
  else console.log(`jpg: ${label}  ${kb(result.before)} → ${kb(result.after)}`);
}

/**
 * @param {string} file
 * @param {{ maxWidth?: number; quality?: number }} opts
 */
async function pngToWebp(file, opts = {}) {
  const maxWidth = opts.maxWidth ?? PNG_WEBP_MAX;
  const quality = opts.quality ?? WEBP_QUALITY;
  const out = join(dirname(file), `${basename(file, extname(file))}.webp`);
  const meta = await sharp(file, { failOn: "none" }).metadata();
  const width = meta.width && meta.width > maxWidth ? maxWidth : undefined;
  const pipeline = sharp(file, { failOn: "none" })
    .rotate()
    .resize(width ? { width, withoutEnlargement: true } : undefined)
    .webp({ quality, effort: 6 });
  const result = await writeIfBetter(file, out, pipeline);
  const label = relative(root, out);
  if (result.skipped) console.log(`skip webp: ${label}`);
  else console.log(`webp: ${label}  ${kb(result.before)} → ${kb(result.after)}`);
}

async function main() {
  console.log("Optimizing images in public/assets …");
  const files = walk(assetsRoot).filter((f) => !basename(f).includes(".tmp-"));

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    const name = basename(file).toLowerCase();

    try {
      if (ext === ".jpg" || ext === ".jpeg") {
        await optimizeJpg(file);
        continue;
      }

      if (ext === ".png") {
        if (name.includes("logo")) {
          await pngToWebp(file, { maxWidth: LOGO_MAX_WIDTH, quality: 82 });
        } else if (name.includes("tasso") || name.includes("leaf")) {
          await pngToWebp(file, {
            maxWidth: name.includes("leaf") ? 800 : 1400,
            quality: name.includes("leaf") ? 65 : 74,
          });
        } else {
          await pngToWebp(file, { maxWidth: PNG_WEBP_MAX, quality: WEBP_QUALITY });
        }
      }
    } catch (err) {
      console.warn(
        `warn: skipped ${relative(root, file)} — ${err instanceof Error ? err.message : err}`
      );
    }
  }

  console.log("Image optimization complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
