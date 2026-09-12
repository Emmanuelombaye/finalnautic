import LegalPage from "@/components/LegalPage";
import { termsContent } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern use of Nautic Health telehealth services, intake, and related clinical protocols.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="The terms that govern use of Nautic Health telehealth services, intake, and related clinical protocols."
      lastUpdated="September 9, 2026"
    >
      {termsContent}
    </LegalPage>
  );
}
