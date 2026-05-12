import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-gradient-dark text-white/80 mt-24">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl text-white">{SITE.name}</div>
          <p className="mt-3 text-sm text-white/60">{SITE.tagline}. Curated luxury homes across Lucknow.</p>
          <div className="flex gap-3 mt-5">
            <a href={SITE.social.instagram} aria-label="Instagram" className="p-2 rounded-full glass-dark hover:text-gold"><Instagram className="size-4" /></a>
            <a href={SITE.social.facebook} aria-label="Facebook" className="p-2 rounded-full glass-dark hover:text-gold"><Facebook className="size-4" /></a>
            <a href={SITE.social.youtube} aria-label="YouTube" className="p-2 rounded-full glass-dark hover:text-gold"><Youtube className="size-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-[0.2em] uppercase">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/properties" className="hover:text-gold">Properties</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-[0.2em] uppercase">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="size-4 text-gold mt-0.5" /> {SITE.phone}</li>
            <li className="flex gap-2"><Mail className="size-4 text-gold mt-0.5" /> {SITE.email}</li>
            <li className="flex gap-2"><MapPin className="size-4 text-gold mt-0.5" /> <span className="text-white/60">{SITE.address}</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-[0.2em] uppercase">Newsletter</h4>
          <p className="text-sm text-white/60 mb-3">Receive curated property previews.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input type="email" required placeholder="Email" className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none placeholder:text-white/40" />
            <button className="bg-gradient-gold text-ink px-4 rounded-lg text-sm font-medium">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div>Crafted with care in Lucknow.</div>
        </div>
      </div>
    </footer>
  );
}
