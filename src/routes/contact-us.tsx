import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Globe, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/common/Reveal";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact BISS Labs | Material Testing Laboratory in India" },
      {
        name: "description",
        content:
          "Contact BISS Labs for material, mechanical, structural, calibration and engineering testing services. Request a quotation or connect with our specialists.",
      },
      { property: "og:title", content: "Contact BISS Labs" },
      {
        property: "og:description",
        content: "Talk to our engineering experts about your testing project.",
      },
    ],
  }),
  component: Contact,
});

const industries = [
  "Automotive",
  "Aerospace & Defence",
  "Renewable Energy",
  "Medical Devices",
  "Manufacturing",
  "Research & Academia",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/assets/banner.png"
            alt="BISS Labs facility"
            className="h-full w-full object-cover opacity-50"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-slate-950/80 to-slate-950" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-20 w-96 h-96 bg-amber/15 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-brand-deep/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-40 left-1/2 w-72 h-72 bg-amber/5 rounded-full blur-2xl opacity-40" />

        {/* Content */}
        <div className="relative isolate container-x py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/15 px-4 py-2 text-sm text-amber font-semibold backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber animate-pulse" />
              Get in Touch
            </div>
            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              Connect with Our Engineering Experts
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Let's discuss your testing requirements — from product validation to research support and customized solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-x grid lg:grid-cols-3 gap-6">
          {[
            { icon: Phone, title: "Phone", body: "+91 XXXXX XXXXX", link: "tel:+91" },
            {
              icon: Mail,
              title: "Email",
              body: "info@bisslabs.com",
              link: "mailto:info@bisslabs.com",
            },
            { icon: Globe, title: "Website", body: "www.bisslabs.com", link: "#" },
          ].map(({ icon: Icon, title, body, link }) => (
            <a
              key={title}
              href={link}
              className="group rounded-lg border border-border bg-white p-6 flex items-start gap-4 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="w-11 h-11 rounded-md bg-amber/15 text-amber flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  {title}
                </div>
                <div className="mt-1 font-bold text-brand-deep group-hover:text-brand">{body}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="container-x mt-6">
          <div className="rounded-lg bg-brand text-white p-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-amber text-amber-foreground flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-amber font-semibold">
                  WhatsApp
                </div>
                <div className="mt-1 font-semibold">
                  Connect instantly with our engineering support team for testing inquiries and
                  quotations.
                </div>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 font-semibold text-amber-foreground hover:brightness-95"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-amber font-semibold">
              Visit Us
            </div>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-brand-deep">
              Locate Our Laboratory
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our modern laboratory is conveniently located in Peenya Industrial Area, Bengaluru,
              one of India's leading manufacturing and engineering hubs.
            </p>
            <div className="mt-6 rounded-lg bg-white border border-border p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber mt-0.5" />
                <div>
                  <div className="font-bold text-brand-deep">BISS Labs</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Peenya Industrial Area
                    <br />
                    Bengaluru, Karnataka, India
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 aspect-[16/10] rounded-lg overflow-hidden border border-border bg-white">
              <iframe
                title="BISS Labs location map"
                src="https://www.google.com/maps?q=Peenya+Industrial+Area+Bengaluru&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-white rounded-lg border border-border p-8 shadow-sm"
            >
              <div className="text-xs uppercase tracking-widest text-amber font-semibold">
                Send us your requirements
              </div>
              <h2 className="mt-2 text-2xl font-bold text-brand-deep">Contact Form</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form and one of our technical specialists will contact you shortly.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-md bg-amber/10 border border-amber text-brand-deep p-4 text-sm">
                  Thank you — our team will reach out shortly.
                </div>
              ) : (
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "fullName", label: "Full Name *", type: "text", req: true, span: 1 },
                    { name: "company", label: "Company Name *", type: "text", req: true, span: 1 },
                    { name: "email", label: "Email Address *", type: "email", req: true, span: 1 },
                    { name: "mobile", label: "Mobile Number *", type: "tel", req: true, span: 1 },
                    { name: "city", label: "City", type: "text", req: false, span: 1 },
                  ].map((f) => (
                    <div key={f.name} className={f.span === 2 ? "sm:col-span-2" : ""}>
                      <label className="block text-xs font-semibold text-brand-deep mb-1">
                        {f.label}
                      </label>
                      <input
                        name={f.name}
                        type={f.type}
                        required={f.req}
                        className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber transition"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-semibold text-brand-deep mb-1">
                      Industry
                    </label>
                    <select className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber">
                      <option value="">Select…</option>
                      {industries.map((i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-brand-deep mb-1">
                      Subject *
                    </label>
                    <input
                      required
                      className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-brand-deep mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button className="w-full inline-flex justify-center items-center rounded-md bg-amber px-6 py-3 font-semibold text-amber-foreground shadow hover:brightness-95 transition">
                      Submit Inquiry
                    </button>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
