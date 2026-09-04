#!/usr/bin/env node
/**
 * Downloads Nautic Health static assets into /public/assets.
 * Safe to run repeatedly — skips files that already exist.
 * Used by `npm run assets` and optional postinstall on Vercel.
 */

import { createWriteStream, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { get } from "https";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const base = "https://nautichealth.com";

/** @type {Record<string, string>} */
const files = {
  "public/assets/brand/nautic-logo.png":
    "/__l5e/assets-v1/b712520e-fb27-4b72-a985-cc62b0c748b8/nautic-logo.png",
  "public/favicon.png": "/favicon.png",
  "public/assets/hero/nh-nature-poster.jpg": "/assets/nh-nature-poster-BrTriUD6.jpg",
  "public/assets/hero/nh-nature-01.mp4":
    "/__l5e/assets-v1/26a32b8b-2922-4541-b133-91b34e012df4/nh-nature-01.mp4",
  "public/assets/hero/nh-nature-02.mp4":
    "/__l5e/assets-v1/81eed8f8-44ac-476f-a0ff-45ad190fc40f/nh-nature-02.mp4",
  "public/assets/hero/nh-nature-03.mp4":
    "/__l5e/assets-v1/df731f97-0d8e-4c21-965a-a4dcc31808b0/nh-nature-03.mp4",
  "public/assets/hero/nh-nature-04.mp4":
    "/__l5e/assets-v1/dd9fe192-9187-4e52-b7e9-c3cc98b6c000/nh-nature-04.mp4",
  "public/assets/decorative/leaf-sage.png": "/assets/leaf-sage-BzB7FDZR.png",
  "public/assets/decorative/leaf-sage-2.png": "/assets/leaf-sage-2-DG0wgfXy.png",
  "public/assets/decorative/leaf-forest.png": "/assets/leaf-forest-FxYA-Zwq.png",
  "public/assets/decorative/leaf-gold.png": "/assets/leaf-gold-D0k4Brq8.png",
  "public/assets/treatments/tirzepatide.jpg":
    "/__l5e/assets-v1/eab871fb-a7f1-49e3-b2ce-52c0d68a26c8/treatment-editorial-tirzepatide.jpg",
  "public/assets/treatments/semaglutide.jpg":
    "/__l5e/assets-v1/289557a0-4a62-4332-a69f-21cf246ae264/treatment-editorial-semaglutide.jpg",
  "public/assets/treatments/semaglutide-editorial.jpg":
    "/__l5e/assets-v1/289557a0-4a62-4332-a69f-21cf246ae264/treatment-editorial-semaglutide.jpg",
  "public/assets/treatments/hormone.jpg":
    "/__l5e/assets-v1/39617c76-40c9-4783-b7ef-f1b1ea11d942/treatment-editorial-womens-hormone.jpg",
  "public/assets/treatments/nad.jpg":
    "/__l5e/assets-v1/ff54dd68-4c04-4b3b-b513-c34d647d7af3/treatment-editorial-nad.jpg",
  "public/assets/treatments/sermorelin.jpg":
    "/__l5e/assets-v1/1c3250b7-3278-4c82-a124-6aa06bcd3c34/treatment-editorial-sermorelin.jpg",
  "public/assets/treatments/performance.jpg":
    "/__l5e/assets-v1/ed176e94-2496-456f-a321-1e62460bc7e5/treatment-editorial-performance.jpg",
  "public/assets/treatments/cognitive.jpg":
    "/__l5e/assets-v1/ffcb5481-863a-4ccf-84dd-6f10bcf0adcd/treatment-editorial-methylene-blue.jpg",
  "public/assets/treatments/overall.jpg":
    "/__l5e/assets-v1/2c532e02-dc43-47cb-8575-7ed4e826503d/treatment-editorial-overall.jpg",
  "public/assets/pages/clinic.jpg": "/assets/clinic-DogOTmI9.jpg",
  "public/assets/pages/couple.jpg": "/assets/couple-QD9nos3L.jpg",
  "public/assets/journal/journal-hero.jpg": "/assets/journal-hero-B1H_daRk.jpg",
  "public/assets/journal/journal-cellular.jpg": "/assets/journal-cellular-D9TQup9d.jpg",
  "public/assets/journal/program-recovery.jpg": "/assets/program-recovery-Cs9g5qEF.jpg",
  "public/assets/journal/journal-nutrition.jpg": "/assets/journal-nutrition-BNYjNr_w.jpg",
  "public/assets/journal/journal-sleep.jpg": "/assets/journal-sleep-DNSHWyP2.jpg",
  "public/assets/journal/program-weight.jpg": "/assets/program-weight-DpTBV69w.jpg",
  "public/assets/diagnostics/tasso-blood-test.png":
    "/__l5e/assets-v1/33e2b9a2-d49e-4558-9538-dd156f94b8be/tasso-blood-test.png",
  "public/assets/philosophy/philosophy.jpg": "/assets/philosophy-DxQvW9CP.jpg",
  "public/assets/philosophy/longevity.jpg": "/assets/longevity-C1b8388j.jpg",
  "public/assets/cta/cta-stretch.jpg": "/assets/cta-stretch-real-BQuXPQGF.jpg",
  "public/assets/journey/journey-goal.jpg": "/assets/journey-goal-CDDjGLt3.jpg",
  "public/assets/journey/journey-assessment.jpg": "/assets/journey-assessment-CqRN--0_.jpg",
  "public/assets/journey/journey-review.jpg": "/assets/journey-review-wJWLbzH0.jpg",
  "public/assets/journey/journey-consult.jpg": "/assets/journey-consult-D9l62zAb.jpg",
  "public/assets/journey/journey-support.jpg": "/assets/journey-support-BcU8Kk4T.jpg",
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    mkdirSync(dirname(dest), { recursive: true });
    const file = createWriteStream(dest);
    get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
    }).on("error", reject);
  });
}

let failed = 0;
for (const [rel, path] of Object.entries(files)) {
  const dest = join(root, rel);
  if (existsSync(dest)) {
    console.log(`skip: ${rel}`);
    continue;
  }
  const url = `${base}${path}`;
  process.stdout.write(`download: ${rel} ... `);
  try {
    await download(url, dest);
    console.log("ok");
  } catch (err) {
    failed++;
    console.log(`failed (${err.message})`);
  }
}

if (failed > 0) {
  console.warn(`\n${failed} asset(s) failed — build may still work if files exist locally.`);
}
console.log("\nAssets ready in public/");
