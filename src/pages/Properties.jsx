import { useMemo, useState } from "react";
import { PROPERTIES } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import SectionHeader from "@/components/SectionHeader";
import { Grid3x3, List, Search } from "lucide-react";

const TYPES = ["All", "Villa", "Apartment", "Townhouse", "Penthouse"];

export default function Properties() {
  const [type, setType] = useState("All");
  const [bhk, setBhk] = useState(0);
  const [maxPrice, setMaxPrice] = useState(70000000);
  const [view, setView] = useState("grid");
  const [q, setQ] = useState("");

  const list = useMemo(() => PROPERTIES.filter((p) =>
    (type === "All" || p.type === type) &&
    (bhk === 0 || p.bhk >= bhk) &&
    p.priceValue <= maxPrice &&
    (q === "" || (p.title + p.location).toLowerCase().includes(q.toLowerCase()))
  ), [type, bhk, maxPrice, q]);

  return (
    <section className="pt-28 pb-24 container mx-auto px-4">
      <SectionHeader eyebrow="The Collection" title="Curated" accent="Properties"
        description="Filter by type, configuration and budget to discover homes that match your aspirations." />

      <div className="mt-10 p-5 rounded-2xl bg-card border border-border shadow-card grid md:grid-cols-12 gap-4 items-end">
        <div className="md:col-span-3">
          <label className="text-xs uppercase tracking-wider text-muted-foreground">Search</label>
          <div className="mt-2 flex items-center gap-2 border border-border rounded-lg px-3 py-2">
            <Search className="size-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Title or location" className="bg-transparent outline-none text-sm flex-1" />
          </div>
        </div>
        <div className="md:col-span-3">
          <label className="text-xs uppercase tracking-wider text-muted-foreground">Type</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button key={t} onClick={() => setType(t)}
                className={`text-xs px-3 py-1.5 rounded-full border ${type === t ? "bg-ink text-white border-ink" : "border-border hover:border-gold"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="text-xs uppercase tracking-wider text-muted-foreground">Min BHK</label>
          <select value={bhk} onChange={(e) => setBhk(Number(e.target.value))}
            className="mt-2 w-full border border-border rounded-lg px-3 py-2 text-sm bg-transparent">
            {[0, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n === 0 ? "Any" : `${n}+ BHK`}</option>)}
          </select>
        </div>
        <div className="md:col-span-3">
          <label className="text-xs uppercase tracking-wider text-muted-foreground">Max Price: ₹{(maxPrice / 10000000).toFixed(2)} Cr</label>
          <input type="range" min={5000000} max={70000000} step={1000000} value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))} className="mt-3 w-full accent-[#c9a96e]" />
        </div>
        <div className="md:col-span-1 flex md:justify-end gap-2">
          <button onClick={() => setView("grid")} className={`p-2 rounded-lg border ${view === "grid" ? "bg-ink text-white border-ink" : "border-border"}`}><Grid3x3 className="size-4"/></button>
          <button onClick={() => setView("list")} className={`p-2 rounded-lg border ${view === "list" ? "bg-ink text-white border-ink" : "border-border"}`}><List className="size-4"/></button>
        </div>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">{list.length} {list.length === 1 ? "property" : "properties"} found</div>

      {view === "grid" ? (
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {list.map((p) => (
            <a key={p.id} href={`/properties/${p.id}`} className="grid sm:grid-cols-[280px_1fr] gap-4 bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-luxe transition-shadow">
              <img src={p.cover} alt={p.title} className="size-full object-cover aspect-[4/3]" loading="lazy" />
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{p.type} · {p.status}</div>
                <h3 className="mt-1 font-display text-2xl">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.location}, {p.city}</p>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm gradient-gold-text font-medium">{p.price}</div>
                  <div className="text-xs text-muted-foreground">{p.bhk} BHK · {p.bath} Bath · {p.area}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
