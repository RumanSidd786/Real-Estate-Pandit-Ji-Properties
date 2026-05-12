import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import PropertyCard from "@/components/PropertyCard";
import { featuredProperties } from "@/data/properties";

export default function FeaturedProperties() {
  const items = featuredProperties();
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <SectionHeader eyebrow="Signature Collection" title="Featured" accent="Residences"
          description="A handpicked edit of our most coveted homes — each defined by craft, location, and a singular sense of arrival." />
        <Link to="/properties" className="text-sm tracking-wide hover:text-gold">View all →</Link>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => <PropertyCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
