import LegalPage from "@/components/LegalPage";
import { medicalConsentContent } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important medical disclaimer for Nautic Health website content, intake, and related services.",
};

export default function MedicalConsentPage() {
  return (
    <LegalPage
      title="Medical Disclaimer"
      lastUpdated="September 9, 2026"
    >
      {medicalConsentContent}
    </LegalPage>
  );
}
