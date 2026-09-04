#!/usr/bin/env node
import { writeFileSync, statSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const jobs = [
  ["public/assets/philosophy/philosophy.jpg", 1400, 72],
  ["public/assets/philosophy/longevity.jpg", 1400, 72],
  ["public/assets/cta/cta-stretch.jpg", 1200, 72],
  ["public/assets/hero/nh-nature-poster.jpg", 1600, 70],
  ["public/assets/treatments/semaglutide.jpg", 1200, 72],
  ["public/assets/treatments/tirzepatide.jpg", 1200, 72],
  ["public/assets/pages/clinic.jpg", 1200, 72],
  ["public/assets/journey/journey-goal.jpg", 800, 70],
  ["public/assets/journey/journey-assessment.jpg", 800, 70],
  ["public/assets/journey/journey-review.jpg", 800, 70],
  ["public/assets/journey/journey-consult.jpg", 800, 70],
  ["public/assets/journey/journey-support.jpg", 800, 70],
];

for (const [rel, width, quality] of jobs) {
  const src = join(root, rel);
  if (!existsSync(src)) {
    console.warn("missing", rel);
    continue;
  }
  const out = src.replace(/\.jpe?g$/i, ".webp");
  const buf = await sharp(src, { failOn: "none" })
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer();
  writeFileSync(out, buf);
  console.log(
    `${rel.replace(/\.jpe?g$/i, ".webp")}  ${(statSync(src).size / 1024).toFixed(1)} → ${(buf.length / 1024).toFixed(1)} KB`
  );
}
