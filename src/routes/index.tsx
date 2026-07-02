import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Building2,
  FlaskConical,
  Cpu,
  Wrench,
  Car,
  Plane,
  Wind,
  HeartPulse,
  Factory,
  GraduationCap,
  Layers,
  Beaker,
  Zap,
  Gauge,
  Microscope,
} from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";
import ctaImg from "@/assets/cta-banner.jpg";
import aboutImg from "@/assets/about-lab.jpg";
import { Reveal } from "@/components/common/Reveal";
import { StatCounter } from "@/components/common/StatCounter";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    title: "Mechanical Testing",
    desc: "Strength, fatigue, fracture and creep evaluation on servo-hydraulic and electromechanical systems.",
    to: "/testing/mechanical-testing",
    icon: Gauge,
  },
  {
    title: "Structural Testing",
    desc: "Full-scale multi-axis validation with 16 servo-hydraulic actuators on a 4 T-slot bed.",
    to: "/testing/structural-testing",
    icon: Building2,
  },
  {
    title: "Universal Testing Machines",
    desc: "Precision UTMs for tensile, compression, flexural, peel and shear across materials.",
    to: "/products/universal-testing-machines",
    icon: Wrench,
  },
  {
    title: "Composite Testing",
    desc: "GFRP and CFRP mechanical characterization to ASTM and ISO standards.",
    to: "/testing/gfrp-composite-testing",
    icon: Layers,
  },
  {
    title: "Medical Device Testing",
    desc: "Sutures, bone screws, implants and drug-delivery device evaluation for regulatory support.",
    to: "/testing/medical-device-testing",
    icon: HeartPulse,
  },
  {
    title: "Calibration Equipment & Services",
    desc: "Force, displacement and extensometer calibration aligned with national standards.",
    to: "/products/calibration-equipment",
    icon: Beaker,
  },
  {
    title: "Damper Test Systems",
    desc: "Single, dual and multi-station rigs for suspension durability and dynamic behaviour.",
    to: "/products/damper-test-systems",
    icon: Cpu,
  },
  {
    title: "Testing Software",
    desc: "Automation, data acquisition, ASTM/ISO templates and audit-ready reporting.",
    to: "/products/software",
    icon: Microscope,
  },
  {
    title: "EV Structural Testing",
    desc: "Chassis, battery mounts and motor assemblies under multi-axis road load simulation.",
    to: "/testing/ev-structural-testing",
    icon: Zap,
  },
];

const industries = [
  {
    title: "Automotive",
    desc: "Performance, durability and fatigue evaluation for vehicles and components.",
    icon: Car,
  },
  {
    title: "Aerospace & Defence",
    desc: "Material qualification and structural validation for mission-critical applications.",
    icon: Plane,
  },
  {
    title: "Renewable Energy",
    desc: "Structural and fatigue analysis supporting wind and clean-energy technologies.",
    icon: Wind,
  },
  {
    title: "Medical Devices",
    desc: "Mechanical testing of implants, surgical instruments and healthcare products.",
    icon: HeartPulse,
  },
  {
    title: "Manufacturing",
    desc: "Quality assurance and material validation for industrial equipment and machinery.",
    icon: Factory,
  },
  {
    title: "Research & Academia",
    desc: "Advanced laboratory support for universities and research institutions.",
    icon: GraduationCap,
  },
];

const applications = [
  {
    title: "Metals",
    desc: "Tensile, compression, fatigue, fracture toughness and elevated-temperature testing.",
  },
  { title: "Composites", desc: "GFRP and CFRP mechanical characterization across 20+ methods." },
  {
    title: "Elastomers & Polymers",
    desc: "Strain measurement and dynamic evaluation across temperature ranges.",
  },
  {
    title: "Structural Assemblies",
    desc: "Multi-axis validation on a 4 T-slot bed with 16 servo-hydraulic actuators.",
  },
  {
    title: "Medical Implants",
    desc: "Fatigue, strength and life evaluation for sutures, bone screws and implants.",
  },
];

const resources = [
  {
    tag: "Guide · 2026",
    title: "Choosing the Right Fatigue Standard: ASTM E466 vs E606",
    desc: "How to pick the right cyclic loading protocol for your material class.",
  },
  {
    tag: "Case Study",
    title: "Structural Validation of an EV Battery Enclosure",
    desc: "Multi-axis road-load simulation for a next-generation electric platform.",
  },
  {
    tag: "Insight",
    title: "Digital Image Correlation for Full-Field Strain Mapping",
    desc: "Combining high-speed cameras with mechanical testing for richer data.",
  },
];

const certifications = [
  "NABL Accredited",
  "DGAQA Certified",
  "BIS Approved",
  "NADCAP Materials Testing",
  "International Standards",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="BISS Labs testing facility with a universal testing machine"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/70 to-brand-deep/10" />
        <div className="relative container-x py-28 lg:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white/90 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" /> Precision Engineered ·
                Performance Proven
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-[1.05] text-white">
                Precision Testing
                <br />
                <span className="text-amber">Solutions</span>
                <span className="text-white/90"> for Engineering Excellence</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-white/80 max-w-xl">
                BISS Labs empowers industries with advanced material testing, mechanical testing and
                product validation services that ensure reliability, compliance and long-term
                performance.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 font-semibold text-amber-foreground shadow-lg hover:brightness-95 hover:-translate-y-0.5 transition"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  Contact Our Experts
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services 3x3 */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-deep">
                BISS Global Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                A single engineering partner for material, mechanical and structural testing —
                combining advanced technology with{" "}
                <Link
                  to="/about-us"
                  className="text-brand underline underline-offset-4 decoration-amber"
                >
                  internationally accepted methodologies
                </Link>{" "}
                to help you validate products from concept to production.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 60}>
                  <Link to={s.to} className="group block">
                    <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gradient-to-br from-brand to-brand-deep relative">
                      <div
                        className="absolute inset-0 opacity-25"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)",
                        }}
                      />
                      <Icon className="absolute right-6 bottom-6 w-24 h-24 text-white/40 group-hover:scale-110 transition-transform" />
                      <div className="absolute left-6 top-6 text-amber text-xs uppercase tracking-widest font-bold">
                        Service
                      </div>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-brand-deep font-display">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-amber transition-colors">
                      Read more about {s.title.split(" ")[0]} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-surface">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-deep">Industries We Serve</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Supporting innovation across diverse industries with accurate data and internationally
              accepted testing methodologies.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map((i, idx) => {
              const Icon = i.icon;
              return (
                <Reveal key={i.title} delay={idx * 50}>
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition h-full border border-border">
                    <div className="w-11 h-11 rounded-md bg-amber/15 text-amber flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-brand-deep">{i.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{i.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-background">
        <div className="container-x">
          <Reveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-deep">Applications</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Testing across a wide variety of engineering materials and industrial applications.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="rounded-lg border border-border p-5 hover:border-amber hover:shadow-md transition h-full">
                  <FlaskConical className="w-6 h-6 text-amber" />
                  <h4 className="mt-3 font-bold text-brand-deep">{a.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1.5">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learn more / resources */}
      <section className="py-20 bg-surface">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4 mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-deep">Learn More</h2>
            <a
              href="#"
              className="text-sm font-semibold text-brand hover:text-amber inline-flex items-center gap-1"
            >
              See all resources <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <article className="bg-white rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition group">
                  <div className="aspect-[16/9] bg-gradient-to-br from-brand-deep to-brand relative">
                    <div className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-amber">
                      {r.tag}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-brand-deep leading-snug group-hover:text-brand transition">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats split-panel */}
      <section className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-stretch container-x py-20">
          <div className="lg:col-span-3 rounded-lg overflow-hidden">
            <img
              src={aboutImg}
              alt="BISS Labs engineers reviewing test data"
              className="w-full h-full object-cover"
              width={1600}
              height={1100}
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-2 bg-surface p-8 lg:p-12 lg:-ml-16 lg:my-10 relative rounded-lg shadow-lg">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-deep">BISS at a Glance</h2>
              <p className="mt-3 text-muted-foreground">
                Our achievements reflect our commitment to engineering excellence and customer
                confidence, with{" "}
                <strong className="text-brand">50,000+ annual testing hours</strong> across metals,
                composites and structural systems.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { end: 50, suffix: "+", label: "Advanced Testing Systems" },
                { end: 20000, suffix: "+", label: "Test Coupons Evaluated / Year" },
                { end: 50000, suffix: "+", label: "Annual Testing Hours" },
                { end: 15, suffix: "+", label: "Engineering Professionals" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold text-brand font-display">
                    <StatCounter end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber hover:underline"
            >
              Watch our lab in action <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-deep">
              Quality That Inspires Confidence
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Aligned with national and international accreditations and standards.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 border border-border shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-amber" />
                <span className="text-sm font-semibold text-brand-deep">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal CTA banner */}
      <section className="relative overflow-hidden">
        <img
          src={ctaImg}
          alt="Close-up of an extensometer on a metal specimen"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={900}
          loading="lazy"
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-amber diagonal-cta p-10 lg:p-20 min-h-[420px] flex items-center">
            <div className="max-w-lg">
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-brand-deep">
                Let's Validate
                <br />
                <span className="text-white">Your Next Innovation</span>
              </h2>
              <p className="mt-4 text-brand-deep/80">
                Talk to our engineering specialists about your product, standard or timeline — we'll
                come back with a tailored testing plan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-md bg-brand-deep px-6 py-3 font-semibold text-white hover:bg-brand transition"
                >
                  Speak with Our Testing Specialists <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-brand-deep hover:underline"
                >
                  Request a Quote Today
                </Link>
              </div>
            </div>
          </div>
          <div />
        </div>
      </section>
    </>
  );
}
