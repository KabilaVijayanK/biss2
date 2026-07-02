import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { getTesting, testingServices } from "@/data/testing";
import { Reveal } from "@/components/common/Reveal";

export const Route = createFileRoute("/testing/$slug")({
  loader: ({ params }) => {
    const service = getTesting(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} | BISS Labs` },
          { name: "description", content: loaderData.service.tagline },
          { property: "og:title", content: `${loaderData.service.title} | BISS Labs` },
          { property: "og:description", content: loaderData.service.tagline },
        ]
      : [],
  }),
  component: TestingDetail,
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

function TestingDetail() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <section className="bg-brand-deep text-white py-20">
        <div className="container-x">
          <nav className="flex items-center gap-1 text-xs text-white/60">
            <Link to="/" className="hover:text-amber">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/testing" className="hover:text-amber">
              Testing
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/90">{service.title}</span>
          </nav>
          <div className="mt-4 text-xs uppercase tracking-widest text-amber font-semibold">
            Testing Service
          </div>
          <h1 className="mt-2 text-4xl lg:text-6xl font-extrabold">{service.h1}</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">{service.tagline}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-brand-deep">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{service.overview}</p>

            <div className="mt-10 space-y-10">
              <List title="Capabilities" items={service.capabilities} />
              <List title="Available Tests" items={service.tests} />
              <List title="Specifications" items={service.specifications} />
              <List title="Facility Highlights" items={service.facilities} />
              <List title="Applications" items={service.applications} />

              {service.standards?.length ? (
                <div>
                  <h3 className="text-xl font-bold text-brand-deep font-display">
                    Testing Standards
                  </h3>
                  <div className="mt-4 overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-surface text-brand-deep">
                        <tr>
                          <th className="px-4 py-3">Standard</th>
                          <th className="px-4 py-3">Method</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.standards.map((s: { code: string; name: string }, i: number) => (
                          <tr key={i} className={i % 2 ? "bg-surface" : "bg-white"}>
                            <td className="px-4 py-3 font-semibold text-brand-deep">{s.code}</td>
                            <td className="px-4 py-3 text-muted-foreground">{s.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
          <aside className="space-y-6">
            <div className="rounded-lg bg-surface border border-border p-6">
              <h3 className="font-bold text-brand-deep">Related standards</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber mt-0.5" /> ASTM · ISO · EN · BIS
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber mt-0.5" /> Customer-defined protocols
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber mt-0.5" /> Traceable calibration
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-brand text-white p-6">
              <h3 className="font-bold">Discuss your specimen</h3>
              <p className="text-sm text-white/70 mt-2">
                Send us your standard, geometry and required test conditions — we'll come back with
                a plan.
              </p>
              <Link
                to="/contact-us"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-amber text-amber-foreground font-semibold px-4 py-2"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-brand-deep mb-8">Related testing services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {testingServices
              .filter((t) => t.slug !== service.slug)
              .slice(0, 4)
              .map((t) => (
                <Link
                  key={t.slug}
                  to="/testing/$slug"
                  params={{ slug: t.slug }}
                  className="rounded-lg border border-border bg-white p-5 hover:shadow-md hover:-translate-y-1 transition"
                >
                  <div className="text-xs uppercase tracking-widest text-amber font-bold">
                    Testing
                  </div>
                  <div className="mt-1 font-bold text-brand-deep text-sm">{t.title}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
