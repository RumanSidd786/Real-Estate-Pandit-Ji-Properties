import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img src={hero} alt="Luxury residence" className="absolute inset-0 size-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-24 text-white">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold">Pandit Ji Properties</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl">
            Luxury Living, <em className="italic gradient-gold-text">Redefined</em>
          </h1>
          <p className="mt-5 text-base md:text-lg max-w-xl text-white/80">
            A curated collection of architectural homes in Lucknow's most coveted addresses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/properties" className="inline-flex items-center gap-2 bg-gradient-gold text-ink px-6 py-3 rounded-full font-medium">
              Explore Collection <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-full font-medium">
              Book Private Tour
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
