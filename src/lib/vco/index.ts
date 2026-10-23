export { getVcoConfig, VCO_DEFAULT_API_URL, VCO_DEFAULT_BRAND_ID } from "./config";
export {
  beginIntake,
  fetchCategories,
  fetchProduct,
  fetchProducts,
  type VcoRawProduct,
} from "./storefront";
export {
  FALLBACK_CATALOG,
  TREATMENT_REF,
  enrichProduct,
  fallbackProducts,
  findProductForTreatment,
  hasStorefrontIntake,
  listStorefrontProducts,
  mapCatalog,
  resolveIntakeProduct,
  type StorefrontProduct,
} from "./productMap";
