export type Product = {
  slug: string;
  title: string;
  h1: string;
  tagline: string;
  overview: string;
  features?: string[];
  services?: string[];
  benefits?: string[];
  applications?: string[];
  industries?: string[];
  products?: string[];
};

export const products: Product[] = [
  {
    slug: "universal-testing-machines",
    title: "Universal Testing Machines",
    h1: "Universal Testing Machines",
    tagline: "Precision UTMs for tensile, compression, flexural and shear evaluation.",
    overview:
      "BISS Labs offers a comprehensive range of Universal Testing Machines (UTMs) designed to evaluate the mechanical properties of materials and components with exceptional accuracy and repeatability. Built on advanced testing technology, our systems support tensile, compression, flexural, shear, peel, and other mechanical tests across metals, composites, plastics, elastomers, and engineering materials. Our UTMs help manufacturers, research institutions, and quality laboratories validate product performance while complying with ASTM, ISO, BIS, and international testing standards.",
    features: [
      "High precision load measurement",
      "Load capacities from laboratory to industrial scale",
      "Servo-electric and servo-hydraulic systems",
      "Automated testing software",
      "Advanced data acquisition",
      "Temperature chamber compatibility",
      "Custom fixtures and grips",
      "ASTM & ISO compliant testing",
    ],
    applications: ["Tensile Testing", "Compression Testing", "Flexural Testing", "Peel Testing", "Shear Testing", "Component Validation"],
    industries: ["Automotive", "Aerospace", "Medical Devices", "Research", "Manufacturing", "Education"],
  },
  {
    slug: "damper-test-systems",
    title: "Damper Test Systems",
    h1: "Damper Test Systems",
    tagline: "Performance and durability evaluation for suspension components.",
    overview:
      "BISS Labs provides advanced Damper Test Systems engineered for the performance evaluation and durability testing of suspension components. Our systems accurately simulate real-world operating conditions to measure damping characteristics, endurance, and dynamic behaviour. Available in single-station, dual-station, and multi-station configurations, these systems are ideal for automotive OEMs, component manufacturers, and research laboratories.",
    features: ["Servo-hydraulic control", "Dynamic load simulation", "Single & multi-station systems", "Real-time performance analysis", "Automated reporting"],
    applications: ["Shock Absorbers", "Dampers", "Suspension Systems", "Vehicle Components"],
  },
  {
    slug: "structural-test-systems",
    title: "Structural Test Systems",
    h1: "Structural Test Systems",
    tagline: "Full-scale component and assembly testing under complex loading.",
    overview:
      "BISS Structural Test Systems are designed for full-scale component and assembly testing. These systems enable engineers to evaluate structural integrity, durability, fatigue life, and performance under complex loading conditions. Using multi-axis actuators and programmable controls, structural systems simulate real operating environments for automotive, aerospace, railway, and industrial applications.",
    features: ["Multi-axis loading", "Servo-hydraulic actuators", "Modular frame design", "Custom test rigs", "Large-capacity systems"],
    applications: ["Vehicle Chassis", "EV Components", "Aircraft Structures", "Industrial Equipment"],
  },
  {
    slug: "upgrades-retrofits",
    title: "Machine Upgrades & Retrofits",
    h1: "Machine Upgrades & Retrofits",
    tagline: "Extend the life and performance of your existing testing equipment.",
    overview:
      "Extend the life and performance of your existing testing equipment with BISS upgrade and retrofit solutions. Our engineering team modernizes legacy systems by integrating advanced controllers, software, sensors, actuators, and safety features without replacing the complete machine.",
    services: ["Controller upgrades", "Software modernization", "Hydraulic upgrades", "Servo conversion", "Safety enhancements", "Machine refurbishment"],
    benefits: ["Lower investment", "Improved performance", "Reduced downtime", "Extended machine life"],
  },
  {
    slug: "accessories",
    title: "Testing Accessories",
    h1: "Testing Accessories",
    tagline: "Precise specimen handling and repeatable testing accessories.",
    overview:
      "BISS provides a comprehensive range of testing accessories to enhance the capability, flexibility, and accuracy of material testing systems. Every accessory is designed for precise specimen handling and repeatable testing.",
    products: ["Grips", "Fixtures", "Compression Platens", "Environmental Chambers", "Alignment Tools", "Calibration Fixtures"],
  },
  {
    slug: "controllers",
    title: "Controllers",
    h1: "Testing System Controllers",
    tagline: "Intelligent digital controllers for mechanical and structural testing.",
    overview:
      "Our intelligent digital controllers deliver accurate machine control, data acquisition, and test automation for mechanical and structural testing applications.",
    features: ["Closed-loop control", "Multi-channel operation", "Real-time monitoring", "Safety interlocks", "Programmable test sequences"],
  },
  {
    slug: "actuators",
    title: "Actuators",
    h1: "Servo-Hydraulic & Servo-Electric Actuators",
    tagline: "High-performance actuators for static, dynamic and structural testing.",
    overview:
      "BISS offers high-performance actuators for static, dynamic, fatigue, and structural testing. Designed for long-term reliability, they provide precise force and displacement control across a wide range of applications.",
    applications: ["Fatigue Testing", "Structural Testing", "Component Validation", "Dynamic Testing"],
  },
  {
    slug: "grips-fixtures",
    title: "Grips & Fixtures",
    h1: "Grips & Fixtures",
    tagline: "Reliable specimen gripping for accurate, repeatable results.",
    overview:
      "Reliable specimen gripping is essential for accurate testing. BISS provides a wide selection of grips and fixtures for tensile, compression, flexural, shear, peel, and torsion testing across various materials.",
    products: ["Wedge Grips", "Hydraulic Grips", "Mechanical Grips", "Compression Fixtures", "Bend Fixtures", "Torsion Fixtures", "Custom Fixtures"],
  },
  {
    slug: "load-cells",
    title: "Load Cells",
    h1: "Precision Load Cells",
    tagline: "Accurate force measurement for mechanical testing systems.",
    overview:
      "BISS precision load cells provide highly accurate force measurement for mechanical testing systems. Engineered for durability and repeatability, they ensure reliable data collection across low-force and high-capacity applications.",
    features: ["High accuracy", "Wide force ranges", "Long-term stability", "Easy integration", "ASTM compliant"],
  },
  {
    slug: "extensometers",
    title: "Extensometers",
    h1: "Extensometers",
    tagline: "Contact and non-contact strain measurement with exceptional precision.",
    overview:
      "Measure strain with exceptional precision using BISS extensometers. Our solutions support contact and non-contact strain measurement for tensile, compression, fatigue, and high-temperature testing.",
    applications: ["Metals", "Plastics", "Composites", "Elastomers", "High-temperature materials"],
  },
  {
    slug: "software",
    title: "Testing Software",
    h1: "Testing Software",
    tagline: "Machine operation, data acquisition, analysis and reporting.",
    overview:
      "BISS testing software simplifies machine operation, data acquisition, analysis, and report generation. Designed for research, production, and quality laboratories, our software enables efficient testing with customizable workflows and automated reporting.",
    features: ["Test automation", "Graphical data analysis", "ASTM & ISO templates", "Custom report generation", "Database management", "Secure user access"],
  },
  {
    slug: "calibration-equipment",
    title: "Calibration Equipment",
    h1: "Calibration Equipment",
    tagline: "Ensure testing machines maintain accuracy and compliance.",
    overview:
      "Accurate testing begins with precise calibration. BISS offers calibration equipment and services to ensure testing machines maintain accuracy, repeatability, and compliance with national and international standards.",
    services: ["Force Calibration", "Displacement Calibration", "Extensometer Calibration", "Verification Services", "Preventive Maintenance"],
    benefits: ["Improved measurement accuracy", "Regulatory compliance", "Reduced testing uncertainty", "Enhanced equipment reliability"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);