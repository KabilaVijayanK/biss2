export type NavColumn = { title: string; links: { label: string; to: string }[] };
export type MegaMenu = { columns: NavColumn[]; feature: { title: string; body: string; to: string } };

export const productsMenu: MegaMenu = {
  columns: [
    {
      title: "Systems",
      links: [
        { label: "Universal Testing Machines", to: "/products/universal-testing-machines" },
        { label: "Damper Test Systems", to: "/products/damper-test-systems" },
        { label: "Structural Test Systems", to: "/products/structural-test-systems" },
        { label: "Upgrades & Retrofits", to: "/products/upgrades-retrofits" },
      ],
    },
    {
      title: "Accessories",
      links: [
        { label: "Grips & Fixtures", to: "/products/grips-fixtures" },
        { label: "Actuators", to: "/products/actuators" },
        { label: "Load Cells", to: "/products/load-cells" },
        { label: "Extensometers", to: "/products/extensometers" },
        { label: "Accessories", to: "/products/accessories" },
        { label: "Calibration Equipment", to: "/products/calibration-equipment" },
      ],
    },
    {
      title: "Controllers & Software",
      links: [
        { label: "Controllers", to: "/products/controllers" },
        { label: "Testing Software", to: "/products/software" },
      ],
    },
  ],
  feature: {
    title: "Explore the full product range",
    body: "Twelve product families engineered for precision testing, from load cells to full structural systems.",
    to: "/products",
  },
};

export const testingMenu: MegaMenu = {
  columns: [
    {
      title: "Mechanical",
      links: [
        { label: "Mechanical Testing", to: "/testing/mechanical-testing" },
        { label: "Metal Testing", to: "/testing/metal-testing" },
        { label: "Tensile Testing", to: "/testing/tensile-testing" },
        { label: "Fracture Toughness", to: "/testing/fracture-toughness" },
        { label: "Low Cycle Fatigue", to: "/testing/low-cycle-fatigue" },
        { label: "Creep & Stress Rupture", to: "/testing/creep-stress-rupture" },
      ],
    },
    {
      title: "Composite",
      links: [
        { label: "GFRP Composite Testing", to: "/testing/gfrp-composite-testing" },
        { label: "CFRP Composite Testing", to: "/testing/cfrp-composite-testing" },
        { label: "Fatigue (S-N Curve)", to: "/testing/fatigue-sn-curve" },
        { label: "High Strain Rate & DIC", to: "/testing/high-strain-rate-dic" },
      ],
    },
    {
      title: "Structural & Specialized",
      links: [
        { label: "Structural Testing", to: "/testing/structural-testing" },
        { label: "EV Structural Testing", to: "/testing/ev-structural-testing" },
        { label: "Automotive Durability", to: "/testing/automotive-durability" },
        { label: "Medical Device Testing", to: "/testing/medical-device-testing" },
      ],
    },
  ],
  feature: {
    title: "View full testing capabilities",
    body: "15+ mechanical test types, 20+ composite methods, and structural rigs up to 2 MN.",
    to: "/testing",
  },
};