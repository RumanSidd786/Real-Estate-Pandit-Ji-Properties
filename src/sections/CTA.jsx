import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-dark text-white p-10 md:p-16">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Begin your journey</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Looking for the <em className="italic gradient-gold-text not-italic">perfect address?</em></h2>
          <p className="mt-4 text-white/70">Speak with our private property advisors for a tailored consultation.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gradient-gold text-ink px-6 py-3 rounded-full font-medium">
            Book Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
