import { useState, useEffect, useRef } from "react";

// ─── IMAGE IMPORTS ───
import LOGO_HEADER from "./assets/logos/header.png";
import LOGO_HERO from "./assets/logos/hero.png";
import LOGO_FOOTER from "./assets/logos/footer.png";
import IMG_PREMIUM from "./assets/products/premium.png";
import IMG_VINYL from "./assets/products/vinyl.png";
import IMG_GLOSS from "./assets/products/gloss.png";
import IMG_UNDERCOAT from "./assets/products/undercoat.png";
import IMG_WEATHER from "./assets/products/weather.png";
import IMG_ROAD from "./assets/products/road.png";
import IMG_PLASTER from "./assets/products/plaster.png";
import IMG_EPOXY from "./assets/products/epoxy.png";
import IMG_ACRYLIC from "./assets/products/acrylic-elastometric.png";
import IMG_CELLULOSE from "./assets/products/cellulose-enamel.png";
import IMG_MASTIC from "./assets/products/mastic-paint.png";
import IMG_HIGLOSS from "./assets/products/standard-higloss.png";
import IMG_2K_ACRYLIC_BASE from "./assets/products/2K ACRYLIC POLYURETHANE BASE.png";
import IMG_2K_ACRYLIC_HARDENER from "./assets/products/2K ACRYLIC POLYURETHANE HARDENER.png";
import IMG_ACRYLIC_ART_1L from "./assets/products/ACRYLIC ART PALLET 1L.png";
import IMG_ACRYLIC_ART_4L from "./assets/products/ACRYLIC ART PALLET 4L.png";

// ─── INSPIRATION IMAGE IMPORTS ───
import INSPO_SCANDI_SAGE from "./assets/inspiration/bedroom/scandinavian-sage.png";
import INSPO_GRAND_NAVY from "./assets/inspiration/bedroom/grand-navy.png";
import INSPO_SOFT_LAVENDER from "./assets/inspiration/bedroom/soft-lavender.png";
import INSPO_MINIMAL_BEIGE from "./assets/inspiration/bedroom/minimalist-beige.png";
import INSPO_MIDCENT_MUSTARD from "./assets/inspiration/bedroom/midcentury-mustard.png";

// ─── LIVING ROOM INSPIRATION IMAGE IMPORTS ───
import INSPO_LR_PALE_BEIGE from "./assets/inspiration/living room/pale beige living room.jpg";
import INSPO_LR_LAKE_GREEN from "./assets/inspiration/living room/lake green living room.jpg";
import INSPO_LR_COOL_BLUE from "./assets/inspiration/living room/cool blue living room.jpg";
import INSPO_LR_MEDALLION from "./assets/inspiration/living room/medallion gold living room.jpg";

// ─── DINING ROOM INSPIRATION IMAGE IMPORTS ───
import INSPO_DR_TANDOORI from "./assets/inspiration/dining room/tandoori dining room.jpg";
import INSPO_DR_MUSTARD from "./assets/inspiration/dining room/mustard dining room.jpg";
import INSPO_DR_BURGUNDY from "./assets/inspiration/dining room/burgundy dining room.jpg";
import INSPO_DR_HAVANA from "./assets/inspiration/dining room/havana dining room.jpg";

// ─── KITCHEN INSPIRATION IMAGE IMPORTS ───
import INSPO_KT_CREAM from "./assets/inspiration/kitchen/cream kitchen.jpg";
import INSPO_KT_DUCK_EGG from "./assets/inspiration/kitchen/duck egg kitchen.jpg";
import INSPO_KT_SOFT_CELERY from "./assets/inspiration/kitchen/soft celery kitchen.jpg";
import INSPO_KT_TANGERINE from "./assets/inspiration/kitchen/tangerine kitchen.jpg";

// ─── BATHROOM INSPIRATION IMAGE IMPORTS ───
import INSPO_BT_MEMORY from "./assets/inspiration/bathroom/memory bathroom.jpg";
import INSPO_BT_PALE_LILAC from "./assets/inspiration/bathroom/pale lilac bathroom.jpg";
import INSPO_BT_BALM from "./assets/inspiration/bathroom/balm bathroom.jpg";
import INSPO_BT_ICE from "./assets/inspiration/bathroom/ice bathroom.jpg";

const B = { coral: "#E8603C", coralDk: "#C84A2A", teal: "#2BB5A0", tealDk: "#1A8A7A", gold: "#E8B830", black: "#1a1a1a", off: "#FAF8F5", warm: "#f0ece6" };

// Icons
const CartIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>);
const SearchIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>);
const UserIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
const ChevDown = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>);
const ChevRight = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>);
const MenuIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>);
const CloseIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
const Arr = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>);
const ArrL = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>);
const PhoneIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const MailIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const TruckIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="16" height="11" x="1" y="3" rx="2"/><path d="M17 3h3l3 7v4a1 1 0 0 1-1 1h-1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>);
const PaletteIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/></svg>);
const HeartIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>);
const GlobeIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>);
const UsersIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const LeafIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>);
const MinusIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/></svg>);
const PlusIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>);
const CheckIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>);
const StarIcon = ({filled}) => (<svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#E8B830" : "none"} stroke="#E8B830" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);

// ─── PRODUCT DATABASE ───
const PRODUCTS = [
  { id: "premium-matt", name: "Premium Matt Emulsion", category: "interior", desc: "Our flagship interior matt. Smooth finish, excellent coverage for every room.", longDesc: "Peacock Premium Matt Emulsion is our most popular interior paint, trusted by painters and homeowners across East Africa. This high-quality matt emulsion delivers a beautifully smooth, non-reflective finish that hides minor surface imperfections.\n\nFormulated with advanced binder technology for superior adhesion, excellent coverage (up to 12m² per litre), and exceptional durability. Low odour and quick drying — recoatable in just 2-4 hours.\n\nIdeal for living rooms, bedrooms, dining rooms, hallways, and ceilings. Can be applied by brush, roller, or spray.", sizes: [{ size: "1L", price: 25000, coverage: "12m²" }, { size: "4L", price: 85000, coverage: "48m²" }, { size: "20L", price: 185000, coverage: "240m²" }], img: IMG_PREMIUM, tag: "Best Seller", colours: "80+", finish: "Matt", dryTime: "2-4 hours", coats: "2 coats recommended", surface: "Interior walls & ceilings", rating: 4.8, reviews: 342 },
  { id: "vinyl-silk", name: "Vinyl Silk Makula", category: "interior", desc: "Silky sheen emulsion — washable, durable, and elegant for high-traffic areas.", longDesc: "Vinyl Silk Makula delivers a beautiful mid-sheen finish that's both elegant and practical. The silk-like surface reflects light gently, adding depth and warmth to any room while being fully washable — perfect for busy households.\n\nIts advanced formulation provides excellent stain resistance and can be wiped clean without damaging the finish. Superior flow and levelling ensures a professional result every time.\n\nPerfect for living rooms, hallways, children's rooms, and any area that needs frequent cleaning.", sizes: [{ size: "1L", price: 27000, coverage: "11m²" }, { size: "4L", price: 90000, coverage: "44m²" }, { size: "20L", price: 195000, coverage: "220m²" }], img: IMG_VINYL, tag: null, colours: "60+", finish: "Silk Sheen", dryTime: "2-4 hours", coats: "2 coats recommended", surface: "Interior walls", rating: 4.7, reviews: 218 },
  { id: "gloss-emulsion", name: "Gloss Emulsion", category: "interior", desc: "High-shine gloss finish for a bold, reflective look on walls and trim.", longDesc: "Peacock Gloss Emulsion provides a stunning high-shine finish that transforms any surface into a statement feature. The deep, reflective sheen creates a sense of luxury and makes colours appear richer and more vibrant.\n\nThis premium water-based gloss is easy to apply and dries to a hard, durable finish that's resistant to scuffs, stains, and moisture. Unlike traditional oil-based glosses, it has minimal odour and cleans up with water.\n\nIdeal for feature walls, woodwork, trim, doors, and furniture.", sizes: [{ size: "1L", price: 28000, coverage: "10m²" }, { size: "4L", price: 95000, coverage: "40m²" }, { size: "20L", price: 210000, coverage: "200m²" }], img: IMG_GLOSS, tag: "New", colours: "40+", finish: "Gloss", dryTime: "4-6 hours", coats: "2 coats recommended", surface: "Walls, wood & metal", rating: 4.6, reviews: 87 },
  { id: "undercoat", name: "Undercoat Emulsion", category: "interior", desc: "Grade 3 matt emulsion undercoat. Essential base layer for a professional finish.", longDesc: "Peacock Undercoat Emulsion provides the perfect foundation for your topcoat. This Grade 3 quality product is specifically formulated to seal porous surfaces, improve topcoat adhesion, and ensure an even, uniform finish.\n\nExcellent opacity means fewer topcoat layers are needed, saving both time and money. Its matt finish provides an ideal key for subsequent coats of any Peacock emulsion.\n\nSuitable for new and previously painted plaster, concrete, and masonry surfaces.", sizes: [{ size: "1L", price: 18000, coverage: "13m²" }, { size: "4L", price: 55000, coverage: "52m²" }, { size: "20L", price: 125000, coverage: "260m²" }], img: IMG_UNDERCOAT, tag: null, grade: "3", colours: "White", finish: "Matt", dryTime: "2-3 hours", coats: "1-2 coats", surface: "Interior walls & ceilings", rating: 4.5, reviews: 156 },
  { id: "weathershield", name: "Weathershield", category: "exterior", desc: "Grade 1 premium exterior matt. Durable protection against tropical weather.", longDesc: "Peacock Weathershield is our premium Grade 1 exterior paint, engineered specifically for the demanding East African climate. Advanced resin technology creates a flexible, breathable film that protects against intense UV radiation, heavy rainfall, and temperature extremes.\n\nThe self-cleaning formulation means dirt and grime are naturally washed away by rain, keeping your walls looking fresh for up to 8 years. Excellent resistance to algae, mould, and fungal growth.\n\nSuitable for all exterior masonry surfaces including rendered walls, concrete, brick, and blockwork.", sizes: [{ size: "1L", price: 30000, coverage: "9m²" }, { size: "4L", price: 100000, coverage: "36m²" }, { size: "20L", price: 220000, coverage: "180m²" }], img: IMG_WEATHER, tag: "Best Seller", grade: "1", colours: "25", finish: "Matt", dryTime: "4-6 hours", coats: "2 coats recommended", surface: "Exterior masonry", rating: 4.9, reviews: 428 },
  { id: "road-marking", name: "Road Marking Paint", category: "exterior", desc: "Heavy-duty road marking paint for highways, parking lots, and industrial zones.", longDesc: "Peacock Road Marking Paint is a professional-grade, high-visibility coating designed for traffic management and safety marking applications. Formulated with premium chlorinated rubber technology for exceptional durability and abrasion resistance.\n\nFast-drying formula allows roads to be opened to traffic within 30 minutes in optimal conditions. Excellent retroreflectivity when used with glass beads. Resistant to tyre marking, oil, fuel, and weathering.\n\nAvailable in standard traffic white and yellow. Meets East African Bureau of Standards requirements for road marking paints.", sizes: [{ size: "1L", price: 35000, coverage: "5m²" }, { size: "4L", price: 120000, coverage: "20m²" }, { size: "20L", price: 280000, coverage: "100m²" }], img: IMG_ROAD, tag: "Specialist", colours: "White & Yellow", finish: "Semi-gloss", dryTime: "30 mins", coats: "1-2 coats", surface: "Asphalt & concrete roads", rating: 4.7, reviews: 64 },
  { id: "plaster-primer", name: "Plaster Primer", category: "specialist", desc: "Grade 2 specialist primer for new plaster. Perfect adhesion for your topcoat.", longDesc: "Peacock Plaster Primer is a Grade 2 specialist matt emulsion formulated specifically for sealing and priming new, bare, or repaired plaster surfaces. Its penetrating formula binds loose particles and creates a uniform, stable base for subsequent paint coats.\n\nReduces the porosity of new plaster, preventing uneven absorption of your topcoat and ensuring a consistent, professional finish. Excellent adhesion to cementitious surfaces.\n\nMust-use product before applying any Peacock emulsion to new or repaired plaster, concrete, or rendering.", sizes: [{ size: "1L", price: 20000, coverage: "14m²" }, { size: "4L", price: 65000, coverage: "56m²" }, { size: "20L", price: 145000, coverage: "280m²" }], img: IMG_PLASTER, tag: null, grade: "2", colours: "White", finish: "Matt", dryTime: "2-3 hours", coats: "1 coat", surface: "New plaster & concrete", rating: 4.6, reviews: 189 },
  { id: "epoxy-enamel", name: "Epoxy 2K Enamel", category: "specialist", desc: "Industrial-strength 2-component epoxy enamel for floors, metal, and concrete.", longDesc: "Peacock Epoxy 2K Enamel is an industrial-strength, two-component epoxy coating that provides an extremely tough, chemical-resistant finish. When the two components are mixed, they undergo a chemical reaction creating a cross-linked film with outstanding hardness and adhesion.\n\nResistant to chemicals, oils, fuels, abrasion, and heavy foot and vehicle traffic. Suitable for industrial floors, warehouses, workshops, garages, laboratories, and food processing facilities.\n\nAvailable in a range of safety colours. Requires mixing of Part A (base) and Part B (hardener) before application.", sizes: [{ size: "1L", price: 90000, coverage: "6m²" }, { size: "4L", price: 320000, coverage: "24m²" }, { size: "20L", price: 720000, coverage: "120m²" }], img: IMG_EPOXY, tag: "Industrial", colours: "12 safety colours", finish: "High Gloss", dryTime: "12-16 hours", coats: "2 coats recommended", surface: "Concrete floors & metal", rating: 4.8, reviews: 52 },
  { id: "acrylic-elastometric", name: "Acrylic Elastometric Coating", category: "exterior", desc: "Flexible, waterproof acrylic coating that bridges hairline cracks and protects exterior walls.", longDesc: "Peacock Acrylic Elastometric Coating is a premium flexible coating designed for exterior surfaces exposed to extreme weather conditions. Its unique elastomeric formulation allows the film to stretch and contract with the building substrate, effectively bridging hairline cracks up to 2mm wide.\n\nProvides outstanding waterproofing while remaining breathable, preventing moisture build-up and blistering. Superior UV resistance ensures long-lasting colour retention even under intense tropical sunlight.\n\nIdeal for exterior masonry, concrete, rendered walls, and surfaces prone to thermal movement and hairline cracking.", sizes: [{ size: "1L", price: 16000, coverage: "8m²" }, { size: "4L", price: 60000, coverage: "32m²" }, { size: "20L", price: 280000, coverage: "160m²" }], img: IMG_ACRYLIC, tag: "Specialist", colours: "30+", finish: "Matt", dryTime: "4-6 hours", coats: "2 coats recommended", surface: "Exterior masonry & concrete", rating: 4.7, reviews: 89 },
  { id: "cellulose-enamel", name: "Cellulose Enamel", category: "specialist", desc: "NC auto refinish enamel — fast-drying, high-gloss paint for vehicles and metalwork.", longDesc: "Peacock Cellulose Enamel is a nitrocellulose-based auto refinish paint delivering a brilliant, mirror-like gloss finish. Specifically formulated for automotive bodywork, this fast-drying enamel provides excellent colour matching and can be polished to a showroom shine.\n\nExceptional flow and levelling properties ensure a smooth, professional finish. Resistant to petrol, oil, and common automotive chemicals. Can be applied by spray gun for best results.\n\nSuitable for cars, motorcycles, commercial vehicles, and general metalwork. Available in an extensive range of standard and custom-mixed colours.", sizes: [{ size: "1L", price: 45000, coverage: "5m²" }, { size: "4L", price: 150000, coverage: "20m²" }, { size: "20L", price: 350000, coverage: "100m²" }], img: IMG_CELLULOSE, tag: "Specialist", colours: "200+ custom mix", finish: "High Gloss", dryTime: "30-60 mins", coats: "3-4 coats recommended", surface: "Vehicles & metalwork", rating: 4.6, reviews: 134 },
  { id: "mastic-paint", name: "Mastic Paint", category: "exterior", desc: "Heavy-duty textured coating for a decorative, weather-resistant exterior finish.", longDesc: "Peacock Mastic Paint is a thick, textured coating that creates a distinctive decorative finish while providing superior weather protection. The heavy-bodied formulation fills minor surface imperfections and creates an attractive textured appearance that adds character to any building.\n\nExcellent crack-bridging properties and outstanding adhesion to a wide range of substrates. The textured surface helps to conceal uneven surfaces and provides a premium architectural finish.\n\nIdeal for exterior walls, boundary walls, commercial buildings, and any surface where a decorative textured finish is desired.", sizes: [{ size: "1L", price: 14000, coverage: "4m²" }, { size: "4L", price: 55000, coverage: "16m²" }, { size: "20L", price: 240000, coverage: "80m²" }], img: IMG_MASTIC, tag: null, colours: "40+", finish: "Textured", dryTime: "6-8 hours", coats: "1-2 coats", surface: "Exterior masonry", rating: 4.5, reviews: 76 },
  { id: "standard-higloss", name: "Standard Hi Gloss", category: "exterior", desc: "Durable oil-based exterior gloss for gates, doors, window frames, and metalwork.", longDesc: "Peacock Standard Hi Gloss is a traditional oil-based enamel paint that delivers a rich, deep gloss finish with outstanding durability. Specially formulated for exterior woodwork and metalwork, it provides a tough protective barrier against tropical weather, UV radiation, and moisture.\n\nExcellent flow properties ensure a smooth, brush-mark-free finish. Superior adhesion to properly prepared wood and metal surfaces. Resistant to chipping, flaking, and chalking.\n\nPerfect for exterior doors, window frames, gates, railings, gutters, and decorative metalwork.", sizes: [{ size: "1L", price: 25000, coverage: "8m²" }, { size: "4L", price: 85000, coverage: "32m²" }, { size: "20L", price: 190000, coverage: "160m²" }], img: IMG_HIGLOSS, tag: null, colours: "20+", finish: "High Gloss", dryTime: "8-12 hours", coats: "2 coats recommended", surface: "Wood & metal (exterior)", rating: 4.4, reviews: 198 },
  { id: "2k-acrylic-polyurethane", name: "2K Acrylic Polyurethane", category: "specialist", desc: "Premium 2-component acrylic polyurethane topcoat. Superior gloss, hardness, and chemical resistance for vehicles and industrial surfaces.", longDesc: "Peacock 2K Acrylic Polyurethane is a high-performance two-component coating that combines exceptional gloss retention with outstanding durability. When Part A (Base) and Part B (Hardener) are mixed, the catalysed film provides a hardness and chemical resistance far superior to conventional single-pack finishes.\n\nExcellent UV stability ensures long-lasting colour and gloss even under intense tropical sunlight. Highly resistant to petrol, oil, solvents, and industrial chemicals. The brilliant finish can be polished to a mirror-like sheen.\n\nIdeal for automotive refinishing, commercial vehicles, industrial equipment, metal fabrication, and any application requiring a premium, long-lasting gloss topcoat. Mix ratio: 4 parts Base to 1 part Hardener.", sizes: [{ size: "1L", price: 55000, coverage: "8m²" }, { size: "4L", price: 195000, coverage: "32m²" }, { size: "20L", price: 880000, coverage: "160m²" }], img: IMG_2K_ACRYLIC_BASE, imgHardener: IMG_2K_ACRYLIC_HARDENER, tag: "New", colours: "50+ custom mix", finish: "High Gloss", dryTime: "4-6 hours (touch dry), 24h full cure", coats: "2 coats recommended", surface: "Vehicles, metal & industrial equipment", rating: 4.9, reviews: 28 },
  { id: "acrylic-art-paint", name: "Acrylic Art Paint", category: "specialist", desc: "Water-based, non-toxic and odourless acrylic art paint. Perfect for artists, schools, and craft projects.", longDesc: "Peacock Acrylic Art Paint is a premium water-based acrylic paint formulated for artists, designers, and creative projects. Non-toxic and virtually odourless, it is safe for use in schools, studios, and homes.\n\nExcellent pigment load delivers vibrant, true colours that dry to a flexible, water-resistant finish. Mixes easily with water for washes and blending, or used straight from the tub for bold coverage. Compatible with canvas, paper, wood, fabric, and most porous surfaces.\n\nAvailable in a wide range of colours, it dries quickly and can be layered to create depth and texture. Ideal for fine art, craft projects, murals, school art classes, and mixed media work.", sizes: [{ size: "1L", price: 18000, coverage: "10m²" }, { size: "4L", price: 65000, coverage: "40m²" }], img: IMG_ACRYLIC_ART_4L, img1L: IMG_ACRYLIC_ART_1L, tag: "New", colours: "40+ colours", finish: "Satin / Matt", dryTime: "20-30 mins", coats: "2+ coats", surface: "Canvas, paper, wood & fabric", rating: 4.7, reviews: 41 },
];

// ─── Our Story Pages ───
const storyPages = {
  about: { title: "About Peacock Paints", subtitle: "The Painters' Paint Since 1962", hg: `linear-gradient(135deg, ${B.coral}ee, ${B.coralDk})`,
    sections: [{ t: "Our Heritage", i: "globe", c: "Founded in 1962 in East Africa, Peacock Paints has grown from a small family workshop into the region's most trusted paint manufacturer.\n\nOur tagline, \"The Painters' Paint,\" is a promise born from thousands of conversations with professionals who use our products every day." },{ t: "What We Stand For", i: "heart", c: "We believe colour transforms not just walls, but lives. Quality without compromise — every batch meets international standards.\n\nInnovation with purpose — paints that perform better, last longer, and are kinder to the environment." },{ t: "Manufacturing Excellence", i: "palette", c: "Our state-of-the-art facility combines modern technology with time-honoured expertise. Over 2,000 unique shades from our advanced colour-matching laboratory.\n\nEvery tin goes through rigorous quality control — from raw material selection to final packaging." },{ t: "Our People", i: "users", c: "Over 300 dedicated professionals — research chemists, production staff, colour consultants, and delivery drivers.\n\nOne of the largest employers in our sector, investing continuously in training and development." }],
    stats: [{ n: "60+", l: "Years" },{ n: "2,000+", l: "Colours" },{ n: "300+", l: "Team" },{ n: "15", l: "Countries" }] },
  sustainability: { title: "Sustainability", subtitle: "Painting a Greener Future", hg: `linear-gradient(135deg, ${B.teal}ee, ${B.tealDk})`,
    sections: [{ t: "Environmental Commitment", i: "leaf", c: "Net Zero by 2050, with 50% reduction by 2035.\n\nComprehensive strategy covering raw materials, packaging, manufacturing, and recyclability." },{ t: "Low-VOC Formulations", i: "palette", c: "EcoShield line: 95% fewer harmful emissions. All interior paints exceed international environmental standards." },{ t: "Sustainable Manufacturing", i: "globe", c: "40% solar energy, 60% water recycled, zero-waste-to-landfill. Local suppliers to reduce transport emissions." },{ t: "Packaging Innovation", i: "truck", c: "100% recyclable packaging by 2027. EcoCan range: 70% recycled steel. FSC-certified sample cards." }],
    stats: [{ n: "95%", l: "Less VOC" },{ n: "40%", l: "Solar" },{ n: "60%", l: "Water Saved" },{ n: "2050", l: "Net Zero" }] },
  community: { title: "Community Projects", subtitle: "Colour for Every Community", hg: `linear-gradient(135deg, ${B.gold}ee, #C89820)`,
    sections: [{ t: "Colour for Communities", i: "heart", c: "50,000+ litres donated since 2008 to schools, hospitals, and community centres.\n\nAnnual community makeover events with volunteer painters." },{ t: "Young Painters Programme", i: "users", c: "Vocational training for ages 18-25. 500+ graduates, 85% employed within 6 months." },{ t: "School Colour Project", i: "globe", c: "200+ schools transformed with colour schemes designed to enhance learning environments." },{ t: "Heritage Restoration", i: "palette", c: "30+ heritage buildings restored with specialised coatings and heritage-appropriate colours." }],
    stats: [{ n: "50,000+", l: "Litres" },{ n: "500+", l: "Trained" },{ n: "200+", l: "Schools" },{ n: "30+", l: "Heritage" }] },
  foundation: { title: "The Peacock Foundation", subtitle: "Building Brighter Futures", hg: "linear-gradient(135deg, #5C2D6D, #8B4AAD)",
    sections: [{ t: "Our Mission", i: "heart", c: "Established 2010. Using colour and creativity to improve well-being of children and vulnerable communities.\n\n2% of annual revenue, independent board of trustees." },{ t: "Education & Creativity", i: "globe", c: "Art for All: 10,000+ children across 150 schools. Significant improvements in confidence and academic performance." },{ t: "Healthcare Environments", i: "heart", c: "Healing Colours: 40+ healthcare projects transforming children's wards with evidence-based colour design." },{ t: "Funding & Transparency", i: "palette", c: "Annual impact reports with full financial transparency. Sustainable funding model for long-term impact." }],
    stats: [{ n: "10,000+", l: "Children" },{ n: "150", l: "Schools" },{ n: "40+", l: "Healthcare" },{ n: "2%", l: "Revenue" }] },
};

// Nav
const navData = [
  { label: "Colours", columns: [
    { title: "By Colours", links: ["Whites","Creams","Neutrals","Pinks","Yellows","Greens","Blues","Greys","Metallics"], footer: [{ label: "Shop all colours" }] },
    { title: "By Room", links: ["Bedroom","Living Room","Dining Room","Kitchen","Bathroom","Outdoor"] },
    { title: "By Style", links: ["Contemporary","Modern","Boho","Farmhouse","Scandi","Eclectic"] },
    { type: "promo", items: [{ title: "INSPIRATION GALLERY", desc: "Amazing room makeover ideas", cta: "Get inspired", bg: "#e8d5c4" },{ title: "ADVICE AND TIPS", desc: "Preparation & colour advice", cta: "Get Advice", bg: "#d4e0c8" }]}
  ]},
  { label: "Paints", columns: [
    { title: "Interior", links: ["Premium Matt Emulsion","Vinyl Silk Makula","Gloss Emulsion","Undercoat Emulsion"], footer: [{ label: "All interior paints" }] },
    { title: "Exterior", links: ["Weathershield","Road Marking Paint","Acrylic Elastometric Coating","Standard Hi Gloss","Mastic Paint"], footer: [{ label: "All exterior paints" }] },
    { title: "Specialist", links: ["Plaster Primer","Epoxy 2K Enamel","Cellulose Enamel","2K Acrylic Polyurethane","Acrylic Art Paint"], footer: [{ label: "All specialist paints" }] },
    { title: "By Finish", links: ["Matt","Silk","Gloss","Satin","Eggshell","Textured","Masonry"] },
    { type: "promo", items: [{ title: "COLOUR COLLECTION", desc: "Over 2,000 shades", cta: "Discover", bg: "#c8d8e8" },{ title: "TOOLS & APPLICATION", desc: "Brushes, rollers & more", cta: "Shop", bg: "#e8dcc8" }]}
  ]},
  { label: "Inspiration", columns: [
    { title: "By Colours", links: ["Whites","Creams","Neutrals","Pinks","Greens","Blues","Greys"], footer: [{ label: "Get inspired" }] },
    { title: "By Room", links: ["Bedroom","Living Room","Dining Room","Kitchen","Bathroom"] },
    { title: "By Style", links: ["Contemporary","Modern","Boho","Farmhouse","Scandi","Eclectic"] },
    { type: "promo", items: [{ title: "GREEN HUES", desc: "Versatile greens", cta: "Browse", bg: "#c4d8c0" },{ title: "KITCHENS", desc: "Kitchen makeover ideas", cta: "Inspo", bg: "#2d4a3e", dark: true }]}
  ]},
  { label: "Advice", columns: [
    { title: "Decorating Advice", links: ["How To Tips","Supplies & Primers","Colour Chart"] },
    { title: "Product Data", links: ["Safety Data Sheets","Technical Data Sheets"] },
    { type: "promo", items: [{ title: "FAQs", desc: "Common questions answered", cta: "View", bg: "#e0d4c8" },{ title: "ASK AN EXPERT", desc: "Talk to our team", cta: "Help", bg: "#c8d0d8" }]}
  ]},
  { label: "Our Story", columns: [
    { type: "promo", items: [{ title: "ABOUT US", desc: "Since 1962", cta: "Learn more", bg: B.coral, dark: true, page: "about" },{ title: "SUSTAINABILITY", desc: "Net Zero 2050", cta: "Read more", bg: B.teal, dark: true, page: "sustainability" }]},
    { type: "promo", items: [{ title: "COMMUNITY", desc: "Colour for all", cta: "Discover", bg: B.gold, page: "community" },{ title: "FOUNDATION", desc: "Brighter futures", cta: "Read", bg: "#5C2D6D", dark: true, page: "foundation" }]}
  ]},
  { label: "Professionals", columns: [
    { title: "Resources", links: ["Architects & Designers","Contractors & Decorators"] },
    { title: "Products", links: ["Interior Paint","Exterior Paint","Specialist","Epoxy & Industrial"] },
    { title: "Colour", links: ["Find a Colour","Samples","Fandeck","Colour Services"] },
    { title: "Sectors", links: ["Office","Healthcare","Education","Housing","Hospitality","Infrastructure"] }
  ]},
];

// ─── PEACOCK PAINTS COLOUR RANGE (Batch 1 of 5 — colors 1–30) ───
const trendingColours = [
  // Row 1
  { name: "Pale Beige",      desc: "Warm airy neutrality",       color: "#E0DBD0" },
  { name: "Rose",            desc: "Timeless dusty rose",         color: "#CC7B8C" },
  { name: "Lemon Pinch",     desc: "Zesty yellow-green",          color: "#AABA3A" },
  { name: "Afro Brown",      desc: "Rich warm earth tone",        color: "#7A4830" },
  { name: "Pink Blossom",    desc: "Soft candy sweetness",        color: "#EEC5C5" },
  { name: "Screed",          desc: "Bold dark charcoal",          color: "#545048" },
  { name: "Garbanzo Bean",   desc: "Natural olive khaki",         color: "#A8905F" },
  { name: "Tropics",         desc: "Sun-warmed sand",             color: "#D4C0A5" },
  { name: "Blush",           desc: "Gentle peachy warmth",        color: "#E8BEB0" },
  { name: "Gooseberry",      desc: "Muted olive green",           color: "#8A9042" },
  { name: "Medallion",       desc: "Gleaming warm gold",          color: "#C49820" },
  { name: "Maize Yellow",    desc: "Bright harvest gold",         color: "#E8C030" },
  { name: "Bumble Bee",      desc: "Vivid sunshine yellow",       color: "#F0C820" },
  { name: "September Leaf",  desc: "Deep burnished gold",         color: "#9A8828" },
  { name: "Golden Yellow",   desc: "Warm radiant gold",           color: "#D4A020" },
  { name: "Sweet Honey",     desc: "Rich amber warmth",           color: "#CF8030" },
  { name: "Island Brush",    desc: "Vibrant warm orange",         color: "#C55830" },
  // Row 2 (batch 2 tail)
  { name: "Soft Celery",     desc: "Delicate pale green",         color: "#D0D8A8" },
  { name: "Love Zone",       desc: "Lively berry pink",           color: "#C86880" },
  { name: "Cordial Lime",    desc: "Fresh lime green",            color: "#90A040" },
  { name: "Albertine",       desc: "Gentle sage green",           color: "#90A880" },
  { name: "Whisper Pink",    desc: "Barely-there blush",          color: "#F0D8D4" },
  { name: "Regalia",         desc: "Classic periwinkle blue",     color: "#6878B8" },
  { name: "San Jose",        desc: "Warm sandy tan",              color: "#D0A880" },
  { name: "Rock",            desc: "Subtle light grey",           color: "#A8A8A0" },
  { name: "Denim",           desc: "Deep dark denim blue",        color: "#1E3A68" },
  { name: "Ripple Green",    desc: "Pale sea-green mint",         color: "#A8C8B0" },
  { name: "Tea Rose",        desc: "Soft warm blush",             color: "#E8C8C0" },
  { name: "Violet Bouquet",  desc: "Soft floral lavender",        color: "#C0A0C8" },
  { name: "Cashew",          desc: "Warm creamy tan",             color: "#C8A880" },
  // Row 2 continued — Batch 2
  { name: "Pear",            desc: "Fresh yellow-green",          color: "#B8C84A" },
  { name: "Shrub",           desc: "Deep olive green",            color: "#5E7640" },
  { name: "Zaabu",           desc: "Warm burnt orange",           color: "#E07030" },
  { name: "Mustard",         desc: "Classic golden mustard",      color: "#C89838" },
  // Row 3
  { name: "Ice",             desc: "Crisp cool white-blue",       color: "#D5E5E8" },
  { name: "Water Lily",      desc: "Delicate off-white",          color: "#EEEADE" },
  { name: "Pebble",          desc: "Smooth warm grey",            color: "#A09888" },
  { name: "Malibu",          desc: "Warm sun-kissed peach",       color: "#E5C5A2" },
  { name: "Lake Green",      desc: "Tranquil muted green",        color: "#BFCA9E" },
  { name: "Pink Lilac",      desc: "Soft dusty mauve",            color: "#C9A8BE" },
  { name: "Copper",          desc: "Rich metallic copper",        color: "#AD6040" },
  { name: "Lichen",          desc: "Earthy grey-green",           color: "#909878" },
  { name: "Spiced Pumpkin",  desc: "Deep pumpkin warmth",         color: "#CE5E20" },
  { name: "Pollen Grains",   desc: "Warm golden olive",           color: "#BE9E2E" },
  { name: "Tandoori",        desc: "Rich deep brick red",         color: "#8E3020" },
  { name: "Greybrown",       desc: "Warm grey-brown blend",       color: "#898070" },
  { name: "Earthen",         desc: "Natural warm earth",          color: "#987048" },
  { name: "Smoky Brown",     desc: "Deep smoky brown",            color: "#6E5E50" },
  { name: "German Chocolate",desc: "Dark chocolate brown",        color: "#5E4030" },
  { name: "Mahogany",        desc: "Classic dark mahogany",       color: "#7F2830" },
  { name: "Chocolate",       desc: "Deepest dark brown",          color: "#402018" },
  // Row 4 — Batch 2 tail
  { name: "Cream",           desc: "Timeless warm cream",         color: "#F3EBD5" },
  { name: "White Clad",      desc: "Clean bright white",          color: "#EEEBE0" },
  { name: "Diamond Ouch",    desc: "Warm light buff",             color: "#DFCFAD" },
  { name: "Sandy Beaches",   desc: "Sun-bleached sandy beige",    color: "#D7C295" },
  { name: "Ivory",           desc: "Refined classic ivory",       color: "#EEE7C5" },
  { name: "Velvet",          desc: "Warm rich brown",             color: "#7E603E" },
  { name: "Tan",             desc: "Classic warm tan",            color: "#A67848" },
  { name: "Turtle",          desc: "Deep grey-green khaki",       color: "#76785E" },
  { name: "Tangerine",       desc: "Vibrant fresh orange",        color: "#E86020" },
  // Row 4 continued — Batch 3
  { name: "Pink Dogwood",    desc: "Soft dusty petal pink",       color: "#DFA0A0" },
  { name: "Pigeon",          desc: "Cool blue-grey",              color: "#ACB3BB" },
  { name: "Memory",          desc: "Pale sea-foam teal",          color: "#8ABAB2" },
  { name: "Fern",            desc: "Natural fern green",          color: "#5E8040" },
  { name: "Emerald",         desc: "Vivid deep emerald",          color: "#20834E" },
  { name: "Sunset",          desc: "Warm orange-red glow",        color: "#CC4A28" },
  { name: "Pale Umber",      desc: "Soft warm greige",            color: "#BEAA88" },
  { name: "Violet",          desc: "Rich deep purple",            color: "#622878" },
  // Row 5
  { name: "Balm",            desc: "Soothing light mint",         color: "#CADCCB" },
  { name: "Vanilla",         desc: "Sweet warm vanilla",          color: "#EDE6C3" },
  { name: "Wild Orchid",     desc: "Dusty pink mauve",            color: "#C08888" },
  { name: "Kyadondo",        desc: "Dark earthy olive",           color: "#5E6A30" },
  { name: "Caramel",         desc: "Warm golden caramel",         color: "#BE8040" },
  { name: "Delta Green",     desc: "Muted teal blue-green",       color: "#3E8080" },
  { name: "Simba",           desc: "Warm golden tan",             color: "#B88E5C" },
  { name: "Caltex Grey",     desc: "True mid-tone grey",          color: "#909090" },
  { name: "Terra Brown",     desc: "Rich terracotta red",         color: "#A63E28" },
  { name: "Havana",          desc: "Deep jungle olive green",     color: "#3E5030" },
  { name: "Cool Blue",       desc: "Crisp light sky blue",        color: "#A8C6D6" },
  { name: "Bloom",           desc: "Warm dusky rose",             color: "#C59098" },
  { name: "Burgundy",        desc: "Deep rich wine red",          color: "#7E2038" },
  { name: "Lavender",        desc: "Soft floral purple",          color: "#A898C6" },
  { name: "Light Tan",       desc: "Gentle warm tan",             color: "#CDB885" },
  { name: "Dark Tan",        desc: "Deep warm tan",               color: "#A68856" },
  { name: "Jewel Green",     desc: "Lustrous dark teal",          color: "#1A6A6A" },
  // Row 6 — Batch 3 tail
  { name: "Apple White",     desc: "Crisp apple-tinted white",    color: "#E6EDD4" },
  { name: "Egg Shell",       desc: "Delicate eggshell cream",     color: "#EEEBD4" },
  { name: "Royal Blue",      desc: "Classic deep royal blue",     color: "#2848A0" },
  { name: "Kinder Green",    desc: "Bright fresh grass green",    color: "#279040" },
  { name: "Wheat",           desc: "Warm golden straw",           color: "#DECC8D" },
  // Row 6 continued — Batch 4
  { name: "Kidepo Green",    desc: "Rich dark forest teal",       color: "#286858" },
  { name: "Sparkle Pink",    desc: "Bold vivid hot pink",         color: "#E04888" },
  { name: "Reef Green",      desc: "Tropical reef teal",          color: "#388888" },
  { name: "Light Alpha",     desc: "Soft powder blue",            color: "#A0C0D8" },
  { name: "Pepsi Blue",      desc: "Strong medium blue",          color: "#2060A8" },
  { name: "Brick Red",       desc: "Warm classic brick",          color: "#A03020" },
  { name: "Pink Grey",       desc: "Soft blush-toned grey",       color: "#C8A8A8" },
  { name: "Blue Haze",       desc: "Hazy blue-grey",              color: "#6088B0" },
  { name: "Carrot",          desc: "Warm carrot orange",          color: "#E06028" },
  { name: "1C75 Grey",       desc: "Clean standard grey",         color: "#888888" },
  { name: "Coffee",          desc: "Deep rich coffee brown",      color: "#604028" },
  { name: "Regatta",         desc: "Deep classic navy",           color: "#1A3060" },
  // Row 7
  { name: "Mint",            desc: "Fresh cool mint green",       color: "#90D0B0" },
  { name: "Natural Echo",    desc: "Earthy sage green",           color: "#90A880" },
  { name: "Nile Blue",       desc: "Soft Nile river blue",        color: "#88B0C8" },
  { name: "Black Forest",    desc: "Deepest dark forest green",   color: "#203020" },
  { name: "Kilembe",         desc: "Dark warm earthy brown",      color: "#503020" },
  { name: "Mushroom",        desc: "Warm neutral mushroom",       color: "#B0A090" },
  { name: "Turquoise",       desc: "Vivid tropical turquoise",    color: "#20A898" },
  { name: "Pale Beta",       desc: "Whisper-pale aqua tint",      color: "#C0D8D0" },
  { name: "Mermaid",         desc: "Mystical deep teal",          color: "#50A0A0" },
  { name: "Nabbingo Grey",   desc: "Warm mid-tone grey",          color: "#A09888" },
  { name: "Hot Lilac",       desc: "Bold warm purple",            color: "#9050A8" },
  { name: "Pale Fern",       desc: "Delicate fern green",         color: "#C8D8B8" },
  { name: "Rusty Red",       desc: "Aged rusty red-orange",       color: "#B03820" },
  { name: "Bonanza",         desc: "Warm golden ochre",           color: "#C09848" },
  { name: "Raven",           desc: "Dark blue-charcoal",          color: "#303838" },
  { name: "Navy",            desc: "Classic deep navy",           color: "#1A2848" },
  { name: "Signal Blue",     desc: "Bold statement blue",         color: "#1840A0" },
  // Row 8 — Batch 4 tail
  { name: "Ash",             desc: "Soft cool ash grey",          color: "#C8C8C0" },
  { name: "Candy Pink",      desc: "Fun vivid candy pink",        color: "#E03878" },
  // Row 8 continued — Batch 5
  { name: "Victoria",        desc: "Rich mid forest green",       color: "#508048" },
  { name: "Kiwa",            desc: "Bold orange-red",             color: "#C03018" },
  { name: "California Peach",desc: "Warm sun-ripened peach",      color: "#F0A878" },
  { name: "East Dust",       desc: "Dusty sandy beige",           color: "#D8C8A0" },
  { name: "Peach",           desc: "Soft warm peach",             color: "#E0A878" },
  { name: "Mocassin",        desc: "Warm moccasin tan",           color: "#B08858" },
  { name: "Lizard Grey",     desc: "Warm olive-grey",             color: "#888068" },
  { name: "Marsh",           desc: "Earthy marsh olive",          color: "#8A8A50" },
  { name: "Sahara Sand",     desc: "Warm desert sand",            color: "#D0B878" },
  { name: "Safari Tan",      desc: "Sun-baked safari tan",        color: "#C0A058" },
  { name: "Red Oxide",       desc: "Deep iron red oxide",         color: "#802018" },
  { name: "Plum",            desc: "Dark rich plum",              color: "#502060" },
  { name: "Signal",          desc: "Bold signal red",             color: "#D01820" },
  { name: "Pepper",          desc: "Spicy deep red-brown",        color: "#802028" },
  { name: "Deep Orange",     desc: "Intense deep orange",         color: "#D84010" },
  // Row 9 — final batch
  { name: "Titan Grey",      desc: "Solid mid-tone grey",         color: "#888890" },
  { name: "Soft White",      desc: "Barely-there soft white",     color: "#F0EEE8" },
  { name: "Savana",          desc: "Warm savanna olive-tan",      color: "#B0A868" },
  { name: "Duck Egg",        desc: "Pale duck egg blue-green",    color: "#B0D0C8" },
  { name: "Dadde Van",       desc: "Warm greige brown",           color: "#A09078" },
  { name: "Pale Lilac",      desc: "Whisper-soft lilac",          color: "#D8C8E0" },
  { name: "Rose Petal",      desc: "Delicate rose petal pink",    color: "#E8B8C0" },
  { name: "Cranberry",       desc: "Deep dark cranberry",         color: "#902030" },
  { name: "Ind. Grey",       desc: "Industrial blue-grey",        color: "#909898" },
  { name: "Squirrel Grey",   desc: "Natural warm grey",           color: "#A8A098" },
  { name: "Merlin Grey",     desc: "True balanced grey",          color: "#888888" },
  { name: "Philips Grey",    desc: "Classic light grey",          color: "#C0C0C0" },
  { name: "Evening Grey",    desc: "Moody dark evening grey",     color: "#707078" },
  { name: "Leather",         desc: "Rich warm leather brown",     color: "#906040" },
  { name: "Olive Green",     desc: "Classic olive green",         color: "#607840" },
  { name: "Granite",         desc: "Solid dark granite grey",     color: "#606068" },
  { name: "Silver Grey",     desc: "Cool light silver grey",      color: "#A8A8B0" },
];

// ─── COLOUR CATEGORIES ───
const CAT_SWATCH_COLORS = {
  "Whites":    "#F0EEE8",
  "Creams":    "#F3EBD5",
  "Neutrals":  "#A09888",
  "Pinks":     "#DFA0A0",
  "Yellows":   "#E8C030",
  "Greens":    "#279040",
  "Blues":     "#2848A0",
  "Greys":     "#888888",
  "Metallics": "#AD6040",
};

const COLOUR_CATEGORIES = {
  "Whites": {
    slug: "whites-colour",
    repColor: "#F0EEE8",
    gradient: "linear-gradient(135deg, #f7f5f2 0%, #ebe7df 100%)",
    textColor: "#2a2a2a",
    accent: "#6b8e8a",
    desc: "Crisp, clean whites and near-whites that bring light, space and calm to any room",
    colors: ["Ice","Water Lily","White Clad","Apple White","Egg Shell","Soft White","Whisper Pink","Pale Beta","Pale Lilac"],
  },
  "Creams": {
    slug: "creams-colour",
    repColor: "#F3EBD5",
    gradient: "linear-gradient(135deg, #fdf8ef 0%, #f0e6d0 100%)",
    textColor: "#2a2a2a",
    accent: "#b8863a",
    desc: "Warm, inviting creams and ivories that bring natural elegance and a sense of comfort to every room",
    colors: ["Cream","Ivory","Pale Beige","Vanilla","East Dust","Wheat","Diamond Ouch","Sandy Beaches","Tropics","Malibu"],
  },
  "Neutrals": {
    slug: "neutrals-colour",
    repColor: "#A09888",
    gradient: "linear-gradient(135deg, #f4f0eb 0%, #e5ddd4 100%)",
    textColor: "#2a2a2a",
    accent: "#8a7060",
    desc: "Timeless taupes, tans and warm greiges — effortlessly versatile backdrops that complement any style",
    colors: ["Pebble","Greybrown","Mushroom","San Jose","Cashew","Dadde Van","Pale Umber","Garbanzo Bean","Light Tan","Simba","Sahara Sand","Mocassin"],
  },
  "Pinks": {
    slug: "pinks-colour",
    repColor: "#DFA0A0",
    gradient: "linear-gradient(135deg, #fdf0f5 0%, #f5dde8 100%)",
    textColor: "#2a2a2a",
    accent: "#c8507a",
    desc: "From barely-there blushes to bold hot pinks — every shade of rose, petal and mauve for your home",
    colors: ["Rose","Pink Blossom","Blush","Love Zone","Tea Rose","Pink Lilac","Pink Dogwood","Wild Orchid","Bloom","Sparkle Pink","Candy Pink","Rose Petal","Pink Grey","Violet Bouquet"],
  },
  "Yellows": {
    slug: "yellows-colour",
    repColor: "#E8C030",
    gradient: "linear-gradient(135deg, #fffbec 0%, #faeabb 100%)",
    textColor: "#2a2a2a",
    accent: "#b87a10",
    desc: "Sunshine yellows, warm golds, burnt oranges and amber tones — colours that radiate energy and warmth",
    colors: ["Maize Yellow","Bumble Bee","Golden Yellow","Mustard","Medallion","September Leaf","Sweet Honey","Tangerine","Pollen Grains","Bonanza","Carrot","Caramel","Island Brush","Zaabu","Spiced Pumpkin","Deep Orange"],
  },
  "Greens": {
    slug: "greens-colour",
    repColor: "#279040",
    gradient: "linear-gradient(135deg, #f0f7f1 0%, #d8eedd 100%)",
    textColor: "#2a2a2a",
    accent: "#3a8040",
    desc: "From fresh mint to deep forest — our full range of greens, olives and sages to bring the outside in",
    colors: ["Gooseberry","Soft Celery","Cordial Lime","Albertine","Lake Green","Shrub","Fern","Emerald","Balm","Kyadondo","Victoria","Kinder Green","Mint","Natural Echo","Black Forest","Pale Fern","Olive Green","Havana"],
  },
  "Blues": {
    slug: "blues-colour",
    repColor: "#2848A0",
    gradient: "linear-gradient(135deg, #eef3fb 0%, #d4e5f8 100%)",
    textColor: "#2a2a2a",
    accent: "#2860a8",
    desc: "Crisp sky blues, deep navies, serene teals and turquoise — calming, versatile shades for any interior",
    colors: ["Regalia","Denim","Cool Blue","Royal Blue","Light Alpha","Pepsi Blue","Blue Haze","Regatta","Nile Blue","Navy","Signal Blue","Duck Egg","Turquoise","Mermaid","Memory","Pigeon"],
  },
  "Greys": {
    slug: "greys-colour",
    repColor: "#888888",
    gradient: "linear-gradient(135deg, #f5f5f5 0%, #e4e4e4 100%)",
    textColor: "#2a2a2a",
    accent: "#505060",
    desc: "From pale ash to deep charcoal — sophisticated greys and slates for a timeless, modern look",
    colors: ["Rock","Screed","Caltex Grey","Ash","1C75 Grey","Titan Grey","Ind. Grey","Squirrel Grey","Merlin Grey","Philips Grey","Evening Grey","Granite","Silver Grey","Lizard Grey","Raven","Nabbingo Grey"],
  },
  "Metallics": {
    slug: "metallics-colour",
    repColor: "#AD6040",
    gradient: "linear-gradient(135deg, #2a1e18 0%, #1e1a28 100%)",
    textColor: "#fff",
    accent: "#d4845a",
    desc: "Rich coppers, deep jewel tones and bold accent shades for dramatic feature walls and statement spaces",
    colors: ["Copper","Mahogany","Burgundy","Plum","Violet","Hot Lilac","Red Oxide","Signal","Cranberry","Brick Red","Tandoori","Rusty Red","Sunset","Leather"],
  },
};

// ─── STYLE CATEGORIES ───
const STYLE_CATEGORIES = {
  "Contemporary": {
    slug: "contemporary-style",
    gradient: "linear-gradient(135deg, #e8e6e2 0%, #c8c4bc 100%)",
    textColor: "#1a1a1a",
    accent: "#505050",
    desc: "Clean lines, sophisticated neutrals and subtle tones that define refined, modern living spaces",
    keyWords: ["Minimal", "Refined", "Timeless"],
    colors: ["Soft White", "White Clad", "Ash", "Philips Grey", "Silver Grey", "Squirrel Grey", "Titan Grey", "Caltex Grey", "Merlin Grey", "Pigeon", "Cool Blue", "Nile Blue", "Light Alpha", "Greybrown", "Mushroom", "Pebble", "Rock", "Pale Beta", "Ice"],
  },
  "Modern": {
    slug: "modern-style",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    textColor: "#ffffff",
    accent: "#E8603C",
    desc: "Bold, graphic and striking — deep tones and high-contrast palettes for confident, statement spaces",
    keyWords: ["Bold", "Graphic", "Dramatic"],
    colors: ["Raven", "Navy", "Regatta", "Signal Blue", "Royal Blue", "Denim", "Black Forest", "Screed", "Granite", "Evening Grey", "1C75 Grey", "Turquoise", "Mermaid", "Jewel Green", "Delta Green", "Kiwa", "Signal", "Deep Orange"],
  },
  "Boho": {
    slug: "boho-style",
    gradient: "linear-gradient(135deg, #f5dcc8 0%, #e8c4a0 100%)",
    textColor: "#2a1a0e",
    accent: "#C84A2A",
    desc: "Earthy warmth, rich terracottas and spice tones that celebrate free-spirited, eclectic bohemian living",
    keyWords: ["Earthy", "Warm", "Eclectic"],
    colors: ["Tandoori", "Terra Brown", "Spiced Pumpkin", "Zaabu", "Island Brush", "Carrot", "California Peach", "Peach", "Blush", "Wild Orchid", "Caramel", "Sweet Honey", "Copper", "Afro Brown", "Bonanza", "Earthen", "Malibu", "San Jose", "Tea Rose", "Bloom"],
  },
  "Farmhouse": {
    slug: "farmhouse-style",
    gradient: "linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 100%)",
    textColor: "#2a2010",
    accent: "#8A6840",
    desc: "Warm creams, natural tones and soft sage greens that create a cosy, welcoming country retreat",
    keyWords: ["Warm", "Natural", "Cosy"],
    colors: ["Cream", "Ivory", "Egg Shell", "Sandy Beaches", "Diamond Ouch", "East Dust", "Wheat", "Lake Green", "Pale Fern", "Albertine", "Natural Echo", "Balm", "Soft Celery", "Cashew", "Light Tan", "Simba", "Sahara Sand", "Safari Tan", "Pale Beige", "Vanilla", "Tropics"],
  },
  "Scandi": {
    slug: "scandi-style",
    gradient: "linear-gradient(135deg, #eef4f7 0%, #daeaf2 100%)",
    textColor: "#1a2a2a",
    accent: "#3A7A8A",
    desc: "Cool, clean and beautifully minimal — light, airy tones inspired by Nordic clarity and calm",
    keyWords: ["Clean", "Airy", "Minimal"],
    colors: ["Ice", "Water Lily", "Pale Beta", "Soft White", "Apple White", "Egg Shell", "Ash", "Squirrel Grey", "Philips Grey", "Pale Lilac", "Rose Petal", "Ripple Green", "Soft Celery", "Memory", "Duck Egg", "Balm", "Pale Fern", "Whisper Pink"],
  },
  "Eclectic": {
    slug: "eclectic-style",
    gradient: "linear-gradient(135deg, #2d1a4e 0%, #4a1a6e 100%)",
    textColor: "#ffffff",
    accent: "#C880E0",
    desc: "Vibrant, bold and fearlessly mixed — daring colours that celebrate personality and creative self-expression",
    keyWords: ["Bold", "Vibrant", "Fearless"],
    colors: ["Hot Lilac", "Violet", "Plum", "Burgundy", "Sparkle Pink", "Candy Pink", "Love Zone", "Kinder Green", "Emerald", "Turquoise", "Pepsi Blue", "Mustard", "Bumble Bee", "Mahogany", "Cranberry", "Lemon Pinch", "Tangerine", "Pear", "Medallion"],
  },
};

// ─── COLOUR DETAIL DATA ───
const COLOUR_DETAILS = {
  "Ice": {
    tagline: "A Cool, Crisp White with Blue Undertones",
    longDesc: "Ice is a beautifully cool shade of white with gentle blue undertones that create a refreshing, airy feel. Perfect for maximising light and openness, it brings a clean Scandinavian crispness to any room.",
    tones: "Cool", hues: "White, Blue",
    slides: [INSPO_SCANDI_SAGE, INSPO_MINIMAL_BEIGE],
  },
  "Water Lily": {
    tagline: "A Delicate Off-White with Soft Green Tints",
    longDesc: "Water Lily is a gentle, barely-there off-white carrying the faintest whisper of green. Inspired by the serene palette of a still garden pond, it brings natural tranquillity to any interior.",
    tones: "Neutral", hues: "White, Green",
    slides: [INSPO_MINIMAL_BEIGE, INSPO_SCANDI_SAGE],
  },
  "White Clad": {
    tagline: "A Clean, Bright White for Modern Spaces",
    longDesc: "White Clad is a pure, unapologetic white — versatile, fresh, and timeless. Bright without being stark, it reflects light beautifully while remaining warm and inviting for any interior style.",
    tones: "Neutral", hues: "White, Yellow",
    slides: [INSPO_MINIMAL_BEIGE, INSPO_SCANDI_SAGE],
  },
  "Apple White": {
    tagline: "A Fresh White with a Subtle Green Lift",
    longDesc: "Apple White takes a classic white and infuses it with the freshest hint of green — like sunlight filtering through new spring leaves. Energising yet calm, it suits kitchens, bathrooms, and spaces that benefit from a connection to nature.",
    tones: "Cool", hues: "White, Green",
    slides: [INSPO_SCANDI_SAGE, INSPO_MINIMAL_BEIGE],
  },
  "Egg Shell": {
    tagline: "A Timeless Warm White with Creamy Depth",
    longDesc: "Egg Shell is the quintessential warm white — the colour of a freshly discovered egg in morning light. With its gentle creamy depth, it creates a feeling of quiet luxury without ever feeling heavy or overdone. A true classic.",
    tones: "Warm", hues: "White, Yellow",
    slides: [INSPO_MINIMAL_BEIGE, INSPO_SOFT_LAVENDER],
  },
  "Soft White": {
    tagline: "A Barely-There White for Tranquil Spaces",
    longDesc: "Soft White is the most understated shade in our collection — almost colourless, it whispers rather than speaks. Its near-perfect neutrality makes it the ideal backdrop, allowing furniture, artwork, and textiles to take centre stage.",
    tones: "Neutral", hues: "White",
    slides: [INSPO_MINIMAL_BEIGE, INSPO_SCANDI_SAGE],
  },
  "Whisper Pink": {
    tagline: "A Whisper-Soft White with a Rosy Blush",
    longDesc: "Whisper Pink sits right at the edge of white and blush — a barely-there rosy warmth that makes rooms feel inviting and tender. Beautifully gentle without being overpowering, it is perfect for bedrooms and living spaces.",
    tones: "Warm", hues: "White, Pink",
    slides: [INSPO_SOFT_LAVENDER, INSPO_MINIMAL_BEIGE],
  },
  "Pale Beta": {
    tagline: "A Pale Aqua White for Calming Interiors",
    longDesc: "Pale Beta is the colour of clear shallow water on a white sand beach — a serene aqua-touched white that brings an immediate sense of calm. Cool, fresh, and versatile, it pairs beautifully with natural timbers and coastal-inspired interiors.",
    tones: "Cool", hues: "White, Blue, Green",
    slides: [INSPO_SCANDI_SAGE, INSPO_MINIMAL_BEIGE],
  },
  "Pale Lilac": {
    tagline: "A Soft Lilac White for Dreamy Rooms",
    longDesc: "Pale Lilac is a delicate, dreamlike white touched with the faintest purple bloom. Romantic and gentle, it creates a sense of softness and serenity — perfect for bedrooms and nurseries where you want a colour that soothes and enchants.",
    tones: "Cool", hues: "White, Purple",
    slides: [INSPO_SOFT_LAVENDER, INSPO_MINIMAL_BEIGE],
  },

  // ── CREAMS ──
  "Cream": {
    tagline: "A Classic Warm Cream for Timeless Interiors",
    longDesc: "Cream is the ultimate warm white with character — a timeless shade that has graced elegant interiors for centuries. Gentle and inviting, its golden warmth fills rooms with a soft, honeyed glow that feels effortlessly sophisticated in both classic and contemporary settings.",
    tones: "Warm", hues: "Cream, Yellow",
    slides: [],
  },
  "Ivory": {
    tagline: "A Refined Ivory with Old-World Elegance",
    longDesc: "Ivory carries an air of refined, old-world elegance — a classic creamy white with just enough warmth to feel luxurious rather than stark. Inspired by the natural richness of aged ivory, it brings a sense of quiet grandeur and timeless beauty to any room it graces.",
    tones: "Warm", hues: "Cream, Yellow",
    slides: [],
  },
  "Pale Beige": {
    tagline: "A Warm, Airy Beige for Effortless Living",
    longDesc: "Pale Beige is the definition of understated elegance — a beautifully warm, airy neutral that creates a sense of space and calm without ever feeling cold. Its gentle warmth makes it the perfect backdrop for a wide range of furniture and décor styles, from rustic to refined.",
    tones: "Warm", hues: "Beige, Cream",
    slides: [],
  },
  "Vanilla": {
    tagline: "A Sweet, Honeyed Vanilla for Cosy Spaces",
    longDesc: "Vanilla is as comforting as its name suggests — a soft, sweet cream touched with the warmth of golden honey. It wraps rooms in a sense of cosiness and contentment, making spaces feel welcoming and lived-in. A beautiful choice for kitchens, living rooms, and family spaces.",
    tones: "Warm", hues: "Cream, Yellow",
    slides: [],
  },
  "East Dust": {
    tagline: "A Sun-Dusted Sandy Beige Full of Warmth",
    longDesc: "East Dust captures the warm, hazy glow of afternoon sun on dry earth — a dusty, sun-baked sandy beige that brings an unmistakably African warmth to interiors. Rich with natural character, it pairs beautifully with rattan, terracotta, and warm timber tones.",
    tones: "Warm", hues: "Beige, Brown",
    slides: [],
  },
  "Wheat": {
    tagline: "A Golden Straw Cream for Sun-Drenched Rooms",
    longDesc: "Wheat is the colour of golden fields at harvest time — a warm, straw-toned cream that fills rooms with a sense of abundance and sunny optimism. Its rich golden depth brings energy and vitality without ever feeling overwhelming, working beautifully in kitchens and dining rooms.",
    tones: "Warm", hues: "Cream, Gold",
    slides: [],
  },
  "Diamond Ouch": {
    tagline: "A Warm Buff Cream with a Subtle Golden Glow",
    longDesc: "Diamond Ouch is a sophisticated warm buff — a mellow, golden-toned cream that sits beautifully between pure white and rich sand. Its subtle depth gives it a natural warmth that catches light beautifully throughout the day, making rooms feel inviting at every hour.",
    tones: "Warm", hues: "Cream, Beige",
    slides: [],
  },
  "Sandy Beaches": {
    tagline: "A Bleached Sandy Hue Inspired by Coastal Shores",
    longDesc: "Sandy Beaches is the colour of sun-bleached shoreline sand — light, warm, and effortlessly relaxed. It brings a sense of coastal calm and barefoot ease to any interior, evoking lazy mornings and warm sea breezes. Perfect for creating a relaxed, resort-inspired living space.",
    tones: "Warm", hues: "Beige, Sand",
    slides: [],
  },
  "Tropics": {
    tagline: "A Sun-Warmed Sand Tone for Relaxed Living",
    longDesc: "Tropics is warm, earthy, and immediately relaxing — the colour of sun-warmed sand beneath bare feet. With its natural sandy-beige depth, it brings an organic, grounded quality to interiors that feels both rooted and restful. Beautifully suited to relaxed, nature-inspired rooms.",
    tones: "Warm", hues: "Sand, Brown",
    slides: [],
  },
  "Malibu": {
    tagline: "A Sun-Kissed Peach Cream for Bright, Airy Rooms",
    longDesc: "Malibu is a warm, sun-kissed peach cream — the colour of golden California light on warm sand. Bright and uplifting without being bold, it brings a gentle, joyful warmth to any room. Its peachy undertone adds a beautiful blush of colour that feels fresh and full of life.",
    tones: "Warm", hues: "Cream, Peach",
    slides: [],
  },

  // ── NEUTRALS ──
  "Pebble": { tagline: "A Smooth Warm Grey-Beige for Modern Interiors", longDesc: "Pebble is the colour of a smooth, water-worn stone — a perfectly balanced warm grey-beige that bridges the gap between neutral and warm. Endlessly versatile, it works with almost any colour palette and brings a quiet, sophisticated calm to living rooms, hallways, and bedrooms.", tones: "Neutral", hues: "Grey, Beige", slides: [] },
  "Greybrown": { tagline: "A Warm Grey-Brown Blend for Grounded Spaces", longDesc: "Greybrown is the perfect marriage of grey's cool composure and brown's earthy warmth. This sophisticated mid-tone greige is an interior designer's staple — effortlessly chic, grounding, and versatile enough to complement both cool and warm colour schemes.", tones: "Neutral", hues: "Grey, Brown", slides: [] },
  "Mushroom": { tagline: "A Warm Earthy Neutral for Sophisticated Rooms", longDesc: "Mushroom is a rich, earthy neutral with warm brown undertones that bring a sense of natural depth and comfort. Like its namesake foraged from woodland floors, it has an organic, tactile quality that makes rooms feel grounded, layered, and naturally elegant.", tones: "Warm", hues: "Beige, Brown", slides: [] },
  "San Jose": { tagline: "A Warm Sandy Tan with Sun-Baked Character", longDesc: "San Jose is a warm, golden sandy tan — rich with the character of sun-baked earth and open landscapes. Its depth of warmth makes it ideal as a feature wall colour or as a rich neutral backdrop that adds energy and vitality to relaxed, global-inspired interiors.", tones: "Warm", hues: "Tan, Gold", slides: [] },
  "Cashew": { tagline: "A Creamy Warm Tan for Inviting Spaces", longDesc: "Cashew is a smooth, creamy warm tan — the colour of the inside of the nut itself. Gentle and nourishing, it fills rooms with a quiet, organic warmth that feels both grounded and airy. An ideal choice for open-plan living spaces where warmth and flow matter.", tones: "Warm", hues: "Tan, Cream", slides: [] },
  "Dadde Van": { tagline: "A Warm Greige with Timeless Appeal", longDesc: "Dadde Van is a deeply considered greige — a warm brown-grey that sits beautifully in the space between earth and stone. Its nuanced depth means it shifts subtly throughout the day with changing light, always feeling anchored, warm, and quietly refined.", tones: "Warm", hues: "Greige, Brown", slides: [] },
  "Pale Umber": { tagline: "A Soft Warm Greige for Understated Elegance", longDesc: "Pale Umber is a delicate, soft greige with the faintest whisper of warm brown — subtle enough to act as a neutral backdrop, yet warm enough to avoid feeling cold. A beautifully understated shade that brings effortless elegance without demanding attention.", tones: "Warm", hues: "Greige, Beige", slides: [] },
  "Garbanzo Bean": { tagline: "A Natural Olive-Khaki for Earthy Interiors", longDesc: "Garbanzo Bean is a rich, natural olive-khaki — the colour of dried legumes and sunlit earth. Its complex warm-neutral character adds genuine depth and character to interiors, pairing beautifully with natural materials like linen, rattan, timber, and terracotta.", tones: "Warm", hues: "Olive, Tan", slides: [] },
  "Light Tan": { tagline: "A Gentle Warm Tan for Light, Airy Rooms", longDesc: "Light Tan is warm, breezy, and quietly beautiful — a pale golden tan that brings a sense of calm ease to any room. Light enough to maximise brightness without feeling white, it creates a welcoming, sun-touched glow that works brilliantly in open, airy living spaces.", tones: "Warm", hues: "Tan, Gold", slides: [] },
  "Simba": { tagline: "A Golden Warm Tan Inspired by the Open Savanna", longDesc: "Simba is warm, golden, and full of life — a rich tan that evokes the golden hour light of the East African savanna. Named for strength and warmth, it brings a vibrant earthiness to interiors that feels adventurous and deeply connected to the natural world.", tones: "Warm", hues: "Tan, Gold", slides: [] },
  "Sahara Sand": { tagline: "A Warm Desert Sand for Sun-Filled Interiors", longDesc: "Sahara Sand is the colour of sun-warmed desert dunes — a deep, glowing sand tone with beautiful golden warmth. It brings the vast, serene beauty of the desert landscape into the home, creating spaces that feel both expansive and intimately warm at the same time.", tones: "Warm", hues: "Sand, Gold", slides: [] },
  "Mocassin": { tagline: "A Rich Warm Moccasin for Cosy, Layered Rooms", longDesc: "Mocassin is a deeply warm, rich moccasin tan — a colour that feels as comfortable and lived-in as its namesake. With its earthy brown depth and golden warmth, it creates spaces that feel genuinely cosy and layered, perfect for studies, libraries, and dining rooms.", tones: "Warm", hues: "Tan, Brown", slides: [] },

  // ── PINKS ──
  "Rose": { tagline: "A Timeless Dusty Rose for Romantic Rooms", longDesc: "Rose is a timeless, dusty pink with the muted warmth of dried petals. Neither too sweet nor too bold, it strikes a perfect balance — romantic and feminine without being overpowering. A classic that works beautifully in bedrooms, sitting rooms, and anywhere that benefits from a gentle warmth.", tones: "Warm", hues: "Pink, Rose", slides: [] },
  "Pink Blossom": { tagline: "A Delicate Candy Pink Full of Sweet Charm", longDesc: "Pink Blossom is a soft, sweet candy pink — light, cheerful, and full of gentle charm. Inspired by the first flush of spring blossom, it brings a sense of joy and freshness to any room. A perfect choice for children's rooms, nurseries, and spaces that celebrate playful femininity.", tones: "Warm", hues: "Pink, White", slides: [] },
  "Blush": { tagline: "A Warm Peachy Blush for Welcoming Spaces", longDesc: "Blush is warm, peachy, and deeply welcoming — a gentle pink with just enough peach warmth to feel alive and glowing. Sitting between pink and cream, it creates a beautiful sense of soft warmth in bedrooms and living rooms that makes everyone feel immediately at ease.", tones: "Warm", hues: "Pink, Peach", slides: [] },
  "Love Zone": { tagline: "A Lively Berry Pink for Bold, Joyful Rooms", longDesc: "Love Zone is a vivid, lively berry pink that pulses with energy and joy. Deeper and more saturated than a typical pink, it creates a striking, confident statement without crossing into red. Perfect as a feature wall or in spaces where you want to make a bold, unapologetic declaration of colour.", tones: "Cool", hues: "Pink, Berry", slides: [] },
  "Tea Rose": { tagline: "A Soft Warm Blush Inspired by Garden Roses", longDesc: "Tea Rose is as gentle and lovely as its name — a soft, warm blush touched with the faintest pink of a garden tea rose in full bloom. Quietly romantic and effortlessly refined, it brings a timeless, feminine warmth to bedrooms and reception rooms.", tones: "Warm", hues: "Pink, Rose", slides: [] },
  "Pink Lilac": { tagline: "A Dusty Mauve-Pink for Sophisticated Rooms", longDesc: "Pink Lilac occupies a beautiful space between pink and purple — a dusty, sophisticated mauve that feels both romantic and grown-up. With its complex, muted tones, it creates an air of quiet luxury and thoughtful elegance, perfect for bedrooms and intimate living spaces.", tones: "Cool", hues: "Pink, Lilac", slides: [] },
  "Pink Dogwood": { tagline: "A Soft Dusty Petal Pink for Calm Interiors", longDesc: "Pink Dogwood is a muted, dusty petal pink inspired by the delicate blooms of a dogwood tree. Gentle and soothing, it has a chalky, almost powdery quality that creates a sense of refined calm. A beautiful choice for spaces where serenity and subtle colour are equally valued.", tones: "Neutral", hues: "Pink, Dusty Rose", slides: [] },
  "Wild Orchid": { tagline: "A Dusty Mauve Pink Touched with Exotic Warmth", longDesc: "Wild Orchid is a beautifully complex dusty mauve-pink, inspired by the orchids that grow wild in tropical forests. Rich with warm undertones, it has a depth and sophistication that elevates spaces beyond the ordinary — a truly special colour for bedrooms and feature walls.", tones: "Warm", hues: "Pink, Mauve", slides: [] },
  "Bloom": { tagline: "A Warm Dusky Rose for Intimate Spaces", longDesc: "Bloom is a warm, dusky rose — the colour of petals touched by the last warmth of a summer evening. Deeper and richer than a typical blush, it creates beautiful, intimate spaces filled with a sense of warmth and quiet romance. Ideal for bedrooms, snugs, and cosy dining rooms.", tones: "Warm", hues: "Rose, Pink", slides: [] },
  "Sparkle Pink": { tagline: "A Bold Vivid Hot Pink for Daring Statements", longDesc: "Sparkle Pink is bold, vivid, and utterly fearless — a hot pink that makes an immediate, joyful impact. For those who love colour without reservation, it transforms any space into a vibrant, energised environment full of personality and confidence.", tones: "Cool", hues: "Pink, Magenta", slides: [] },
  "Candy Pink": { tagline: "A Fun Vivid Candy Pink Full of Personality", longDesc: "Candy Pink is pure, unapologetic fun — a vivid, candy-bright pink that radiates joy and energy. Playful and bold, it is the perfect choice for accent walls, children's spaces, or any interior where you want colour to do the talking. Pair with white for maximum impact.", tones: "Cool", hues: "Pink, Fuchsia", slides: [] },
  "Rose Petal": { tagline: "A Delicate Rose Petal Pink for Soft, Feminine Rooms", longDesc: "Rose Petal is as gentle and fleeting as its namesake — a delicate, barely-there pink that captures the translucent beauty of a fresh rose petal held up to the light. Softly romantic and deeply pretty, it brings a whisper of colour to spaces without ever overwhelming.", tones: "Warm", hues: "Pink, White", slides: [] },
  "Pink Grey": { tagline: "A Sophisticated Blush-Toned Grey for Modern Rooms", longDesc: "Pink Grey is a beautifully sophisticated blend — the cool restraint of grey warmed by the gentlest blush of pink. The result is a nuanced, grown-up neutral that brings both warmth and modernity to interiors. A favourite among interior designers for its effortless versatility.", tones: "Neutral", hues: "Grey, Pink", slides: [] },
  "Violet Bouquet": { tagline: "A Soft Floral Lavender for Romantic Interiors", longDesc: "Violet Bouquet is the colour of a loosely tied bunch of lavender and sweet violet — soft, floral, and undeniably romantic. Its gentle purple-pink softness creates a dreamy, feminine atmosphere in bedrooms and sitting rooms that feels both calming and quietly enchanting.", tones: "Cool", hues: "Lavender, Pink", slides: [] },

  // ── YELLOWS ──
  "Maize Yellow": { tagline: "A Bright Harvest Gold Bursting with Energy", longDesc: "Maize Yellow is the colour of ripe corn in full harvest — a bright, warm gold that radiates energy, optimism, and natural abundance. Bold without being garish, it fills rooms with a genuine sense of sunshine and warmth, bringing East African agricultural heritage beautifully into the home.", tones: "Warm", hues: "Yellow, Gold", slides: [] },
  "Bumble Bee": { tagline: "A Vivid Sunshine Yellow for Bold, Joyful Rooms", longDesc: "Bumble Bee is pure sunshine in paint form — a vivid, saturated yellow that hums with energy and joy. Like its namesake buzzing between flowers, it brings movement, warmth, and natural vitality to any space. Perfect for kitchens, playrooms, and any area that needs an injection of pure optimism.", tones: "Warm", hues: "Yellow", slides: [] },
  "Golden Yellow": { tagline: "A Warm Radiant Gold for Sun-Drenched Spaces", longDesc: "Golden Yellow is the warmth of late afternoon sun distilled into a paint colour — a deep, radiant gold with genuine richness and depth. It fills rooms with a glowing warmth that evokes abundance, prosperity, and the natural beauty of golden hour light across open landscapes.", tones: "Warm", hues: "Yellow, Gold", slides: [] },
  "Mustard": { tagline: "A Classic Golden Mustard for Bold, Earthy Rooms", longDesc: "Mustard is a design classic for good reason — a deeply warm, golden-brown yellow with earthy depth and timeless character. It anchors spaces with a sense of confidence and history, working beautifully with natural timbers, dark metals, and richly patterned textiles.", tones: "Warm", hues: "Yellow, Gold, Brown", slides: [] },
  "Medallion": { tagline: "A Gleaming Warm Gold for Luxurious Interiors", longDesc: "Medallion is a rich, gleaming warm gold — the colour of polished brass and warm candlelight. More refined and muted than a bright yellow, its deeper golden tone brings a genuine sense of luxury and warmth to dining rooms, reception halls, and statement feature walls.", tones: "Warm", hues: "Gold, Yellow", slides: [] },
  "September Leaf": { tagline: "A Deep Burnished Gold for Autumnal Character", longDesc: "September Leaf captures the deep, burnished gold of autumn foliage at the height of the season — a rich, dark golden brown that glows with warmth and depth. It brings a sense of the season's abundance and beauty into the home, perfect for spaces that celebrate natural, earthy richness.", tones: "Warm", hues: "Gold, Olive, Brown", slides: [] },
  "Sweet Honey": { tagline: "A Rich Amber Warmth Straight from the Hive", longDesc: "Sweet Honey is as warm and nourishing as it sounds — a rich, deep amber that glows with the warmth of sunlit honey. Its reddish-gold depth creates a beautiful sense of cosiness and richness in dining rooms, hallways, and kitchens where warmth and character are desired.", tones: "Warm", hues: "Amber, Gold", slides: [] },
  "Tangerine": { tagline: "A Vibrant Fresh Orange for Energetic Spaces", longDesc: "Tangerine is as fresh and vibrant as the fruit it's named after — a clean, vivid orange that bursts with positive energy and brightness. Neither too red nor too yellow, it strikes the perfect citrus balance, filling spaces with an irresistible sense of freshness, fun, and vitality.", tones: "Warm", hues: "Orange, Yellow", slides: [] },
  "Pollen Grains": { tagline: "A Warm Golden Olive for Nature-Inspired Rooms", longDesc: "Pollen Grains is a warm, dusty golden-olive — the colour of pollen clinging to a bee's leg in midsummer. Complex and organic, it sits between gold and olive green in a uniquely beautiful way, bringing natural character and earthy sophistication to interiors that celebrate the natural world.", tones: "Warm", hues: "Gold, Olive", slides: [] },
  "Bonanza": { tagline: "A Warm Golden Ochre for Richly Textured Rooms", longDesc: "Bonanza is a warm, earthy golden ochre — a colour with genuine substance and depth. Its rich, pigment-like quality evokes traditional earth paints and natural pigments, bringing an authentic, tactile warmth to walls that feels deeply connected to the land.", tones: "Warm", hues: "Ochre, Gold", slides: [] },
  "Carrot": { tagline: "A Warm Carrot Orange for Lively, Welcoming Rooms", longDesc: "Carrot is a warm, appetising orange with earthy depth — richer and more grounded than a pure citrus orange. Its warm character makes it surprisingly versatile as an accent or feature wall colour, adding life and energy to kitchens, hallways, and creative spaces.", tones: "Warm", hues: "Orange, Red", slides: [] },
  "Caramel": { tagline: "A Warm Golden Caramel for Cosy, Indulgent Rooms", longDesc: "Caramel is warm, sweet, and undeniably inviting — the colour of slowly stirred caramel at the point of perfection. Its deep, golden-brown warmth creates a sense of indulgence and cosiness, making it a beautiful choice for dining rooms and sitting rooms.", tones: "Warm", hues: "Caramel, Gold, Brown", slides: [] },
  "Island Brush": { tagline: "A Vibrant Warm Orange for Spirited Interiors", longDesc: "Island Brush is a vibrant, warm orange with rich tropical character — the colour of ripe mangoes and painted fishing boats on an Indian Ocean shore. Bold and full of spirit, it brings an irresistible tropical energy to accent walls, outdoor spaces, and creative interiors.", tones: "Warm", hues: "Orange, Red", slides: [] },
  "Zaabu": { tagline: "A Warm Burnt Orange with an African Soul", longDesc: "Zaabu — meaning gold in Luganda — is a warm, burnt orange that captures the spirit of East Africa's rich cultural heritage. Its deep, earthy orange-gold warmth evokes the colours of traditional fabric, festival, and the setting sun over open savanna landscapes.", tones: "Warm", hues: "Orange, Gold", slides: [] },
  "Spiced Pumpkin": { tagline: "A Deep Pumpkin Orange with Warming Spice", longDesc: "Spiced Pumpkin is a deep, rich pumpkin orange — warm, complex, and full of character. Like the best spiced autumnal recipes, it has warmth, depth, and a satisfying richness that makes rooms feel genuinely cosy and inviting. A wonderful choice for feature walls and accent spaces.", tones: "Warm", hues: "Orange, Brown", slides: [] },
  "Deep Orange": { tagline: "An Intense Deep Orange for Dramatic Impact", longDesc: "Deep Orange is intense, bold, and completely unapologetic — a richly saturated orange that makes an immediate and dramatic impression. For spaces where colour is the point and impact is the goal, Deep Orange delivers with confidence and energy, transforming ordinary walls into extraordinary statements.", tones: "Warm", hues: "Orange, Red", slides: [] },

  // ── GREENS ──
  "Gooseberry": { tagline: "A Muted Olive Green with Natural, Earthy Depth", longDesc: "Gooseberry is a complex, muted olive green with earthy warmth and genuine depth. Like the fruit itself — tart, textured, and quietly beautiful — it brings an organic, garden-inspired quality to interiors that feels both grounded and sophisticated. Perfect for living rooms and studies.", tones: "Neutral", hues: "Olive, Green", slides: [] },
  "Soft Celery": { tagline: "A Delicate Pale Green for Fresh, Light-Filled Rooms", longDesc: "Soft Celery is a barely-there pale green — light, crisp, and gently refreshing. Like new celery leaves catching the morning light, it brings a clean, verdant freshness to interiors without demanding attention. A beautiful choice for bathrooms, kitchens, and rooms that benefit from a natural, airy lift.", tones: "Cool", hues: "Green, White", slides: [] },
  "Cordial Lime": { tagline: "A Fresh Lime Green Bursting with Vitality", longDesc: "Cordial Lime is bright, fresh, and full of zesty vitality — a vivid yellow-green that brings the energy of a sun-filled garden into any room. Bold and optimistic, it works brilliantly as an accent colour that adds a pop of natural freshness to contemporary interiors.", tones: "Warm", hues: "Lime, Yellow", slides: [] },
  "Albertine": { tagline: "A Gentle Sage Green for Restful, Natural Rooms", longDesc: "Albertine is a beautifully gentle sage green — muted, calm, and deeply restful. It brings a sense of garden tranquillity and natural harmony to interiors, pairing beautifully with linen, warm wood, and terracotta for a timeless, organic look.", tones: "Neutral", hues: "Sage, Green", slides: [] },
  "Lake Green": { tagline: "A Tranquil Muted Green Inspired by Still Waters", longDesc: "Lake Green is the colour of still, deep water seen through reeds — a tranquil, muted green-grey with a calming, meditative quality. Neither too blue nor too yellow, its perfectly balanced tone creates a sense of peace and natural stillness in any interior it graces.", tones: "Cool", hues: "Green, Grey", slides: [] },
  "Shrub": { tagline: "A Deep Olive Green with Wild, Natural Character", longDesc: "Shrub is a deep, earthy olive green — the colour of dense hedgerows and wild foliage. Rich with the untamed character of nature, it brings a bold, grounding presence to interiors that feels genuinely connected to the outdoors. Ideal for feature walls, studies, and spaces that celebrate the natural world.", tones: "Neutral", hues: "Olive, Green", slides: [] },
  "Fern": { tagline: "A Natural Fern Green for Biophilic Interiors", longDesc: "Fern is the deep, natural green of unfurling fern fronds in dappled forest light — rich, organic, and full of quiet life. It brings a genuine connection to the natural world into the home, working beautifully in rooms that celebrate plants, natural materials, and biophilic design.", tones: "Neutral", hues: "Green, Olive", slides: [] },
  "Emerald": { tagline: "A Vivid Deep Emerald for Luxurious Spaces", longDesc: "Emerald is as rich and precious as the gemstone it's named for — a deep, vivid green with genuine jewel-like intensity. In a room, it creates an immediate sense of luxury and drama, transforming walls into something truly extraordinary. A statement colour for those who embrace colour with confidence.", tones: "Cool", hues: "Green, Teal", slides: [] },
  "Balm": { tagline: "A Soothing Light Mint for Calm, Healing Spaces", longDesc: "Balm is as gentle and restorative as its name suggests — a soothing, light mint green with the freshness of cool morning air. Its soft, healing quality makes it the perfect choice for bathrooms, bedrooms, and any space where the goal is to calm the mind and refresh the spirit.", tones: "Cool", hues: "Mint, Green", slides: [] },
  "Kyadondo": { tagline: "A Dark Earthy Olive Rooted in East African Soil", longDesc: "Kyadondo is a deep, dark earthy olive — a colour rooted in the rich soils and dense vegetation of East Africa. Complex and deeply grounding, it brings an authentic sense of place and natural depth to interiors, pairing beautifully with warm timber, leather, and natural stone.", tones: "Warm", hues: "Olive, Green, Brown", slides: [] },
  "Victoria": { tagline: "A Rich Mid Forest Green for Stately Interiors", longDesc: "Victoria is a rich, mid-toned forest green — classic, stately, and enduring. With its deep verdant character, it creates rooms that feel both grand and grounded, evoking the timeless elegance of a well-appointed country house library or the lush banks of a great lake.", tones: "Cool", hues: "Green, Forest", slides: [] },
  "Kinder Green": { tagline: "A Bright Fresh Grass Green Full of Life", longDesc: "Kinder Green is the vivid, joyful green of freshly cut grass — bright, clean, and brimming with life. Its cheerful, saturated character makes it a wonderful choice for children's rooms, outdoor-facing spaces, and any interior where you want the energy of the natural world to come alive.", tones: "Cool", hues: "Green, Lime", slides: [] },
  "Mint": { tagline: "A Fresh Cool Mint for Light, Airy Interiors", longDesc: "Mint is clean, cool, and immediately refreshing — the colour of fresh mint leaves in a glass of cold water. Its light, uplifting character makes rooms feel instantly brighter and more alive, bringing a clean, spa-like freshness to bathrooms, kitchens, and contemporary living spaces.", tones: "Cool", hues: "Mint, Green", slides: [] },
  "Natural Echo": { tagline: "An Earthy Sage Green Echoing the Natural World", longDesc: "Natural Echo is a warm, earthy sage green that softly echoes the colours of the natural world — dried herbs, sun-bleached grasses, and ancient olive trees. Its muted, organic character creates a deeply calming and timeless atmosphere in any room it inhabits.", tones: "Neutral", hues: "Sage, Olive", slides: [] },
  "Black Forest": { tagline: "A Deepest Dark Green for Dramatic, Moody Rooms", longDesc: "Black Forest is the deepest, most intense green in our collection — an almost-black forest green that creates spaces of extraordinary drama and depth. Used on walls, it transforms rooms into intimate, enveloping environments where every other element takes on a jewel-like intensity.", tones: "Cool", hues: "Green, Black", slides: [] },
  "Pale Fern": { tagline: "A Delicate Pale Fern Green for Restful Rooms", longDesc: "Pale Fern is a delicate, whispery fern green — light enough to be almost neutral, yet carrying enough green warmth to feel alive and gently botanical. It creates a sense of calm and natural ease in bedrooms and living rooms, like sleeping beneath the canopy of a forest.", tones: "Cool", hues: "Green, White", slides: [] },
  "Olive Green": { tagline: "A Classic Olive Green for Timeless, Earthy Rooms", longDesc: "Olive Green is a perennial classic — a deeply versatile, warm olive that has stood the test of time in interior design. Its complex, earthy character works effortlessly in both traditional and contemporary settings, grounding spaces with an organic warmth that never goes out of style.", tones: "Warm", hues: "Olive, Green", slides: [] },
  "Havana": { tagline: "A Deep Jungle Green with Tropical Soulfulness", longDesc: "Havana is a deep, moody jungle green — rich, soulful, and full of tropical character. Like the lush vegetation of a Cuban garden, it brings a sense of abundance and romance to interiors, creating spaces that feel both exotic and deeply intimate. A masterful choice for feature walls and dramatic rooms.", tones: "Cool", hues: "Green, Black", slides: [] },

  // ── BLUES ──
  "Regalia": { tagline: "A Classic Periwinkle Blue for Elegant Rooms", longDesc: "Regalia is a classic periwinkle blue — a beautifully balanced mid-blue with gentle violet undertones that give it a distinctive elegance. Neither too cool nor too warm, it brings a sense of refined beauty and timeless style to bedrooms, living rooms, and any space where colour and sophistication meet.", tones: "Cool", hues: "Blue, Violet", slides: [] },
  "Denim": { tagline: "A Deep Dark Denim Blue for Bold Interiors", longDesc: "Denim is a deep, saturated dark blue with the familiar comfort and confidence of the fabric it's named for. Rich and grounding, it creates rooms of genuine depth and character — a bold choice that rewards those willing to commit to it with a space of exceptional atmosphere and style.", tones: "Cool", hues: "Blue, Indigo", slides: [] },
  "Cool Blue": { tagline: "A Crisp Light Sky Blue for Calm, Open Rooms", longDesc: "Cool Blue is the colour of a perfect, cloudless sky on a clear East African morning — light, crisp, and endlessly uplifting. Its clean, uncomplicated freshness makes rooms feel open and free, bringing the calm expansiveness of the open sky inside any room.", tones: "Cool", hues: "Blue, Sky", slides: [] },
  "Royal Blue": { tagline: "A Classic Deep Royal Blue for Regal Interiors", longDesc: "Royal Blue is a deep, saturated classic blue with undeniable authority and presence. True to its name, it brings a regal, stately character to any interior — bold and confident without crossing into the darkness of navy, it commands attention while remaining effortlessly sophisticated.", tones: "Cool", hues: "Blue, Indigo", slides: [] },
  "Light Alpha": { tagline: "A Soft Powder Blue for Gentle, Calming Rooms", longDesc: "Light Alpha is a beautifully soft powder blue — gentle, calming, and full of quiet sophistication. Its barely-there blue delicacy creates an air of peaceful tranquillity in bedrooms and bathrooms, evoking pale morning skies and the calming stillness of a misty lake at dawn.", tones: "Cool", hues: "Blue, White", slides: [] },
  "Pepsi Blue": { tagline: "A Strong Bold Medium Blue for Confident Rooms", longDesc: "Pepsi Blue is a strong, mid-toned blue with a clean, energetic boldness that commands attention without going all the way to navy. Vibrant and self-assured, it brings a sense of clarity and confidence to interiors — a perfect choice for home offices, studies, and feature walls that mean business.", tones: "Cool", hues: "Blue, Cobalt", slides: [] },
  "Blue Haze": { tagline: "A Hazy Blue-Grey for Atmospheric, Moody Rooms", longDesc: "Blue Haze sits in the beautiful space between blue and grey — a softly atmospheric shade that shifts and deepens throughout the day as the light changes. Like the haze over distant hills, it creates rooms with a gentle, mysterious depth that is both calming and quietly captivating.", tones: "Cool", hues: "Blue, Grey", slides: [] },
  "Regatta": { tagline: "A Deep Classic Navy for Refined, Timeless Rooms", longDesc: "Regatta is a deep, classic navy blue with all the authority and timelessness of a great ocean-going vessel. Rich and deeply sophisticated, it creates rooms of genuine gravitas and elegance — a colour that has stood the test of time in interior design for very good reason.", tones: "Cool", hues: "Navy, Blue", slides: [] },
  "Nile Blue": { tagline: "A Soft Nile River Blue for Serene Interiors", longDesc: "Nile Blue is the colour of the great river at its most tranquil — a soft, hazy blue with warm grey undertones that evoke the ancient, timeless beauty of East Africa's greatest waterway. Serene and deeply calming, it brings a sense of history, peace, and natural grandeur to any interior.", tones: "Cool", hues: "Blue, Grey", slides: [] },
  "Navy": { tagline: "A Classic Deep Navy for Sophisticated Spaces", longDesc: "Navy is the deepest, most sophisticated blue in our collection — a timeless classic with enduring elegance. In any room, it creates a sense of depth, authority, and refined taste that few other colours can match. Used boldly on all four walls or subtly as an accent, navy never fails to impress.", tones: "Cool", hues: "Navy, Blue, Black", slides: [] },
  "Signal Blue": { tagline: "A Bold Statement Blue for Dramatic Feature Walls", longDesc: "Signal Blue is a bold, deeply saturated blue with the unmistakable clarity and confidence of a signal fire. Vivid and intense, it makes an immediate and powerful statement — a colour for those who see walls as canvases for genuine, dramatic self-expression.", tones: "Cool", hues: "Blue, Cobalt", slides: [] },
  "Duck Egg": { tagline: "A Pale Duck Egg Blue-Green for Soft, Fresh Rooms", longDesc: "Duck Egg is one of the most beloved interior colours of all time — a pale, soft blue-green with the quiet, natural beauty of a found egg in a woodland nest. Its gentle teal-blue character creates rooms of effortless charm and natural freshness, perfect for bedrooms and kitchens.", tones: "Cool", hues: "Blue, Green, Teal", slides: [] },
  "Turquoise": { tagline: "A Vivid Tropical Turquoise Full of Energy", longDesc: "Turquoise is the colour of tropical waters at their most brilliant — vivid, saturated, and bursting with the energy of the ocean. Bold and joyful, it brings an unmistakable sense of tropical vitality to any interior, working beautifully as a feature wall colour or in bright, creative spaces.", tones: "Cool", hues: "Turquoise, Blue, Green", slides: [] },
  "Mermaid": { tagline: "A Mystical Deep Teal for Enchanting, Dramatic Rooms", longDesc: "Mermaid is a deep, mysterious teal with the dark, enchanting quality of deep ocean water. Rich and jewel-like, it creates rooms of extraordinary atmosphere — spaces that feel like they hold secrets, where every surface seems to glow with a deep, luminous depth that is utterly captivating.", tones: "Cool", hues: "Teal, Blue, Green", slides: [] },
  "Memory": { tagline: "A Pale Sea-Foam Teal for Nostalgic, Gentle Rooms", longDesc: "Memory is a soft, pale sea-foam teal — the colour of shallow tropical waters over white sand. Delicate and nostalgic, it carries an air of gentle reminiscence and faraway places, creating rooms that feel simultaneously calm and quietly adventurous. A beautiful choice for bedrooms and bathrooms.", tones: "Cool", hues: "Teal, Green, Blue", slides: [] },
  "Pigeon": { tagline: "A Cool Blue-Grey for Calm, Contemporary Rooms", longDesc: "Pigeon is a sophisticated cool blue-grey — the colour of feathers in diffused winter light. Calm, collected, and quietly beautiful, it brings a contemporary elegance to interiors that works effortlessly with both warm and cool accents. An enduring designer favourite for its versatile, light-reflecting quality.", tones: "Cool", hues: "Grey, Blue", slides: [] },

  // ── GREYS ──
  "Rock": { tagline: "A Subtle Light Grey for Clean, Modern Interiors", longDesc: "Rock is a clean, light grey with just enough warmth to avoid feeling clinical. Like smooth pale stone, it creates a sense of quiet solidity and calm in modern interiors — a reliable, beautiful neutral that provides the perfect backdrop for almost any decorating style or colour scheme.", tones: "Neutral", hues: "Grey", slides: [] },
  "Screed": { tagline: "A Bold Dark Charcoal for Dramatic, Moody Rooms", longDesc: "Screed is a deep, intense dark charcoal — the colour of freshly laid concrete at its most beautiful. Used boldly on walls, it creates spaces of extraordinary drama and sophistication, making every other element in the room glow with depth and contrast. A truly transformative colour for the courageous.", tones: "Neutral", hues: "Charcoal, Grey", slides: [] },
  "Caltex Grey": { tagline: "A True Mid-Tone Grey for Versatile Interiors", longDesc: "Caltex Grey is a perfectly balanced mid-tone grey — neither too light nor too dark, neither too warm nor too cool. Its clean, uncomplicated neutrality makes it one of the most versatile greys in our collection, providing a sophisticated, modern backdrop that works beautifully with almost any palette.", tones: "Neutral", hues: "Grey", slides: [] },
  "Ash": { tagline: "A Soft Cool Ash Grey for Refined, Calm Rooms", longDesc: "Ash is a cool, soft grey with the clean, quiet beauty of wood ash settled after a fire. Light enough to keep rooms feeling bright and airy, yet with enough depth to avoid feeling too pale, it creates an atmosphere of refined restraint and contemporary calm.", tones: "Cool", hues: "Grey, White", slides: [] },
  "1C75 Grey": { tagline: "A Clean Standard Grey for Timeless Spaces", longDesc: "1C75 Grey is a clean, balanced standard grey — a reliable, timeless neutral that serves as the backbone of any sophisticated colour scheme. Free from strong undertones, its pure grey clarity makes it the ideal companion for bolder accent colours or as a complete room colour in understated contemporary spaces.", tones: "Neutral", hues: "Grey", slides: [] },
  "Titan Grey": { tagline: "A Solid Mid-Tone Grey with Quiet Authority", longDesc: "Titan Grey is a solid, dependable mid-tone grey with quiet authority and strength. Named for the ancient giants, it has a presence and stability that grounds any interior it appears in — a bold choice that creates rooms of genuine weight and contemporary sophistication.", tones: "Neutral", hues: "Grey", slides: [] },
  "Ind. Grey": { tagline: "An Industrial Blue-Grey for Urban, Modern Rooms", longDesc: "Industrial Grey is a cool, blue-toned grey with the raw, urban character of a contemporary industrial space. Its blue undertones give it an edgy, metropolitan quality that works brilliantly in loft apartments, home offices, and any interior that embraces modern, architectural design.", tones: "Cool", hues: "Grey, Blue", slides: [] },
  "Squirrel Grey": { tagline: "A Natural Warm Grey for Inviting, Cosy Rooms", longDesc: "Squirrel Grey is a warm, natural grey with earthy brown undertones inspired by the soft fur of the woodland squirrel. Unlike cooler greys, its warmth creates rooms that feel genuinely inviting and lived-in — a beautifully approachable grey for those who find pure grey too cold.", tones: "Warm", hues: "Grey, Brown", slides: [] },
  "Merlin Grey": { tagline: "A True Balanced Grey for Perfect Neutrality", longDesc: "Merlin Grey is a perfectly balanced, true grey — without the warmth of brown undertones or the coolness of blue. Like the legendary wizard, it has a certain quiet magic — an ability to harmonise with any colour and any style, making it one of the most useful and enduring greys in our collection.", tones: "Neutral", hues: "Grey", slides: [] },
  "Philips Grey": { tagline: "A Classic Light Grey for Bright, Airy Rooms", longDesc: "Philips Grey is a classic, clean light grey — bright and airy without being white. Its soft, silver-grey tone creates rooms that feel fresh, modern, and effortlessly elegant. A contemporary staple that works beautifully in open-plan living spaces, kitchens, and any room where a clean, sophisticated look is desired.", tones: "Cool", hues: "Grey, Silver", slides: [] },
  "Evening Grey": { tagline: "A Moody Dark Grey for Atmospheric, Intimate Rooms", longDesc: "Evening Grey captures the deep, atmospheric grey of dusk — that particular moment when day fades and the world takes on a more mysterious, intimate quality. Rich with depth and mood, it creates spaces of genuine character and atmosphere, perfect for rooms designed for relaxation and contemplation.", tones: "Cool", hues: "Grey, Blue", slides: [] },
  "Granite": { tagline: "A Solid Dark Granite Grey for Powerful Interiors", longDesc: "Granite is as solid and enduring as the stone itself — a deep, dark grey with natural mineral depth and an almost tangible sense of permanence and strength. Used on feature walls or throughout a room, it creates spaces of extraordinary boldness and architectural presence.", tones: "Cool", hues: "Grey, Black", slides: [] },
  "Silver Grey": { tagline: "A Cool Light Silver Grey for Sleek Modern Rooms", longDesc: "Silver Grey is clean, cool, and quietly luminous — the colour of polished pewter in soft light. Its cool silver undertones give it a sleek, contemporary quality that works beautifully in modern kitchens, bathrooms, and any interior that values precision, elegance, and a light-reflecting finish.", tones: "Cool", hues: "Grey, Silver", slides: [] },
  "Lizard Grey": { tagline: "A Warm Olive-Grey for Earthy, Organic Rooms", longDesc: "Lizard Grey is a warm, olive-tinged grey — the colour of a sun-baked lizard on a hot rock. Its unusual warm-grey character brings an earthy, organic quality to interiors that is both unexpected and deeply appealing, working particularly well in spaces that celebrate natural, tactile materials.", tones: "Warm", hues: "Grey, Olive", slides: [] },
  "Raven": { tagline: "A Dark Blue-Charcoal for Dramatic, Enveloping Rooms", longDesc: "Raven is the darkest, most dramatic grey in our collection — a deep blue-charcoal with the intense, enveloping quality of a moonless night. For rooms where drama and atmosphere are the goal, Raven delivers with uncompromising depth, creating spaces that are genuinely extraordinary.", tones: "Cool", hues: "Charcoal, Blue, Grey", slides: [] },
  "Nabbingo Grey": { tagline: "A Warm Mid-Tone Grey for Welcoming Modern Rooms", longDesc: "Nabbingo Grey is a warm, mid-tone grey with earthy beige undertones that make it immediately welcoming rather than austere. Unlike cooler greys, its warmth creates rooms that feel both sophisticated and approachable — a perfect contemporary neutral for open-plan living rooms and family spaces.", tones: "Warm", hues: "Grey, Beige", slides: [] },

  // ── METALLICS ──
  "Copper": { tagline: "A Rich Metallic Copper for Warm, Dramatic Rooms", longDesc: "Copper is warm, rich, and irresistibly beautiful — a deep, burnished metallic tone that glows with the warmth of polished copper in firelight. In a room, it creates an immediate sense of luxury and warmth, transforming walls into something that feels truly precious and alive with colour.", tones: "Warm", hues: "Copper, Orange, Brown", slides: [] },
  "Mahogany": { tagline: "A Classic Dark Mahogany for Timeless, Regal Rooms", longDesc: "Mahogany is a classic, deep reddish-brown — the colour of the finest polished furniture wood. Rich with heritage and gravitas, it creates rooms of genuine regal character, evoking the atmosphere of a grand dining room or a well-appointed library where craftsmanship and quality are celebrated.", tones: "Warm", hues: "Brown, Red", slides: [] },
  "Burgundy": { tagline: "A Deep Rich Wine Red for Luxurious, Intimate Rooms", longDesc: "Burgundy is the colour of a full-bodied red wine held up to candlelight — deep, rich, and deeply luxurious. It creates rooms of extraordinary intimacy and warmth, enveloping guests in a sense of abundant pleasure and sophisticated indulgence. A magnificent choice for dining rooms and intimate living spaces.", tones: "Warm", hues: "Red, Purple, Wine", slides: [] },
  "Plum": { tagline: "A Dark Rich Plum for Deeply Dramatic Rooms", longDesc: "Plum is a deep, dark purple-red with the richness of a perfectly ripened fruit. Lush and opulent, it creates rooms of genuine drama and depth — spaces that feel both exotic and deeply sophisticated. Used on a feature wall or throughout a room, it makes an unforgettable impression.", tones: "Cool", hues: "Purple, Red", slides: [] },
  "Violet": { tagline: "A Rich Deep Purple for Regal, Expressive Rooms", longDesc: "Violet is a rich, deep purple with genuine intensity and regal character. Throughout history, purple has been the colour of power, creativity, and luxury — and in a room, Violet delivers on all of these promises, creating spaces of dramatic beauty and genuine artistic expression.", tones: "Cool", hues: "Purple, Blue", slides: [] },
  "Hot Lilac": { tagline: "A Bold Warm Purple for Vibrant, Creative Rooms", longDesc: "Hot Lilac is a bold, warm purple that buzzes with energy and creative spirit. Unlike the passive delicacy of pale lilac, this vivid, saturated purple demands attention and celebrates self-expression — perfect for creative studios, home offices, and any space where individuality and vitality are valued.", tones: "Warm", hues: "Purple, Magenta", slides: [] },
  "Red Oxide": { tagline: "A Deep Iron Red Oxide with Industrial Character", longDesc: "Red Oxide is the colour of ancient iron-rich earth and the protective primer of industrial buildings — a deep, authentic red-brown with genuine raw character. In an interior context, it brings a bold, industrial-artisan quality that works brilliantly in loft spaces, creative environments, and dramatic feature walls.", tones: "Warm", hues: "Red, Brown", slides: [] },
  "Signal": { tagline: "A Bold Signal Red for Powerful, Confident Rooms", longDesc: "Signal is a pure, uncompromising red — the clearest, most direct red in our collection. Like a signal fire or a warning light, it is impossible to ignore and immediately commanding. For those who use colour as a declaration of personality and confidence, Signal is the definitive choice.", tones: "Warm", hues: "Red", slides: [] },
  "Cranberry": { tagline: "A Deep Dark Cranberry for Rich, Refined Rooms", longDesc: "Cranberry is a deep, jewel-like red-purple — the colour of freshly pressed cranberry juice held to the light. Rich and intensely beautiful, it creates rooms of genuine refinement and depth, bringing a sense of old-world luxury and complexity that rewards rooms designed for intimate gathering and good conversation.", tones: "Cool", hues: "Red, Purple", slides: [] },
  "Brick Red": { tagline: "A Warm Classic Brick Red for Grounded, Earthy Rooms", longDesc: "Brick Red is the warmth of sun-baked clay and handmade bricks — a grounded, earthy red with a beautiful authenticity that connects interiors to the oldest building tradition of all. Warm and robust, it brings genuine character and a sense of solidity to living rooms, kitchens, and dining spaces.", tones: "Warm", hues: "Red, Brown", slides: [] },
  "Tandoori": { tagline: "A Rich Deep Brick Red with Spiced Warmth", longDesc: "Tandoori is a deep, richly spiced brick red — the colour of a traditional clay oven glowing with heat. With its earthy, complex red-brown warmth, it brings a bold and appetite-stimulating character to kitchens and dining rooms, evoking the warmth of good food and gathered company.", tones: "Warm", hues: "Red, Brown, Orange", slides: [] },
  "Rusty Red": { tagline: "An Aged Rusty Red with Weathered Character", longDesc: "Rusty Red is the colour of aged, oxidised metal — a warm, complex red with orange-brown undertones that give it a beautifully weathered, authentic character. In an interior, it brings a sense of history and craft, working brilliantly in industrial-inspired spaces and rooms that celebrate the beauty of imperfection.", tones: "Warm", hues: "Red, Orange, Brown", slides: [] },
  "Sunset": { tagline: "A Warm Orange-Red Glow for Vibrant, Energised Rooms", longDesc: "Sunset is the colour of East Africa's most magnificent skies — that burning moment when the sun drops below the horizon and the sky ignites in a blaze of warm orange-red. In a room, it brings all of that fire and beauty inside, creating spaces of extraordinary warmth and visual drama.", tones: "Warm", hues: "Orange, Red", slides: [] },
  "Leather": { tagline: "A Rich Warm Leather Brown for Sophisticated Rooms", longDesc: "Leather is a rich, warm brown with the deep, burnished quality of well-crafted leather — a colour that speaks of quality, heritage, and enduring style. In a room, it creates a sense of substance and sophistication, working beautifully with dark metals, rich textiles, and natural stone.", tones: "Warm", hues: "Brown, Orange", slides: [] },
};

const PaintBlob = ({ color, v = 0 }) => {
  const p = ["M45 5C60 2 80 8 90 20C100 32 98 52 90 65C82 78 65 88 48 90C31 92 12 82 5 68C-2 54 2 35 10 22C18 9 30 8 45 5Z","M50 3C65 1 82 10 92 25C102 40 96 58 85 72C74 86 55 92 40 88C25 84 10 72 4 56C-2 40 5 22 15 12C25 2 35 5 50 3Z","M42 4C58 0 78 6 88 18C98 30 100 50 92 66C84 82 68 92 50 92C32 92 14 80 6 64C-2 48 0 28 8 16C16 4 26 8 42 4Z"];
  return (<svg viewBox="0 0 100 95" style={{ width: "100%", height: "100%" }}><path d={p[v % 3]} fill={color} /></svg>);
};

// ═══════ PAINT CATEGORY PAGE ═══════
const PaintCategoryPage = ({ category, title, subtitle, onOpenProduct, productHrefFn, homeHref, nav }) => {
  const products = PRODUCTS.filter(p => p.category === category);
  const fmtP = p => `UGX ${p.toLocaleString()}`;
  const gradient = category === "interior"
    ? `linear-gradient(135deg, ${B.coral}ee, ${B.coralDk})`
    : `linear-gradient(135deg, ${B.teal}ee, ${B.tealDk})`;
  return (
    <div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px" }}>
        <a href={homeHref} onClick={e => { e.preventDefault(); nav("home"); }} style={{ textDecoration: "none", color: B.coral, fontSize: 13, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}><ArrL /> Home</a>
      </div>
      <div style={{ background: gradient, padding: "60px 24px", color: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, opacity: .8, marginBottom: 12, fontWeight: 600 }}>Professionals — Products</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 600, marginBottom: 16 }}>{title}</h1>
        <p style={{ fontSize: 16, opacity: .9, maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>{subtitle}</p>
      </div>
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
        <p style={{ fontSize: 15, color: "#666", marginBottom: 32 }}>{products.length} products available</p>
        <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {products.map(p => (
            <a key={p.id} href={productHrefFn(p)} onClick={e => { e.preventDefault(); onOpenProduct(p); }}
              style={{ textDecoration: "none", color: "inherit", display: "block", background: "#fff", borderRadius: 12, border: "1px solid #eee", overflow: "hidden", cursor: "pointer", transition: "transform .3s, box-shadow .3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              <div style={{ background: B.off, padding: "20px 16px", display: "flex", alignItems: "center", justifyContent: "center", height: 200, position: "relative" }}>
                <img src={p.img} alt={p.name} style={{ maxHeight: 170, maxWidth: "80%", objectFit: "contain", filter: "drop-shadow(0 6px 12px rgba(0,0,0,.12))" }} />
                {p.tag && <span style={{ position: "absolute", top: 10, left: 10, background: p.tag === "Best Seller" ? B.coral : p.tag === "New" ? B.teal : p.tag === "Specialist" ? B.gold : "#5C2D6D", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>{p.tag}</span>}
                {p.grade && <span style={{ position: "absolute", top: 10, right: 10, background: "#fff", border: `2px solid ${B.coral}`, color: B.coral, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>G{p.grade}</span>}
              </div>
              <div style={{ padding: "16px 18px 18px" }}>
                <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{p.name}</h4>
                <p style={{ fontSize: 12, color: "#777", lineHeight: 1.4, marginBottom: 10, minHeight: 34 }}>{p.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: B.coral }}>From {fmtP(p.sizes[0].price)}</span>
                  <span style={{ fontSize: 12, color: "#999" }}>{p.sizes.map(s => s.size).join(" • ")}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

// ═══════ PRODUCT DETAIL PAGE ═══════
const ProductDetailPage = ({ product, onBack, onAddToCart, onOpenProduct, cart }) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [addedAnim, setAddedAnim] = useState(false);
  const sz = product.sizes[selectedSize];
  const total = sz.price * qty;
  const fmtPrice = (p) => `UGX ${p.toLocaleString()}`;
  const colourSectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColourName, setSelectedColourName] = useState(null);
  const [colourSizeIdx, setColourSizeIdx] = useState(0);
  const [colourQty, setColourQty] = useState(1);
  const [colourAddedAnim, setColourAddedAnim] = useState(false);
  const carouselRef = useRef(null);
  const scrollCarousel = (dir) => { if (carouselRef.current) carouselRef.current.scrollBy({ left: dir * 280, behavior: "smooth" }); };
  const hexRgba = (hex, a) => { const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16); return `rgba(${r},${g},${b},${a})`; };

  const handleAdd = () => {
    const item = { product, size: sz.size, price: sz.price, qty };
    if (selectedColourName) item.colour = selectedColourName;
    onAddToCart(item);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 2000);
  };

  const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
  if (related.length < 3) {
    const others = PRODUCTS.filter(p => p.id !== product.id && !related.find(r => r.id === p.id));
    while (related.length < 3 && others.length) related.push(others.shift());
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#999" }}>
          <span onClick={onBack} style={{ color: B.coral, cursor: "pointer" }}>Home</span>
          <span>/</span><span>Paints</span><span>/</span>
          <span style={{ textTransform: "capitalize" }}>{product.category}</span><span>/</span>
          <span style={{ color: "#333" }}>{product.name}</span>
        </div>
      </div>

      {/* Main Product Area */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px 60px" }}>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left: Image */}
          <div>
            <div style={{ background: B.off, borderRadius: 16, padding: "40px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 480, position: "relative" }}>
              <img src={product.img} alt={product.name} style={{ maxHeight: 400, maxWidth: "85%", objectFit: "contain", filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.15))" }} />
              {product.tag && <span style={{ position: "absolute", top: 20, left: 20, background: product.tag === "Best Seller" ? B.coral : product.tag === "New" ? B.teal : product.tag === "Specialist" ? B.gold : "#5C2D6D", color: "#fff", fontSize: 12, fontWeight: 700, padding: "6px 16px", borderRadius: 24 }}>{product.tag}</span>}
              {product.grade && <span style={{ position: "absolute", top: 20, right: 20, background: "#fff", border: `2px solid ${B.coral}`, color: B.coral, fontSize: 12, fontWeight: 700, padding: "5px 14px", borderRadius: 24 }}>Grade {product.grade}</span>}
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2, color: B.coral, fontWeight: 600, marginBottom: 8 }}>{product.category} paint</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, marginBottom: 12, lineHeight: 1.2 }}>{product.name}</h1>
            
            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(s => <StarIcon key={s} filled={s <= Math.floor(product.rating)} />)}</div>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{product.rating}</span>
              <span style={{ fontSize: 13, color: "#999" }}>({product.reviews} reviews)</span>
            </div>

            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", marginBottom: 28 }}>{product.desc}</p>

            {/* Size Selection */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "#333", display: "block", marginBottom: 12 }}>Select Size</label>
              <div style={{ display: "flex", gap: 12 }}>
                {product.sizes.map((s, i) => (
                  <button key={i} onClick={() => { setSelectedSize(i); setQty(1); }} style={{
                    flex: 1, padding: "16px 20px", borderRadius: 10, border: `2px solid ${selectedSize === i ? B.coral : "#e0e0e0"}`,
                    background: selectedSize === i ? `${B.coral}08` : "#fff", cursor: "pointer", transition: "all 0.2s", textAlign: "left", position: "relative", fontFamily: "'Outfit', sans-serif"
                  }}>
                    {selectedSize === i && <div style={{ position: "absolute", top: 8, right: 8, width: 22, height: 22, borderRadius: "50%", background: B.coral, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><CheckIcon /></div>}
                    <div style={{ fontSize: 20, fontWeight: 700, color: selectedSize === i ? B.coral : "#333", marginBottom: 4 }}>{s.size}</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#333" }}>{fmtPrice(s.price)}</div>
                    <div style={{ fontSize: 12, color: "#999", marginTop: 4 }}>Coverage: {s.coverage}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "#333", display: "block", marginBottom: 12 }}>Quantity</label>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", border: "2px solid #e0e0e0", borderRadius: 10, overflow: "hidden" }}>
                  <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 48, height: 48, border: "none", background: qty <= 1 ? "#f5f5f5" : "#fff", cursor: qty <= 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: qty <= 1 ? "#ccc" : "#333" }}><MinusIcon /></button>
                  <div style={{ width: 64, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 600, borderLeft: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0" }}>{qty}</div>
                  <button onClick={() => setQty(Math.min(50, qty + 1))} style={{ width: 48, height: 48, border: "none", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><PlusIcon /></button>
                </div>
                <div style={{ fontSize: 13, color: "#999" }}>{qty} × {sz.size} = {fmtPrice(total)}</div>
              </div>
            </div>

            {/* Total & Add to Cart */}
            <div style={{ background: B.off, borderRadius: 12, padding: "20px 24px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 13, color: "#999", marginBottom: 2 }}>Total</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: B.black }}>{fmtPrice(total)}</div>
              </div>
              {total >= 200000 && <div style={{ display: "flex", alignItems: "center", gap: 6, color: B.teal, fontSize: 13, fontWeight: 600 }}><TruckIcon /> Free delivery</div>}
            </div>

            {/* Selected colour indicator */}
            {selectedColourName && (() => {
              const colData = trendingColours.find(c => c.name === selectedColourName);
              return (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: colData ? hexRgba(colData.color, 0.08) : B.off, borderRadius: 10, border: `1.5px solid ${colData ? hexRgba(colData.color, 0.3) : "#e0e0e0"}`, marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {colData && <div style={{ width: 28, height: 28, borderRadius: "50%", background: colData.color, border: "2px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.15)", flexShrink: 0 }} />}
                    <div>
                      <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: 1, marginBottom: 1 }}>Colour</div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{selectedColourName}</div>
                    </div>
                  </div>
                  <button onClick={() => setSelectedColourName(null)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#999", padding: 4 }} title="Remove colour">×</button>
                </div>
              );
            })()}

            <button onClick={handleAdd} style={{
              width: "100%", padding: "16px 32px", borderRadius: 10, border: "none", background: addedAnim ? B.teal : B.coral, color: "#fff",
              fontSize: 16, fontWeight: 600, cursor: "pointer", transition: "all 0.3s", fontFamily: "'Outfit', sans-serif",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10, letterSpacing: 0.5, textTransform: "uppercase"
            }}>
              {addedAnim ? <><CheckIcon /> Added to Cart!</> : <><CartIcon /> Add to Cart</>}
            </button>

            <button
              onClick={() => colourSectionRef.current?.scrollIntoView({ behavior: "smooth" })}
              style={{ marginTop: 12, width: "100%", padding: "14px 24px", borderRadius: 10, border: `2px solid ${B.coral}`, background: "transparent", color: B.coral, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, letterSpacing: 0.5, textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = B.coral; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = B.coral; }}
            >
              <PaletteIcon /> {selectedColourName ? "Change Colour" : "Select Colour"}
            </button>

            {/* Specs */}
            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { label: "Finish", value: product.finish },
                { label: "Dry Time", value: product.dryTime },
                { label: "Coats", value: product.coats },
                { label: "Surface", value: product.surface },
                { label: "Colours", value: product.colours },
                { label: "Coverage", value: sz.coverage },
              ].map((spec, i) => (
                <div key={i} style={{ padding: "12px 16px", background: B.off, borderRadius: 8 }}>
                  <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{spec.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{spec.value}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Colour & Size Selection — immediately visible */}
        <div ref={colourSectionRef} style={{ marginTop: 48, paddingTop: 36, borderTop: "1px solid #e8e4de" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 8 }}>Select Colour & Size</h2>
          <p style={{ fontSize: 15, color: "#777", marginBottom: 32 }}>Choose from our full range of colours available for this paint.</p>

          {/* Category Carousel */}
          <div style={{ position: "relative", paddingLeft: 28, paddingRight: 28 }}>
            <button onClick={() => scrollCarousel(-1)} style={{ position: "absolute", left: 0, top: 55, zIndex: 2, width: 40, height: 40, borderRadius: "50%", border: "1px solid #ddd", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><ArrL /></button>
            <div ref={carouselRef} style={{ display: "flex", gap: 20, overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none", paddingBottom: 4 }}>
              {Object.keys(COLOUR_CATEGORIES).map(catName => {
                const cat = COLOUR_CATEGORIES[catName];
                const isSelected = selectedCategory === catName;
                return (
                  <div key={catName} style={{ minWidth: 180, flexShrink: 0 }}>
                    <div
                      onClick={() => setSelectedCategory(isSelected ? null : catName)}
                      style={{ height: 100, background: cat.repColor, borderRadius: 12, border: isSelected ? "2px solid #1a1a1a" : "2px solid transparent", cursor: "pointer", transition: "all 0.2s", marginBottom: 10 }}
                    />
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{catName}</div>
                    <button
                      onClick={() => setSelectedCategory(isSelected ? null : catName)}
                      style={{ display: "flex", alignItems: "center", gap: 6, background: isSelected ? "#1a1a1a" : "#fff", color: isSelected ? "#fff" : "#333", border: "1px solid #ddd", borderRadius: 6, padding: "6px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", fontFamily: "'Outfit', sans-serif" }}
                    >
                      {isSelected ? `Hide ${cat.colors.length} shades` : `See ${cat.colors.length} shades`}
                      &nbsp;{isSelected ? "↓" : "→"}
                    </button>
                  </div>
                );
              })}
            </div>
            <button onClick={() => scrollCarousel(1)} style={{ position: "absolute", right: 0, top: 55, zIndex: 2, width: 40, height: 40, borderRadius: "50%", border: "1px solid #ddd", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><Arr /></button>
          </div>

          {/* Expanded Colour Grid */}
          {selectedCategory && (() => {
            const cat = COLOUR_CATEGORIES[selectedCategory];
            const colours = cat.colors.map(n => trendingColours.find(c => c.name === n)).filter(Boolean);
            const isColourSelected = (name) => selectedColourName === name;
            const colourSz = product.sizes[colourSizeIdx];
            const colourTotal = colourSz.price * colourQty;
            const handleColourSelect = (name) => {
              if (selectedColourName === name) { setSelectedColourName(null); }
              else { setSelectedColourName(name); setColourSizeIdx(0); setColourQty(1); setColourAddedAnim(false); }
            };
            const handleColourAdd = () => {
              onAddToCart({ product, size: colourSz.size, price: colourSz.price, qty: colourQty, colour: selectedColourName });
              setColourAddedAnim(true);
              setTimeout(() => setColourAddedAnim(false), 2000);
            };
            return (
              <div style={{ marginTop: 48 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                  {colours.map(col => {
                    const active = isColourSelected(col.name);
                    return (
                    <div key={col.name} style={{ border: active ? `2px solid ${B.coral}` : "2px solid transparent", borderRadius: 16, padding: active ? 14 : 0, transition: "all 0.2s" }}>
                      <div onClick={() => handleColourSelect(col.name)} style={{ cursor: "pointer" }}>
                        <div style={{ background: hexRgba(col.color, 0.12), borderRadius: 12, padding: "28px 16px", display: "flex", alignItems: "center", justifyContent: "center", height: 200, marginBottom: 14, position: "relative" }}>
                          <div style={{ width: 130, height: 130, background: col.color, borderRadius: "52% 48% 56% 44% / 48% 52% 48% 52%", boxShadow: `0 10px 28px ${hexRgba(col.color, 0.5)}, inset 0 -6px 16px rgba(0,0,0,0.18), inset 0 6px 14px rgba(255,255,255,0.22)` }} />
                          {active && <div style={{ position: "absolute", top: 10, right: 10, width: 26, height: 26, borderRadius: "50%", background: B.coral, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><CheckIcon /></div>}
                        </div>
                        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3, color: active ? B.coral : "#333" }}>{col.name}</div>
                        <div style={{ fontSize: 13, color: "#999", marginBottom: 8 }}>{col.desc}</div>
                      </div>

                      {!active ? (
                        <>
                          <div style={{ fontSize: 14, marginBottom: 3 }}>From <strong>{fmtPrice(product.sizes[0].price)}</strong></div>
                          <div style={{ fontSize: 12, color: "#bbb", marginBottom: 12 }}>{product.sizes.map(s => s.size).join(" · ")}</div>
                          <button onClick={() => handleColourSelect(col.name)} style={{ display: "flex", alignItems: "center", gap: 6, border: "1px solid #ddd", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", background: "#fff", color: "#333", fontFamily: "'Outfit', sans-serif" }}>
                            Select sizes&nbsp;<Arr />
                          </button>
                        </>
                      ) : (
                        <div style={{ marginTop: 8 }}>
                          {/* Size pills */}
                          <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#999", display: "block", marginBottom: 8 }}>Size</label>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                            {product.sizes.map((s, i) => (
                              <button key={i} onClick={() => { setColourSizeIdx(i); setColourQty(1); }} style={{
                                padding: "8px 14px", borderRadius: 8, border: `2px solid ${colourSizeIdx === i ? B.coral : "#e0e0e0"}`,
                                background: colourSizeIdx === i ? `${B.coral}10` : "#fff", cursor: "pointer", fontSize: 13, fontWeight: 600,
                                color: colourSizeIdx === i ? B.coral : "#333", fontFamily: "'Outfit', sans-serif", transition: "all 0.2s"
                              }}>
                                {s.size}
                              </button>
                            ))}
                          </div>
                          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{fmtPrice(colourSz.price)} <span style={{ fontWeight: 400, fontSize: 12, color: "#999" }}>/ {colourSz.coverage}</span></div>

                          {/* Quantity */}
                          <label style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#999", display: "block", marginBottom: 8 }}>Qty</label>
                          <div style={{ display: "flex", alignItems: "center", border: "1.5px solid #e0e0e0", borderRadius: 8, overflow: "hidden", width: "fit-content", marginBottom: 14 }}>
                            <button onClick={() => setColourQty(Math.max(1, colourQty - 1))} style={{ width: 36, height: 36, border: "none", background: colourQty <= 1 ? "#f5f5f5" : "#fff", cursor: colourQty <= 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: colourQty <= 1 ? "#ccc" : "#333" }}><MinusIcon /></button>
                            <div style={{ width: 40, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 600, borderLeft: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0" }}>{colourQty}</div>
                            <button onClick={() => setColourQty(Math.min(50, colourQty + 1))} style={{ width: 36, height: 36, border: "none", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><PlusIcon /></button>
                          </div>

                          {/* Total + Add to Cart */}
                          <div style={{ fontSize: 13, color: "#777", marginBottom: 10 }}>{colourQty} × {colourSz.size} = <strong style={{ color: B.coral }}>{fmtPrice(colourTotal)}</strong></div>
                          <button onClick={handleColourAdd} style={{
                            width: "100%", padding: "12px", borderRadius: 8, border: "none",
                            background: colourAddedAnim ? B.teal : B.coral, color: "#fff",
                            fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.3s",
                            fontFamily: "'Outfit', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                          }}>
                            {colourAddedAnim ? <><CheckIcon /> Added!</> : <><CartIcon /> Add to Cart</>}
                          </button>
                        </div>
                      )}
                    </div>
                  );})}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Full Description */}
        <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid #e8e4de" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 24 }}>Product Description</h2>
          {product.longDesc.split("\n\n").map((p, i) => (<p key={i} style={{ fontSize: 15, lineHeight: 1.85, color: "#555", marginBottom: 16, maxWidth: 800 }}>{p}</p>))}
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid #e8e4de" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 24 }}>You may also like</h2>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {related.map(r => (
                <div key={r.id} onClick={() => onOpenProduct(r)}
                  style={{ background: "#fff", borderRadius: 12, border: "1px solid #eee", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"} onMouseLeave={e => e.currentTarget.style.transform = ""}>
                  <div style={{ background: B.off, padding: 20, display: "flex", alignItems: "center", justifyContent: "center", height: 180 }}>
                    <img src={r.img} alt={r.name} style={{ maxHeight: 160, maxWidth: "75%", objectFit: "contain", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }} />
                  </div>
                  <div style={{ padding: 16 }}>
                    <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{r.name}</h4>
                    <p style={{ fontSize: 13, color: "#777", marginBottom: 8 }}>{r.desc}</p>
                    <span style={{ fontSize: 15, fontWeight: 700, color: B.coral }}>From {fmtPrice(r.sizes[0].price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ═══════ BEDROOM INSPIRATION DATA ═══════
const BEDROOM_INSPIRATIONS = [
  { id: "scandinavian-sage", img: INSPO_SCANDI_SAGE, title: "Scandinavian Sage Retreat", subtitle: "Clean lines meet calming greens", style: "Scandinavian", color: "Sage Garden®", colorHex: "#90a898",
    desc: "A serene Scandinavian-inspired bedroom where muted sage green walls create a calming backdrop for natural wood furniture and soft linen textiles. The restrained palette lets the architecture breathe while the green undertones bring a gentle connection to nature.",
    tips: ["Layer different textures — linen, wool, and cotton — in a tonal palette to add depth without visual clutter.", "Keep furniture low and minimal. A simple platform bed and floating shelves maintain the airy Scandinavian aesthetic.", "Introduce warmth through natural wood accents in light oak or birch tones to balance the cool sage walls.", "Use diffused, warm-white lighting rather than overhead spots to enhance the relaxed atmosphere."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
  { id: "grand-navy", img: INSPO_GRAND_NAVY, title: "Grand Navy Suite", subtitle: "Bold elegance with rich navy tones", style: "Classic Luxury", color: "Twilight Feather®", colorHex: "#1a4a5e",
    desc: "A dramatic master bedroom anchored by deep navy walls that exude sophistication and intimacy. Gold accents and rich velvet fabrics create a luxurious contrast, while generous proportions and traditional details complete the grand aesthetic.",
    tips: ["Balance the deep navy with plenty of warm metallic accents — brass picture frames, gold drawer pulls, and a statement chandelier.", "Use lighter ceiling paint (white or pale grey) to maintain visual height against the dark walls.", "Incorporate rich fabrics like velvet curtains and silk cushions to amplify the luxury feel.", "A large statement mirror will reflect light back into the room, preventing the dark palette from feeling enclosed."],
    products: ["Premium Matt Emulsion", "Gloss Emulsion"] },
  { id: "soft-lavender", img: INSPO_SOFT_LAVENDER, title: "Soft Lavender Sanctuary", subtitle: "A gentle, peaceful nursery space", style: "Soft & Gentle", color: "Blossom Drift®", colorHex: "#c8a0b0",
    desc: "A peaceful, pastel-toned room bathed in soft lavender hues that create a tranquil nursery or guest bedroom. The gentle colour palette promotes rest and calm, while delicate decorative touches add whimsy without overwhelming the senses.",
    tips: ["Stick to a soft, muted palette — blush pinks, dusty lavenders, and warm creams work beautifully together.", "Add visual interest through subtle pattern mixing: a floral cushion, a geometric throw, a textured rug.", "Sheer curtains in white or pale lilac will filter sunlight beautifully, enhancing the dreamy atmosphere.", "Use warm-toned wood for furniture to ground the pastel palette and prevent it from feeling too cold."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
  { id: "minimalist-beige", img: INSPO_MINIMAL_BEIGE, title: "Minimalist Beige Haven", subtitle: "Monochromatic calm and clarity", style: "Minimalist", color: "Gentle Dawn®", colorHex: "#d8ccc0",
    desc: "A masterclass in monochromatic minimalism where warm beige and soft cream tones create an enveloping sense of calm. Every element is intentional — clean lines, natural materials, and a deliberate absence of clutter let the architecture and light take centre stage.",
    tips: ["Use multiple shades of beige and cream to create depth — walls, bedding, and curtains should each be a slightly different tone.", "Invest in high-quality bedding in natural fibres. In a minimal room, the bed becomes the focal point.", "Add a single organic-shaped element — a curved vase, a round mirror — to soften the clean lines.", "Keep surfaces completely clear. Storage should be hidden behind clean-fronted wardrobes and drawers."],
    products: ["Premium Matt Emulsion", "Undercoat Emulsion"] },
  { id: "midcentury-mustard", img: INSPO_MIDCENT_MUSTARD, title: "Mid-Century Mustard Pop", subtitle: "Retro warmth with a modern twist", style: "Mid-Century Modern", color: "Clay Sunset®", colorHex: "#c87856",
    desc: "A vibrant mid-century modern bedroom where warm mustard and terracotta tones bring retro energy to a contemporary space. Iconic furniture silhouettes, graphic patterns, and bold colour blocking create a room that feels both nostalgic and thoroughly modern.",
    tips: ["Use mustard or terracotta as an accent wall behind the bed, keeping the remaining walls in a complementary neutral.", "Source mid-century furniture with tapered legs and organic curves — a teak dresser, a walnut bed frame, a statement armchair.", "Introduce bold geometric patterns through cushions, a feature rug, or statement wallpaper on a single wall.", "Complement warm tones with touches of teal, olive green, or burnt orange for an authentic mid-century palette."],
    products: ["Premium Matt Emulsion", "Gloss Emulsion", "Vinyl Silk Makula"] },
];

// ─── LIVING ROOM INSPIRATIONS ───
const LIVING_ROOM_INSPIRATIONS = [
  { id: "pale-beige-living", img: INSPO_LR_PALE_BEIGE, title: "Pale Beige Serenity", subtitle: "Warm, airy neutrality for effortless calm", style: "Minimalist", color: "Pale Beige", colorHex: "#E0DBD0",
    desc: "A beautifully restrained living room where warm pale beige walls wrap the space in quiet elegance. Natural oak furniture, a linen sofa, and soft woven textures create an effortlessly sophisticated atmosphere that feels both spacious and welcoming.",
    tips: ["Keep all furnishings in a tonal palette — creams, tans, and warm whites — to let the beige walls anchor the room without competing.", "Layer natural textures like linen throws, jute rugs, and woven baskets to add depth to the monochromatic scheme.", "Choose light oak or birch wood for furniture to complement the warmth of the walls without darkening the space.", "Avoid cool-toned metals; opt for brass or warm gold accents in lighting and hardware."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
  { id: "lake-green-living", img: INSPO_LR_LAKE_GREEN, title: "Lake Green Retreat", subtitle: "Nature-inspired sage for grounded living", style: "Contemporary", color: "Lake Green", colorHex: "#BFCA9E",
    desc: "Sage green walls bring the tranquillity of nature indoors in this contemporary living room. A neutral grey sofa grounds the space while natural wood shelving and indoor plants reinforce the organic, calming atmosphere.",
    tips: ["Balance the green walls with a neutral sofa in grey or cream — avoid bold upholstery colours that compete with the walls.", "Introduce real plants generously. The green walls create a natural connection that houseplants amplify beautifully.", "Use warm-toned wood accents — oak shelves, a round coffee table — to prevent the green from feeling cold.", "Stick to matte and natural finishes throughout; high-gloss surfaces can clash with the earthy palette."],
    products: ["Premium Matt Emulsion", "Undercoat Emulsion"] },
  { id: "cool-blue-living", img: INSPO_LR_COOL_BLUE, title: "Cool Blue Haven", subtitle: "Crisp sky blue for a light-filled space", style: "Modern", color: "Cool Blue", colorHex: "#A8C6D6",
    desc: "Soft powder blue walls transform this living room into a bright, airy retreat. The cool-toned walls pair perfectly with a white sofa and natural wood furniture, creating a coastal-inspired freshness that feels open and relaxing.",
    tips: ["White furniture and sheer curtains amplify the light, airy quality of blue walls — lean into bright, clean pieces.", "Introduce warmth through natural wood tones in the coffee table and side tables to prevent the space from feeling too cool.", "Use soft textiles in warm whites and creams for throws and cushions to balance the cool blue palette.", "Maximise natural light — this colour looks its best when sunlight fills the room throughout the day."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
  { id: "medallion-gold-living", img: INSPO_LR_MEDALLION, title: "Medallion Gold Statement", subtitle: "Bold warmth with gleaming gold impact", style: "Contemporary Luxury", color: "Medallion", colorHex: "#C49820",
    desc: "A dramatic feature wall in deep warm gold creates a stunning focal point in this contemporary living room. The rich, lustrous tone radiates warmth and sophistication, balanced by a clean white sofa and warm wood elements.",
    tips: ["Use Medallion on a single feature wall behind the sofa — the remaining walls should be white or very light cream to let the gold breathe.", "Complement with brass or gold-toned lighting and accessories to echo the wall colour without overdoing it.", "Keep furniture simple and modern — a clean-lined white or cream sofa prevents the space from feeling heavy.", "Artwork that picks up the gold tones creates a curated, intentional look against the feature wall."],
    products: ["Vinyl Silk Makula", "Gloss Emulsion"] },
];

// ─── DINING ROOM INSPIRATIONS ───
const DINING_ROOM_INSPIRATIONS = [
  { id: "tandoori-dining", img: INSPO_DR_TANDOORI, title: "Tandoori Warmth", subtitle: "Intimate brick-red for memorable evenings", style: "Rustic Warmth", color: "Tandoori", colorHex: "#8E3020",
    desc: "Deep brick-red walls envelop this dining room in rich warmth, creating an intimate atmosphere perfect for long evening meals. Leather chairs, a walnut dining table, and candlelight bring out the earthy depth of the Tandoori colour.",
    tips: ["Candlelight is essential — the warm flicker brings out the red tones beautifully and enhances the intimate mood.", "Choose leather or warm-toned upholstered chairs that complement rather than compete with the bold walls.", "Keep the table setting simple — white dinnerware and dark linen napkins create elegant contrast.", "A single statement pendant light in smoked glass or brass becomes a natural focal point against the deep walls."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
  { id: "mustard-dining", img: INSPO_DR_MUSTARD, title: "Mustard Elegance", subtitle: "Golden warmth for a welcoming dining space", style: "Classic", color: "Mustard", colorHex: "#C89838",
    desc: "Warm golden mustard walls bring sunshine and sophistication to this classic dining room. The rich yellow tone creates a convivial atmosphere that stimulates conversation, balanced by cream furnishings and natural wood.",
    tips: ["White wainscoting or dado rail detail against mustard walls adds classic architectural interest and balances the bold colour.", "Natural wood dining furniture in light oak keeps the room feeling warm without becoming heavy.", "Fresh flowers — especially sunflowers or white arrangements — are a perfect table centrepiece against mustard walls.", "Brass pendant lights or a chandelier will echo the gold tones and elevate the room's elegance."],
    products: ["Premium Matt Emulsion", "Undercoat Emulsion"] },
  { id: "burgundy-dining", img: INSPO_DR_BURGUNDY, title: "Burgundy Grand Dining", subtitle: "Deep wine tones for dramatic sophistication", style: "Classic Luxury", color: "Burgundy", colorHex: "#7E2038",
    desc: "Rich burgundy walls with elegant panelling create a dining room of extraordinary drama and sophistication. Velvet chairs, a polished round table, and brass candlesticks complete this opulent setting that turns every dinner into an occasion.",
    tips: ["Panelling or moulding painted in the same burgundy tone adds depth and architectural grandeur to the walls.", "Velvet upholstery in deep plum or burgundy tones on dining chairs amplifies the luxurious mood.", "Gold and brass accents — candlesticks, a pendant light, picture frames — are the perfect metallic complement.", "Keep the ceiling white to maintain a sense of height and prevent the deep colour from feeling enclosed."],
    products: ["Vinyl Silk Makula", "Gloss Emulsion"] },
  { id: "havana-dining", img: INSPO_DR_HAVANA, title: "Havana Forest Dining", subtitle: "Deep jungle green for an organic statement", style: "Botanical", color: "Havana", colorHex: "#3E5030",
    desc: "Dark jungle olive-green walls create a lush, immersive dining experience in this botanically-inspired room. Exposed timber beams, leather chairs, and an ornate pendant light bring warmth and texture to the deep green backdrop.",
    tips: ["Warm leather and natural wood furniture are essential to prevent the dark green from feeling cold — embrace earthy materials.", "A large statement mirror or round brass accent piece bounces light and creates visual interest on the dark walls.", "Indoor plants and botanical prints reinforce the jungle-inspired theme and feel naturally at home against Havana walls.", "An oriental or Persian-style rug in warm reds and golds provides a beautiful contrast underfoot."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
];

// ─── KITCHEN INSPIRATIONS ───
const KITCHEN_INSPIRATIONS = [
  { id: "cream-kitchen", img: INSPO_KT_CREAM, title: "Cream Country Kitchen", subtitle: "Timeless warmth for a welcoming kitchen", style: "Farmhouse", color: "Cream", colorHex: "#F3EBD5",
    desc: "A beautifully warm farmhouse kitchen bathed in soft cream tones. Shaker-style cabinets, natural oak shelving, and terracotta tile floors create a timeless space that feels lived-in and deeply inviting from the first moment you walk in.",
    tips: ["Pair cream walls with natural oak or butcher-block countertops — the warm wood tones complement each other beautifully.", "Open shelving in matching cream lets you display ceramics and herbs without breaking the tonal flow.", "A large woven pendant light in rattan or wicker adds organic texture that suits the warm, natural palette perfectly.", "Fresh herbs on the windowsill and copper cookware on open shelves bring colour and life to the cream backdrop."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
  { id: "duck-egg-kitchen", img: INSPO_KT_DUCK_EGG, title: "Duck Egg Fresh Kitchen", subtitle: "Serene teal for a calm, modern kitchen", style: "Contemporary", color: "Duck Egg", colorHex: "#B0D0C8",
    desc: "Pale duck egg blue-green walls bring a sense of calm freshness to this sleek, modern kitchen. White handleless cabinets and a marble-effect island create a clean contrast that lets the soft teal walls be the clear star of the space.",
    tips: ["White gloss cabinets are the perfect partner — they reflect the duck egg tones back and amplify the light in the room.", "Brass or brushed gold fixtures and pendant lights add warmth to prevent the cool-toned palette from feeling cold.", "Keep the countertops and island in white or light stone to maintain the fresh, airy quality the colour creates.", "A large garden-facing window makes Duck Egg feel even more connected to the outdoors — maximise any natural light."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
  { id: "soft-celery-kitchen", img: INSPO_KT_SOFT_CELERY, title: "Soft Celery Kitchen Garden", subtitle: "Delicate green for a light-filled kitchen", style: "Classic", color: "Soft Celery", colorHex: "#D0D8A8",
    desc: "A beautiful pale celery green kitchen that feels like a morning garden in full bloom. White shaker cabinets, marble countertops, and brass fittings sit effortlessly against the delicate green walls to create a kitchen that is quietly stunning.",
    tips: ["Brass hardware on white cabinets is the perfect metallic partner for Soft Celery walls — warm tones against the cool green.", "White marble countertops elevate the look and keep the space feeling light despite the coloured walls.", "A farmhouse sink in white ceramic adds classic charm that pairs naturally with the garden-inspired palette.", "Fresh greenery — a bunch of eucalyptus, potted herbs — feels completely at home against these pale green walls."],
    products: ["Premium Matt Emulsion", "Undercoat Emulsion"] },
  { id: "tangerine-kitchen", img: INSPO_KT_TANGERINE, title: "Tangerine Bold Kitchen", subtitle: "Vibrant orange energy for the bold cook", style: "Contemporary Bold", color: "Tangerine", colorHex: "#E86020",
    desc: "A daring, high-energy kitchen where vivid tangerine orange walls make an unforgettable statement. White gloss cabinets and a marble island provide the perfect clean contrast that prevents the bold colour from overwhelming the space.",
    tips: ["White cabinets are non-negotiable — they are the essential foil that stops the tangerine from becoming too intense.", "Dark countertops in black or charcoal granite create a striking contrast with the orange walls and white units.", "Industrial-style pendant lights in black metal suit the bold, confident nature of this colour choice.", "Keep accessories minimal and monochromatic — let the wall colour do all the talking in this room."],
    products: ["Vinyl Silk Makula", "Gloss Emulsion"] },
];

// ─── BATHROOM INSPIRATIONS ───
const BATHROOM_INSPIRATIONS = [
  { id: "memory-bathroom", img: INSPO_BT_MEMORY, title: "Memory Spa Retreat", subtitle: "Sea-foam teal for a calming sanctuary", style: "Spa Minimal", color: "Memory", colorHex: "#8ABAB2",
    desc: "A freestanding bathtub sits serenely against soft sea-foam teal walls in this tranquil spa-inspired bathroom. The soothing colour creates an immediate sense of calm, while white fixtures and natural light enhance the clean, restorative atmosphere.",
    tips: ["A freestanding tub is the ultimate centrepiece in a bathroom this calm — its sculptural form works beautifully against the teal walls.", "Keep all fixtures in matte white or brushed chrome to maintain the fresh, spa-like quality of the space.", "Eucalyptus stems or a small indoor plant beside the bath reinforce the natural, restorative quality of this colour.", "Use only white or natural-toned towels and accessories — colour contrast items will disrupt the serene palette."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
  { id: "pale-lilac-bathroom", img: INSPO_BT_PALE_LILAC, title: "Pale Lilac Elegance", subtitle: "Romantic softness for a luxurious bathroom", style: "Classic Romantic", color: "Pale Lilac", colorHex: "#D8C8E0",
    desc: "A whisper-soft pale lilac bathroom of extraordinary elegance. A clawfoot bathtub, crystal chandelier, and sheer white curtains create a romantic, timeless atmosphere where every detail feels considered and beautifully feminine.",
    tips: ["A clawfoot or roll-top bathtub with chrome feet is the perfect centrepiece — its vintage form is a natural match for pale lilac.", "A crystal or antique-style chandelier adds a touch of glamour that elevates the soft colour to true luxury.", "White panelling on the lower walls adds architectural character and frames the lilac perfectly.", "Lavender soap, white candles, and fresh flowers complete the romantic atmosphere this colour inspires."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
  { id: "balm-bathroom", img: INSPO_BT_BALM, title: "Balm Mint Refresh", subtitle: "Soothing mint green for a clean, bright bathroom", style: "Modern Spa", color: "Balm", colorHex: "#CADCCB",
    desc: "A spacious, light-filled bathroom where soothing pale mint green walls create a sense of fresh, clean energy. White fixtures, skylights, and a walk-in shower keep the space feeling open and airy while the Balm colour adds gentle warmth.",
    tips: ["Skylights or frosted windows are ideal for this colour — the natural diffused light brings out the soft green's best qualities.", "A walk-in rainfall shower in a all-white surround lets the mint walls frame the space without competition.", "Large indoor plants like a monstera or fiddle-leaf fig thrive visually against mint green and reinforce the natural mood.", "Matte white fixtures throughout maintain the clean, uncluttered quality that makes this colour so refreshing."],
    products: ["Premium Matt Emulsion", "Undercoat Emulsion"] },
  { id: "ice-bathroom", img: INSPO_BT_ICE, title: "Ice Blue Modern Bathroom", subtitle: "Crisp pale blue for a sleek, airy space", style: "Modern Minimalist", color: "Ice", colorHex: "#D5E5E8",
    desc: "A strikingly clean and modern bathroom where pale ice blue walls create a cool, sophisticated atmosphere. Black matte fixtures provide sharp contrast against the soft blue, while the freestanding tub and walk-in shower deliver a premium, hotel-like finish.",
    tips: ["Matte black taps, fixtures, and shower fittings create a dramatic, contemporary contrast against the soft ice blue walls.", "Keep the floor in large-format white or light grey tiles to maintain the sense of space and cleanliness.", "Frameless glass shower screens preserve the open feel and allow the ice blue walls to be seen throughout the room.", "Avoid warm-toned accessories — white, grey, and black only to maintain the cool, crisp sophistication this colour delivers."],
    products: ["Premium Matt Emulsion", "Vinyl Silk Makula"] },
];

// ═══════ ROOM INSPIRATION PAGE (generic) ═══════
const ROOM_META = {
  "Bedroom":     { slug: "bedroom-inspiration",     gradient: "linear-gradient(135deg, #2d4a3e, #1a3a5c 50%, #5c2d6d)", subtitle: "Discover colour ideas to transform your most personal space" },
  "Living Room": { slug: "livingroom-inspiration",   gradient: "linear-gradient(135deg, #c87856, #a05040 50%, #7a4830)", subtitle: "Colour ideas for the heart of your home" },
  "Dining Room": { slug: "diningroom-inspiration",   gradient: "linear-gradient(135deg, #7E2038, #8E3020 50%, #3E5030)", subtitle: "Set the mood for unforgettable meals" },
  "Kitchen":     { slug: "kitchen-inspiration",      gradient: "linear-gradient(135deg, #2d6b4f, #1a4a3a 50%, #B0D0C8)", subtitle: "Fresh colour ideas for the busiest room" },
  "Bathroom":    { slug: "bathroom-inspiration",     gradient: "linear-gradient(135deg, #1a4a5e, #2868a8 50%, #8ABAB2)", subtitle: "Create your own spa-like retreat" },
};

const RoomInspirationPage = ({ roomName, inspirations, onBack, nav }) => {
  const [selected, setSelected] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const meta = ROOM_META[roomName] || {};

  const openDetail = (item) => { setSelected(item); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const back = () => { setSelected(null); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const otherRooms = Object.entries(ROOM_META).filter(([name]) => name !== roomName).map(([name, m]) => ({
    name, slug: m.slug,
    bg: name === "Bedroom" ? "linear-gradient(135deg, #2d4a3e, #1a3a5c)" : name === "Living Room" ? "linear-gradient(135deg, #c87856, #a05040)" : name === "Dining Room" ? "linear-gradient(135deg, #7E2038, #3E5030)" : name === "Kitchen" ? "linear-gradient(135deg, #2d6b4f, #1a4a3a)" : "linear-gradient(135deg, #1a4a5e, #2868a8)",
    hasPage: !!({ "Bedroom": true, "Living Room": true, "Dining Room": true, "Kitchen": true, "Bathroom": true })[name],
  }));

  if (selected) {
    return (
      <div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px" }}>
          <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#999" }}>
            <span onClick={onBack} style={{ color: B.coral, cursor: "pointer" }}>Home</span>
            <span>/</span><span onClick={back} style={{ color: B.coral, cursor: "pointer" }}>{roomName} Inspiration</span>
            <span>/</span><span style={{ color: "#333" }}>{selected.title}</span>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px 60px" }}>
          {/* Hero Image */}
          <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 40, cursor: "pointer" }} onClick={() => setLightbox(selected.img)}>
            <img src={selected.img} alt={selected.title} style={{ width: "100%", height: 500, objectFit: "cover", display: "block" }} />
          </div>

          <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            {/* Left: Details */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: selected.colorHex, border: "3px solid #fff", boxShadow: "0 2px 8px rgba(0,0,0,.15)" }} />
                <div>
                  <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 2, color: B.coral, fontWeight: 600 }}>{selected.style}</span>
                  <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, lineHeight: 1.2 }}>{selected.title}</h1>
                </div>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", marginBottom: 32 }}>{selected.desc}</p>

              {/* Colour Used */}
              <div style={{ background: B.off, borderRadius: 12, padding: "20px 24px", marginBottom: 32, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: selected.colorHex, flexShrink: 0, boxShadow: "inset 0 2px 4px rgba(0,0,0,.1)" }} />
                <div>
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: "#999", marginBottom: 2 }}>Featured Colour</div>
                  <div style={{ fontSize: 18, fontWeight: 600 }}>{selected.color}</div>
                </div>
                <button className="btn bp" style={{ marginLeft: "auto", fontSize: 12, padding: "10px 20px" }}>Order Sample</button>
              </div>

              {/* Recommended Products */}
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 1, fontWeight: 600, marginBottom: 16, color: "#333" }}>Recommended Products</h3>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {selected.products.map((p, i) => (
                    <span key={i} style={{ padding: "10px 20px", borderRadius: 8, background: "#fff", border: "1px solid #e0e0e0", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all .2s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = B.coral; e.currentTarget.style.color = B.coral; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.color = "#1a1a1a"; }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Tips */}
            <div>
              <div style={{ background: `linear-gradient(135deg, ${selected.colorHex}18, ${selected.colorHex}08)`, borderRadius: 16, padding: 32, border: `1px solid ${selected.colorHex}30` }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, marginBottom: 24 }}>Styling Tips</h3>
                {selected.tips.map((tip, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, marginBottom: i < selected.tips.length - 1 ? 20 : 0 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: selected.colorHex, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555" }}>{tip}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ marginTop: 24, background: B.black, borderRadius: 16, padding: 32, color: "#fff", textAlign: "center" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, marginBottom: 8 }}>Love this look?</h3>
                <p style={{ fontSize: 14, opacity: .7, marginBottom: 20 }}>Get colour samples delivered to your door</p>
                <button className="btn bp" style={{ fontSize: 14 }}>Order Samples</button>
              </div>
            </div>
          </div>

          {/* More Inspiration */}
          <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid #e8e4de" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 24 }}>More {roomName.toLowerCase()} looks</h2>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {inspirations.filter(x => x.id !== selected.id).slice(0, 3).map(item => (
                <div key={item.id} onClick={() => openDetail(item)} style={{ borderRadius: 12, overflow: "hidden", cursor: "pointer", transition: "transform .3s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"} onMouseLeave={e => e.currentTarget.style.transform = ""}>
                  <img src={item.img} alt={item.title} style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }} />
                  <div style={{ padding: 16, background: "#fff", border: "1px solid #eee", borderTop: "none", borderRadius: "0 0 12px 12px" }}>
                    <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: "#777" }}>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out", padding: 40 }}>
            <img src={lightbox} alt="" style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", borderRadius: 8 }} />
          </div>
        )}
      </div>
    );
  }

  // Gallery view
  const roomLower = roomName.toLowerCase();
  return (
    <div>
      {/* Hero Banner */}
      <section style={{ background: meta.gradient, padding: "80px 0 60px", color: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, marginBottom: 16, opacity: .8 }}>Inspiration / By Room</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, marginBottom: 16 }}>{roomName} Inspiration</h1>
          <p style={{ fontSize: 20, opacity: .9, fontWeight: 300 }}>{meta.subtitle}</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "28px 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, textAlign: "center" }}>
          {[{ n: String(inspirations.length), l: "Curated Looks" }, { n: "80+", l: "Colours Available" }, { n: "Free", l: "Colour Samples" }].map((s, i) => (
            <div key={i}><div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: B.coral }}>{s.n}</div><div style={{ fontSize: 12, opacity: .7, textTransform: "uppercase", letterSpacing: 1 }}>{s.l}</div></div>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <h2 className="st" style={{ marginBottom: 8 }}>Curated {roomLower} looks</h2>
          <p style={{ fontSize: 15, color: "#666" }}>Click any look for colour details, styling tips, and product recommendations</p>
        </div>

        {/* Featured (first two items large) */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20, marginBottom: 20 }}>
          <div onClick={() => openDetail(inspirations[0])} style={{ position: "relative", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "transform .3s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.01)"} onMouseLeave={e => e.currentTarget.style.transform = ""}>
            <img src={inspirations[0].img} alt={inspirations[0].title} style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 50%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 28px" }}>
              <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: B.coral, fontWeight: 600 }}>Featured</span>
              <h3 style={{ color: "#fff", fontSize: 24, fontFamily: "'Playfair Display', serif", fontWeight: 600, marginBottom: 4 }}>{inspirations[0].title}</h3>
              <p style={{ color: "rgba(255,255,255,.8)", fontSize: 14 }}>{inspirations[0].subtitle}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: inspirations[0].colorHex, border: "2px solid #fff" }} />
                <span style={{ color: "#fff", fontSize: 13, fontWeight: 500 }}>{inspirations[0].color}</span>
              </div>
            </div>
          </div>
          <div onClick={() => openDetail(inspirations[1])} style={{ position: "relative", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "transform .3s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.01)"} onMouseLeave={e => e.currentTarget.style.transform = ""}>
            <img src={inspirations[1].img} alt={inspirations[1].title} style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 50%)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 28px" }}>
              <h3 style={{ color: "#fff", fontSize: 22, fontFamily: "'Playfair Display', serif", fontWeight: 600, marginBottom: 4 }}>{inspirations[1].title}</h3>
              <p style={{ color: "rgba(255,255,255,.8)", fontSize: 14 }}>{inspirations[1].subtitle}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: inspirations[1].colorHex, border: "2px solid #fff" }} />
                <span style={{ color: "#fff", fontSize: 13, fontWeight: 500 }}>{inspirations[1].color}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining items */}
        {inspirations.length > 2 && (
          <div className="g3" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(inspirations.length - 2, 3)}, 1fr)`, gap: 20 }}>
            {inspirations.slice(2).map(item => (
              <div key={item.id} onClick={() => openDetail(item)} style={{ position: "relative", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "transform .3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"} onMouseLeave={e => e.currentTarget.style.transform = ""}>
                <img src={item.img} alt={item.title} style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px" }}>
                  <h3 style={{ color: "#fff", fontSize: 18, fontFamily: "'Playfair Display', serif", fontWeight: 600, marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ color: "rgba(255,255,255,.8)", fontSize: 13 }}>{item.subtitle}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: item.colorHex, border: "2px solid #fff" }} />
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 500 }}>{item.color}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Browse Other Rooms */}
      <section style={{ background: B.warm, padding: "60px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, textAlign: "center", marginBottom: 36 }}>Explore other rooms</h2>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${otherRooms.length}, 1fr)`, gap: 20 }}>
            {otherRooms.map((room, i) => (
              <div key={i} onClick={() => { if (room.hasPage) nav(room.slug); }} style={{ background: room.bg, borderRadius: 12, padding: 28, color: "#fff", cursor: room.hasPage ? "pointer" : "default", transition: "transform .3s", minHeight: 120, display: "flex", flexDirection: "column", justifyContent: "flex-end", opacity: room.hasPage ? 1 : .7 }}
                onMouseEnter={e => { if (room.hasPage) e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={e => e.currentTarget.style.transform = ""}>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{room.name}</h3>
                <p style={{ fontSize: 13, opacity: .8 }}>{room.hasPage ? "View inspiration" : "Coming soon"}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ═══════ COLOUR CATEGORY PAGE ═══════
const ColourCategoryPage = ({ categoryName, categoryData, allColours, onBack, onNavCategory, onOpenColour, homeHref, colourHrefFn, catHrefFn }) => {
  const categoryColors = allColours.filter(c => categoryData.colors.includes(c.name));
  const otherCats = Object.entries(COLOUR_CATEGORIES).filter(([k]) => k !== categoryName);

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#999" }}>
          <a href={homeHref} onClick={e => { e.preventDefault(); onBack(); }} style={{ textDecoration: "none", color: B.coral, cursor: "pointer", fontWeight: 500 }}>Home</a>
          <span>/</span><span>Colours</span><span>/</span>
          <span style={{ color: "#333" }}>{categoryName}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: categoryData.gradient, padding: "64px 0 48px", borderBottom: "1px solid rgba(0,0,0,.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, color: categoryData.accent || B.coral, fontWeight: 600, marginBottom: 12 }}>Colour Collection</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, marginBottom: 16, color: categoryData.textColor || "#1a1a1a" }}>{categoryName}</h1>
          <p style={{ fontSize: 17, color: categoryData.textColor || "#555", opacity: .75, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 24px" }}>{categoryData.desc}</p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.65)", padding: "8px 22px", borderRadius: 28, backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.9)" }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: categoryData.accent || B.coral }}>{categoryColors.length}</span>
            <span style={{ fontSize: 13, color: "#666" }}>shades in this collection</span>
          </div>
        </div>
      </section>

      {/* Colour pill row */}
      <section style={{ background: "#fff", borderBottom: "1px solid #f0f0f0", padding: "18px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {categoryColors.map((c, i) => (
            <a key={i} href={colourHrefFn ? colourHrefFn(c) : undefined} onClick={e => { e.preventDefault(); onOpenColour && onOpenColour(c); }}
              style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 7, background: "#f8f8f6", borderRadius: 24, padding: "5px 14px 5px 7px", border: "1px solid #ebebeb", cursor: "pointer", transition: "border-color .2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#ccc"} onMouseLeave={e => e.currentTarget.style.borderColor = "#ebebeb"}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: c.color, border: "1px solid rgba(0,0,0,.1)", flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: "#555" }}>{c.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Colour Grid */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ marginBottom: 32 }}>
          <h2 className="st" style={{ marginBottom: 8 }}>All {categoryName}</h2>
          <p style={{ fontSize: 15, color: "#666" }}>Order a sample tester to see how it looks in your home</p>
        </div>
        <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {categoryColors.map((c, i) => (
            <a key={i} href={colourHrefFn ? colourHrefFn(c) : undefined} onClick={e => { e.preventDefault(); onOpenColour && onOpenColour(c); }}
              style={{ textDecoration: "none", color: "inherit", display: "block", background: "#fff", borderRadius: 14, border: "1px solid #eee", overflow: "hidden", cursor: "pointer", transition: "transform .3s, box-shadow .3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              {/* Swatch area */}
              <div style={{ background: `${c.color}28`, padding: "20px 16px", height: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ width: "78%", height: "90%" }}><PaintBlob color={c.color} v={i} /></div>
                <div style={{ position: "absolute", bottom: 10, right: 12, width: 28, height: 28, borderRadius: "50%", background: c.color, border: "3px solid rgba(255,255,255,.8)", boxShadow: "0 2px 8px rgba(0,0,0,.12)" }} />
              </div>
              {/* Details */}
              <div style={{ padding: "14px 16px 18px" }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4, color: "#1a1a1a" }}>{c.name}®</h4>
                <p style={{ fontSize: 12, color: "#888", lineHeight: 1.5, marginBottom: 12, minHeight: 34 }}>{c.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <code style={{ fontSize: 11, color: "#bbb", fontFamily: "monospace", letterSpacing: .5 }}>{c.color}</code>
                  <button style={{ fontSize: 11, fontWeight: 600, color: B.coral, background: `${B.coral}12`, border: "none", padding: "4px 10px", borderRadius: 12, cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>Sample</button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: "linear-gradient(135deg, #1a1a1a, #2a2a2a)", padding: "56px 0", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 12 }}>Try before you buy</h2>
          <p style={{ fontSize: 15, opacity: .7, marginBottom: 28, lineHeight: 1.6 }}>Get 5 colour samples delivered to your door for just UGX 15,000</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn bp">Order Samples</button>
            <button className="btn bo">View All Colours</button>
          </div>
        </div>
      </section>

      {/* Explore other categories */}
      {otherCats.length > 0 && (
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, marginBottom: 24 }}>Explore more colour collections</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {otherCats.map(([name, data]) => (
              <a key={name} href={catHrefFn ? catHrefFn(name, data) : undefined} onClick={e => { e.preventDefault(); onNavCategory(name); }}
                style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 10, background: "#f8f8f6", border: "1px solid #eee", borderRadius: 12, padding: "11px 20px", cursor: "pointer", transition: "all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#f0ede8"; e.currentTarget.style.borderColor = "#ddd"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#f8f8f6"; e.currentTarget.style.borderColor = "#eee"; e.currentTarget.style.transform = ""; }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: CAT_SWATCH_COLORS[name] || "#ddd", border: "2px solid rgba(0,0,0,.08)", flexShrink: 0 }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{name}</span>
                <span style={{ fontSize: 12, color: "#aaa" }}>({allColours.filter(c => data.colors.includes(c.name)).length})</span>
              </a>
            ))}
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: "#bbb" }}>More colour collections coming soon</p>
        </section>
      )}
    </div>
  );
};

// ═══════ STYLE CATEGORY PAGE ═══════
const StyleCategoryPage = ({ styleName, styleData, allColours, onBack, onNavStyle, onOpenColour, homeHref, colourHrefFn, styleHrefFn }) => {
  const styleColors = allColours.filter(c => styleData.colors.includes(c.name));
  const otherStyles = Object.entries(STYLE_CATEGORIES).filter(([k]) => k !== styleName);

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#999" }}>
          <a href={homeHref} onClick={e => { e.preventDefault(); onBack(); }} style={{ textDecoration: "none", color: B.coral, cursor: "pointer", fontWeight: 500 }}>Home</a>
          <span>/</span><span>Colours</span><span>/</span><span>By Style</span><span>/</span>
          <span style={{ color: "#333" }}>{styleName}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: styleData.gradient, padding: "64px 0 48px", borderBottom: "1px solid rgba(0,0,0,.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, color: styleData.accent, fontWeight: 600, marginBottom: 12 }}>Style Collection</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, marginBottom: 12, color: styleData.textColor }}>{styleName}</h1>
          {/* Keywords */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 20 }}>
            {styleData.keyWords.map((kw, i) => (
              <span key={i} style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, padding: "4px 14px", borderRadius: 24, background: `rgba(255,255,255,0.3)`, border: `1px solid rgba(255,255,255,0.5)`, color: styleData.textColor, backdropFilter: "blur(4px)" }}>{kw}</span>
            ))}
          </div>
          <p style={{ fontSize: 17, color: styleData.textColor, opacity: .75, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 24px" }}>{styleData.desc}</p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.65)", padding: "8px 22px", borderRadius: 28, backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.9)" }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: styleData.accent }}>{styleColors.length}</span>
            <span style={{ fontSize: 13, color: "#666" }}>shades in this style</span>
          </div>
        </div>
      </section>

      {/* Colour pill row */}
      <section style={{ background: "#fff", borderBottom: "1px solid #f0f0f0", padding: "18px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {styleColors.map((c, i) => (
            <a key={i} href={colourHrefFn ? colourHrefFn(c) : undefined} onClick={e => { e.preventDefault(); onOpenColour && onOpenColour(c); }}
              style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 7, background: "#f8f8f6", borderRadius: 24, padding: "5px 14px 5px 7px", border: "1px solid #ebebeb", cursor: "pointer", transition: "border-color .2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#ccc"} onMouseLeave={e => e.currentTarget.style.borderColor = "#ebebeb"}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: c.color, border: "1px solid rgba(0,0,0,.1)", flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: "#555" }}>{c.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Colour Grid */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ marginBottom: 32 }}>
          <h2 className="st" style={{ marginBottom: 8 }}>All {styleName} Colours</h2>
          <p style={{ fontSize: 15, color: "#666" }}>Order a sample tester to see how it looks in your home</p>
        </div>
        <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {styleColors.map((c, i) => (
            <a key={i} href={colourHrefFn ? colourHrefFn(c) : undefined} onClick={e => { e.preventDefault(); onOpenColour && onOpenColour(c); }}
              style={{ textDecoration: "none", color: "inherit", display: "block", background: "#fff", borderRadius: 14, border: "1px solid #eee", overflow: "hidden", cursor: "pointer", transition: "transform .3s, box-shadow .3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              <div style={{ background: `${c.color}28`, padding: "20px 16px", height: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ width: "78%", height: "90%" }}><PaintBlob color={c.color} v={i} /></div>
                <div style={{ position: "absolute", bottom: 10, right: 12, width: 28, height: 28, borderRadius: "50%", background: c.color, border: "3px solid rgba(255,255,255,.8)", boxShadow: "0 2px 8px rgba(0,0,0,.12)" }} />
              </div>
              <div style={{ padding: "14px 16px 18px" }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4, color: "#1a1a1a" }}>{c.name}®</h4>
                <p style={{ fontSize: 12, color: "#888", lineHeight: 1.5, marginBottom: 12, minHeight: 34 }}>{c.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <code style={{ fontSize: 11, color: "#bbb", fontFamily: "monospace", letterSpacing: .5 }}>{c.color}</code>
                  <button style={{ fontSize: 11, fontWeight: 600, color: B.coral, background: `${B.coral}12`, border: "none", padding: "4px 10px", borderRadius: 12, cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>Sample</button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: "linear-gradient(135deg, #1a1a1a, #2a2a2a)", padding: "56px 0", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 12 }}>Try before you buy</h2>
          <p style={{ fontSize: 15, opacity: .7, marginBottom: 28, lineHeight: 1.6 }}>Get 5 colour samples delivered to your door for just UGX 15,000</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn bp">Order Samples</button>
            <button className="btn bo">View All Colours</button>
          </div>
        </div>
      </section>

      {/* Explore other styles */}
      {otherStyles.length > 0 && (
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, marginBottom: 8 }}>Explore more styles</h2>
          <p style={{ fontSize: 14, color: "#888", marginBottom: 28 }}>Find the perfect palette for every design aesthetic</p>
          <div className="ge4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {otherStyles.map(([name, data]) => {
              const preview = allColours.filter(c => data.colors.includes(c.name)).slice(0, 5);
              return (
                <a key={name} href={styleHrefFn ? styleHrefFn(name, data) : undefined} onClick={e => { e.preventDefault(); onNavStyle(name); }}
                  style={{ textDecoration: "none", color: "inherit", display: "block", borderRadius: 14, overflow: "hidden", cursor: "pointer", border: "1px solid #eee", transition: "transform .3s, box-shadow .3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                  {/* Mini gradient hero */}
                  <div style={{ background: data.gradient, height: 80, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "0 12px" }}>
                    {preview.map((c, ci) => (
                      <div key={ci} style={{ width: 28, height: 28, borderRadius: "50%", background: c.color, border: "2px solid rgba(255,255,255,.7)", boxShadow: "0 2px 6px rgba(0,0,0,.15)" }} />
                    ))}
                  </div>
                  <div style={{ padding: "12px 16px 16px", background: "#fff" }}>
                    <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{name}</h4>
                    <p style={{ fontSize: 12, color: "#999" }}>{allColours.filter(c => data.colors.includes(c.name)).length} shades</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

// ═══════ COLOUR DETAIL PAGE ═══════
const PAINT_RECOMMENDATIONS = PRODUCTS; // all 12 products

const ColourDetailPage = ({ colour, categoryName, onBack, onBackHome, onAddToCart, homeHref, backHref }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [buyOpen, setBuyOpen] = useState(false);
  const [selectedProd, setSelectedProd] = useState(null);
  const [selectedSz, setSelectedSz] = useState(null);
  const [buyQty, setBuyQty] = useState(1);
  const [buyAdded, setBuyAdded] = useState(false);
  const details = COLOUR_DETAILS[colour.name] || {};
  const slides = details.slides || [];
  const hasSlides = slides.length > 0;
  const borderColor = "rgba(0,0,0,.14)";

  const handleAddToCart = () => {
    if (!selectedProd || !selectedSz) return;
    const sz = selectedProd.sizes.find(s => s.size === selectedSz);
    if (onAddToCart) onAddToCart({ product: selectedProd, size: sz.size, price: sz.price, qty: buyQty, colour: colour.name });
    setBuyAdded(true);
    setTimeout(() => { setBuyOpen(false); setBuyAdded(false); setSelectedProd(null); setSelectedSz(null); setBuyQty(1); }, 1800);
  };

  return (
    <div>
      {/* Breadcrumb bar */}
      <div style={{ padding: "13px 28px", borderBottom: "1px solid #eee", background: "#fff" }}>
        <div style={{ display: "flex", gap: 10, fontSize: 12, color: "#999", alignItems: "center" }}>
          <a href={homeHref} onClick={e => { e.preventDefault(); onBackHome(); }} style={{ textDecoration: "none", color: "#333", cursor: "pointer", fontWeight: 700, textTransform: "uppercase", letterSpacing: .5 }}>Home</a>
          <span style={{ fontSize: 16, color: "#ccc", lineHeight: 1 }}>›</span>
          <a href={backHref} onClick={e => { e.preventDefault(); onBack(); }} style={{ textDecoration: "none", color: "#333", cursor: "pointer", fontWeight: 700, textTransform: "uppercase", letterSpacing: .5 }}>{categoryName}</a>
          <span style={{ fontSize: 16, color: "#ccc", lineHeight: 1 }}>›</span>
          <span style={{ color: "#555", textTransform: "uppercase", fontWeight: 700, letterSpacing: .5 }}>{colour.name}®</span>
        </div>
      </div>

      {/* Two-panel split */}
      <div style={{ display: "flex", height: "calc(100vh - 157px)", minHeight: 520 }}>

        {/* ── LEFT: paint info ── */}
        <div style={{
          width: "42%", flexShrink: 0,
          background: colour.color,
          padding: "44px 52px",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          {/* Colour name */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 50, fontWeight: 300, letterSpacing: -1,
            color: "#1a1a1a", lineHeight: 1.1, marginBottom: 22,
          }}>
            {colour.name}®
          </h1>

          {/* Swatch ┃ tagline row */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 18 }}>
            <div style={{
              width: 68, height: 68, borderRadius: "50%",
              background: colour.color,
              border: "3px solid rgba(255,255,255,.85)",
              boxShadow: "0 2px 18px rgba(0,0,0,.18)",
              flexShrink: 0,
            }} />
            <div style={{ width: 1, height: 48, background: borderColor, flexShrink: 0 }} />
            <p style={{ fontSize: 14.5, color: "#2a2a2a", fontWeight: 400, lineHeight: 1.45, maxWidth: 220 }}>
              {details.tagline || colour.desc}
            </p>
          </div>

          {/* Long description */}
          <p style={{ fontSize: 13.5, lineHeight: 1.85, color: "#3a3a3a", marginBottom: 22, maxWidth: 400 }}>
            {details.longDesc || colour.desc}
          </p>

          {/* Specs: TONES / HUES / COLOUR */}
          <div style={{
            display: "flex",
            borderTop: `1px solid ${borderColor}`,
            borderBottom: `1px solid ${borderColor}`,
            padding: "14px 0", marginBottom: 26,
          }}>
            {[
              { label: "TONES",  value: details.tones || "—" },
              { label: "HUES",   value: details.hues  || "—" },
              { label: "COLOUR", value: colour.color },
            ].map((spec, i) => (
              <div key={i} style={{
                flex: 1,
                paddingLeft: i > 0 ? 20 : 0,
                paddingRight: i < 2 ? 20 : 0,
                borderRight: i < 2 ? `1px solid ${borderColor}` : "none",
              }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(0,0,0,.42)", marginBottom: 5 }}>{spec.label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>{spec.value}</div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => { setBuyOpen(true); setSelectedProd(null); setSelectedSz(null); setBuyQty(1); setBuyAdded(false); }} style={{
              flex: 1, padding: "14px 20px", border: "none", background: "#1a1a1a",
              color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer",
              fontFamily: "'Outfit',sans-serif", letterSpacing: .5, borderRadius: 2,
            }}>Buy Paint</button>
            <button style={{
              flex: 1, padding: "14px 20px",
              border: "2px solid rgba(0,0,0,.38)", background: "transparent",
              color: "#1a1a1a", fontSize: 14, fontWeight: 600, cursor: "pointer",
              fontFamily: "'Outfit',sans-serif", letterSpacing: .5, borderRadius: 2,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            }}>+ Add sample</button>
          </div>
        </div>

        {/* ── Buy Paint Modal ── */}
        {buyOpen && (
          <div onClick={() => setBuyOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,0.58)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
            <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 18, padding: "36px 36px 28px", maxWidth: 580, width: "100%", maxHeight: "88vh", overflowY: "auto", boxShadow: "0 24px 72px rgba(0,0,0,0.32)" }}>

              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 26 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: colour.color, border: "2px solid rgba(0,0,0,0.1)", flexShrink: 0 }} />
                    <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, color: "#888" }}>{colour.name}</span>
                  </div>
                  <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#1a1a1a", fontFamily: "'Outfit', sans-serif" }}>Buy Paint</h2>
                </div>
                <button onClick={() => setBuyOpen(false)} style={{ background: "none", border: "1.5px solid #e0e0e0", borderRadius: 8, padding: "6px 8px", cursor: "pointer", display: "flex", alignItems: "center", color: "#555" }}>
                  <CloseIcon />
                </button>
              </div>

              {/* Step 1 */}
              <div style={{ marginBottom: 26 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#bbb", marginBottom: 12 }}>Step 1 — Choose paint type</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {PAINT_RECOMMENDATIONS.map(prod => {
                    const isSel = selectedProd?.id === prod.id;
                    return (
                      <div key={prod.id} onClick={() => { setSelectedProd(prod); setSelectedSz(null); }} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderRadius: 10, border: `2px solid ${isSel ? "#1a1a1a" : "#e8e4de"}`, cursor: "pointer", background: isSel ? "#faf8f5" : "#fff", transition: "all 0.15s" }}>
                        <img src={prod.img} alt={prod.name} style={{ width: 46, height: 46, objectFit: "contain", borderRadius: 6, flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>{prod.name}</div>
                          <div style={{ fontSize: 11.5, color: "#999" }}>{prod.finish} &bull; {prod.category === "interior" ? "Interior" : "Exterior"}</div>
                        </div>
                        {isSel && <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><CheckIcon /></div>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 */}
              {selectedProd && (
                <div style={{ marginBottom: 26 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#bbb", marginBottom: 12 }}>Step 2 — Choose size</div>
                  <div style={{ display: "flex", gap: 10 }}>
                    {selectedProd.sizes.map(sz => {
                      const isSel = selectedSz === sz.size;
                      return (
                        <div key={sz.size} onClick={() => setSelectedSz(sz.size)} style={{ flex: 1, padding: "15px 10px", borderRadius: 10, border: `2px solid ${isSel ? "#1a1a1a" : "#e8e4de"}`, cursor: "pointer", textAlign: "center", background: isSel ? "#faf8f5" : "#fff", transition: "all 0.15s" }}>
                          <div style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", marginBottom: 4 }}>{sz.size}</div>
                          <div style={{ fontSize: 13, color: B.coral, fontWeight: 700, marginBottom: 2 }}>Ksh {sz.price.toLocaleString()}</div>
                          <div style={{ fontSize: 10.5, color: "#aaa" }}>Covers {sz.coverage}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3 — Quantity */}
              {selectedProd && selectedSz && (
                <div style={{ marginBottom: 26 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#bbb", marginBottom: 12 }}>Step 3 — How many tins?</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 0, border: "2px solid #e8e4de", borderRadius: 10, overflow: "hidden", width: "fit-content" }}>
                    <button onClick={() => setBuyQty(q => Math.max(1, q - 1))} style={{ width: 48, height: 48, background: "#faf8f5", border: "none", cursor: "pointer", fontSize: 20, color: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit', sans-serif" }}>
                      <MinusIcon />
                    </button>
                    <div style={{ minWidth: 60, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#1a1a1a", borderLeft: "2px solid #e8e4de", borderRight: "2px solid #e8e4de", background: "#fff" }}>
                      {buyQty}
                    </div>
                    <button onClick={() => setBuyQty(q => q + 1)} style={{ width: 48, height: 48, background: "#faf8f5", border: "none", cursor: "pointer", fontSize: 20, color: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit', sans-serif" }}>
                      <PlusIcon />
                    </button>
                  </div>
                  {selectedProd && selectedSz && (() => {
                    const sz = selectedProd.sizes.find(s => s.size === selectedSz);
                    return sz ? (
                      <div style={{ marginTop: 10, fontSize: 13, color: "#888" }}>
                        Total: <strong style={{ color: "#1a1a1a", fontSize: 15 }}>Ksh {(sz.price * buyQty).toLocaleString()}</strong>
                        <span style={{ marginLeft: 10, color: "#bbb" }}>({buyQty} × Ksh {sz.price.toLocaleString()})</span>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}

              {/* Add to Cart */}
              <button disabled={!selectedProd || !selectedSz} onClick={handleAddToCart} style={{ width: "100%", padding: "15px 24px", background: buyAdded ? B.teal : (selectedProd && selectedSz ? "#1a1a1a" : "#d0d0d0"), color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: selectedProd && selectedSz ? "pointer" : "not-allowed", fontFamily: "'Outfit', sans-serif", letterSpacing: 0.4, transition: "background 0.3s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                {buyAdded ? <><CheckIcon /> Added to Cart!</> : `Add ${buyQty > 1 ? buyQty + " tins" : "to Cart"}`}
              </button>
            </div>
          </div>
        )}

        {/* ── RIGHT: lifestyle image ── */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          {hasSlides ? (
            <>
              {slides.map((src, i) => (
                <img key={i} src={src} alt=""
                  style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", transition: "opacity .55s ease",
                    opacity: i === imgIdx ? 1 : 0,
                  }} />
              ))}
              {/* Carousel nav bar */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "rgba(0,0,0,.72)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "13px 0", gap: 28,
              }}>
                <button onClick={() => setImgIdx(i => (i - 1 + slides.length) % slides.length)}
                  style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", padding: 4 }}>
                  <ArrL />
                </button>
                <div style={{ display: "flex", gap: 8 }}>
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => setImgIdx(i)} style={{
                      width: i === imgIdx ? 24 : 8, height: 8, borderRadius: 4,
                      background: i === imgIdx ? "#fff" : "rgba(255,255,255,.42)",
                      border: "none", cursor: "pointer", transition: "all .3s", padding: 0,
                    }} />
                  ))}
                </div>
                <button onClick={() => setImgIdx(i => (i + 1) % slides.length)}
                  style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", padding: 4 }}>
                  <Arr />
                </button>
              </div>
            </>
          ) : (
            <div style={{
              width: "100%", height: "100%",
              background: `linear-gradient(145deg, ${colour.color}55 0%, ${colour.color}22 100%)`,
            }} />
          )}
        </div>
      </div>
    </div>
  );
};

// ═══════ MAIN APP ═══════
export default function PeacockPaintsWebsite() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobMenu, setMobMenu] = useState(false);
  const [mobSub, setMobSub] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [pg, setPg] = useState("home");
  const [prodTab, setProdTab] = useState("all");
  const [finishFilter, setFinishFilter] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedColour, setSelectedColour] = useState(null);
  const [selectedColourCategory, setSelectedColourCategory] = useState(null);
  const [selectedColourStyle, setSelectedColourStyle] = useState(null);
  const [colourCarouselIdx, setColourCarouselIdx] = useState(0);
  const CARDS_VISIBLE = 5;
  const findColourCat = (name) => { for (const [k, v] of Object.entries(COLOUR_CATEGORIES)) { if (v.colors.includes(name)) return k; } return null; };
  const handleColourClick = (c) => { const cat = findColourCat(c.name); setSelectedColour(c); setSelectedColourCategory(cat); setPg("colour-detail"); setActiveMenu(null); setMobMenu(false); setMobSub(null); window.scrollTo({ top: 0, behavior: "smooth" }); window.history.replaceState(null, "", `#/colour/${encodeURIComponent(c.name)}`); };
  const mRef = useRef(null);
  const prodSectionRef = useRef(null);
  const scrollToProdPending = useRef(false);

  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  useEffect(() => { const t = setInterval(() => setHeroSlide(s => (s + 1) % 2), 6000); return () => clearInterval(t); }, []);

  // ─── Hash-based routing: restore page from URL on mount / new tab ───
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      if (!hash || hash === "home") { setPg("home"); return; }
      if (hash.startsWith("product/")) {
        const id = hash.replace("product/", "");
        const p = PRODUCTS.find(pr => pr.id === id);
        if (p) { setSelectedProduct(p); setPg("product"); return; }
      }
      if (hash.startsWith("colour/")) {
        const name = decodeURIComponent(hash.replace("colour/", ""));
        const c = trendingColours.find(tc => tc.name === name);
        if (c) { const cat = findColourCat(c.name); setSelectedColour(c); setSelectedColourCategory(cat); setPg("colour-detail"); return; }
      }
      setPg(hash);
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);
  useEffect(() => {
    if (scrollToProdPending.current && prodSectionRef.current) {
      scrollToProdPending.current = false;
      const t = setTimeout(() => prodSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      return () => clearTimeout(t);
    }
  }, [finishFilter]);



  const mE = i => { clearTimeout(mRef.current); setActiveMenu(i); };
  const mL = () => { mRef.current = setTimeout(() => setActiveMenu(null), 200); };
  const nav = p => { setPg(p); setSelectedProduct(null); setActiveMenu(null); setMobMenu(false); setMobSub(null); window.scrollTo({ top: 0, behavior: "smooth" }); window.history.replaceState(null, "", `#/${p}`); };
  const openProduct = (p) => { setSelectedProduct(p); setPg("product"); setActiveMenu(null); setMobMenu(false); setMobSub(null); window.scrollTo({ top: 0, behavior: "smooth" }); window.history.replaceState(null, "", `#/product/${p.id}`); };

  // ─── Hash URL helpers ───
  const makeHref = (slug) => `#/${slug}`;
  const productHref = (p) => `#/product/${p.id}`;
  const colourHref = (c) => `#/colour/${encodeURIComponent(c.name)}`;
  const aReset = { textDecoration: "none", color: "inherit" };
  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(c => c.product.id === item.product.id && c.size === item.size && (c.colour || null) === (item.colour || null));
      if (existing) return prev.map(c => c.product.id === item.product.id && c.size === item.size && (c.colour || null) === (item.colour || null) ? { ...c, qty: c.qty + item.qty } : c);
      return [...prev, item];
    });
  };
  const removeFromCart = (idx) => setCart(prev => prev.filter((_, i) => i !== idx));
  const cartTotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);
  const fmtP = p => `UGX ${p.toLocaleString()}`;
  const iconFor = s => ({ globe: <GlobeIcon/>, heart: <HeartIcon/>, palette: <PaletteIcon/>, users: <UsersIcon/>, leaf: <LeafIcon/>, truck: <TruckIcon/> }[s] || <PaletteIcon/>);

  const heroSlides = [
    { bg: `linear-gradient(135deg, #1a1a1a, #2a2a2a 40%, ${B.coralDk})`, tagline: "colours to transform rooms, moods and moments", cta1: "Shop Paints", cta2: "Shop Colours" },
    { bg: `linear-gradient(135deg, ${B.tealDk}, ${B.teal} 50%, ${B.gold})`, tagline: "Glorious greens — find a shade that brings the outside in", cta1: "Shop Now", cta2: "Explore" },
  ];

  const filteredProducts = PRODUCTS.filter(p => {
    const catOk = prodTab === "all" || p.category === prodTab;
    const finishOk = !finishFilter || p.finish.toLowerCase().includes(finishFilter.toLowerCase());
    return catOk && finishOk;
  });

  const currentColourCatName = Object.keys(COLOUR_CATEGORIES).find(k => COLOUR_CATEGORIES[k].slug === pg) || null;
  const currentStyleName = Object.keys(STYLE_CATEGORIES).find(k => STYLE_CATEGORIES[k].slug === pg) || null;

  const renderStory = key => {
    const p = storyPages[key]; if (!p) return null;
    return (<div>
      <section style={{ background: p.hg, padding: "80px 0 60px", color: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 3, marginBottom: 16, opacity: .8 }}>Our Story</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, marginBottom: 16 }}>{p.title}</h1>
          <p style={{ fontSize: 20, opacity: .9, fontWeight: 300 }}>{p.subtitle}</p>
        </div>
      </section>
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "32px 0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: `repeat(${p.stats.length}, 1fr)`, gap: 24, textAlign: "center" }}>
          {p.stats.map((s, i) => (<div key={i}><div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: B.coral }}>{s.n}</div><div style={{ fontSize: 13, opacity: .7, textTransform: "uppercase", letterSpacing: 1 }}>{s.l}</div></div>))}
        </div>
      </section>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
        {p.sections.map((s, i) => (<div key={i} style={{ marginBottom: 56, paddingBottom: i < p.sections.length - 1 ? 56 : 0, borderBottom: i < p.sections.length - 1 ? "1px solid #e8e4de" : "none" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: `${B.coral}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: B.coral }}>{iconFor(s.i)}</div>
            <div><h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 16 }}>{s.t}</h2>
              {s.c.split("\n\n").map((para, pi) => (<p key={pi} style={{ fontSize: 15, lineHeight: 1.85, color: "#555", marginBottom: 16 }}>{para}</p>))}
            </div></div></div>))}
      </section>
      <section style={{ background: B.warm, padding: "60px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, textAlign: "center", marginBottom: 36 }}>Explore More</h2>
          <div className="ge4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {Object.entries(storyPages).filter(([k]) => k !== key).map(([k, s]) => (
              <a key={k} href={makeHref(k)} onClick={e => { e.preventDefault(); nav(k); }} style={{ ...aReset, background: s.hg, borderRadius: 12, padding: 28, color: "#fff", cursor: "pointer", transition: "transform .3s", minHeight: 140, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"} onMouseLeave={e => e.currentTarget.style.transform = ""}>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{s.title}</h3><p style={{ fontSize: 12, opacity: .85 }}>{s.subtitle}</p>
              </a>))}
          </div>
        </div>
      </section>
    </div>);
  };

  return (
    <div style={{ fontFamily: "'Outfit', 'Segoe UI', sans-serif", color: "#1a1a1a", background: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; } a { text-decoration: none; color: inherit; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; border-radius: 4px; font-weight: 500; font-size: 14px; letter-spacing: .5px; text-transform: uppercase; cursor: pointer; transition: all .3s; border: none; font-family: 'Outfit',sans-serif; }
        .bp { background: ${B.coral}; color: #fff; } .bp:hover { background: ${B.coralDk}; }
        .bo { background: transparent; color: #fff; border: 2px solid #fff; } .bo:hover { background: rgba(255,255,255,.15); }
        .bd { background: #1a1a1a; color: #fff; } .bd:hover { background: #333; }
        .st { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 600; }
        .mega { position: absolute; top: 100%; left: 0; right: 0; background: #fff; box-shadow: 0 8px 40px rgba(0,0,0,.12); z-index: 100; animation: msd .25s ease; }
        @keyframes msd { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        .nl { position: relative; cursor: pointer; padding: 8px 0; font-size: 14px; font-weight: 500; letter-spacing: .3px; text-transform: uppercase; transition: color .2s; }
        .nl:hover,.nl.a { color: ${B.coral}; } .nl.a::after { content:''; position: absolute; bottom: -2px; left: 0; right: 0; height: 2px; background: ${B.coral}; }
        .pc { position: relative; border-radius: 8px; overflow: hidden; padding: 24px; min-height: 140px; display: flex; flex-direction: column; justify-content: flex-end; cursor: pointer; transition: transform .3s; } .pc:hover { transform: scale(1.02); }
        .ml { display: block; padding: 6px 0; font-size: 14px; color: #555; transition: color .2s; cursor: pointer; } .ml:hover { color: ${B.coral}; }
        .mo { position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 999; animation: fi .3s; }
        .md,.cart-drawer { position: fixed; top: 0; bottom: 0; width: 380px; max-width: 90vw; background: #fff; z-index: 1000; overflow-y: auto; }
        .md { left: 0; animation: sr .3s ease; }
        .cart-drawer { right: 0; animation: sl .3s ease; box-shadow: -4px 0 30px rgba(0,0,0,.15); }
        @keyframes fi { from { opacity: 0; } to { opacity: 1; } }
        @keyframes sr { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes sl { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .fc h4 { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 16px; color: #fff; }
        .fc span { display: block; font-size: 13px; color: rgba(255,255,255,.7); margin-bottom: 10px; cursor: pointer; } .fc span:hover { color: #fff; }
        .so { position: fixed; inset: 0; background: rgba(0,0,0,.6); z-index: 1000; display: flex; align-items: flex-start; justify-content: center; padding-top: 120px; animation: fi .2s; }
        .si { width: 100%; border: 2px solid #e0e0e0; border-radius: 6px; padding: 14px 18px; font-size: 16px; font-family: 'Outfit',sans-serif; outline: none; } .si:focus { border-color: ${B.coral}; }
        .cs::-webkit-scrollbar { display: none; }
        .tab { padding: 10px 24px; border-radius: 24px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all .2s; border: 2px solid transparent; font-family: 'Outfit',sans-serif; }
        .ta { background: ${B.coral}; color: #fff; border-color: ${B.coral}; }
        .ti { background: transparent; color: #555; border-color: #ddd; } .ti:hover { border-color: ${B.coral}; color: ${B.coral}; }
        @media (max-width: 768px) { .dsk { display: none !important; } .g4 { grid-template-columns: 1fr !important; } .g3 { grid-template-columns: 1fr !important; } .g2 { grid-template-columns: 1fr !important; } .g5 { grid-template-columns: 1fr 1fr !important; } .ge4 { grid-template-columns: 1fr 1fr !important; } .hero-s { height: 400px !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .g4 { grid-template-columns: repeat(2, 1fr) !important; } .g5 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (min-width: 769px) { .mob { display: none !important; } }
      `}</style>

      {/* Top Bar */}
      <div style={{ background: B.black, color: "#fff", fontSize: 13, padding: "8px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}><span style={{ display: "flex", alignItems: "center", gap: 6 }}><TruckIcon /> Free delivery over UGX 200,000</span><span style={{ display: "flex", alignItems: "center", gap: 6 }}><PaletteIcon /> 5 colour samples for UGX 15,000</span></div>
          <div className="dsk" style={{ display: "flex", gap: 20, fontSize: 12 }}><span style={{ cursor: "pointer" }}>Stockists</span><span style={{ cursor: "pointer" }}>Contact Us</span><span style={{ cursor: "pointer" }}>Professionals</span></div>
        </div>
      </div>

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 200, background: "#fff", boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,.08)" : "none", transition: "box-shadow .3s" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <button className="mob" onClick={() => setMobMenu(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><MenuIcon /></button>
          <a href={makeHref("home")} onClick={e => { e.preventDefault(); nav("home"); }} style={{ ...aReset, cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center" }}><img src={LOGO_HEADER} alt="Peacock Paints" style={{ height: 52 }} /></a>
          <nav className="dsk" style={{ display: "flex", gap: 28, alignItems: "center" }} onMouseLeave={mL}>
            {navData.map((item, i) => (<div key={i} onMouseEnter={() => mE(i)}><span className={`nl ${activeMenu === i ? "a" : ""}`} style={{ display: "flex", alignItems: "center", gap: 4 }}>{item.label} <ChevDown /></span></div>))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={() => setSearchOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><SearchIcon /></button>
            <button className="dsk" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><UserIcon /></button>
            <button onClick={() => setCartOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, position: "relative" }}><CartIcon />
              {cartCount > 0 && <span style={{ position: "absolute", top: -4, right: -6, background: B.coral, color: "#fff", fontSize: 10, width: 18, height: 18, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}>{cartCount}</span>}
            </button>
          </div>
        </div>
        {activeMenu !== null && (
          <div className="mega dsk" onMouseEnter={() => clearTimeout(mRef.current)} onMouseLeave={mL}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: navData[activeMenu].columns.map(c => c.type === "promo" ? "1.2fr" : "1fr").join(" "), gap: 32 }}>
              {navData[activeMenu].columns.map((col, ci) => (<div key={ci}>
                {col.type === "promo" ? (<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {col.items.map((pr, pi) => (<a key={pi} href={pr.page ? makeHref(pr.page) : undefined} onClick={e => { e.preventDefault(); if (pr.page) nav(pr.page); }} className="pc" style={{ ...aReset, display: "block", background: pr.bg, color: pr.dark ? "#fff" : "#1a1a1a" }}>
                    <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>{pr.title}</h4>
                    <p style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 10, opacity: .85 }}>{pr.desc}</p>
                    <span style={{ fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>{pr.cta} <Arr /></span>
                  </a>))}</div>) : col.title === "By Colours" ? (<div>
                  <h3 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: B.coral, marginBottom: 14 }}>{col.title}</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                    {col.links.map((l, li) => {
                      const catData = COLOUR_CATEGORIES[l];
                      const isLinked = !!catData;
                      return (
                        <a key={li} href={isLinked ? makeHref(catData.slug) : undefined} onClick={e => { e.preventDefault(); if (isLinked) nav(catData.slug); }}
                          style={{ ...aReset, display: "flex", alignItems: "center", gap: 9, padding: "7px 8px", borderRadius: 8, cursor: isLinked ? "pointer" : "default", transition: "background .18s" }}
                          onMouseEnter={e => { if (isLinked) e.currentTarget.style.background = "#f3f1ee"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
                          <div style={{ width: 28, height: 28, borderRadius: "50%", background: CAT_SWATCH_COLORS[l] || "#ddd", border: "2px solid rgba(0,0,0,.09)", flexShrink: 0, boxShadow: "inset 0 1px 2px rgba(255,255,255,.5)" }} />
                          <div>
                            <span style={{ fontSize: 13, color: isLinked ? "#2a2a2a" : "#aaa", fontWeight: isLinked ? 500 : 400, display: "block", lineHeight: 1.2 }}>{l}</span>
                            {isLinked && <span style={{ fontSize: 10, color: "#aaa" }}>{COLOUR_CATEGORIES[l].colors.length} shades</span>}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                  {col.footer && <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #e8e8e8" }}>{col.footer.map((f, fi) => (<span key={fi} className="ml" style={{ fontWeight: 600, color: B.coral }}>{f.label}</span>))}</div>}
                </div>) : (<div>
                  <h3 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: B.coral, marginBottom: 14 }}>{col.title}</h3>
                  {col.links.map((l, li) => {
                    const pageMap = {"Bedroom": "bedroom-inspiration", "Living Room": "livingroom-inspiration", "Dining Room": "diningroom-inspiration", "Kitchen": "kitchen-inspiration", "Bathroom": "bathroom-inspiration", "Whites": "whites-colour", "Creams": "creams-colour", "Neutrals": "neutrals-colour", "Pinks": "pinks-colour", "Yellows": "yellows-colour", "Greens": "greens-colour", "Blues": "blues-colour", "Greys": "greys-colour", "Metallics": "metallics-colour", "Contemporary": "contemporary-style", "Modern": "modern-style", "Boho": "boho-style", "Farmhouse": "farmhouse-style", "Scandi": "scandi-style", "Eclectic": "eclectic-style", "Interior Paint": "interior-paint", "Exterior Paint": "exterior-paint"};
                    const isFinishLink = col.title === "By Finish";
                    const isPageLink = !!pageMap[l];
                    const linkedProduct = PRODUCTS.find(p => p.name === l);
                    const isClickable = isFinishLink || isPageLink || !!linkedProduct;
                    const linkHref = isPageLink ? makeHref(pageMap[l]) : linkedProduct ? productHref(linkedProduct) : undefined;
                    return (<a key={li} href={linkHref} className="ml" onClick={e => {
                      e.preventDefault();
                      if (isFinishLink) { setFinishFilter(l); setProdTab("all"); setPg("home"); setSelectedProduct(null); setActiveMenu(null); setMobMenu(false); setMobSub(null); scrollToProdPending.current = true; }
                      else if (isPageLink) { nav(pageMap[l]); }
                      else if (linkedProduct) { openProduct(linkedProduct); }
                    }} style={{ ...aReset, cursor: isClickable ? "pointer" : "default", color: isFinishLink ? B.black : undefined }}>{l}</a>);
                  })}
                  {col.footer && <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #e8e8e8" }}>{col.footer.map((f, fi) => (<span key={fi} className="ml" style={{ fontWeight: 600, color: B.coral }}>{f.label}</span>))}</div>}
                </div>)}
              </div>))}
            </div>
          </div>
        )}
      </header>

      {/* Search */}
      {searchOpen && (<div className="so" onClick={() => setSearchOpen(false)}><div style={{ background: "#fff", borderRadius: 8, padding: 32, width: 600, maxWidth: "90vw", boxShadow: "0 20px 60px rgba(0,0,0,.2)" }} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}><h3 style={{ fontSize: 18, fontWeight: 600 }}>Search</h3><button onClick={() => setSearchOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}><CloseIcon /></button></div>
        <input className="si" placeholder="Search colours, paints, inspiration..." autoFocus />
      </div></div>)}

      {/* Cart Drawer */}
      {cartOpen && (<>
        <div className="mo" onClick={() => setCartOpen(false)} />
        <div className="cart-drawer">
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>Your Cart ({cartCount})</h3>
            <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}><CloseIcon /></button>
          </div>
          {cart.length === 0 ? (
            <div style={{ padding: "60px 24px", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16, opacity: .3 }}>🛒</div>
              <p style={{ fontSize: 15, color: "#999" }}>Your cart is empty</p>
              <button onClick={() => setCartOpen(false)} className="btn bp" style={{ marginTop: 20 }}>Continue Shopping</button>
            </div>
          ) : (<>
            <div style={{ padding: "16px 24px", flex: 1 }}>
              {cart.map((item, i) => {
                const colourData = item.colour ? trendingColours.find(c => c.name === item.colour) : null;
                return (
                <div key={i} style={{ display: "flex", gap: 16, padding: "16px 0", borderBottom: "1px solid #f0f0f0" }}>
                  <div style={{ width: 64, height: 64, background: B.off, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
                    <img src={item.product.img} alt="" style={{ maxHeight: 54, maxWidth: 54, objectFit: "contain" }} />
                    {colourData && <div style={{ position: "absolute", bottom: -4, right: -4, width: 22, height: 22, borderRadius: "50%", background: colourData.color, border: "2px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{item.product.name}</h4>
                    {item.colour && (
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                        {colourData && <div style={{ width: 14, height: 14, borderRadius: "50%", background: colourData.color, border: "1px solid rgba(0,0,0,0.1)", flexShrink: 0 }} />}
                        <span style={{ fontSize: 12, fontWeight: 500, color: "#555" }}>{item.colour}</span>
                      </div>
                    )}
                    <p style={{ fontSize: 12, color: "#999" }}>{item.size} × {item.qty}</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: B.coral, marginTop: 4 }}>{fmtP(item.price * item.qty)}</p>
                  </div>
                  <button onClick={() => removeFromCart(i)} style={{ background: "none", border: "none", cursor: "pointer", color: "#ccc", fontSize: 18, alignSelf: "flex-start" }}>×</button>
                </div>
              );})}
            </div>
            <div style={{ padding: "20px 24px", borderTop: "2px solid #eee" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontSize: 16, fontWeight: 600 }}>Total</span>
                <span style={{ fontSize: 20, fontWeight: 700, color: B.coral }}>{fmtP(cartTotal)}</span>
              </div>
              {cartTotal >= 200000 && <p style={{ fontSize: 13, color: B.teal, fontWeight: 600, marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}><TruckIcon /> Free delivery included!</p>}
              <button className="btn bp" style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 15 }}>Proceed to Checkout</button>
            </div>
          </>)}
        </div>
      </>)}

      {/* Mobile Menu */}
      {mobMenu && (<>
        <div className="mo" onClick={() => { setMobMenu(false); setMobSub(null); }} />
        <div className="md">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #eee" }}>
            {mobSub !== null ? (<><span style={{ fontWeight: 600 }}>{navData[mobSub].label}</span><button onClick={() => setMobSub(null)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: B.coral, fontWeight: 600 }}>Back</button></>) : (<><img src={LOGO_HEADER} alt="" style={{ height: 36 }} /><button onClick={() => { setMobMenu(false); setMobSub(null); }} style={{ background: "none", border: "none", cursor: "pointer" }}><CloseIcon /></button></>)}
          </div>
          {mobSub === null ? (<div>{navData.map((item, i) => (<div key={i} onClick={() => setMobSub(i)} style={{ padding: "14px 20px", borderBottom: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}><span style={{ fontWeight: 500 }}>{item.label}</span><ChevRight /></div>))}</div>) : (<div>
            {navData[mobSub].columns.filter(c => c.type !== "promo").map((col, ci) => (<div key={ci} style={{ padding: "16px 20px", borderBottom: "1px solid #f0f0f0" }}>
              <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: B.coral, marginBottom: 12 }}>{col.title}</h4>
              {col.links && col.links.map((l, li) => {
                const pageMap = {"Bedroom": "bedroom-inspiration", "Whites": "whites-colour", "Creams": "creams-colour", "Neutrals": "neutrals-colour", "Pinks": "pinks-colour", "Yellows": "yellows-colour", "Greens": "greens-colour", "Blues": "blues-colour", "Greys": "greys-colour", "Metallics": "metallics-colour"};
                const isFinishLink = col.title === "By Finish";
                const isPageLink = !!pageMap[l];
                const linkedProduct = PRODUCTS.find(p => p.name === l);
                const isClickable = isFinishLink || isPageLink || !!linkedProduct;
                const mobLinkHref = isPageLink ? makeHref(pageMap[l]) : linkedProduct ? productHref(linkedProduct) : undefined;
                return (<a key={li} href={mobLinkHref} onClick={e => {
                  e.preventDefault();
                  if (isFinishLink) { setFinishFilter(l); setProdTab("all"); setPg("home"); setSelectedProduct(null); setActiveMenu(null); setMobMenu(false); setMobSub(null); scrollToProdPending.current = true; }
                  else if (isPageLink) { nav(pageMap[l]); }
                  else if (linkedProduct) { openProduct(linkedProduct); }
                }} style={{ ...aReset, padding: "8px 0", fontSize: 14, color: isClickable ? B.coral : "#444", cursor: isClickable ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {l}{isClickable && !isFinishLink && <ChevRight />}
                </a>);
              })}
            </div>))}
          </div>)}
        </div>
      </>)}

      {/* ═══ PAGES ═══ */}
      {pg === "interior-paint" ? (
        <PaintCategoryPage category="interior" title="Interior Paints" subtitle="Premium interior paints for every room — from smooth matts to washable silks and high-gloss finishes." onOpenProduct={openProduct} productHrefFn={productHref} homeHref={makeHref("home")} nav={nav} />
      ) : pg === "exterior-paint" ? (
        <PaintCategoryPage category="exterior" title="Exterior Paints" subtitle="Durable exterior coatings engineered for East Africa's climate — protecting and beautifying your building for years." onOpenProduct={openProduct} productHrefFn={productHref} homeHref={makeHref("home")} nav={nav} />
      ) : pg === "product" && selectedProduct ? (
        <ProductDetailPage product={selectedProduct} onBack={() => nav("home")} onAddToCart={addToCart} onOpenProduct={openProduct} cart={cart} />
      ) : pg === "bedroom-inspiration" ? (
        <><div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px" }}><a href={makeHref("home")} onClick={e => { e.preventDefault(); nav("home"); }} style={{ ...aReset, fontSize: 13, color: B.coral, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}><ArrL /> Home</a></div>
        <RoomInspirationPage roomName="Bedroom" inspirations={BEDROOM_INSPIRATIONS} onBack={() => nav("home")} nav={nav} /></>
      ) : pg === "livingroom-inspiration" ? (
        <><div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px" }}><a href={makeHref("home")} onClick={e => { e.preventDefault(); nav("home"); }} style={{ ...aReset, fontSize: 13, color: B.coral, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}><ArrL /> Home</a></div>
        <RoomInspirationPage roomName="Living Room" inspirations={LIVING_ROOM_INSPIRATIONS} onBack={() => nav("home")} nav={nav} /></>
      ) : pg === "diningroom-inspiration" ? (
        <><div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px" }}><a href={makeHref("home")} onClick={e => { e.preventDefault(); nav("home"); }} style={{ ...aReset, fontSize: 13, color: B.coral, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}><ArrL /> Home</a></div>
        <RoomInspirationPage roomName="Dining Room" inspirations={DINING_ROOM_INSPIRATIONS} onBack={() => nav("home")} nav={nav} /></>
      ) : pg === "kitchen-inspiration" ? (
        <><div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px" }}><a href={makeHref("home")} onClick={e => { e.preventDefault(); nav("home"); }} style={{ ...aReset, fontSize: 13, color: B.coral, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}><ArrL /> Home</a></div>
        <RoomInspirationPage roomName="Kitchen" inspirations={KITCHEN_INSPIRATIONS} onBack={() => nav("home")} nav={nav} /></>
      ) : pg === "bathroom-inspiration" ? (
        <><div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px" }}><a href={makeHref("home")} onClick={e => { e.preventDefault(); nav("home"); }} style={{ ...aReset, fontSize: 13, color: B.coral, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}><ArrL /> Home</a></div>
        <RoomInspirationPage roomName="Bathroom" inspirations={BATHROOM_INSPIRATIONS} onBack={() => nav("home")} nav={nav} /></>
      ) : pg === "colour-detail" && selectedColour ? (
        <ColourDetailPage
          colour={selectedColour}
          categoryName={selectedColourCategory || selectedColourStyle}
          onBack={() => {
            const d = COLOUR_CATEGORIES[selectedColourCategory];
            if (d) { nav(d.slug); return; }
            const s = STYLE_CATEGORIES[selectedColourStyle];
            if (s) { nav(s.slug); return; }
            nav("home");
          }}
          onBackHome={() => nav("home")}
          onAddToCart={addToCart}
          homeHref={makeHref("home")}
          backHref={(() => { const d = COLOUR_CATEGORIES[selectedColourCategory]; if (d) return makeHref(d.slug); const s = STYLE_CATEGORIES[selectedColourStyle]; if (s) return makeHref(s.slug); return makeHref("home"); })()}
        />
      ) : currentColourCatName ? (
        <ColourCategoryPage
          categoryName={currentColourCatName}
          categoryData={COLOUR_CATEGORIES[currentColourCatName]}
          allColours={trendingColours}
          onBack={() => nav("home")}
          onNavCategory={(name) => { const d = COLOUR_CATEGORIES[name]; if (d) nav(d.slug); }}
          onOpenColour={(c) => { setSelectedColour(c); setSelectedColourCategory(currentColourCatName); nav("colour-detail"); }}
          homeHref={makeHref("home")}
          colourHrefFn={colourHref}
          catHrefFn={(name, data) => makeHref(data.slug)}
        />
      ) : currentStyleName ? (
        <StyleCategoryPage
          styleName={currentStyleName}
          styleData={STYLE_CATEGORIES[currentStyleName]}
          allColours={trendingColours}
          onBack={() => nav("home")}
          onNavStyle={(name) => { const d = STYLE_CATEGORIES[name]; if (d) nav(d.slug); }}
          onOpenColour={(c) => { setSelectedColour(c); setSelectedColourStyle(currentStyleName); setSelectedColourCategory(null); nav("colour-detail"); }}
          homeHref={makeHref("home")}
          colourHrefFn={colourHref}
          styleHrefFn={(name, data) => makeHref(data.slug)}
        />
      ) : pg !== "home" && storyPages[pg] ? (
        <><div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px" }}><a href={makeHref("home")} onClick={e => { e.preventDefault(); nav("home"); }} style={{ ...aReset, fontSize: 13, color: B.coral, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}><ArrL /> Home</a></div>{renderStory(pg)}</>
      ) : (<>
        {/* Hero */}
        <section className="hero-s" style={{ position: "relative", height: 520, overflow: "hidden" }}>
          {heroSlides.map((sl, i) => (<div key={i} style={{ position: "absolute", inset: 0, background: sl.bg, opacity: heroSlide === i ? 1 : 0, transition: "opacity .8s ease", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center", color: "#fff", padding: "0 24px", maxWidth: 700 }}>
              {i === 0 && <div style={{ marginBottom: 20 }}><img src={LOGO_HERO} alt="" style={{ height: 120, filter: "invert(1)", mixBlendMode: "screen", opacity: .95 }} /></div>}
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: i === 0 ? 28 : 40, fontWeight: 500, lineHeight: 1.4, marginBottom: 32 }}>{sl.tagline}</h1>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><button className="btn bo">{sl.cta1}</button><button className="btn bo">{sl.cta2}</button></div>
            </div>
          </div>))}
          <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 10 }}>
            {heroSlides.map((_, i) => (<button key={i} onClick={() => setHeroSlide(i)} style={{ width: heroSlide === i ? 32 : 10, height: 10, borderRadius: 5, background: heroSlide === i ? "#fff" : "rgba(255,255,255,.5)", border: "none", cursor: "pointer", transition: "all .3s" }} />))}
          </div>
        </section>

        {/* Quick Links */}
        <section style={{ background: B.warm, borderBottom: "1px solid #e8e2d8" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {["Paints","Tools","Samples"].map((l, i) => (<div key={i} style={{ padding: "18px 40px", fontSize: 15, fontWeight: 600, cursor: "pointer", borderRight: i < 2 ? "1px solid #e0dad0" : "none", transition: "background .2s" }} onMouseEnter={e => e.currentTarget.style.background = "#e6e0d6"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>{l}</div>))}
          </div>
        </section>

        {/* Trending Colours */}
        <section style={{ background: B.off, padding: "60px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
              <h2 className="st">Our trending colours</h2>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button className="btn bd dsk">Shop all colours</button>
                {/* Prev arrow */}
                <button
                  onClick={() => setColourCarouselIdx(i => Math.max(0, i - 1))}
                  disabled={colourCarouselIdx === 0}
                  style={{ width: 42, height: 42, borderRadius: "50%", border: "1.5px solid #ddd", background: colourCarouselIdx === 0 ? "#f5f5f5" : "#fff", cursor: colourCarouselIdx === 0 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: colourCarouselIdx === 0 ? "#ccc" : "#333", transition: "all .2s", flexShrink: 0 }}>
                  <ArrL />
                </button>
                {/* Next arrow */}
                <button
                  onClick={() => setColourCarouselIdx(i => Math.min(trendingColours.length - CARDS_VISIBLE, i + 1))}
                  disabled={colourCarouselIdx >= trendingColours.length - CARDS_VISIBLE}
                  style={{ width: 42, height: 42, borderRadius: "50%", border: "1.5px solid #1a1a1a", background: colourCarouselIdx >= trendingColours.length - CARDS_VISIBLE ? "#f5f5f5" : "#1a1a1a", cursor: colourCarouselIdx >= trendingColours.length - CARDS_VISIBLE ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: colourCarouselIdx >= trendingColours.length - CARDS_VISIBLE ? "#ccc" : "#fff", transition: "all .2s", flexShrink: 0 }}>
                  <Arr />
                </button>
              </div>
            </div>
            {/* Cards grid — 5 visible */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
              {trendingColours.slice(colourCarouselIdx, colourCarouselIdx + CARDS_VISIBLE).map((c, i) => (
                <a key={colourCarouselIdx + i} href={colourHref(c)}
                  onClick={e => { e.preventDefault(); handleColourClick(c); }}
                  style={{ ...aReset, borderRadius: 14, overflow: "hidden", cursor: "pointer", transition: "transform .3s, box-shadow .3s", display: "flex", flexDirection: "column", background: c.color }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-7px)"; e.currentTarget.style.boxShadow = "0 24px 52px rgba(0,0,0,.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                  {/* Swatch area */}
                  <div style={{ padding: "28px 20px 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "80%", aspectRatio: "1 / 1", filter: "drop-shadow(0 8px 20px rgba(0,0,0,.22))" }}>
                      <PaintBlob color={c.color} v={i} />
                    </div>
                  </div>
                  {/* Info bar */}
                  <div style={{ padding: "14px 16px 16px", background: "rgba(0,0,0,.18)" }}>
                    <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 2, textShadow: "0 1px 4px rgba(0,0,0,.3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}®</h4>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,.75)", marginBottom: 12, lineHeight: 1.4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.desc}</p>
                    <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
                      <button onClick={e => { e.stopPropagation(); e.preventDefault(); handleColourClick(c); }} style={{ flex: 1, padding: "7px 0", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 4, fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "'Outfit',sans-serif", letterSpacing: .3 }}>Shop</button>
                      <button onClick={e => { e.stopPropagation(); e.preventDefault(); }} style={{ flex: 1, padding: "7px 0", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,.65)", borderRadius: 4, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>+ Sample</button>
                      <button onClick={e => { e.stopPropagation(); e.preventDefault(); handleColourClick(c); }} style={{ width: 30, height: 30, background: "rgba(255,255,255,.2)", border: "none", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}><Arr /></button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {/* Progress indicator */}
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 24 }}>
              {Array.from({ length: Math.ceil(trendingColours.length / CARDS_VISIBLE) }).map((_, i) => {
                const isActive = Math.floor(colourCarouselIdx / CARDS_VISIBLE) === i;
                return <button key={i} onClick={() => setColourCarouselIdx(i * CARDS_VISIBLE)} style={{ width: isActive ? 24 : 8, height: 8, borderRadius: 4, background: isActive ? "#1a1a1a" : "#ccc", border: "none", cursor: "pointer", transition: "all .3s", padding: 0 }} />;
              })}
            </div>
          </div>
        </section>

        {/* ═══ FULL PRODUCT CATALOGUE ═══ */}
        <section ref={prodSectionRef} style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
          <div style={{ marginBottom: 32 }}>
            <h2 className="st" style={{ marginBottom: 8 }}>Our complete product range</h2>
            <p style={{ fontSize: 15, color: "#666" }}>Click any product for full details, size options, and ordering</p>
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: finishFilter ? 16 : 32, flexWrap: "wrap" }}>
            {[{ k: "all", l: `All (${PRODUCTS.length})` },{ k: "interior", l: `Interior (${PRODUCTS.filter(p=>p.category==="interior").length})` },{ k: "exterior", l: `Exterior (${PRODUCTS.filter(p=>p.category==="exterior").length})` },{ k: "specialist", l: `Specialist (${PRODUCTS.filter(p=>p.category==="specialist").length})` }].map(t => (
              <button key={t.k} className={`tab ${prodTab === t.k ? "ta" : "ti"}`} onClick={() => { setProdTab(t.k); setFinishFilter(null); }}>{t.l}</button>
            ))}
          </div>
          {finishFilter && (
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <span style={{ fontSize: 13, color: "#888" }}>Filtered by finish:</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: B.coral, color: "#fff", padding: "6px 14px 6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>
                {finishFilter}
                <span onClick={() => setFinishFilter(null)} style={{ cursor: "pointer", fontSize: 16, lineHeight: 1, opacity: .85, marginLeft: 2 }} title="Clear filter">×</span>
              </span>
              <span style={{ fontSize: 13, color: "#aaa" }}>({filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""})</span>
            </div>
          )}
          <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {filteredProducts.map(p => (
              <a key={p.id} href={productHref(p)} onClick={e => { e.preventDefault(); openProduct(p); }} style={{ ...aReset, display: "block", background: "#fff", borderRadius: 12, border: "1px solid #eee", overflow: "hidden", cursor: "pointer", transition: "transform .3s, box-shadow .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                <div style={{ background: B.off, padding: "20px 16px", display: "flex", alignItems: "center", justifyContent: "center", height: 200, position: "relative" }}>
                  <img src={p.img} alt={p.name} style={{ maxHeight: 170, maxWidth: "80%", objectFit: "contain", filter: "drop-shadow(0 6px 12px rgba(0,0,0,.12))" }} />
                  {p.tag && <span style={{ position: "absolute", top: 10, left: 10, background: p.tag === "Best Seller" ? B.coral : p.tag === "New" ? B.teal : p.tag === "Specialist" ? B.gold : "#5C2D6D", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>{p.tag}</span>}
                  {p.grade && <span style={{ position: "absolute", top: 10, right: 10, background: "#fff", border: `2px solid ${B.coral}`, color: B.coral, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>G{p.grade}</span>}
                </div>
                <div style={{ padding: "16px 18px 18px" }}>
                  <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{p.name}</h4>
                  <p style={{ fontSize: 12, color: "#777", lineHeight: 1.4, marginBottom: 10, minHeight: 34 }}>{p.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: B.coral }}>From {fmtP(p.sizes[0].price)}</span>
                    <span style={{ fontSize: 12, color: "#999" }}>{p.sizes.map(s => s.size).join(" • ")}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section style={{ background: `linear-gradient(135deg, ${B.coral}, ${B.coralDk})`, padding: "60px 0" }}>
          <div className="g2" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div style={{ color: "#fff" }}><h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 600, marginBottom: 12 }}>Inspiration in your inbox</h2><p style={{ fontSize: 15, opacity: .9, lineHeight: 1.6 }}>Latest colour trends + 10% off your first purchase</p></div>
            <div style={{ display: "flex", gap: 12 }}><input type="email" placeholder="Email Address" style={{ flex: 1, padding: "14px 18px", borderRadius: 6, border: "none", fontSize: 15, fontFamily: "'Outfit',sans-serif", outline: "none" }} /><button className="btn" style={{ background: B.black, color: "#fff" }}>Sign Up</button></div>
          </div>
        </section>

        {/* Info Cards */}
        <section style={{ background: B.off, padding: "60px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <h2 className="st" style={{ marginBottom: 36 }}>We're here for you</h2>
            <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[{ t: "Inspiration", d: "Design trends for 2026", c: "Discover", bg: `linear-gradient(135deg,${B.teal}90,${B.tealDk})` },{ t: "How To Guides", d: "Expert tips for perfect results", c: "Tips", bg: `linear-gradient(135deg,${B.coral}90,${B.coralDk})` },{ t: "Visit Us", d: "Find a Peacock stockist", c: "Find store", bg: `linear-gradient(135deg,${B.gold}90,#C89820)` }].map((c, i) => (
                <div key={i} style={{ borderRadius: 12, overflow: "hidden", transition: "transform .3s", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"} onMouseLeave={e => e.currentTarget.style.transform = ""}>
                  <div style={{ background: c.bg, height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ fontSize: 44, opacity: .4, color: "#fff" }}>{["🎨","🖌️","📍"][i]}</span></div>
                  <div style={{ padding: 20, background: "#fff" }}><h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{c.t}</h3><p style={{ fontSize: 13, color: "#666", marginBottom: 12 }}>{c.d}</p><span style={{ fontSize: 13, fontWeight: 600, color: B.coral, display: "flex", alignItems: "center", gap: 4 }}>{c.c} <Arr /></span></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>)}

      {/* Footer */}
      <footer style={{ background: B.black, color: "#fff", padding: "60px 0 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="g5" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.5fr", gap: 40, paddingBottom: 40 }}>
            <div><div style={{ marginBottom: 20 }}><img src={LOGO_FOOTER} alt="" style={{ height: 50, filter: "invert(1)", mixBlendMode: "screen", opacity: .9 }} /></div><p style={{ fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.6 }}>The Painters' Paint. Premium paints for every room, surface, and style.</p></div>
            <div className="fc"><h4>Shop</h4><span>Colours</span><span>Paint</span><span>Accessories</span><span>Inspiration</span></div>
            <div className="fc"><h4>Company</h4><a href={makeHref("about")} onClick={e => { e.preventDefault(); nav("about"); }} style={aReset}>About Us</a><a href={makeHref("sustainability")} onClick={e => { e.preventDefault(); nav("sustainability"); }} style={aReset}>Sustainability</a><a href={makeHref("community")} onClick={e => { e.preventDefault(); nav("community"); }} style={aReset}>Community</a><a href={makeHref("foundation")} onClick={e => { e.preventDefault(); nav("foundation"); }} style={aReset}>Foundation</a></div>
            <div className="fc"><h4>Support</h4><span>Help & FAQs</span><span>Find Stockist</span><span>Delivery</span><span>Returns</span></div>
            <div className="fc"><h4>Contact</h4><p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", lineHeight: 1.6, marginBottom: 16 }}>Questions? We're here to help.</p><p style={{ fontSize: 13, color: "rgba(255,255,255,.5)", marginBottom: 12 }}>Mon–Fri: 8:00–17:00</p><div style={{ display: "flex", gap: 16 }}><span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(255,255,255,.7)", cursor: "pointer" }}><PhoneIcon /> Call</span><span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(255,255,255,.7)", cursor: "pointer" }}><MailIcon /> Email</span></div></div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", gap: 20, fontSize: 12, color: "rgba(255,255,255,.4)" }}><span>Privacy</span><span>Terms</span><span>Cookies</span></div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>©2026 Peacock Paints Limited — The Painters' Paint</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
