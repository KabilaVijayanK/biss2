import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { Reveal } from "@/components/common/Reveal";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.title} | BISS Labs` },
          { name: "description", content: loaderData.product.tagline },
          { property: "og:title", content: `${loaderData.product.title} | BISS Labs` },
          { property: "og:description", content: loaderData.product.tagline },
        ]
      : [],
  }),
  component: ProductDetail,
});

function List({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div>
      <h3 className="text-xl font-bold text-brand-deep font-display">{title}</h3>
      <ul className="mt-4 grid sm:grid-cols-2 gap-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
            <Check className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" /> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/banner.png"
            alt="Product detail banner"
            className="h-full w-full object-cover opacity-50"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-slate-950 to-slate-950" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber/15 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-deep/25 rounded-full blur-3xl opacity-30" />

        {/* Content */}
        <div className="relative isolate container-x py-16 lg:py-20">
          <nav className="flex items-center gap-1 text-xs text-white/60 mb-8">
            <Link to="/" className="hover:text-amber transition font-medium">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/products" className="hover:text-amber transition font-medium">
              Products
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber font-semibold">{product.title}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-2 text-sm text-amber font-semibold backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber" />
              Product Details
            </div>
            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold text-white">{product.h1}</h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl">{product.tagline}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-brand-deep">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{product.overview}</p>

            <div className="mt-10 space-y-10">
              <List title="Key Features" items={product.features} />
              <List title="Services" items={product.services} />
              <List title="Products" items={product.products} />
              <List title="Benefits" items={product.benefits} />
              <List title="Applications" items={product.applications} />
              <List title="Industries Served" items={product.industries} />
            </div>
          </Reveal>
          <aside className="space-y-6">
            <div className="rounded-lg bg-surface border border-border p-6">
              <h3 className="font-bold text-brand-deep">Why choose BISS</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber mt-0.5" /> ASTM, ISO, EN and BIS aligned
                  methods
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber mt-0.5" /> Force capability from 1 N to 2 MN
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber mt-0.5" /> 24/7 laboratory operations
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber mt-0.5" /> Global ITW Test & Measurement
                  network
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-brand text-white p-6">
              <h3 className="font-bold">Request a quote</h3>
              <p className="text-sm text-white/70 mt-2">
                Talk to a BISS engineer about your standard, load range and specimen geometry.
              </p>
              <Link
                to="/contact-us"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-amber text-amber-foreground font-semibold px-4 py-2"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-brand-deep mb-8">Explore other products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="rounded-lg border border-border bg-white p-5 hover:shadow-md hover:-translate-y-1 transition"
                >
                  <div className="text-xs uppercase tracking-widest text-amber font-bold">
                    System
                  </div>
                  <div className="mt-1 font-bold text-brand-deep text-sm">{p.title}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
