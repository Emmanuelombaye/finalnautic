/**
 * VirtualClinicOS Brand Storefront — public config only (no API keys).
 * Docs: https://portal.virtualclinicos.com/api-docs#storefront-auth
 */

export const VCO_DEFAULT_API_URL = "https://portal.virtualclinicos.com";

/** Nautic Health brand ID (safe in frontend). */
export const VCO_DEFAULT_BRAND_ID = "428b2872-4486-4764-a3b8-dc7668ff9eb6";

export function getVcoConfig() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_VCO_API_URL || VCO_DEFAULT_API_URL
  ).replace(/\/$/, "");
  const brandId = (
    process.env.NEXT_PUBLIC_VCO_BRAND_ID || VCO_DEFAULT_BRAND_ID
  ).trim();

  if (!brandId) {
    throw new Error(
      "Missing NEXT_PUBLIC_VCO_BRAND_ID — set the Nautic brand ID in env or defaults.",
    );
  }

  return { baseUrl, brandId };
}
