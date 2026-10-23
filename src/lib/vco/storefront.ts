/**
 * VirtualClinicOS Brand Storefront client (browser-safe).
 * Auth: brand ID via query/header — never put API keys in the frontend.
 * Docs: https://portal.virtualclinicos.com/api-docs#storefront-auth
 */
import { getVcoConfig } from "./config";

export type VcoRawProduct = {
  id: string;
  name?: string | null;
  public_display_name?: string | null;
  slug?: string | null;
  sku?: string | null;
  description?: string | null;
  price?: number | null;
  status?: string | null;
  visibility?: string | null;
  intake_url?: string | null;
  image_url?: string | null;
  images?: string[] | null;
  requires_prescription?: boolean;
  requires_intake?: boolean;
  treatment_protocol?: string | null;
};

async function commerceGet(path: string) {
  const { baseUrl, brandId } = getVcoConfig();
  const url = new URL(`${baseUrl}${path}`);
  url.searchParams.set("brandId", brandId);

  const res = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
      "X-Brand-Id": brandId,
    },
  });

  let body: { error?: string; message?: string; products?: VcoRawProduct[]; product?: VcoRawProduct; categories?: unknown[] } | null =
    null;
  try {
    body = await res.json();
  } catch {
    body = null;
  }

  if (!res.ok) {
    const msg = body?.error || body?.message || `Storefront request failed (${res.status})`;
    throw new Error(msg);
  }

  return body;
}

let productsCache: VcoRawProduct[] | null = null;
let productsInflight: Promise<VcoRawProduct[]> | null = null;

export async function fetchProducts({ force = false } = {}): Promise<VcoRawProduct[]> {
  if (!force && productsCache) return productsCache;
  if (!force && productsInflight) return productsInflight;

  productsInflight = commerceGet("/api/commerce/v1/products")
    .then((data) => {
      const list = Array.isArray(data?.products) ? data.products : [];
      productsCache = list;
      return list;
    })
    .finally(() => {
      productsInflight = null;
    });

  return productsInflight;
}

export async function fetchProduct(slugOrSku: string): Promise<VcoRawProduct | null> {
  const data = await commerceGet(`/api/commerce/v1/products/${encodeURIComponent(slugOrSku)}`);
  return data?.product || null;
}

export async function fetchCategories() {
  const data = await commerceGet("/api/commerce/v1/categories");
  return Array.isArray(data?.categories) ? data.categories : [];
}

export function beginIntake(intakeUrl: string | null | undefined) {
  if (!intakeUrl) {
    throw new Error(
      "This product has no intake URL yet. Contact your VirtualClinicOS rep to finish intake domain setup.",
    );
  }
  window.location.assign(intakeUrl);
}
