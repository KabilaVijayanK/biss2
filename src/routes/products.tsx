import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowRight, Wrench } from "lucide-react";
import { products } from "@/data/products";
import { Reveal } from "@/components/common/Reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Universal Testing Machines & Testing Systems | BISS Labs" },
      {
        name: "description",
        content:
          "Explore the BISS Labs product range: universal testing machines, damper and structural systems, controllers, actuators, load cells, extensometers, testing software and calibration equipment.",
      },
      { property: "og:title", content: "BISS Labs Products" },
      {
        property: "og:description",
        content: "Twelve product families engineered for precision testing.",
      },
    ],
  }),
  component: ProductsLayout,
});

function ProductsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/products/$slug");
  if (isChild) return <Outlet />;
  return <ProductsIndex />;
}

function ProductsIndex() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/assets/banner.png"
            alt="BISS Labs products and equipment"
            className="h-full w-full object-cover opacity-50"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-brand-deep/40" />
        </div>
        
        {/* Animated Gradient Circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-deep/30 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-amber/10 rounded-full blur-2xl opacity-20" />

        {/* Content */}
        <div className="relative isolate container-x py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/15 px-4 py-2 text-sm text-amber font-semibold backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber" />
              Products & Solutions
            </div>
            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold text-white leading-tight">Testing Systems & Instruments</h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Twelve product families engineered for precision — from load cells and extensometers to full multi-axis structural systems.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 40}>
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-lg overflow-hidden border border-border bg-white hover:shadow-lg hover:-translate-y-1 transition h-full"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-brand to-brand-deep relative">
                  <Wrench className="absolute right-5 bottom-5 w-16 h-16 text-white/25 group-hover:scale-110 transition-transform" />
                  <div className="absolute left-5 top-5 text-amber text-xs uppercase tracking-widest font-bold">
                    System
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-deep font-display">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-amber">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
