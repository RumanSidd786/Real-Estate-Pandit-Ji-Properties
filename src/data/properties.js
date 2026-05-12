// ============================================================
// PROPERTIES DATA — add / edit listings here.
// Replace image imports below with your own files in src/assets/properties/
// ============================================================
import villaClassic from "@/assets/properties/villa-classic.jpg";
import villaModern from "@/assets/properties/villa-modern.jpg";
import townhouses from "@/assets/properties/townhouses.jpg";
import livingClassic from "@/assets/properties/living-classic.jpg";
import livingModern from "@/assets/properties/living-modern.jpg";
import bedroom from "@/assets/properties/bedroom.jpg";
import kitchen from "@/assets/properties/kitchen.jpg";
import bathroom from "@/assets/properties/bathroom.jpg";
import entrance from "@/assets/properties/entrance.jpg";

export const PROPERTIES = [
  {
    id: "the-aurelia-villa",
    title: "The Aurelia Villa",
    location: "Gomti Nagar Extension",
    city: "Lucknow",
    price: "₹ 4.85 Cr",
    priceValue: 48500000,
    bhk: 5, bath: 6, area: "5,200 sq.ft",
    type: "Villa", status: "For Sale",
    cover: villaClassic,
    gallery: [villaClassic, livingClassic, bedroom, kitchen, bathroom, entrance],
    amenities: ["Private Pool", "Home Theatre", "Smart Home", "Italian Marble", "Landscaped Garden", "Car Lift"],
    description: "A neoclassical masterpiece blending old-world grandeur with discreet modern intelligence.",
    featured: true,
  },
  {
    id: "monolith-residences",
    title: "Monolith Residences",
    location: "Hazratganj", city: "Lucknow",
    price: "₹ 3.20 Cr", priceValue: 32000000,
    bhk: 4, bath: 5, area: "3,650 sq.ft",
    type: "Penthouse", status: "For Sale",
    cover: villaModern,
    gallery: [villaModern, livingModern, bedroom, kitchen, entrance],
    amenities: ["Sky Deck", "Concierge", "Infinity Pool", "Valet", "Gym", "Wine Cellar"],
    description: "Pure geometry — cantilevered volumes, full-height glazing, and curated interiors.",
    featured: true,
  },
  {
    id: "the-veranda-rowhomes",
    title: "The Veranda Rowhomes",
    location: "Sushant Golf City", city: "Lucknow",
    price: "₹ 1.85 Cr", priceValue: 18500000,
    bhk: 3, bath: 4, area: "2,400 sq.ft",
    type: "Townhouse", status: "For Sale",
    cover: townhouses,
    gallery: [townhouses, livingClassic, bedroom, kitchen],
    amenities: ["Private Garage", "Rooftop Garden", "Clubhouse", "EV Charging", "24x7 Security"],
    description: "A boutique enclave of warm-timber facades and intimate verandas.",
    featured: true,
  },
  {
    id: "noor-skyline-suites",
    title: "Noor Skyline Suites",
    location: "Vibhuti Khand", city: "Lucknow",
    price: "₹ 2.10 Cr", priceValue: 21000000,
    bhk: 3, bath: 3, area: "2,150 sq.ft",
    type: "Apartment", status: "For Sale",
    cover: livingModern,
    gallery: [livingModern, bedroom, kitchen, bathroom],
    amenities: ["Sky Lounge", "Spa", "Co-working", "Pet Park", "Meditation Deck"],
    description: "Crafted suites with floor-to-ceiling glass and panoramic skyline views.",
  },
  {
    id: "amber-court-villa",
    title: "Amber Court Villa",
    location: "Jankipuram", city: "Lucknow",
    price: "₹ 95 L", priceValue: 9500000,
    bhk: 4, bath: 4, area: "2,800 sq.ft",
    type: "Villa", status: "For Sale",
    cover: livingClassic,
    gallery: [livingClassic, bedroom, kitchen, bathroom, entrance],
    amenities: ["Lawn", "Modular Kitchen", "Servant Quarters", "Solar", "Bore Well"],
    description: "Warm-toned interiors and generous courtyards for a grounded family lifestyle.",
  },
  {
    id: "the-pavilion-penthouse",
    title: "The Pavilion Penthouse",
    location: "Gomti Riverfront", city: "Lucknow",
    price: "₹ 6.50 Cr", priceValue: 65000000,
    bhk: 5, bath: 6, area: "6,400 sq.ft",
    type: "Penthouse", status: "For Sale",
    cover: entrance,
    gallery: [entrance, livingModern, bedroom, kitchen, bathroom],
    amenities: ["Private Elevator", "Rooftop Pool", "Cigar Lounge", "Butler", "Helipad Access"],
    description: "A sky-borne residence with private elevator entry and dual terraces.",
    featured: true,
  },
];

export const featuredProperties = () => PROPERTIES.filter((p) => p.featured);
export const getProperty = (id) => PROPERTIES.find((p) => p.id === id);
