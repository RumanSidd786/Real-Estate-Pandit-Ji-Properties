const STATS = [
  { v: "₹500+ Cr", l: "Property Sold" },
  { v: "120+", l: "Happy Families" },
  { v: "15+", l: "Years Experience" },
  { v: "40+", l: "Premium Listings" },
];
export default function Stats() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.l}>
            <div className="font-display text-4xl md:text-5xl gradient-gold-text">{s.v}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
