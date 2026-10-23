/**
 * Presentational + routing map: local program slugs → VCO storefront products.
 */
import type { VcoRawProduct } from "./storefront";
import { fetchProducts } from "./storefront";

export type StorefrontProduct = {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number | null;
  intakeUrl: string | null;
  requiresPrescription: boolean;
  requiresIntake: boolean;
  status: string;
  image: string | null;
};

/** Local program / treatment slug → VCO SKU or product id */
export const TREATMENT_REF: Record<string, { sku?: string; id?: string }> = {
  "medical-weight-loss": { sku: "STORE-SEMA" },
  semaglutide: { sku: "STORE-SEMA" },
  "testosterone-optimization": { id: "b1522822-3b1d-4604-a9fe-ded61cae7104" },
  testosterone: { id: "b1522822-3b1d-4604-a9fe-ded61cae7104" },
  trt: { id: "b1522822-3b1d-4604-a9fe-ded61cae7104" },
};

/** Offline / API-down catalog using known Nautic storefront rows (public intake URLs). */
export const FALLBACK_CATALOG: VcoRawProduct[] = [
  {
    id: "d6389974-b2f3-45e8-b0fe-543c6cd65e21",
    name: "Semaglutide",
    sku: "STORE-SEMA",
    description:
      "Physician-prescribed once-weekly subcutaneous GLP-1 therapy for safe, sustained weight management and metabolic health.",
    price: 399,
    intake_url:
      "https://intake.nautichealth.com/intake/d6389974-b2f3-45e8-b0fe-543c6cd65e21",
    requires_prescription: true,
    requires_intake: true,
    status: "active",
  },
  {
    id: "b1522822-3b1d-4604-a9fe-ded61cae7104",
    name: "Testosterone Replacement Therapy",
    sku: null,
    description: "",
    price: 175,
    intake_url:
      "https://intake.nautichealth.com/intake/b1522822-3b1d-4604-a9fe-ded61cae7104",
    requires_prescription: true,
    requires_intake: true,
    status: "active",
    treatment_protocol: "Testosterone",
  },
];

export function enrichProduct(raw: VcoRawProduct): StorefrontProduct {
  const name = raw.public_display_name || raw.name || "Treatment";
  const image =
    raw.image_url || (Array.isArray(raw.images) && raw.images[0]) || null;

  return {
    id: raw.id,
    sku: raw.sku || raw.id,
    name,
    description: raw.description || "",
    price: typeof raw.price === "number" ? raw.price : null,
    intakeUrl: raw.intake_url || null,
    requiresPrescription: !!raw.requires_prescription,
    requiresIntake: raw.requires_intake !== false,
    status: raw.status || "active",
    image,
  };
}

export function mapCatalog(rawProducts: VcoRawProduct[] | null | undefined) {
  return (rawProducts || [])
    .filter((p) => p && p.status !== "inactive")
    .map(enrichProduct)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function fallbackProducts() {
  return mapCatalog(FALLBACK_CATALOG);
}

export function hasStorefrontIntake(treatmentKey: string | null | undefined) {
  if (!treatmentKey) return false;
  return Boolean(TREATMENT_REF[treatmentKey]);
}

export function findProductForTreatment(
  products: StorefrontProduct[],
  treatmentKey: string | null | undefined,
): StorefrontProduct | null {
  if (!treatmentKey) return null;
  const ref = TREATMENT_REF[treatmentKey];
  if (!ref) return null;

  if (ref.sku) {
    const bySku = products.find((p) => p.sku === ref.sku);
    if (bySku) return bySku;
  }
  if (ref.id) {
    const byId = products.find((p) => p.id === ref.id);
    if (byId) return byId;
  }
  return null;
}

export async function listStorefrontProducts() {
  const raw = await fetchProducts();
  return mapCatalog(raw);
}

export async function resolveIntakeProduct(treatmentKey: string) {
  let products: StorefrontProduct[];
  try {
    products = await listStorefrontProducts();
  } catch {
    products = fallbackProducts();
  }
  return findProductForTreatment(products, treatmentKey);
}
