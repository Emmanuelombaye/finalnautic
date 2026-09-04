import { existsSync, writeFileSync, statSync } from "fs";
import { join } from "path";
import sharp from "sharp";

const mediaSrc = await import("fs").then((fs) =>
  fs.readFileSync("src/lib/media.ts", "utf8")
);
const paths = [...mediaSrc.matchAll(/local\("(\/assets\/[^"]+)"\)/g)].map((m) => m[1]);
const uniq = [...new Set(paths)];
const miss = uniq.filter((p) => !existsSync(join("public", p.slice(1))));

console.log("media.ts refs:", uniq.length);
if (miss.length) {
  console.log("MISSING:");
  miss.forEach((p) => console.log(" ", p));
} else {
  console.log("All media.ts paths exist on disk");
}

const clinicJpg = "public/assets/pages/clinic.jpg";
if (existsSync(clinicJpg)) {
  const buf = await sharp(clinicJpg, { failOn: "none" })
    .rotate()
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 65, effort: 6 })
    .toBuffer();
  writeFileSync("public/assets/pages/clinic.webp", buf);
  console.log(
    `clinic.webp ${(buf.length / 1024).toFixed(1)} KB (from ${(statSync(clinicJpg).size / 1024).toFixed(1)} KB jpg)`
  );
} else {
  console.log("MISSING clinic.jpg");
}
