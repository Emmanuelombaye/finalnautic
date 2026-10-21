/** Resolve Lovable .asset.json urls to committed local files (CDN /__l5e paths 404 on Vercel). */
export type LovableAsset = { url: string; original_filename?: string };

/** Map Lovable original filenames → files under /public/assets */
const LOCAL_BY_FILENAME: Record<string, string> = {
  "nautic-logo.png": "/assets/brand/nautic-logo.png",
  "nautic-mark.png": "/assets/brand/nautic-logo.png",
  "tasso-blood-test.png": "/assets/diagnostics/tasso-blood-test.png",
  "nh-nature-01.mp4": "/assets/hero/nh-nature-01.mp4",
  "nh-nature-02.mp4": "/assets/hero/nh-nature-02.mp4",
  "nh-nature-03.mp4": "/assets/hero/nh-nature-03.mp4",
  "nh-nature-04.mp4": "/assets/hero/nh-nature-04.mp4",
  "treatment-editorial-tirzepatide.jpg": "/assets/treatments/tirzepatide.jpg",
  "treatment-editorial-semaglutide.jpg": "/assets/treatments/semaglutide-editorial.jpg",
  "treatment-editorial-womens-hormone.jpg": "/assets/treatments/hormone.jpg",
  "treatment-editorial-mens-hormone.jpg": "/assets/treatments/mens-hormone.jpg",
  "treatment-editorial-nad.jpg": "/assets/treatments/nad.jpg",
  "treatment-editorial-sermorelin.jpg": "/assets/treatments/sermorelin.jpg",
  "treatment-editorial-performance.jpg": "/assets/treatments/performance.jpg",
  "treatment-editorial-methylene-blue.jpg": "/assets/treatments/cognitive.jpg",
  "treatment-editorial-overall.jpg": "/assets/treatments/overall.jpg",
  "treatment-editorial-glutathione.jpg": "/assets/treatments/glutathione.jpg",
  "treatment-editorial-enclomiphene.jpg": "/assets/treatments/enclomiphene.jpg",
  "treatment-editorial-longevity.jpg": "/assets/treatments/longevity.jpg",
};

function filenameFromAsset(asset: LovableAsset | string): string | undefined {
  if (typeof asset !== "string" && asset.original_filename) {
    return asset.original_filename;
  }
  const url = typeof asset === "string" ? asset : asset.url;
  const match = url.match(/\/([^/?#]+)$/);
  return match?.[1];
}

export function assetUrl(asset: LovableAsset | string): string {
  const url = typeof asset === "string" ? asset : asset.url;
  if (!url) return "";

  const filename = filenameFromAsset(asset);
  if (filename && LOCAL_BY_FILENAME[filename]) {
    return LOCAL_BY_FILENAME[filename];
  }

  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  // Avoid broken Lovable CDN paths on production hosts
  if (url.startsWith("/__l5e/")) return "";
  return url;
}
