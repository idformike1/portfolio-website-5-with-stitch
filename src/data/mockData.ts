export const SITE_METADATA = {
  title: "Aisha Rao | Performance Nutritionist",
  tagline: "Nutritionist & Strategist",
  email: "hello@aisharao.com",
  socials: {
    instagram: "IG",
    twitter: "TW",
    linkedin: "LI",
    behance: "BE",
  },
  year: 2024,
};

export const HOME_CONTENT = {
  hero: {
    name: "Aisha",
    profession: "Elite Performance Nutritionist",
    focus: "Science-Backed Methodology",
    portrait: "/images/aisha-hero.jpg",
  },
  stats: [
    { label: "Years of Clinical Practice", value: "10+" },
    { label: "Athletes Metabolically Optimized", value: "500+" },
    { label: "Professional Franchises", value: "15+" },
  ],
  about: {
    title: "About Me",
    bio: "I am an SENR registered Sports Nutritionist based in Mumbai, engineering precision fueling strategies for professional athletes who demand peak physiological output.",
    description: "By integrating cellular metabolic science with high-performance behavioral coaching, I ensure nutrition transcends simple dietary planning—becoming a highly calibrated, sustainable competitive advantage.",
  },
  impact: {
    title: "Impact Stories",
    description: "From Olympic cycles to World Championships, these athletes achieved metabolic supremacy through rigorous, data-driven nutrition protocols.",
    stories: [
      { 
        title: "Maximal Aerobic Power", 
        type: "Marathon Nutrition Strategy", 
        image: "/images/impact-marathon.jpg"
      },
      { 
        title: "Peak Week Protocols", 
        type: "National Wrestling Team", 
        image: "/images/impact-wrestling.jpg" 
      },
      { 
        title: "In-Game Substrate Utilization", 
        type: "Match-Day Fueling Framework", 
        image: "/images/impact-cricket.jpg" 
      },
    ],
  },
  services: {
    title: "Services",
    description: "A specialized suite of clinical and field services engineered to decode athletic physiology and maximize metabolic efficiency.",
    items: [
      { name: "Elite 1:1 Coaching", description: "Bespoke, periodized nutrition architectures that adapt to your unique athletic physiology, training blocks, and professional lifestyle." },
      { name: "Metabolic Profiling", description: "Deep-dive clinical diagnostics assessing resting metabolic rate, substrate utilization kinetics, and systemic recovery capacity." },
      { name: "Franchise Consulting", description: "Scalable high-performance frameworks deployed across professional sports academies, national teams, and elite franchises." },
    ],
  },
};

export const TESTIMONIALS = [
  {
    quote: "Aisha's team rigorously mapped our squad's physiological footprint. They engineered a dynamic fueling protocol that drastically improved our late-game power output and accelerated systemic recovery.",
    name: "Dhimm Reinder",
    role: "Olympic Wrestling Captain",
    image: "/images/testimonial-dhimm.jpg",
  },
];

export const ABOUT_CONTENT = {
  hero: {
    title: "Aisha",
    roles: ["Performance Nutritionist", "Clinical Scientist"],
    since: "Since 2018",
    image: "/images/about-hero.jpg",
  },
  story: {
    title: "My Story",
    paragraphs: [
      "A former competitive sprinter, Aisha intimately understands the razor-thin margins between podium and defeat. Her transition from the track to the clinical laboratory was driven by an obsession with a singular objective: How do we biologically manipulate the human engine for absolute peak performance?",
      "This rigorous pursuit culminated in an MSc in Sport and Exercise Nutrition from Loughborough University—globally recognized as the apex of athletic research. There, she perfected the methodology of translating complex biochemical datasets into aggressive, actionable fueling architectures.",
    ],
    stats: [
      { label: "Years Clinical Exp.", value: "12+" },
      { label: "Athletes Engineered", value: "500+" },
      { label: "Elite Franchises", value: "15+" },
    ],
  },
  credentials: {
    title: "Credentials",
    description: "A dual-accredited clinical practitioner merging elite athletic experience with unapologetic scientific rigor.",
    items: [
      {
        title: "SENR Accredited",
        description: "The Sport and Exercise Nutrition Register (SENR) is a strict regulatory body for elite practitioners possessing the advanced biochemical knowledge required to safely engineer high-performance athletes.",
        image: "/images/credential-senr.jpg",
      },
      {
        title: "MSc Sport & Exercise",
        description: "Loughborough University. Specialized heavily in metabolic substrate kinetics and advanced glycogen-loading strategies for elite endurance.",
        image: "/images/credential-msc.jpg",
      },
      {
        title: "RNutr Registered",
        description: "UK Voluntary Register of Nutritionists (UKVRN). Committing to the highest echelon of evidence-based practice and translational science.",
        image: "/images/credential-rnutr.jpg",
      },
    ],
  },
  ethics: {
    title: "My Ethics",
    items: [
      {
        number: "01",
        label: "Methodology",
        title: "Clinical Objectivity",
        description: "Zero fads. Zero shortcuts. Every protocol deployed is anchored in peer-reviewed biochemistry and strictly calibrated to your individual metabolic blueprint.",
      },
      {
        number: "02",
        label: "Design",
        title: "Athlete Integration",
        description: "The intervention must mold to your physiological phase. We engineer high-compliance, sustainable architectures that survive the chaos of elite competition.",
        highlight: true,
      },
      {
        number: "03",
        label: "Longevity",
        title: "Systemic Resilience",
        description: "True elite performance is chronic, not acute. We fortify baseline health to guarantee career longevity and an unbreakable physiological foundation.",
      },
    ],
  },
};

export const SERVICES_CONTENT = {
  hero: {
    title: "Services",
    description: "Expert-led nutrition strategies designed to elevate your health and performance through personalized coaching and science-backed protocols.",
  },
  packages: {
    title: "My Service",
    subtitle: "High-performance nutrition coaching packages.",
    items: [
      {
        id: "elite",
        title: "The Elite Performer",
        popular: true,
        tagline: "Total Transformation",
        description: "Comprehensive coaching for those committed to peak transformation. Includes weekly calls, custom meal plans, and bloodwork analysis.",
        price: "₹15,000",
        period: "Monthly",
        features: [
          "Weekly 1:1 Coaching",
          "Bloodwork Analysis",
          "Custom Meal Plans",
          "Priority Support",
        ],
        cta: "Apply Now",
      },
      {
        id: "tune-up",
        title: "The Nutrition Tune-Up",
        description: "Foundational coaching designed to reset your nutrition through a complete audit and custom roadmap.",
        price: "₹6,500",
        period: "One-time",
        tagline: "Foundational coaching",
      },
    ],
  },
  techStack: {
    title: "Technology Stack",
    subtitle: "Powered by industry-leading tools for seamless progress tracking.",
    tools: [
      {
        name: "Practice Better Portal",
        description: "Secure, all-in-one client dashboard for easy scheduling, habit tracking, and resources.",
        icon: "dashboard",
      },
      {
        name: "That Clean Life",
        description: "Professional software for personalized recipe collections and flexible meal plans.",
        icon: "menu_book",
      },
    ],
  },
  cta: {
    title: "Ready to transform your health?",
    description: "Book your free 15-minute discovery call to find the best package for your unique lifestyle and long-term goals.",
    buttonText: "Schedule Discovery Call",
  },
};

export const BLOG_CONTENT = {
  hero: {
    title: "The Performance Hub",
    tags: ["Metabolism", "Endurance Physiology", "Applied Science"],
    description: "Unfiltered, clinical insights into peak output. A repository of strictly peer-reviewed strategies decoding human performance.",
    stats: [
      { label: "Clinical Publications", value: "150+" },
      { label: "Active Subscribers", value: "25k" },
    ],
  },
  recentInsights: {
    title: "Recent Insights",
    description: "Deep physiological dives into the bio-mechanics of elite endurance.",
    featured: {
      category: "Substrate Utilization",
      readTime: "8 min read",
      title: "Glycogen Supercompensation: The Complete Protocol for Tropical Endurance",
      excerpt: "Mastering pre-race intramuscular fueling. We break down the exact mathematics of carbohydrate loading to maximize ATP production whilst mitigating gastrointestinal distress under high-humidity conditions.",
      image: "/images/blog-1-bg.jpg",
    },
    posts: [
      {
        category: "Systemic Recovery",
        readTime: "12 Min Read",
        title: "Sympathetic Nervous Override: Advanced CNS Recovery",
        excerpt: "Moving beyond passive rest: the exact nutritional levers needed to downregulate cortisol and force the body into acute anabolic repair.",
        image: "/images/blog-2-bg.jpg",
      },
      {
        category: "Biomechanics",
        readTime: "15 Min Read",
        title: "The VO2 Max Fallacy: Why Movement Economy is King",
        excerpt: "Stop chasing the genetic ceiling. We analyze the metabolic threshold and the efficiency formulas that dictate late-stage race pacing.",
        icon: "science",
      },
      {
        category: "Neurobiology",
        readTime: "10 Min Read",
        title: "Central Governor Fatigue: Hacking the Brain's Limiter",
        excerpt: "The neurological 'wall'. How targeted inter-competition fueling hacks the brain's safety protocols to unlock latent power.",
        icon: "psychology",
      },
    ],
  },
  resources: {
    title: "Clinical Resources",
    description: "The strict, unfiltered databases shaping my protocol development.",
    items: [
      {
        category: "Applied Science",
        name: "Mysportscience Archive",
        description: "Dr. Asker Jeukendrup's absolute gold-standard resource for translational sports nutrition.",
      },
      {
        category: "Behavioral Economics",
        name: "Precision Nutrition Cert.",
        description: "The premier global framework for integrating elite scientific strategy with actual human behavioral compliance.",
      },
      {
        category: "Raw Data",
        name: "PubMed Central API",
        description: "The bedrock. I deploy protocols built strictly from the newest, peer-reviewed clinical data released here.",
      },
    ],
  },
};

export const WORK_CONTENT = {
  hero: {
    title: "WORK.",
    subtitle: "PORTFOLIO",
    description: "Precision diagnostics and uncompromising execution. Review the clinical blueprints behind our most aggressive athletic transformations.",
    filters: ["ALL PROJECTS", "OLYMPIC PREP", "PRO TEAMS", "ENDURANCE"],
  },
  projects: [
    {
      id: "01",
      category: "Case Study 01 / Olympic Prep",
      title: "Project Paris 2024",
      description: "Executing a 2-year metabolic overhaul to maximize explosive power-to-weight ratio without compromising immune resiliency.",
      image: "/images/work-project-01.jpg",
      metrics: [
        { label: "VO2 Gain", value: "+14%" },
        { label: "Lean Muscle Retention", value: "100%" },
      ],
    },
    {
      id: "02",
      category: "Case Study 02 / Ultrarunning Analysis",
      title: "The 100-Mile Protocol",
      description: "A specialized triage of sodium kinetics and intra-race carbohydrate dosing engineered for an elite ultramarathoner competing in extreme heat.",
      image: "/images/work-project-02.jpg",
      metrics: [
        { label: "Hypo-Natremia Risk", value: "Eliminated" },
        { label: "Carb Absorption", value: "110g/hr" },
      ],
    },
  ],
  testimonials: {
    title: "Impact & Testimonials",
    items: [
      {
        quote: "The clinical profiling was ruthless and exact. My rate of perceived exertion collapsed at the hardest points of the race. Complete physiological control.",
        author: "Marcus Chen",
        role: "Pro Triathlete",
        image: "/images/testimonial-marcus.jpg",
      },
      {
        quote: "Aisha deployed a fueling framework across our entire franchise that categorically decimated our soft-tissue injury rates and increased late-quarter sprint capacity.",
        author: "David Henderson",
        role: "Director of High Performance, VR Franchises",
        image: "/images/testimonial-david.jpg",
      },
      {
        quote: "I stopped guessing. For the first time, my nutrition was a weaponized protocol designed explicitly around my VO2 metrics.",
        author: "Elena Rodriguez",
        role: "Olympic Sprinter",
        image: "/images/testimonial-elena.jpg",
      },
    ],
  },
  collaborations: {
    title: "COACHING COLLABORATIONS.",
    description: "I partner with elite coaching staffs and sports science labs to integrate nutrition as a core pillar of performance strategy. My methodology is designed to complement existing training loads and physiological goals.",
    features: [
      "Integrated Performance Teams (IPT)",
      "Biometric Data Integration",
      "Staff Education & Workshop Series",
    ],
    partners: [
      { name: "Peak Performance Institute", logo: "Peak" },
      { name: "Global Athletics Fed.", logo: "GAF" },
      { name: "Elite Cycling Lab", logo: "ECL" },
      { name: "Pro Soccer Analytics", logo: "PSA" },
    ],
  },
};

export const CONTACT_CONTENT = {
  hero: {
    title: "CONTACT.",
    subtitle: "LET'S BUILD SOMETHING EXTRAORDINARY TOGETHER",
    description: "Whether you're an elite athlete or a pro team, I'm here to help you optimize your metabolic strategy for peak performance.",
  },
  info: {
    email: "hello@aisharao.com",
    location: "100% Virtual / Pan-India & Global",
    socials: [
      { name: "Instagram", href: "https://instagram.com/aisharao" },
      { name: "LinkedIn", href: "https://linkedin.com/in/aisharao" },
      { name: "Twitter", href: "https://twitter.com/aisharao" },
    ],
  },
  form: {
    title: "Send a Message",
    fields: [
      { name: "Name", type: "text", placeholder: "YOUR FULL NAME" },
      { name: "Email", type: "email", placeholder: "YOUR EMAIL ADDRESS" },
      { name: "Subject", type: "select", options: ["Sports Nutrition Coaching", "Speaking Engagement", "Collaboration", "Other"] },
      { name: "Message", type: "textarea", placeholder: "HOW CAN I HELP YOU?" },
    ],
    buttonText: "Send Message",
  },
};
