import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Bath, BedDouble, Calendar, CheckCircle2, Maximize2, MapPin, MessageCircle, Phone, Play } from "lucide-react";
import { getProperty, PROPERTIES } from "@/data/properties";
import { SITE, telLink, waLink } from "@/lib/site";

export default function PropertyDetail() {
  const { id } = useParams();
  const p = getProperty(id);
  if (!p) return <Navigate to="/properties" replace />;

  const [active, setActive] = useState(0);
  const [price, setPrice] = useState(p.priceValue);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8.5);

  const r = rate / 12 / 100;
  const n = years * 12;
  const emi = price > 0 ? Math.round((price * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)) : 0;

  return (
    <>
      <section className="pt-28 container mx-auto px-4">
        <Link to="/properties" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold mb-6">
          <ArrowLeft className="size-4" /> Back to Collection
        </Link>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-3 h-[55vh] min-h-[420px]">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={p.gallery[active]} alt={p.title} className="size-full object-cover" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] bg-gradient-gold text-ink px-3 py-1.5 rounded-full">{p.status}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] glass text-ink px-3 py-1.5 rounded-full">{p.type}</span>
            </div>
            <button className="absolute bottom-4 right-4 inline-flex items-center gap-2 glass-dark text-white px-4 py-2 rounded-full text-sm">
              <Play className="size-4" /> Virtual 360° Tour
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {p.gallery.slice(0, 4).map((src, i) => (
              <button key={i} onClick={() => setActive(i)} className={`relative overflow-hidden rounded-2xl group ${active === i ? "ring-2 ring-[#c9a96e]" : ""}`}>
                <img src={src} alt="" loading="lazy" className="size-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{p.type}</div>
            <h1 className="mt-2 font-display text-4xl md:text-6xl">{p.title}</h1>
            <div className="mt-3 flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-gold" /> {p.location}, {p.city}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { i: BedDouble, l: "Bedrooms", v: `${p.bhk} BHK` },
                { i: Bath, l: "Bathrooms", v: p.bath },
                { i: Maximize2, l: "Area", v: p.area },
              ].map((s) => (
                <div key={s.l} className="p-5 rounded-2xl bg-card border border-border">
                  <s.i className="size-5 text-gold" />
                  <div className="text-xs text-muted-foreground mt-3 uppercase tracking-wider">{s.l}</div>
                  <div className="font-display text-xl mt-1">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="font-display text-3xl">Overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-3xl">Amenities</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {p.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle2 className="size-5 text-gold" /> <span className="text-sm">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card">
              <h2 className="font-display text-3xl">Mortgage Calculator</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <RangeBox label={`Loan: ₹${(price / 10000000).toFixed(2)} Cr`} min={500000} max={p.priceValue} step={100000} value={price} onChange={setPrice} />
                <RangeBox label={`Tenure: ${years} years`} min={5} max={30} step={1} value={years} onChange={setYears} />
                <RangeBox label={`Rate: ${rate}%`} min={6} max={12} step={0.1} value={rate} onChange={setRate} />
              </div>
              <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4 p-5 rounded-xl bg-gradient-dark text-white">
                <div className="text-sm uppercase tracking-[0.2em] text-gold">Estimated Monthly EMI</div>
                <div className="font-display text-4xl gradient-gold-text">₹{emi.toLocaleString("en-IN")}</div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-3xl">Neighbourhood</h2>
              <div className="mt-6 aspect-[16/9] rounded-2xl overflow-hidden border border-border">
                <iframe src={SITE.mapEmbed} title="Neighbourhood map" className="size-full" loading="lazy" />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-dark text-white shadow-luxe">
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Asking Price</div>
              <div className="mt-2 font-display text-4xl gradient-gold-text">{p.price}</div>
              <div className="gold-divider my-5 opacity-50" />
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We will reach out shortly."); }} className="space-y-3">
                <input className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none placeholder:text-white/50" placeholder="Full name" required />
                <input className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none placeholder:text-white/50" placeholder="Phone number" required />
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3 text-sm">
                  <Calendar className="size-4 text-gold" />
                  <input type="date" className="bg-transparent outline-none flex-1 text-white" />
                </div>
                <button className="w-full bg-gradient-gold text-ink py-3 rounded-lg text-sm font-medium">Schedule Visit</button>
              </form>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a href={telLink} className="inline-flex items-center justify-center gap-2 glass-dark text-white py-3 rounded-lg text-sm"><Phone className="size-4 text-gold"/> Call</a>
                <a href={waLink(`Hi, I'd like more info on ${p.title}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg text-sm"><MessageCircle className="size-4"/> WhatsApp</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <h2 className="font-display text-3xl md:text-4xl mb-8">You may also <em className="italic gradient-gold-text">like</em></h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROPERTIES.filter((x) => x.id !== p.id).slice(0, 3).map((x) => (
            <Link key={x.id} to={`/properties/${x.id}`} className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={x.cover} alt={x.title} loading="lazy" className="size-full object-cover hover-zoom-img" />
              </div>
              <div className="mt-3 flex justify-between items-start">
                <div>
                  <div className="font-display text-xl group-hover:text-gold transition-colors">{x.title}</div>
                  <div className="text-xs text-muted-foreground">{x.location}</div>
                </div>
                <div className="text-sm font-medium gradient-gold-text">{x.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function RangeBox({ label, min, max, step, value, onChange }) {
  return (
    <div>
      <div className="text-xs text-muted-foreground mb-2">{label}</div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-[#c9a96e]" />
    </div>
  );
}
