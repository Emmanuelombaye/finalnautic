import LegalPage from "@/components/LegalPage";
import { hipaaContent } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIPAA Notice",
  description:
    "Notice of privacy practices describing how medical information may be used and disclosed.",
};

export default function HipaaPage() {
  return (
    <LegalPage
      title="HIPAA Notice"
      description="Notice of privacy practices describing how medical information may be used and disclosed."
      lastUpdated="September 9, 2026"
    >
      {hipaaContent}
    </LegalPage>
  );
}
