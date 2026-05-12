import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { SITE, telLink } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When not scrolled we sit on top of the dark hero image -> force light text.
  // Once scrolled we switch to the glass pill with themed text.
  const onHero = !scrolled;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      {/* subtle top scrim so text stays readable over bright hero areas */}
      {onHero && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
      )}

      <div className="container mx-auto px-4 relative">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-luxe" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-10 md:size-12 rounded-full overflow-hidden ring-1 ring-gold/40 bg-black">
              <img
                src={logo}
                alt="Pandit Ji Properties logo"
                className="size-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <div
                className={`font-display text-lg md:text-xl tracking-tight ${
                  onHero ? "text-white" : "text-foreground"
                }`}
              >
                Pandit Ji <span className="gradient-gold-text">Properties</span>
              </div>
              <div
                className={`text-[10px] uppercase tracking-[0.2em] hidden sm:block ${
                  onHero ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                Luxury Real Estate · Lucknow
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className: onHero ? "text-white" : "text-foreground",
                }}
                inactiveProps={{
                  className: onHero ? "text-white/75" : "text-muted-foreground",
                }}
                className={`relative px-4 py-2 text-sm tracking-wide transition-colors ${
                  onHero ? "hover:text-white" : "hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={telLink}
              className={`flex items-center gap-2 text-sm transition-colors hover:text-gold ${
                onHero ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              <Phone className="size-4" /> {SITE.phone}
            </a>
            <Link
              to="/contact"
              className="bg-gradient-gold text-ink px-5 py-2.5 rounded-full text-sm font-medium hover:shadow-luxe transition-all"
            >
              Book Consultation
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition ${
              onHero
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-accent"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl p-4 lg:hidden shadow-luxe"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 border-b border-border/60 last:border-0 text-base text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 bg-gradient-gold text-ink px-5 py-3 rounded-full text-sm font-medium text-center"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
