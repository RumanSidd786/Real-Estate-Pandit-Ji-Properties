import { Link } from "react-router-dom";
import { Bath, BedDouble, Maximize2, MapPin } from "lucide-react";

export default function PropertyCard({ p }) {
  return (
    <Link to={`/properties/${p.id}`} className="group block bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-luxe transition-shadow">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img src={p.cover} alt={p.title} loading="lazy" className="size-full object-cover hover-zoom-img" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] bg-gradient-gold text-ink px-3 py-1 rounded-full">{p.status}</span>
          <span className="text-[10px] uppercase tracking-[0.2em] glass text-ink px-3 py-1 rounded-full">{p.type}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start gap-3">
          <h3 className="font-display text-xl group-hover:text-gold transition-colors">{p.title}</h3>
          <div className="text-sm font-medium gradient-gold-text whitespace-nowrap">{p.price}</div>
        </div>
        <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1"><MapPin className="size-3 text-gold"/> {p.location}</div>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><BedDouble className="size-4 text-gold"/> {p.bhk} BHK</span>
          <span className="inline-flex items-center gap-1"><Bath className="size-4 text-gold"/> {p.bath}</span>
          <span className="inline-flex items-center gap-1"><Maximize2 className="size-4 text-gold"/> {p.area}</span>
        </div>
      </div>
    </Link>
  );
}
