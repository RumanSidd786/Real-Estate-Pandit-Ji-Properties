import { MessageCircle, Phone } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";

export default function FloatingActions() {
  return (
    <>
      <a href={waLink()} target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-5 py-3 rounded-full shadow-luxe hover:scale-105 transition-transform">
        <span className="grid place-items-center size-8 rounded-full bg-white/20">
          <MessageCircle className="size-5" />
        </span>
        <span className="text-sm font-medium">Chat on WhatsApp</span>
      </a>

      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden p-3">
        <div className="glass rounded-2xl shadow-luxe flex gap-2 p-2">
          <a href={telLink} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-ink text-white text-sm font-medium">
            <Phone className="size-4" /> Call
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white text-sm font-medium">
            <MessageCircle className="size-4" /> WhatsApp
          </a>
        </div>
      </div>
      <span className="sr-only">{SITE.phone}</span>
    </>
  );
}
