/**
 * Eriyal Tiles & Sanitary — Central Site Configuration
 *
 * Centralized data file for all business details, branch locations,
 * contact numbers, WhatsApp configuration, brands, and image assets.
 * 
 * To update contact details:
 * Simply fill in `phone` and `whatsapp` below with your real business numbers.
 */

export const brand = {
  name: 'Eriyal Tiles & Sanitary',
  tagline: 'Tiles, Sanitaryware & Electrical Showrooms',
  logo: '/images/eriyal-logo.jpeg',
};

export const colors = {
  deepNavy: '#25236F',
  magenta: '#E91E63',
  white: '#FFFFFF',
  offWhite: '#F7F7F9',
  charcoal: '#171717',
};

/* ─── Contact Information (Centralized) ───────────────────
   Replace empty strings with actual business phone & WhatsApp numbers.
   Examples:
     phone: '+91 98765 43210',
     whatsapp: '919876543210', (digits only, no + or spaces)
   ──────────────────────────────────────────────────────── */
export const contact = {
  phone: '+91 79079 43219', // REPLACE WITH ACTUAL PHONE NUMBER (e.g. '+91 98765 43210')
  whatsapp: '+91 79079 43219', // REPLACE WITH ACTUAL WHATSAPP NUMBER (e.g. '919876543210')
  whatsappMessage:
    'Hello Eriyal Tiles & Sanitary, I would like to enquire about your tiles, sanitaryware, and electrical products.',
  email: '', // e.g. 'info@eriyaltiles.com'
  instagram: 'https://www.instagram.com/eriyal_tiles_gallery/',
  facebook: 'https://www.facebook.com/eriyalelectricals/',
};

/* ─── Branch Showrooms ──────────────────────────────────── */
export const branches = [
  {
    id: 'kuttippuram',
    name: 'Eriyal Tiles & Sanitary',
    locationTag: 'Kuttippuram Branch',
    address:
      'Eriyal Electricals, Tiles & Sanitary, One Way Road, Kavumopuram, Kuttippuram, Kerala 679571',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Eriyal%20Electricals%2C%20Tiles%20%26%20Sanitary%20One%20Way%20Rd%2C%20Kavumopuram%2C%20Kuttippuram%2C%20Kerala%20679571',
    coordinates: { bbox: '76.0524,10.8580,76.0724,10.8780', marker: '10.8680,76.0624' }
  },
  {
    id: 'valanchery',
    name: 'Eriyal Tiles & Sanitary',
    locationTag: 'Valanchery - Pookkattiri Branch',
    address:
      'Eriyal Tiles & Sanitary, Pookkattiri, Valanchery, Kerala 676552',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Eriyal%20Tiles%20and%20Sanitary%2C%20Pookkattiri%2C%20Valanchery%2C%20Kerala%20676552',
    coordinates: { bbox: '76.0505,10.8720,76.0905,10.9120', marker: '10.8920,76.0705' }
  },
];

/* ─── Hero Content ──────────────────────────────────────── */
export const heroContent = {
  eyebrow: 'Tiles · Sanitaryware · Electrical Essentials',
  headlineLine1: 'Transform Your Space.',
  headlineLine2: 'Elevate Your Living.',
  supportingText:
    'Explore premium floor & wall tiles, elegant sanitaryware, and modern electrical essentials at our Kuttippuram and Valanchery showrooms.',
  primaryCta: 'Explore Categories',
  secondaryCta: 'Find Our Showrooms',
};

/* ─── Brands Showcase with Official Brand Logos ─────────── */
export const brandShowcase = {
  title: 'Brands We Bring to Your Space',
  subtitle: 'Explore trusted brands across tiles, electrical products, and sanitaryware available at our showrooms.',
  brands: [
    { name: 'Kajaria', logo: '/images/brands/kajaria.png', category: 'Tiles', badgeColor: '#c8102e' },
    { name: 'Somany', logo: '/images/brands/somany.png', category: 'Tiles', badgeColor: '#00529b' },
    { name: 'Johnson Tiles', logo: '/images/brands/johnson.png', category: 'Tiles', badgeColor: '#d32f2f' },
    { name: 'Roff', logo: '/images/brands/roff.png', category: 'Tile Fixatives', badgeColor: '#1976d2' },
    { name: 'Goldmedal', logo: '/images/brands/goldmedal.png', category: 'Electricals', badgeColor: '#e65100' },
    { name: 'Cera', logo: '/images/brands/cera.png', category: 'Sanitaryware', badgeColor: '#00796b' },
    { name: 'Hindware', logo: '/images/brands/hindware.png', category: 'Sanitaryware', badgeColor: '#388e3c' },
    { name: 'Jaquar', logo: '/images/brands/jaquar.png', category: 'Bath Fittings', badgeColor: '#25236f' },
    { name: 'Kohler', logo: '/images/brands/kohler.png', category: 'Sanitaryware', badgeColor: '#111111' },
    { name: 'Parryware', logo: '/images/brands/parryware.png', category: 'Sanitaryware', badgeColor: '#e91e63' },
  ],
};

/* ─── Real Photography Image Assets ───────────────────── */
export const images = {
  hero: '/images/hero_bathroom.jpg',
  floorTiles: '/images/floor_tiles.png',
  wallTiles: '/images/wall_tiles.png',
  bathroomTiles: '/images/bathroom_tiles.png',
  vitrifiedTiles: '/images/vitrified_tiles.png',
  sanitaryware: '/images/bathroom_tiles.png',
  electrical: '/images/electrical_product_real.jpg',
  inspirationLiving: '/images/hero_bg.png',
  inspirationBathroom: '/images/bathroom_tiles.png',
  inspirationCommercial: '/images/vitrified_tiles.png',
  aboutShowroom: '/images/floor_tiles.png',
};

/* ─── Main Business Category Collections ───────────────── */
export const collections = [
  {
    id: 'floor-tiles',
    title: 'Floor Tiles',
    categoryTag: 'Tiles',
    subtitle: 'Polished porcelain, marble-effect, and heavy-duty vitrified flooring solutions.',
    image: images.floorTiles,
    span: 'large',
  },
  {
    id: 'wall-tiles',
    title: 'Wall Tiles & Decor',
    categoryTag: 'Tiles',
    subtitle: 'Designer wall cladding, kitchen backsplashes, and decorative feature tiles.',
    image: images.wallTiles,
    span: 'medium',
  },
  {
    id: 'bathroom-tiles',
    title: 'Bathroom & Anti-Skid Tiles',
    categoryTag: 'Tiles',
    subtitle: 'Slip-resistant floor tiles and moisture-proof wall tiles for modern wet areas.',
    image: images.bathroomTiles,
    span: 'medium',
  },
  {
    id: 'sanitaryware',
    title: 'Sanitaryware & Washbasins',
    categoryTag: 'Sanitaryware',
    subtitle: 'Designer pedestals, wall-hung WCs, vanity basins, and ceramic bath solutions.',
    image: images.sanitaryware,
    span: 'large',
  },
  {
    id: 'electrical-products',
    title: 'Electrical Switchboards & Lighting',
    categoryTag: 'Electricals',
    subtitle: 'Modular switchboards, touch switches, LED lighting, distribution boards, and wiring accessories.',
    image: images.electrical,
    span: 'medium',
  },
  {
    id: 'vitrified-tiles',
    title: 'Vitrified Tiles',
    categoryTag: 'Tiles',
    subtitle: 'Double charged, glazed, and full-body vitrified tiles with high durability.',
    image: images.vitrifiedTiles,
    span: 'medium',
  },
];

/* ─── Inspiration Panels ──────────────────────────────── */
export const inspirations = [
  {
    title: 'Modern Living Rooms',
    caption: 'Discover grand floor tiles and lighting setups for contemporary homes.',
    image: images.inspirationLiving,
  },
  {
    title: 'Elegant Bathrooms',
    caption: 'Explore vanity basins, rain showers, and anti-skid wall & floor combinations.',
    image: images.inspirationBathroom,
  },
  {
    title: 'Commercial & Retail Spaces',
    caption: 'Durable vitrified tiles and robust electrical solutions built for heavy traffic.',
    image: images.inspirationCommercial,
  },
];

/* ─── Benefits ────────────────────────────────────────── */
export const benefits = [
  {
    icon: 'Layers',
    title: 'Comprehensive Category Range',
    description: 'Find floor & wall tiles, sanitaryware, and electrical essentials all under one roof.',
  },
  {
    icon: 'Store',
    title: 'Two Convenient Showrooms',
    description: 'Visit us in Kuttippuram or Pookkattiri, Valanchery to touch, feel, and compare materials.',
  },
  {
    icon: 'Bath',
    title: 'Quality Sanitaryware & Fittings',
    description: 'Browse modern washbasins, WCs, faucets, and bathroom accessories from trusted brands.',
  },
  {
    icon: 'Zap',
    title: 'Electrical & Lighting Solutions',
    description: 'Explore modular switchboards, LED lighting, and essential wiring supplies for your build.',
  },
  {
    icon: 'Palette',
    title: 'In-Person Design Assistance',
    description: 'Get guidance on matching tile patterns, sanitary fittings, and electrical layouts.',
  },
];

/* ─── Navigation Links ────────────────────────────────── */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#collections' },
  { label: 'Brands', href: '#brands' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Showrooms', href: '#branches' },
  { label: 'Contact', href: '#contact' },
];
