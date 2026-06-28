import { Project, Metric, Service, ProcessStep, Testimonial, JournalArticle, Award } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'subhishi-valencia',
    title: 'Subhishi Valencia',
    category: 'Interior Architecture',
    location: 'Hyderabad, India',
    year: '2025',
    image: '/src/assets/images/subhishi_valencia.jpg',
    aspect: 'portrait',
    description: 'A luxurious modern dining room featuring a custom warm-wood-inlaid coffered ceiling, a premium white-veined marble table with soft grey-blue upholstered dining chairs, and a spectacular bespoke branch chandelier with frosted glass ginkgo leaf elements.',
    philosophies: ['Ginkgo Glass Chandelier', 'Walnut Inlaid Coffer', 'Book-Matched Marble Dining']
  },
  {
    id: 'shambala',
    title: 'Shambala',
    category: 'Landscape Architecture',
    location: 'Hyderabad, India',
    year: '2025',
    image: '/src/assets/images/shambala_landscape.jpg',
    aspect: 'portrait',
    description: 'An elegant organic outdoor landscape design featuring natural flagstone stone paved walkways, minimalist rectangular dark path lighting, and sophisticated terraced gardens with custom curved stone steps.',
    philosophies: ['Flagstone Pathing', 'Minimalist Rectangular Lamps', 'Terraced Stone Retaining']
  },
  {
    id: 'leopard-bar-room',
    title: 'The Leopard Bar Room',
    category: 'Interior Architecture',
    location: 'Jubilee Hills, Hyderabad',
    year: '2025',
    image: '/src/assets/images/luxury_bar_room.jpg',
    aspect: 'portrait',
    description: 'An eclectic luxury speakeasy-inspired lounge. Crafted with a dramatic crimson leopard-patterned coffered ceiling, hand-finished burgundy textured plaster walls, and a glowing custom honey-onyx backlit bar counter meeting a diagonal black-and-white checkered marble floor.',
    philosophies: ['Crimson Coffered Ceilings', 'Backlit Honey-Onyx Counter', 'Duotone Checkered Marble']
  },
  {
    id: 'ankura-master-suite',
    title: 'My Home Ankura - Master Suite',
    category: 'Interior Architecture',
    location: 'Gachibowli, Hyderabad',
    year: '2025',
    image: '/src/assets/images/my_home_ankura_1.jpg',
    aspect: 'portrait',
    description: 'A bespoke luxury master suite at My Home Ankura. Hand-drawn and engineered with a book-matched black marble feature wall, warm gold LED linear backlight troughs, and custom segmented curved velvet headboards.',
    philosophies: ['Backlit Onyx Troughing', 'Curved Segmented Headboard', 'Bespoke Brass Details']
  },
  {
    id: 'rivo-learning-centre',
    title: 'Rivo Early Learning Centre',
    category: 'Educational Architecture',
    location: 'Jubilee Hills, Hyderabad',
    year: '2025',
    image: '/src/assets/images/rivo_learning_centre.jpg',
    aspect: 'portrait',
    description: 'A contemporary learning environment designed with a curved, fair-faced concrete exterior, integrated natural stone walkways, and vibrant modern learning spaces.',
    philosophies: ['Curved Concrete Walls', 'Natural Stone Walkways', 'Playful Modern Branding']
  }
];

export const METRICS: Metric[] = [
  {
    id: 'm1',
    value: '5',
    label: 'Completed Projects',
    subtitle: 'Exacting high-end architectural designs delivered'
  },
  {
    id: 'm2',
    value: '4 Years',
    label: 'Studio Experience',
    subtitle: 'Founded and shaping environment since 2022'
  },
  {
    id: 'm3',
    value: 'Hyderabad',
    label: 'Design Hub',
    subtitle: 'Headquartered at Madhapur, Hyderabad'
  },
  {
    id: 'm4',
    value: '100%',
    label: 'Bespoke Focus',
    subtitle: 'Upholding hand-chiseled design & shape integrity'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'House & Villa Design',
    description: 'Custom houses, modern villas, and private estates tailored for your lifestyle, comfort, and local climate.',
    iconName: 'Home',
    gridSpan: 'large',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's2',
    title: 'Interior Design',
    description: 'Beautiful interior planning, custom furniture selection, optimal lighting setups, and tactile material finishes.',
    iconName: 'Compass',
    gridSpan: 'medium',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's3',
    title: 'Garden & Pools',
    description: 'Quiet outdoor garden designs, clean pools, and cozy seating spots blended beautifully with nature.',
    iconName: 'Leaf',
    gridSpan: 'small',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's4',
    title: 'Offices & Shops',
    description: 'Inspiring spaces for workspaces, retail showrooms, cafes, and creative design studios.',
    iconName: 'Layers',
    gridSpan: 'small',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's5',
    title: 'Remodeling',
    description: 'Upgrading existing rooms and classic houses with modern features, open layouts, and durable textures.',
    iconName: 'Globe',
    gridSpan: 'medium',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's6',
    title: '3D Visual Tours',
    description: 'Realistic photo previews, digital video walkthroughs, and miniature physical wooden models of your future home.',
    iconName: 'Maximize',
    gridSpan: 'large',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'First Consultation',
    description: 'We meet with you to explore your ideas and needs, look at the project site, and study properties of natural daylight.',
    milestone: 'Site Analysis & Clear Idea Brief'
  },
  {
    stepNumber: '02',
    title: 'Concept Sketches',
    description: 'We design layout options and build 3D visual models and hand drawings to show you how the space will look.',
    milestone: 'Layout Concept & Styling Agreed'
  },
  {
    stepNumber: '03',
    title: 'Material Selection',
    description: 'We pick matching premium natural stone, wood types, paint finishes, and custom metal fixtures together.',
    milestone: 'Final Material Samples Approved'
  },
  {
    stepNumber: '04',
    title: 'Detailed Planning',
    description: 'We create perfect blueprints and structural maps covering lighting, plumbing, and wall drawings for the builder.',
    milestone: 'Construction Plan Set Delivered'
  },
  {
    stepNumber: '05',
    title: 'On-Site Overseeing',
    description: 'We supervise builders and custom craftsmen on-site daily to ensure everything is put together perfectly.',
    milestone: 'Keys Handed Over & Project Finish'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: '"4 FOLDS DESIGN STUDIO did not just design our coastal residence; they choreographed the sunlight. Every morning, the sunrise climbs across the raw travertine jointing in a way that feels incredibly sacred."',
    author: 'Nitish Raj',
    role: 'Principal Art Curator',
    project: 'Subhishi Valencia'
  },
  {
    id: 't2',
    quote: '"Their fanatical devotion to tactile integrity—the raw weight of the massive cast-bronze doors, the quiet glide of the window panels—turns the simple act of arriving home into cinema."',
    author: 'Jaasmitha',
    role: 'Design Editor & Academic',
    project: 'Rivo Learning Centre'
  },
  {
    id: 't3',
    quote: '"4 FOLDS DESIGN STUDIO balanced mass and weightlessness with ultimate mastery. The Monolith Civic Library has anchored our district, offering citizens a warm, cathedral-like reading chamber."',
    author: 'Vamsi Krishnan',
    role: 'Urban Planning Committee Head',
    project: 'Shambala Landscape Architecture'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'j1',
    title: 'Architecture of Silence: राम्र Materials',
    date: 'May 12, 2026',
    category: 'Material Philosophy',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    snippet: 'An exploration of low-clinker concrete, rough travertine slabs, and aged cedar planks that heal and gain character under rain, heat, and frost.'
  },
  {
    id: 'j2',
    title: 'Eliminating the Baseboard and Concealing Portals',
    date: 'April 28, 2026',
    category: 'Interior Tectonics',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    snippet: 'How deleting traditional joinery visual noise, integrating zero-clearance pivots, and flushing floor thresholds allows rooms to truly breathe.'
  },
  {
    id: 'j3',
    title: 'The Modern Redefined Atrium as a Thermal Lung',
    date: 'March 15, 2026',
    category: 'Sustainable Planning',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    snippet: 'Reintroducing Roman and courtyard layouts as physical convection generators, removing deep reliance on mechanical ventilative units in extreme climates.'
  }
];

export const AWARDS: Award[] = [
  {
    id: 'a1',
    title: 'Golden Trowel Icon Prize',
    category: 'Residential Masterwork',
    year: '2025',
    agency: 'Royal Institute of Architecture'
  },
  {
    id: 'a2',
    title: 'Pritzker Vanguard Citation',
    category: 'Emerging Spatial Studio',
    year: '2024',
    agency: 'Pritzker Endowment Panel'
  },
  {
    id: 'a3',
    title: 'Grand Prix of Interior Honor',
    category: 'Sensory Commercial Zone',
    year: '2025',
    agency: 'Milan Spatial Festival'
  },
  {
    id: 'a4',
    title: 'Structural Integrity Distinction',
    category: 'Civic Achievement',
    year: '2024',
    agency: 'Copenhagen Architectural Board'
  },
  {
    id: 'a5',
    title: 'Awwwards Site of the Year Nominee',
    category: 'Global Digital Portfolio',
    year: '2026',
    agency: 'Awwwards Committee'
  }
];

export const IMMERSIVE_IMAGES = [
  {
    url: '/src/assets/images/subhishi_valencia.jpg',
    title: 'Subhishi Valencia',
    desc: 'An ultra-luxury dining space with a branching ginkgo-leaf glass chandelier and book-matched marble. Hyderabad, India.',
    coords: '17.3850° N, 78.4867° E'
  },
  {
    url: '/src/assets/images/shambala_landscape.jpg',
    title: 'Shambala',
    desc: 'An organic outdoor landscape with natural flagstone pathing and custom stone steps. Hyderabad, India.',
    coords: '17.3850° N, 78.4867° E'
  },
  {
    url: '/src/assets/images/luxury_bar_room.jpg',
    title: 'The Leopard Bar Room',
    desc: 'An eclectic luxury speakeasy-inspired lounge with crimson coffered ceilings and backlit honey-onyx counters.',
    coords: '17.4301° N, 78.4077° E'
  },
  {
    url: '/src/assets/images/my_home_ankura_1.jpg',
    title: 'My Home Ankura - Master Suite',
    desc: 'Deep black marble panels detailed with linear ambient backlighting. Hyderabad, India.',
    coords: '17.4483° N, 78.3488° E'
  },
  {
    url: '/src/assets/images/rivo_learning_centre.jpg',
    title: 'Rivo Early Learning Centre',
    desc: 'Contemporary curved fair-faced concrete exterior with playful rabbit-motif branding. Hyderabad, India.',
    coords: '17.4301° N, 78.4077° E'
  }
];
