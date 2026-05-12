// ============================================================
// SITE CONFIG — edit company info here. Used across the site.
// ============================================================
export const SITE = {
  name: "Pandit Ji Properties",
  tagline: "Luxury Living, Redefined",
  phone: "+91 97952 84891",
  whatsapp: "919795284891", // digits only, with country code
  email: "hello@panditjiproperties.in",
  address:
    "Maharaja Agrasen Marg, Priyadarshini Colony, Sector-P, Keshav Nagar, Fazullaganj, Lucknow, Uttar Pradesh 226024",
  mapEmbed:
    "https://www.google.com/maps?q=Maharaja+Agrasen+Marg,+Priyadarshini+Colony,+Sector-P,+Keshav+Nagar,+Fazullaganj,+Lucknow,+Uttar+Pradesh+226024&output=embed",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
};

export const waLink = (msg = "Hello, I'm interested in a property listing.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phone.replace(/\s/g, "")}`;
