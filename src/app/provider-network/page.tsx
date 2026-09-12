import LegalPage from "@/components/LegalPage";
import { providerNetworkContent } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Provider Network",
  description:
    "How clinical services on this website are provided by independent licensed healthcare professionals.",
};

export default function ProviderNetworkPage() {
  return (
    <LegalPage
      title="Provider Network"
      description="How clinical services on this website are provided by independent licensed healthcare professionals."
      lastUpdated="September 9, 2026"
    >
      {providerNetworkContent}
    </LegalPage>
  );
}
