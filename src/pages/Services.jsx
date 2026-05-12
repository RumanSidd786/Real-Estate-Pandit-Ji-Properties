import ServicesGrid from "@/sections/ServicesGrid";
import SectionHeader from "@/components/SectionHeader";
import CTA from "@/sections/CTA";

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-8 container mx-auto px-4">
        <SectionHeader align="center" eyebrow="Our Services" title="A complete" accent="luxury experience"
          description="From discovery to handover — and beyond — we orchestrate every detail of your real estate journey." />
      </section>
      <ServicesGrid />
      <CTA />
    </>
  );
}
