import { CarFront, Fuel, Leaf, Package, ShieldCheck } from 'lucide-react';
import { brochureUrl, slugify } from '@/lib/slug';

export type Brochure = {
  fileName: string;
  title: string;
  family: string;
  model: string;
  summary: string;
  highlights: string[];
  accent: string;
};

export type ProductModel = {
  slug: string;
  name: string;
  shortName: string;
  imageCount: number;
  brochureFile: string;
  summary: string;
  highlights: string[];
  specNotes: string[];
  accent: string;
};

export type ProductFamily = {
  slug: string;
  name: string;
  imageCount: number;
  tagline: string;
  description: string;
  icon: typeof CarFront;
  accent: string;
  overviewBullets: string[];
  models: ProductModel[];
};

export const contactDetails = {
  name: 'Raj Motors',
  email: 'rajmotors97497@gmail.com',
  phone: '9213597497',
  address: 'Near Kothi Chokdi, Baroda Highway Road, near Sarvotam Hotel, Godhra 389001',
};

const brochureSet: Brochure[] = [
  {
    fileName: '20231012_yodha_1700.pdf',
    title: 'Yodha 1700',
    family: 'Yodha',
    model: 'Yodha 1700',
    summary: 'Rugged hauling-focused pickup positioning with a heavy-duty product presentation.',
    highlights: ['Built for hard-working routes', 'Pickup-oriented utility', 'Durability story'],
    accent: 'from-brand-600/90 via-brand-500/75 to-cyan-500/60',
  },
  {
    fileName: '20250130_ace_2dot0_cng.pdf',
    title: 'Ace 2.0 CNG',
    family: 'Ace',
    model: 'Ace 2.0 CNG',
    summary: 'Low running-cost city cargo variant focused on cleaner fuel and efficient daily operations.',
    highlights: ['CNG efficiency story', 'City logistics ready', 'Cost-conscious fleet fit'],
    accent: 'from-emerald-500/90 via-teal-500/70 to-cyan-500/60',
  },
  {
    fileName: '20250130_ace_gold_petrol.pdf',
    title: 'Ace Gold Petrol',
    family: 'Ace',
    model: 'Ace Gold Petrol',
    summary: 'Petrol-powered compact cargo option for flexible everyday delivery duty.',
    highlights: ['Flexible petrol power', 'Compact route coverage', 'Easy daily usability'],
    accent: 'from-brand-500/90 via-sky-500/75 to-cyan-400/55',
  },
  {
    fileName: 'Ace Pro EV - Brochure (1).pdf',
    title: 'Ace Pro EV',
    family: 'Ace',
    model: 'Ace Pro EV',
    summary: 'Electric city cargo option centered on silent, low-emission delivery operations.',
    highlights: ['EV-powered operations', 'Silent urban delivery', 'Lower running cost narrative'],
    accent: 'from-sky-500/90 via-cyan-500/80 to-emerald-500/60',
  },
  {
    fileName: 'ACE PRO Bi-fuel - Brochure.pdf',
    title: 'Ace Pro Bi-fuel',
    family: 'Ace',
    model: 'Ace Pro Bi-fuel',
    summary: 'Dual-fuel positioning for fleets that need flexibility and operating efficiency.',
    highlights: ['Bi-fuel flexibility', 'Fleet-friendly economics', 'Operational range'],
    accent: 'from-lime-500/90 via-emerald-500/75 to-teal-500/55',
  },
  {
    fileName: 'Ace Gold Plus XL-Brochure.pdf',
    title: 'Ace Gold Plus XL',
    family: 'Ace',
    model: 'Ace Gold Plus XL',
    summary: 'Expanded load-focused Ace option for businesses needing more practical cargo volume.',
    highlights: ['XL cargo positioning', 'Utility-first layout', 'Business route support'],
    accent: 'from-brand-600/90 via-brand-500/75 to-sky-400/60',
  },
  {
    fileName: '20250130_intra_v20.pdf',
    title: 'Intra V20',
    family: 'Intra',
    model: 'Intra V20',
    summary: 'Entry Intra variant for compact cargo and flexible urban movement.',
    highlights: ['Compact route fit', 'Cargo micro-fleet usage', 'Efficient last-mile profile'],
    accent: 'from-indigo-500/90 via-sky-500/75 to-cyan-500/60',
  },
  {
    fileName: '20250130_intra_v30.pdf',
    title: 'Intra V30',
    family: 'Intra',
    model: 'Intra V30',
    summary: 'Mid-range Intra option for wider urban delivery and mixed-duty usage.',
    highlights: ['Balanced cargo role', 'Daily fleet fit', 'Urban logistics focus'],
    accent: 'from-blue-500/90 via-indigo-500/75 to-slate-500/60',
  },
  {
    fileName: '20250130_intra_v50.pdf',
    title: 'Intra V50',
    family: 'Intra',
    model: 'Intra V50',
    summary: 'Higher-capacity Intra option aimed at route density and larger day-to-day utility.',
    highlights: ['Higher capacity positioning', 'Fleet productivity story', 'Utility-focused use case'],
    accent: 'from-emerald-500/90 via-lime-500/75 to-teal-500/60',
  },
  {
    fileName: '20250130_intra_v70.pdf',
    title: 'Intra V70',
    family: 'Intra',
    model: 'Intra V70',
    summary: 'Largest Intra option in this set, geared toward heavier daily cargo and more demanding routes.',
    highlights: ['Top-end Intra positioning', 'Heavy-duty route profile', 'Fleet-ready story'],
    accent: 'from-slate-400/90 via-slate-600/75 to-zinc-800/70',
  },
  {
    fileName: 'Intra EV - Product Brochure (14).pdf',
    title: 'Intra EV',
    family: 'Intra',
    model: 'Intra EV',
    summary: 'Zero-emission Intra option for urban logistics, clean fleet planning, and quiet operation.',
    highlights: ['EV cargo operations', 'Low-noise delivery', 'Sustainability message'],
    accent: 'from-cyan-500/90 via-sky-500/75 to-emerald-500/65',
  },
  {
    fileName: 'INTRA vehicles booklet.pdf',
    title: 'Intra Vehicles Booklet',
    family: 'Intra',
    model: 'Intra lineup',
    summary: 'Reference booklet covering the broader Intra family and its delivery-oriented positioning.',
    highlights: ['Family overview', 'Model comparison support', 'Reference hub'],
    accent: 'from-blue-500/90 via-slate-500/75 to-cyan-500/55',
  },
  {
    fileName: 'EV Range Brochure 2026 - Low Res.pdf',
    title: 'EV Range 2026',
    family: 'EV Range',
    model: 'EV Range',
    summary: 'Umbrella EV reference for electric mobility across the lineup and future planning.',
    highlights: ['EV lineup overview', 'Future-ready mobility', 'Electric portfolio framing'],
    accent: 'from-violet-500/90 via-fuchsia-500/75 to-sky-500/60',
  },
  {
    fileName: 'Magic Leaflet - Horizontal_CTC-1.pdf',
    title: 'Magic Leaflet',
    family: 'Magic',
    model: 'Magic',
    summary: 'Compact people-mover or shuttle-style option with a practical urban mobility story.',
    highlights: ['Compact urban mobility', 'Passenger-friendly positioning', 'Business shuttle use case'],
    accent: 'from-brand-700/90 via-brand-500/75 to-cyan-400/60',
  },
];

export const families: ProductFamily[] = [
  {
    slug: 'ace',
    name: 'Ace',
    imageCount: 10,
    tagline: 'Small cargo, big utility.',
    description: 'The Ace family brings efficient city cargo options across fuel types and electric power.',
    icon: Package,
    accent: 'from-brand-700/90 via-brand-500/75 to-sky-400/60',
    overviewBullets: [
      'The lineup covers EV, bi-fuel, petrol, and CNG options.',
      'Built for city delivery, small business transport, and daily route work.',
      'Best for buyers who want low operating cost and compact dimensions.',
    ],
    models: [
      {
        slug: 'ace-pro-ev',
        name: 'Ace Pro EV',
        shortName: 'Pro EV',
        imageCount: 2,
        brochureFile: 'Ace Pro EV - Brochure (1).pdf',
        summary: 'Electric city cargo model with a clean, quiet delivery story.',
        highlights: ['Electric mobility', 'Low-noise urban routes', 'Fleet-ready efficiency'],
        specNotes: ['Best used for inner-city deliveries', 'Supports clean fleet branding', 'Strong EV story'],
        accent: 'from-sky-500/90 via-cyan-500/80 to-emerald-500/60',
      },
      {
        slug: 'ace-pro-bi-fuel',
        name: 'Ace Pro Bi-fuel',
        shortName: 'Bi-fuel',
        imageCount: 2,
        brochureFile: 'ACE PRO Bi-fuel - Brochure.pdf',
        summary: 'Dual-fuel model for operators balancing flexibility and operating cost.',
        highlights: ['Dual-fuel flexibility', 'Fleet efficiency', 'Route adaptability'],
        specNotes: ['Good fit for mixed-route operations', 'Useful for cost-sensitive fleets', 'Focuses on operating range'],
        accent: 'from-lime-500/90 via-emerald-500/75 to-teal-500/55',
      },
      {
        slug: 'ace-gold-plus-xl',
        name: 'Ace Gold Plus XL',
        shortName: 'Gold Plus XL',
        imageCount: 2,
        brochureFile: 'Ace Gold Plus XL-Brochure.pdf',
        summary: 'Load-oriented Ace variant with extra utility emphasis.',
        highlights: ['Expanded cargo story', 'Business-friendly utility', 'Practical loading focus'],
        specNotes: ['Use for higher-volume deliveries', 'Targets small fleets and traders', 'Strong anchor for the Ace range'],
        accent: 'from-brand-600/90 via-brand-500/75 to-sky-400/60',
      },
      {
        slug: 'ace-gold-petrol',
        name: 'Ace Gold Petrol',
        shortName: 'Gold Petrol',
        imageCount: 2,
        brochureFile: '20250130_ace_gold_petrol.pdf',
        summary: 'Petrol-powered compact cargo option for flexible urban use.',
        highlights: ['Petrol power', 'Flexible daily use', 'Compact footprint'],
        specNotes: ['Simpler powertrain choice', 'Useful where petrol is preferred', 'Fits light cargo duties'],
        accent: 'from-brand-500/90 via-sky-500/75 to-cyan-400/55',
      },
      {
        slug: 'ace-2-0-cng',
        name: 'Ace 2.0 CNG',
        shortName: '2.0 CNG',
        imageCount: 2,
        brochureFile: '20250130_ace_2dot0_cng.pdf',
        summary: 'CNG-based compact cargo model focused on lower running cost.',
        highlights: ['Cleaner fuel story', 'Lower operating cost', 'City logistics fit'],
        specNotes: ['Strong value for repeat daily routes', 'Targets cost-sensitive buyers', 'Efficient positioning'],
        accent: 'from-emerald-500/90 via-teal-500/75 to-cyan-500/55',
      },
    ],
  },
  {
    slug: 'intra',
    name: 'Intra',
    imageCount: 10,
    tagline: 'The flexible urban cargo family.',
    description: 'The Intra lineup spans multiple variants, including EV and booklet-level family coverage.',
    icon: Fuel,
    accent: 'from-sky-500/90 via-blue-500/75 to-indigo-500/60',
    overviewBullets: [
      'Variants range from V20 through V70 plus EV.',
      'Best for delivery work that needs a step up in size and utility.',
      'The booklet and EV model help explain the broader family story.',
    ],
    models: [
      {
        slug: 'intra-v20',
        name: 'Intra V20',
        shortName: 'V20',
        imageCount: 2,
        brochureFile: '20250130_intra_v20.pdf',
        summary: 'Compact Intra entry model for lightweight urban routes.',
        highlights: ['Compact delivery role', 'Urban route flexibility', 'Entry-family story'],
        specNotes: ['Use as the smallest Intra family touchpoint', 'Good for local distribution', 'Keeps operating story simple'],
        accent: 'from-indigo-500/90 via-sky-500/75 to-cyan-500/55',
      },
      {
        slug: 'intra-v30',
        name: 'Intra V30',
        shortName: 'V30',
        imageCount: 2,
        brochureFile: '20250130_intra_v30.pdf',
        summary: 'Mid-range Intra model for balanced urban cargo use.',
        highlights: ['Balanced utility', 'Daily fleet role', 'Mid-family positioning'],
        specNotes: ['Good general-purpose Intra page', 'Pairs well with city logistics', 'Useful for fleet comparison'],
        accent: 'from-blue-500/90 via-indigo-500/75 to-slate-500/60',
      },
      {
        slug: 'intra-v50',
        name: 'Intra V50',
        shortName: 'V50',
        imageCount: 2,
        brochureFile: '20250130_intra_v50.pdf',
        summary: 'Higher-capacity Intra model emphasizing route productivity.',
        highlights: ['Higher capacity story', 'Productive fleet use', 'Route efficiency'],
        specNotes: ['Position above the V30 page', 'Useful for larger loads', 'Strong choice for business buyers'],
        accent: 'from-emerald-500/90 via-lime-500/75 to-teal-500/55',
      },
      {
        slug: 'intra-v70',
        name: 'Intra V70',
        shortName: 'V70',
        imageCount: 2,
        brochureFile: '20250130_intra_v70.pdf',
        summary: 'Largest model in the Intra V-series set with heavier-duty positioning.',
        highlights: ['Top-end utility', 'Heavier route profile', 'Fleet-ready positioning'],
        specNotes: ['Use as the flagship V-series page', 'Helps anchor the cargo family ladder', 'Broad business use case'],
        accent: 'from-slate-400/90 via-slate-600/75 to-zinc-800/70',
      },
      {
        slug: 'intra-ev',
        name: 'Intra EV',
        shortName: 'EV',
        imageCount: 2,
        brochureFile: 'Intra EV - Product Brochure (14).pdf',
        summary: 'Zero-emission Intra model for urban fleet electrification.',
        highlights: ['Electric cargo mobility', 'Quiet city operation', 'Lower-emission fleet planning'],
        specNotes: ['Important EV page in the lineup', 'Great for sustainability messaging', 'Use the PDF as the proof point'],
        accent: 'from-cyan-500/90 via-sky-500/75 to-emerald-500/65',
      },
    ],
  },
  {
    slug: 'yodha',
    name: 'Yodha',
    imageCount: 7,
    tagline: 'Built for tough hauling jobs.',
    description: 'Yodha is represented here by a strong model page focused on rugged utility.',
    icon: ShieldCheck,
    accent: 'from-brand-700/90 via-brand-500/75 to-cyan-400/65',
    overviewBullets: [
      'Use this family page as the rugged workhorse showcase.',
      'This model is best for users who need durability messaging.',
      'Position it as a heavy-duty pickup/hauler family.',
    ],
    models: [
      {
        slug: 'yodha-1700',
        name: 'Yodha 1700',
        shortName: '1700',
        imageCount: 7,
        brochureFile: '20231012_yodha_1700.pdf',
        summary: 'Rugged hauling model for hard-working routes and load-focused operators.',
        highlights: ['Heavy-duty positioning', 'Load and haul utility', 'Tough worksite story'],
        specNotes: ['Use as the rugged family hero', 'Great for construction or goods hauling messaging', 'Single-model family with a strong anchor'],
        accent: 'from-brand-700/90 via-brand-500/75 to-cyan-400/65',
      },
    ],
  },
  {
    slug: 'magic',
    name: 'Magic',
    imageCount: 2,
    tagline: 'Compact urban mobility.',
    description: 'Magic brings a nimble passenger or shuttle-style presence for city movement.',
    icon: CarFront,
    accent: 'from-brand-700/90 via-brand-500/75 to-cyan-400/55',
    overviewBullets: [
      'Use this page for compact people-mover positioning.',
      'Works well for shuttle, urban passenger, or short-route transport themes.',
      'The leaflet format is ideal for quick, mobile-friendly reading.',
    ],
    models: [
      {
        slug: 'magic',
        name: 'Magic',
        shortName: 'Magic',
        imageCount: 2,
        brochureFile: 'Magic Leaflet - Horizontal_CTC-1.pdf',
        summary: 'Compact mobility leaflet for city passenger or shuttle-style use.',
        highlights: ['Urban shuttle role', 'Compact footprint', 'Business mobility story'],
        specNotes: ['A good side-page for city passenger transport', 'Keep language flexible because the leaflet is compact', 'Use the PDF download as the primary source'],
        accent: 'from-brand-700/90 via-brand-500/75 to-cyan-400/55',
      },
    ],
  },
  {
    slug: 'ev-range',
    name: 'EV Range',
    imageCount: 7,
    tagline: 'One umbrella page for electric mobility.',
    description: 'The EV Range page ties together the electric story across the site.',
    icon: Leaf,
    accent: 'from-violet-500/90 via-fuchsia-500/75 to-sky-500/60',
    overviewBullets: [
      'Use the umbrella EV range page to connect all electric models.',
      'It works as a funnel into Ace Pro EV and Intra EV.',
      'Ideal for clean-fleet and future-ready messaging.',
    ],
    models: [
      {
        slug: 'ev-range-2026',
        name: 'EV Range 2026',
        shortName: '2026 Range',
        imageCount: 7,
        brochureFile: 'EV Range Brochure 2026 - Low Res.pdf',
        summary: 'Portfolio reference for electric mobility across the Raj Motors lineup.',
        highlights: ['Lineup overview', 'Future-ready mobility', 'EV portfolio framing'],
        specNotes: ['Use as the gateway page for electric products', 'Helps connect multiple EV options', 'Good for fleet decision makers'],
        accent: 'from-violet-500/90 via-fuchsia-500/75 to-sky-500/60',
      },
    ],
  },
];

export const brochures = brochureSet;

export const flatModels = families.flatMap((family) =>
  family.models.map((model) => ({
    ...model,
    familySlug: family.slug,
    familyName: family.name,
  })),
);

export const modelBySlug = new Map(flatModels.map((model) => [model.slug, model]));
export const familyBySlug = new Map(families.map((family) => [family.slug, family]));

export const featuredBrochures = brochures.slice(0, 6);

export const brochureCount = brochures.length;
export const familyCount = families.length;

export const makeBrochureCardData = (brochure: Brochure) => ({
  ...brochure,
  slug: slugify(`${brochure.family}-${brochure.model}`),
  url: brochureUrl(brochure.fileName),
});
