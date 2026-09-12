import LegalPage from "@/components/LegalPage";
import { telehealthConsentContent } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telehealth Consent",
  description:
    "Consent for telehealth evaluation, prescribing, and follow-up through Nautic Health affiliated clinicians.",
};

export default function TelehealthConsentPage() {
  return (
    <LegalPage
      title="Telehealth Consent"
      description="Consent for telehealth evaluation, prescribing, and follow-up through Nautic Health affiliated clinicians."
      lastUpdated="September 9, 2026"
    >
      {telehealthConsentContent}
    </LegalPage>
  );
}
