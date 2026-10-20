import { assetUrl } from "@/lib/asset";
/** Resolve Lovable .asset.json urls for production CDN. */
export type LovableAsset = { url: string; original_filename?: string };

const CDN = "https://nautichealth.com";

export function assetUrl(asset: LovableAsset | string): string {
  const url = typeof asset === "string" ? asset : asset.url;
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/__l5e/")) return `${CDN}${url}`;
  return url;
}
