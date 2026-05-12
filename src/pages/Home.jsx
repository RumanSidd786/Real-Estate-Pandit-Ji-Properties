import Hero from "@/sections/Hero";
import FeaturedProperties from "@/sections/FeaturedProperties";
import ServicesGrid from "@/sections/ServicesGrid";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <ServicesGrid />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
