import { Building2, Handshake, Home, KeyRound, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const SERVICES = [
  { icon: Home, title: "Buy", desc: "Discover curated luxury homes." },
  { icon: KeyRound, title: "Sell", desc: "List with white-glove marketing." },
  { icon: Building2, title: "Rent", desc: "Premium short and long-term rentals." },
  { icon: Handshake, title: "Invest", desc: "Strategic property investment advice." },
  { icon: ShieldCheck, title: "Legal & Diligence", desc: "End-to-end paperwork and verification." },
  { icon: Sparkles, title: "Interior Concierge", desc: "Curated design and styling partners." },
];

export default function ServicesGrid() {
  return (
    <section className="bg-muted/40 py-24 border-y border-border">
      <div className="container mx-auto px-4">
        <SectionHeader align="center" eyebrow="What we offer" title="A complete" accent="luxury service" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="p-7 rounded-2xl bg-card border border-border hover:shadow-luxe transition-shadow">
              <div className="size-12 rounded-xl bg-gradient-gold grid place-items-center text-ink"><s.icon className="size-5" /></div>
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
