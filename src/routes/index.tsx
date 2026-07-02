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
import { Reveal } from "@/components/common/Reveal";
import { StatCounter } from "@/components/common/StatCounter";
import aboutLabImage from "@/assets/about-lab.jpg";
import ctaBannerImage from "@/assets/cta-banner.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    title: "Mechanical Testing",
    desc: "Strength, fatigue, fracture and creep evaluation on servo-hydraulic and electromechanical systems.",
    to: "/testing/mechanical-testing",
    icon: Gauge,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Structural Testing",
    desc: "Full-scale multi-axis validation with 16 servo-hydraulic actuators on a 4 T-slot bed.",
    to: "/testing/structural-testing",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Universal Testing Machines",
    desc: "Precision UTMs for tensile, compression, flexural, peel and shear across materials.",
    to: "/products/universal-testing-machines",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581092795365-d8f6b3e9c0a6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Composite Testing",
    desc: "GFRP and CFRP mechanical characterization to ASTM and ISO standards.",
    to: "/testing/gfrp-composite-testing",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1581092334207-0b1f5f6a8b06?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Medical Device Testing",
    desc: "Sutures, bone screws, implants and drug-delivery device evaluation for regulatory support.",
    to: "/testing/medical-device-testing",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1582719478179-6f9e3b9d9c3f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Calibration Equipment & Services",
    desc: "Force, displacement and extensometer calibration aligned with national standards.",
    to: "/products/calibration-equipment",
    icon: Beaker,
    image:
      "https://images.unsplash.com/photo-1555633512-4b6f1f5b2b5b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Damper Test Systems",
    desc: "Single, dual and multi-station rigs for suspension durability and dynamic behaviour.",
    to: "/products/damper-test-systems",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1581092795366-3a8f9f6c1f4a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Testing Software",
    desc: "Automation, data acquisition, ASTM/ISO templates and audit-ready reporting.",
    to: "/products/software",
    icon: Microscope,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "EV Structural Testing",
    desc: "Chassis, battery mounts and motor assemblies under multi-axis road load simulation.",
    to: "/testing/ev-structural-testing",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1549921296-3f8b66a8d8b6?auto=format&fit=crop&w=1400&q=80",
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
      <section className="relative isolate overflow-hidden bg-slate-50">
        <div className="absolute inset-0">
          <img
            src="/assets/hero-banner.png"
            alt="BISS Labs testing facility with a universal testing machine"
            className="h-full w-full object-cover opacity-80"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
        </div>
        <div className="relative container-x py-16 lg:py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-8 transform -translate-y-4">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 shadow-sm backdrop-blur-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-amber" />
                Precision engineered testing with performance you can trust
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Precision Testing
                <span className="block text-amber">Solutions</span>
                <span className="block text-white/90">for Engineering Excellence</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-2xl text-lg leading-8 text-slate-200/85">
                BISS Labs empowers industries with advanced material testing, mechanical testing and
                product validation services that ensure reliability, compliance and long-term
                performance.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-amber px-8 py-4 text-sm font-semibold text-slate-950 shadow-2xl shadow-amber/20 transition hover:-translate-y-0.5 hover:bg-amber-600"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Talk to an Expert
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-left shadow-xl shadow-slate-950/20 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber/80">Fast delivery</p>
                  <p className="mt-3 text-xl font-semibold text-white">Rapid testing turnaround</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-left shadow-xl shadow-slate-950/20 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber/80">Certified</p>
                  <p className="mt-3 text-xl font-semibold text-white">NABL, DGAQA and BIS compliance</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-left shadow-xl shadow-slate-950/20 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber/80">Comprehensive</p>
                  <p className="mt-3 text-xl font-semibold text-white">Material, mechanical and structural testing</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-left shadow-xl shadow-slate-950/20 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber/80">Trusted</p>
                  <p className="mt-3 text-xl font-semibold text-white">Global engineering support</p>
                </div>
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
                      <div
                        className="aspect-[16/10] rounded-lg overflow-hidden relative group bg-cover bg-center bg-no-repeat transform transition-transform"
                        style={{
                          backgroundImage: s.image
                            ? `linear-gradient(to bottom right, rgba(7,12,20,0.45), rgba(2,6,23,0.55)), url(${s.image})`
                            : undefined,
                        }}
                      >
                        <div className="absolute inset-0" />
                        <div className="absolute left-6 top-6 text-amber text-xs uppercase tracking-widest font-bold">
                          Service
                        </div>
                        <Icon className="absolute right-6 bottom-6 w-20 h-20 text-white/40 group-hover:scale-105 transition-transform duration-300" />
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
      <section className="py-24 bg-gradient-to-b from-background via-background to-surface/50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-amber/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-brand-deep/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-x relative z-10">
          <Reveal>
            <div className="mb-16">
              <div className="inline-block px-3 py-1 bg-amber/10 rounded-full mb-4">
                <span className="text-xs font-semibold text-amber uppercase tracking-widest">Applications & Solutions</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-deep mb-4">
                Industry Testing Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                From aerospace composites to medical implants, our comprehensive testing solutions span diverse engineering materials and industrial applications.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {applications.map((a, i) => (
              <Reveal key={a.title} delay={i * 50}>
                <div className="group relative h-full">
                  {/* Card */}
                  <div className="relative h-full bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white/60 transition-all duration-500 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber/0 via-amber/0 to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon container */}
                      <div className="relative inline-flex items-center justify-center mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-amber/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 scale-150 group-hover:scale-175"></div>
                        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber/30 to-amber/20 group-hover:from-amber/40 group-hover:to-amber/30 transition-all duration-500 border border-amber/40 group-hover:border-amber/60">
                          <FlaskConical className="w-8 h-8 text-amber group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-brand-deep mb-3 group-hover:text-amber transition-colors duration-500">
                        {a.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500">
                        {a.desc}
                      </p>

                      {/* Divider */}
                      <div className="mt-5 h-1 w-0 bg-gradient-to-r from-amber to-amber/0 group-hover:w-full transition-all duration-500"></div>
                    </div>

                    {/* Border glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(251,146,60,0.3) 0%, transparent 50%)',
                      }}
                    ></div>
                  </div>

                  {/* Floating accent on hover */}
                  <div className="absolute -top-1 -right-1 w-10 h-10 bg-gradient-to-br from-amber to-amber/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-0 group-hover:scale-100"></div>
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
              src={aboutLabImage}
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
          src={ctaBannerImage}
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
