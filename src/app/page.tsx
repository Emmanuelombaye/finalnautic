import Hero from "@/components/Hero";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import PopularTreatments from "@/components/PopularTreatments";
import WhySection from "@/components/WhySection";
import DiagnosticsSection from "@/components/DiagnosticsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JourneySection from "@/components/JourneySection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TreatmentsGrid />
      <PopularTreatments />
      <WhySection />
      <DiagnosticsSection />
      <ComparisonSection />
      <PhilosophySection />
      <TestimonialsSection />
      <JourneySection />
      <CTASection secondaryLabel="How it works" secondaryHref="/how-it-works" secondaryVariant="ghost" />
    </>
  );
}
