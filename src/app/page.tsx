import Hero from "@/components/Hero";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import PopularTreatments from "@/components/PopularTreatments";
import WhySection from "@/components/WhySection";
import ComparisonSection from "@/components/ComparisonSection";
import PhilosophySection from "@/components/PhilosophySection";
import JourneySection from "@/components/JourneySection";
import HomeFaqSection from "@/components/HomeFaqSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TreatmentsGrid />
      <PopularTreatments />
      <WhySection />
      <ComparisonSection />
      <PhilosophySection />
      <JourneySection />
      <HomeFaqSection />
      <CTASection secondaryLabel="How it works" secondaryHref="/how-it-works" secondaryVariant="ghost" />
    </>
  );
}
