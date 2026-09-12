import LegalPage from "@/components/LegalPage";
import { privacyContent } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nautic Health collects, uses, and protects patient information during clinical intake and care.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Nautic Health collects, uses, and protects patient information during clinical intake and care."
      lastUpdated="September 9, 2026"
    >
      {privacyContent}
    </LegalPage>
  );
}
