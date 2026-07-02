import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Youtube } from "lucide-react";
import { products } from "@/data/products";

const industries = ["Automotive", "Aerospace & Defence", "Renewable Energy", "Medical Devices", "Manufacturing", "Research & Academia"];

const testingLinks = [
  { label: "Mechanical Testing", to: "/testing/mechanical-testing" },
  { label: "Metal Testing", to: "/testing/metal-testing" },
  { label: "GFRP Composite Testing", to: "/testing/gfrp-composite-testing" },
  { label: "CFRP Composite Testing", to: "/testing/cfrp-composite-testing" },
  { label: "Structural Testing", to: "/testing/structural-testing" },
  { label: "EV Structural Testing", to: "/testing/ev-structural-testing" },
  { label: "Automotive Durability", to: "/testing/automotive-durability" },
  { label: "Medical Device Testing", to: "/testing/medical-device-testing" },
];

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white/80">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div>
            <h4 className="text-white font-display font-bold mb-4 text-sm uppercase tracking-widest">Industries</h4>
            <ul className="space-y-2 text-sm">
              {industries.map((i) => (
                <li key={i}><a href="#" className="hover:text-amber transition">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-4 text-sm uppercase tracking-widest">Products</h4>
            <ul className="space-y-2 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/$slug`} params={{ slug: p.slug }} className="hover:text-amber transition">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-4 text-sm uppercase tracking-widest">Testing</h4>
            <ul className="space-y-2 text-sm">
              {testingLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-amber transition">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-4 text-sm uppercase tracking-widest">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="hover:text-amber">Company Overview</Link></li>
              <li><Link to="/about-us" hash="journey" className="hover:text-amber">Our Journey</Link></li>
              <li><Link to="/about-us" hash="vision" className="hover:text-amber">Vision & Mission</Link></li>
              <li><Link to="/about-us" hash="values" className="hover:text-amber">Core Values</Link></li>
              <li><Link to="/about-us" hash="global" className="hover:text-amber">Global Presence</Link></li>
              <li><a href="#" className="hover:text-amber">Certifications</a></li>
              <li><a href="#" className="hover:text-amber">Careers</a></li>
              <li><Link to="/contact-us" className="hover:text-amber">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h4 className="text-white font-display font-bold mb-2">Subscribe to our newsletter</h4>
              <p className="text-xs text-white/60 mb-4">Testing insights, standards updates and lab news.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input type="email" required placeholder="Email *" className="w-full px-3 py-2 rounded bg-white/10 border border-white/10 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-amber" />
                <select className="w-full px-3 py-2 rounded bg-white/10 border border-white/10 text-sm text-white focus:outline-none focus:border-amber">
                  <option className="text-foreground">Please Select…</option>
                  <option className="text-foreground">Automotive</option>
                  <option className="text-foreground">Aerospace & Defence</option>
                  <option className="text-foreground">Renewable Energy</option>
                  <option className="text-foreground">Medical Devices</option>
                  <option className="text-foreground">Manufacturing</option>
                  <option className="text-foreground">Research & Academia</option>
                </select>
                <label className="flex gap-2 text-[11px] text-white/60 leading-snug">
                  <input type="checkbox" className="mt-0.5" />
                  I agree to receive communications from BISS Labs and have read the privacy notice.
                </label>
                <button className="w-full rounded bg-amber text-amber-foreground text-sm font-semibold py-2 hover:brightness-95 transition">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col md:flex-row items-center gap-4 justify-between py-5 text-xs text-white/60">
          <div className="flex items-center gap-2 font-display font-black text-white">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white text-brand text-xs">B</span>
            BISS <span className="text-amber">Labs</span>
          </div>
          <div>© {new Date().getFullYear()} BISS Labs. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber">Privacy Policy</a>
            <Link to="/contact-us" className="hover:text-amber">Contact Us</Link>
            <a href="#" className="hover:text-amber">Customer Portal</a>
            <span className="flex items-center gap-3 ml-2">
              <a href="#" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
              <a href="#" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="#" aria-label="YouTube"><Youtube className="w-4 h-4" /></a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}