import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Search, X, ChevronDown, Linkedin, Facebook, Youtube } from "lucide-react";
import { productsMenu, testingMenu, type MegaMenu } from "@/data/navigation";

function MegaPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="absolute left-0 right-0 top-full bg-white border-t border-border shadow-2xl animate-fade-in">
      <div className="container-x grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
        {menu.columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-foreground/80 hover:text-brand transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link to={menu.feature.to} className="group bg-brand text-white p-6 rounded-lg flex flex-col justify-between hover:bg-brand-deep transition-colors">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber mb-2 font-semibold">Explore</div>
            <div className="font-display font-bold text-lg leading-snug">{menu.feature.title}</div>
            <p className="text-sm text-white/70 mt-2">{menu.feature.body}</p>
          </div>
          <div className="mt-4 text-sm font-semibold text-amber group-hover:translate-x-1 transition-transform">Learn more →</div>
        </Link>
      </div>
    </div>
  );
}

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<null | "products" | "testing">(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = "text-sm font-semibold text-foreground/80 hover:text-brand transition-colors";

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-brand-deep text-white/80 text-xs">
        <div className="container-x flex justify-end gap-6 py-2">
          <span>|</span>
          <a href="#" className="hover:text-amber flex items-center gap-1">Language <ChevronDown className="w-3 h-3" /></a>
          <span>|</span>
          <Link to="/contact-us" className="hover:text-amber">Contact Us</Link>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-white border-b border-border transition-shadow ${scrolled ? "shadow-md" : ""}`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="container-x flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 font-display font-black text-brand tracking-tight hover:opacity-100 transition-opacity">
            <img src="/assets/logo.png" alt="BISS Labs" className="h-18 w-30" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={navLink} activeProps={{ className: "text-brand" }}>Home</Link>
            <Link to="/about-us" className={navLink} activeProps={{ className: "text-brand" }}>About Us</Link>
            <button
              onMouseEnter={() => setOpenMenu("products")}
              onClick={() => setOpenMenu(openMenu === "products" ? null : "products")}
              className={`${navLink} flex items-center gap-1`}
            >
              Products <ChevronDown className="w-4 h-4" />
            </button>
            <button
              onMouseEnter={() => setOpenMenu("testing")}
              onClick={() => setOpenMenu(openMenu === "testing" ? null : "testing")}
              className={`${navLink} flex items-center gap-1`}
            >
              Testing <ChevronDown className="w-4 h-4" />
            </button>
            <Link to="/contact-us" className={navLink}>Contact Us</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button aria-label="Search" className="text-foreground/60 hover:text-brand"><Search className="w-4 h-4" /></button>
            <a aria-label="LinkedIn" href="#" className="text-foreground/60 hover:text-brand"><Linkedin className="w-4 h-4" /></a>
            <a aria-label="Facebook" href="#" className="text-foreground/60 hover:text-brand"><Facebook className="w-4 h-4" /></a>
            <a aria-label="YouTube" href="#" className="text-foreground/60 hover:text-brand"><Youtube className="w-4 h-4" /></a>
            <Link
              to="/contact-us"
              className="ml-2 inline-flex items-center rounded-md bg-amber px-4 py-2 text-sm font-semibold text-amber-foreground shadow-sm hover:brightness-95 hover:-translate-y-0.5 transition"
            >
              Request a Quote
            </Link>
          </div>

          <button className="lg:hidden text-brand" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {openMenu === "products" && <MegaPanel menu={productsMenu} />}
        {openMenu === "testing" && <MegaPanel menu={testingMenu} />}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-white overflow-y-auto animate-fade-in">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <img src="/assets/logo.png" alt="BISS Labs" className="h-10 w-auto" />
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <div className="p-4 space-y-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-border font-semibold">Home</Link>
            <Link to="/about-us" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-border font-semibold">About Us</Link>
            {(["products", "testing"] as const).map((k) => {
              const menu = k === "products" ? productsMenu : testingMenu;
              const open = mobileSection === k;
              return (
                <div key={k} className="border-b border-border">
                  <button className="w-full flex justify-between items-center py-3 font-semibold capitalize" onClick={() => setMobileSection(open ? null : k)}>
                    {k} <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="pb-3 pl-2 space-y-3">
                      {menu.columns.map((c) => (
                        <div key={c.title}>
                          <div className="text-xs uppercase tracking-widest text-amber mb-1">{c.title}</div>
                          {c.links.map((l) => (
                            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-foreground/80">
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link to="/contact-us" onClick={() => setMobileOpen(false)} className="block py-3 border-b border-border font-semibold">Contact Us</Link>
            <Link
              to="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center rounded-md bg-amber px-4 py-2 text-sm font-semibold text-amber-foreground"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}