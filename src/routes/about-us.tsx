import { createFileRoute } from "@tanstack/react-router";
import { Target, Compass, Sparkles, Users, Award, Globe2, ShieldCheck, Zap, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { StatCounter } from "@/components/common/StatCounter";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About BISS Labs | Material Testing Laboratory & Engineering Excellence" },
      { name: "description", content: "Learn about BISS Labs, a trusted Material Testing Laboratory in India. Discover our global association with ITW and Instron, advanced testing infrastructure and certifications." },
      { property: "og:title", content: "About BISS Labs" },
      { property: "og:description", content: "Engineering confidence through knowledge, innovation and precision." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Precision", desc: "Every test, measurement and engineering solution is performed with accuracy and attention to detail.", icon: Target },
  { title: "Integrity", desc: "Transparency, ethical practices and delivering results our customers can trust.", icon: ShieldCheck },
  { title: "Innovation", desc: "Continuous investment in technology enables us to solve complex engineering challenges.", icon: Sparkles },
  { title: "Customer Partnership", desc: "We work closely with every customer to deliver practical, value-driven solutions.", icon: HeartHandshake },
  { title: "Excellence", desc: "Continuous improvement in everything from lab operations to customer service.", icon: Award },
];

const stats = [
  { end: 50, suffix: "+", label: "Advanced Testing Systems" },
  { end: 20000, suffix: "+", label: "Test Coupons Every Year" },
  { end: 50000, suffix: "+", label: "Annual Testing Hours" },
  { end: 2, suffix: " MN", label: "Testing Capacity (1 N – 2 MN)" },
  { end: 24, suffix: "/7", label: "Laboratory Operations" },
  { end: 15, suffix: "+", label: "Engineering Professionals" },
];

function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/banner.png"
            alt="BISS Labs testing facility"
            className="h-full w-full object-cover opacity-60"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/30" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-brand-deep/20 rounded-full blur-3xl opacity-30" />

        {/* Content */}
        <div className="relative isolate container-x py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-2 text-sm text-amber font-semibold backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber" />
              About Our Organization
            </div>
            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold text-white leading-tight">About BISS Labs</h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">Engineering confidence through knowledge, innovation and precision.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img src="/banner.png" alt="BISS Labs engineers at a materials testing bench" className="rounded-lg shadow-lg w-full" width={1600} height={1100} loading="lazy" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-deep">Company Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              BISS Labs is a specialized engineering organization dedicated to advancing product reliability through precision testing and technical expertise. With decades of engineering knowledge and access to globally recognized testing technologies, we support organizations in developing safer, stronger and higher-performing products.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our focus extends beyond testing — we work as a technical partner, helping customers make informed engineering decisions through accurate data, scientific analysis and internationally accepted testing methodologies.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="journey" className="py-20 bg-surface">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-amber font-semibold">Our Journey</div>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-brand-deep">Building Long-Term Engineering Partnerships</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our journey has been driven by a commitment to precision, continuous improvement and customer success. Over the years, BISS Labs has expanded from conventional material testing to advanced testing solutions supporting automotive, aerospace, renewable energy, healthcare and industrial manufacturing.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              By investing in modern technology, technical expertise and quality systems, we continue to evolve alongside our customers, helping them overcome engineering challenges and accelerate product innovation.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="vision" className="py-20 bg-background">
        <div className="container-x grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-brand text-white rounded-xl p-8 h-full">
              <Compass className="w-8 h-8 text-amber" />
              <h3 className="mt-4 text-2xl font-bold">Our Vision</h3>
              <p className="mt-2 text-sm text-amber uppercase tracking-widest font-semibold">Shaping the Future of Engineering Validation</p>
              <p className="mt-4 text-white/80 leading-relaxed">
                To become one of the most trusted engineering testing organizations by delivering innovative, reliable and internationally recognized testing solutions that contribute to safer products, stronger industries and sustainable technological advancement.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-amber text-brand-deep rounded-xl p-8 h-full">
              <Target className="w-8 h-8" />
              <h3 className="mt-4 text-2xl font-bold">Our Mission</h3>
              <p className="mt-2 text-sm uppercase tracking-widest font-semibold">Delivering Precision That Builds Confidence</p>
              <p className="mt-4 leading-relaxed">
                Our mission is to provide customers with dependable engineering support through accurate testing, advanced technologies and technical excellence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="values" className="py-20 bg-surface">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-amber font-semibold">Our Core Values</div>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-brand-deep">The Principles That Drive Our Success</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 60}>
                  <div className="bg-white border border-border rounded-lg p-6 h-full hover:shadow-md hover:-translate-y-1 transition">
                    <div className="w-10 h-10 rounded-md bg-brand text-white flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                    <h4 className="mt-4 font-bold text-brand-deep">{v.title}</h4>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="global" className="py-20 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <Globe2 className="w-14 h-14 text-amber" />
            <div className="text-xs uppercase tracking-widest text-amber font-semibold mt-4">Global Presence</div>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-brand-deep">Local Expertise with Global Engineering Support</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-muted-foreground leading-relaxed">
              BISS Labs combines the responsiveness of a local engineering partner with the strength of a globally connected organization. Through our association with the ITW Test & Measurement network, we have access to international engineering expertise, advanced technologies and proven testing methodologies.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This global collaboration enables us to deliver world-class solutions while providing dedicated technical support to customers across India and neighbouring regions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-brand-deep text-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-amber font-semibold">Facts & Figures</div>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold">BISS at a Glance</h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">Our achievements reflect our commitment to engineering excellence and customer confidence.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-extrabold text-amber font-display">
                    <StatCounter end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-white/70">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}