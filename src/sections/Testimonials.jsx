import SectionHeader from "@/components/SectionHeader";
import { Quote } from "lucide-react";

const T = [
  { name: "Aakash & Rhea Mehra", role: "Homeowners, Hazratganj", text: "From the first viewing to handover, every detail was anticipated. They redefined what a luxury experience should feel like." },
  { name: "Vikrant Singh", role: "Investor", text: "An exceptional eye for value. Their market intelligence in Lucknow is unmatched." },
  { name: "Mrs. Devika Kapoor", role: "Seller", text: "Sold our family home discreetly and well above expectations. True professionals." },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-24">
      <SectionHeader align="center" eyebrow="Voices of trust" title="What our" accent="clients say" />
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {T.map((t) => (
          <div key={t.name} className="p-7 rounded-2xl bg-card border border-border shadow-card">
            <Quote className="size-6 text-gold" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
            <div className="mt-6 gold-divider" />
            <div className="mt-4">
              <div className="font-display text-lg">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
