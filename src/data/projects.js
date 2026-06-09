// Category definitions used by the filter chips.
// `id` is the value stored in a project's `categories` array.
// `label` is what the chip displays.
export const CATEGORIES = [
  { id: 'must-see', label: 'All' },
  { id: 'product', label: 'Product' },
  { id: 'visual', label: 'Visual' },
  { id: 'frontend', label: 'Frontend' },
]

export const DEFAULT_CATEGORY = 'must-see'

/**
 * Project shape:
 * {
 *   slug:        string   // unique, used for /projects/[slug]
 *   title:       string   // shown on the folder tab
 *   subtitle:    string   // short one-liner under the title on the tab
 *   year:        string
 *   role:        string
 *   cover:       string   // image url (used by the detail page)
 *   gradient:    string   // CSS background for the "page" tucked inside the folder
 *   tags:        number   // shown bottom-left of the folder front ("04 Tags")
 *   shots:       number   // shown bottom-right of the folder front ("1012 Shots")
 *   categories:  string[] // ids from CATEGORIES; include 'must-see' to feature it
 *   metrics?:    { label: string, value: string }[]
 * }
 */

// Soft pastel gradients for the "page" tucked inside each folder (light mode).
const GRADIENTS = {
  sunset:
    'radial-gradient(130% 120% at 70% 18%, #f9a8d4 0%, rgba(249,168,212,0) 55%), radial-gradient(120% 120% at 95% 22%, #c4b5fd 0%, rgba(196,181,253,0) 50%), linear-gradient(120deg, #fde68a 0%, #fbcfe8 48%, #ddd6fe 100%)',
  ocean:
    'radial-gradient(130% 120% at 72% 18%, #a5f3fc 0%, rgba(165,243,252,0) 55%), radial-gradient(120% 120% at 95% 22%, #bfdbfe 0%, rgba(191,219,254,0) 50%), linear-gradient(120deg, #bbf7d0 0%, #a5f3fc 48%, #c7d2fe 100%)',
  lime:
    'radial-gradient(130% 120% at 72% 18%, #d9f99d 0%, rgba(217,249,157,0) 55%), radial-gradient(120% 120% at 95% 22%, #fde68a 0%, rgba(253,230,138,0) 50%), linear-gradient(120deg, #bbf7d0 0%, #d9f99d 48%, #fef08a 100%)',
  grape:
    'radial-gradient(130% 120% at 72% 18%, #f5d0fe 0%, rgba(245,208,254,0) 55%), radial-gradient(120% 120% at 95% 22%, #a5b4fc 0%, rgba(165,180,252,0) 50%), linear-gradient(120deg, #ddd6fe 0%, #fbcfe8 48%, #c4b5fd 100%)',
}
export const PROJECTS = [
  {
    slug: 'atlas-analytics',
    href: 'https://www.behance.net/gallery/221573199/Character-Design-for-Engagement',
    title: 'Character Design for Engagement',
    subtitle: 'Realtime product dashboard',
    year: '2025',
    role: 'Product Design · Frontend',
    cover:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    gradient: GRADIENTS.sunset,
    tags: 4,
    shots: 1012,
    categories: ['must-see', 'product', 'frontend', 'metrics'],
    metrics: [
      { label: 'Activation', value: '+38%' },
      { label: 'Load time', value: '120ms' },
    ],
  },
  {
    slug: 'nimbus-design-system',
    title: 'Nimbus Design System',
    subtitle: 'Component library & tokens',
    year: '2024',
    role: 'Design Systems',
    cover:
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80',
    gradient: GRADIENTS.grape,
    tags: 3,
    shots: 642,
    categories: ['must-see', 'frontend', 'visual'],
    metrics: [
      { label: 'Components', value: '120+' },
      { label: 'Adoption', value: '9 teams' },
    ],
  },
  {
    slug: 'verde-commerce',
    title: 'Verde Commerce',
    subtitle: 'Checkout reimagined',
    year: '2024',
    role: 'Product · Frontend',
    cover:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    gradient: GRADIENTS.lime,
    tags: 2,
    shots: 318,
    categories: ['must-see', 'product', 'metrics'],
    metrics: [
      { label: 'Conversion', value: '+21%' },
      { label: 'Drop-off', value: '-14%' },
    ],
  },
  {
    slug: 'lumen-brand',
    title: 'Lumen Brand',
    subtitle: 'Identity & motion language',
    year: '2023',
    role: 'Visual Design',
    cover:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    gradient: GRADIENTS.ocean,
    tags: 2,
    shots: 540,
    categories: ['must-see', 'visual'],
  },
  {
    slug: 'pulse-mobile',
    title: 'Pulse Mobile',
    subtitle: 'Health tracking app',
    year: '2023',
    role: 'Product · Visual',
    cover:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    gradient: GRADIENTS.sunset,
    tags: 3,
    shots: 786,
    categories: ['must-see', 'product', 'visual', 'frontend'],
    metrics: [{ label: 'Retention', value: '+27%' }],
  },
  {
    slug: 'orbit-payments',
    title: 'Orbit Payments',
    subtitle: 'Borderless money transfers',
    year: '2025',
    role: 'Product · Frontend',
    cover:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
    gradient: GRADIENTS.ocean,
    tags: 3,
    shots: 824,
    categories: ['must-see', 'product', 'frontend'],
    metrics: [
      { label: 'Settlement', value: '2.4s' },
      { label: 'Fees', value: '-31%' },
    ],
  },
  {
    slug: 'fable-reader',
    title: 'Fable Reader',
    subtitle: 'A calmer reading app',
    year: '2024',
    role: 'Product · Visual',
    cover:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80',
    gradient: GRADIENTS.grape,
    tags: 2,
    shots: 466,
    categories: ['must-see', 'visual', 'product'],
  },
  {
    slug: 'harvest-os',
    title: 'Harvest OS',
    subtitle: 'Farm operations, unified',
    year: '2024',
    role: 'Product Design',
    cover:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gradient: GRADIENTS.lime,
    tags: 4,
    shots: 712,
    categories: ['must-see', 'product', 'metrics'],
    metrics: [
      { label: 'Yield', value: '+18%' },
      { label: 'Waste', value: '-22%' },
    ],
  },
  {
    slug: 'aurora-studio',
    title: 'Aurora Studio',
    subtitle: 'Motion & 3D explorations',
    year: '2023',
    role: 'Visual Design',
    cover:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    gradient: GRADIENTS.sunset,
    tags: 2,
    shots: 938,
    categories: ['must-see', 'visual'],
  },
  {
    slug: 'cobalt-cloud',
    title: 'Cobalt Cloud',
    subtitle: 'Developer infra console',
    year: '2025',
    role: 'Product · Frontend',
    cover:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    gradient: GRADIENTS.ocean,
    tags: 5,
    shots: 1184,
    categories: ['must-see', 'frontend', 'product', 'metrics'],
    metrics: [
      { label: 'Deploy time', value: '-44%' },
      { label: 'Uptime', value: '99.98%' },
    ],
  },
]
