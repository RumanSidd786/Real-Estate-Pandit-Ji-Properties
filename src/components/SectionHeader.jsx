export default function SectionHeader({ eyebrow, title, accent, description, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{eyebrow}</div>}
      <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
        {title} {accent && <em className="italic gradient-gold-text not-italic">{accent}</em>}
      </h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  );
}
