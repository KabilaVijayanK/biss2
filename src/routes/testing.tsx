import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowRight, Beaker } from "lucide-react";
import { testingServices, labStats } from "@/data/testing";
import { Reveal } from "@/components/common/Reveal";

export const Route = createFileRoute("/testing")({
  head: () => ({
    meta: [
      { title: "Testing Services — Mechanical, Structural, Composite & Medical | BISS Labs" },
      {
        name: "description",
        content:
          "Advanced mechanical, structural, composite, EV and medical device testing. 15+ mechanical test types, 20+ composite methods, ASTM/ISO/EN/BIS aligned.",
      },
      { property: "og:title", content: "BISS Labs Testing Services" },
      {
        property: "og:description",
        content:
          "Comprehensive engineering testing capabilities across metals, composites and structural systems.",
      },
    ],
  }),
  component: TestingLayout,
});

function TestingLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/testing/$slug");
  if (isChild) return <Outlet />;
  return <TestingIndex />;
}

function TestingIndex() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/assets/banner.png"
            alt="BISS Labs testing facility"
            className="h-full w-full object-cover opacity-55"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>
        
        {/* Decorative Gradient Circles */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-amber/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-brand-deep/20 rounded-full blur-3xl opacity-40" />

        {/* Content */}
        <div className="relative isolate container-x py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-2 text-sm text-amber font-semibold backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber" />
              Testing Solutions
            </div>
            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold text-white leading-tight">Engineering Testing Capabilities</h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              From metals and composites to full-scale structural validation, our lab covers 15+ mechanical test types and 20+ composite methods.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testingServices.map((t, i) => (
            <Reveal key={t.slug} delay={i * 40}>
              <Link
                to="/testing/$slug"
                params={{ slug: t.slug }}
                className="group block rounded-lg overflow-hidden border border-border bg-white hover:shadow-lg hover:-translate-y-1 transition h-full"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-amber to-brand-deep relative">
                  <Beaker className="absolute right-5 bottom-5 w-16 h-16 text-white/25 group-hover:scale-110 transition-transform" />
                  <div className="absolute left-5 top-5 text-white text-xs uppercase tracking-widest font-bold">
                    Testing
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-deep font-display">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-amber">
                    View capabilities <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-amber font-semibold">
              Facility overview
            </div>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-brand-deep">
              Testing Laboratory Statistics
            </h2>
            <p className="mt-3 text-muted-foreground">
              A snapshot of the equipment, temperature ranges and standards our lab supports.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-brand-deep text-white text-xs uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">Capability</th>
                  <th className="px-6 py-4">Specification</th>
                </tr>
              </thead>
              <tbody>
                {labStats.map((row, i) => (
                  <tr key={row.capability} className={i % 2 ? "bg-surface" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-brand-deep">{row.capability}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.specification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
