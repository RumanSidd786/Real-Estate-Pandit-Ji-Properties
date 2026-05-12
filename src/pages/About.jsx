import SectionHeader from "@/components/SectionHeader";
import villa from "@/assets/properties/villa-classic.jpg";

const TIMELINE = [
  { y: "2009", t: "Founded in Lucknow", d: "Began as a boutique advisory for premium homes." },
  { y: "2014", t: "First ₹100 Cr milestone", d: "Crossed our first hundred-crore in transactions." },
  { y: "2019", t: "Architectural division", d: "Launched bespoke architectural consulting." },
  { y: "2024", t: "120+ families served", d: "An ever-growing community of trust." },
];

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeader eyebrow="About Us" title="Crafting addresses of" accent="distinction"
            description="Pandit Ji Properties is Lucknow's trusted name in luxury real estate, with 15+ years of curating exceptional homes for discerning families." />
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div><div className="font-display text-3xl gradient-gold-text">15+</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years</div></div>
            <div><div className="font-display text-3xl gradient-gold-text">120+</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Families</div></div>
            <div><div className="font-display text-3xl gradient-gold-text">₹500Cr+</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Transacted</div></div>
          </div>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-3xl">
          <img src={villa} alt="Luxury residence" className="size-full object-cover" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <SectionHeader align="center" eyebrow="Our Journey" title="A legacy" accent="of trust" />
        <div className="mt-12 relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {TIMELINE.map((t, i) => (
            <div key={t.y} className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-10 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:text-right md:pr-8">
                <div className="font-display text-3xl gradient-gold-text">{t.y}</div>
                <div className="font-medium mt-1">{t.t}</div>
                <p className="text-sm text-muted-foreground mt-1">{t.d}</p>
              </div>
              <div className="hidden md:block" />
              <span className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 size-3 rounded-full bg-gradient-gold ring-4 ring-background" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
