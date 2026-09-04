#!/usr/bin/env node
/**
 * Aggressive WebP generation for every photo used on the site.
 * Keeps files light while remaining sharp enough for retina cards/heroes.
 */
import { writeFileSync, existsSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** @type {Array<[string, number, number]>} srcRel, maxWidth, quality */
const jobs = [
  ["public/assets/brand/nautic-logo.png", 480, 80],
  ["public/assets/hero/nh-nature-poster.jpg", 1400, 62],
  ["public/assets/philosophy/philosophy.jpg", 1100, 60],
  ["public/assets/philosophy/longevity.jpg", 1100, 62],
  ["public/assets/cta/cta-stretch.jpg", 1000, 62],
  ["public/assets/pages/clinic.jpg", 1000, 62],
  ["public/assets/pages/couple.jpg", 1100, 62],
  ["public/assets/diagnostics/tasso-blood-test.png", 1000, 68],
  ["public/assets/treatments/semaglutide.jpg", 1000, 65],
  ["public/assets/treatments/tirzepatide.jpg", 1000, 65],
  ["public/assets/treatments/semaglutide-editorial.jpg", 1000, 65],
  ["public/assets/journey/journey-goal.jpg", 640, 62],
  ["public/assets/journey/journey-assessment.jpg", 640, 62],
  ["public/assets/journey/journey-review.jpg", 640, 62],
  ["public/assets/journey/journey-consult.jpg", 640, 62],
  ["public/assets/journey/journey-support.jpg", 640, 62],
  ["public/assets/decorative/leaf-sage.png", 640, 58],
  ["public/assets/decorative/leaf-sage-2.png", 640, 58],
  ["public/assets/decorative/leaf-forest.png", 640, 58],
  ["public/assets/decorative/leaf-gold.png", 640, 58],
];

for (const [rel, width, quality] of jobs) {
  const src = join(root, rel);
  if (!existsSync(src)) {
    console.warn("skip missing", rel);
    continue;
  }
  const out = src.replace(/\.(jpe?g|png)$/i, ".webp");
  const buf = await sharp(src, { failOn: "none" })
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer();
  writeFileSync(out, buf);
  console.log(
    `${rel.replace(/\.(jpe?g|png)$/i, ".webp")}  ${(statSync(src).size / 1024).toFixed(0)} → ${(buf.length / 1024).toFixed(1)} KB`
  );
}

console.log("Light WebP set ready.");
