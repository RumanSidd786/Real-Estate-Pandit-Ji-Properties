import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { SITE, telLink, waLink } from "@/lib/site";

const FAQ = [
  { q: "Do you handle the legal paperwork?", a: "Yes — our in-house diligence team manages title checks, agreements and registration end-to-end." },
  { q: "Can you help with home loans?", a: "Absolutely. We partner with leading banks to secure preferential rates for our clients." },
  { q: "Do you offer property management?", a: "Yes, including tenant management, maintenance and concierge services for owners." },
];

export default function Contact() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="pt-32 pb-12 container mx-auto px-4">
        <SectionHeader align="center" eyebrow="Get in touch" title="Let's find your" accent="next address" />
      </section>

      <section className="container mx-auto px-4 pb-16 grid lg:grid-cols-[1fr_400px] gap-10">
        <form onSubmit={(e) => { e.preventDefault(); alert("Thank you. We'll be in touch shortly."); }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Full Name" placeholder="Your name" />
            <Field label="Phone" placeholder="+91" />
          </div>
          <Field label="Email" type="email" placeholder="you@email.com" />
          <Field label="Interested In" placeholder="Villa / Penthouse / Apartment" />
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea rows={5} required placeholder="Tell us about your requirement"
              className="mt-2 w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-[#c9a96e]" />
          </div>
          <button className="w-full bg-gradient-gold text-ink py-3 rounded-lg font-medium">Send Inquiry</button>
        </form>

        <aside className="space-y-4">
          <InfoCard icon={Phone} label="Call" value={SITE.phone} href={telLink} />
          <InfoCard icon={MessageCircle} label="WhatsApp" value="Chat with us" href={waLink()} />
          <InfoCard icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
          <InfoCard icon={MapPin} label="Office" value={SITE.address} />
        </aside>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="aspect-[16/7] rounded-2xl overflow-hidden border border-border">
          <iframe src={SITE.mapEmbed} title="Office map" className="size-full" loading="lazy" />
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 max-w-3xl">
        <SectionHeader align="center" eyebrow="FAQ" title="Frequently" accent="asked" />
        <div className="mt-8 space-y-3">
          {FAQ.map((f, i) => (
            <button key={i} onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left p-5 rounded-xl bg-card border border-border">
              <div className="flex justify-between gap-4">
                <div className="font-medium">{f.q}</div>
                <div className="text-gold">{open === i ? "−" : "+"}</div>
              </div>
              {open === i && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function Field({ label, ...rest }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input required className="mt-2 w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-[#c9a96e]" {...rest} />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href }) {
  const Comp = href ? "a" : "div";
  return (
    <Comp href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
      className="block p-5 rounded-2xl bg-card border border-border hover:border-gold transition-colors">
      <div className="flex items-start gap-4">
        <div className="size-10 rounded-xl bg-gradient-gold grid place-items-center text-ink"><Icon className="size-4" /></div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-1 text-sm">{value}</div>
        </div>
      </div>
    </Comp>
  );
}
