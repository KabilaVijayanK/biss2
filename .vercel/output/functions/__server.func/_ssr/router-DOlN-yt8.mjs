import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { E as Facebook, _ as Linkedin, j as ChevronDown, l as Search, m as Menu, n as Youtube, r as X } from "../_libs/lucide-react.mjs";
import { n as products } from "./products-DRThLdRL.mjs";
import { _ as useRouter, c as HeadContent, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$7 } from "./products._slug-BL-VPAID.mjs";
import { r as testingServices } from "./testing-DVrxKiIT.mjs";
import { t as Route$8 } from "./testing._slug-Byg6CapK.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DOlN-yt8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-E8PvTz8V.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var productsMenu = {
	columns: [
		{
			title: "Systems",
			links: [
				{
					label: "Universal Testing Machines",
					to: "/products/universal-testing-machines"
				},
				{
					label: "Damper Test Systems",
					to: "/products/damper-test-systems"
				},
				{
					label: "Structural Test Systems",
					to: "/products/structural-test-systems"
				},
				{
					label: "Upgrades & Retrofits",
					to: "/products/upgrades-retrofits"
				}
			]
		},
		{
			title: "Accessories",
			links: [
				{
					label: "Grips & Fixtures",
					to: "/products/grips-fixtures"
				},
				{
					label: "Actuators",
					to: "/products/actuators"
				},
				{
					label: "Load Cells",
					to: "/products/load-cells"
				},
				{
					label: "Extensometers",
					to: "/products/extensometers"
				},
				{
					label: "Accessories",
					to: "/products/accessories"
				},
				{
					label: "Calibration Equipment",
					to: "/products/calibration-equipment"
				}
			]
		},
		{
			title: "Controllers & Software",
			links: [{
				label: "Controllers",
				to: "/products/controllers"
			}, {
				label: "Testing Software",
				to: "/products/software"
			}]
		}
	],
	feature: {
		title: "Explore the full product range",
		body: "Twelve product families engineered for precision testing, from load cells to full structural systems.",
		to: "/products"
	}
};
var testingMenu = {
	columns: [
		{
			title: "Mechanical",
			links: [
				{
					label: "Mechanical Testing",
					to: "/testing/mechanical-testing"
				},
				{
					label: "Metal Testing",
					to: "/testing/metal-testing"
				},
				{
					label: "Tensile Testing",
					to: "/testing/tensile-testing"
				},
				{
					label: "Fracture Toughness",
					to: "/testing/fracture-toughness"
				},
				{
					label: "Low Cycle Fatigue",
					to: "/testing/low-cycle-fatigue"
				},
				{
					label: "Creep & Stress Rupture",
					to: "/testing/creep-stress-rupture"
				}
			]
		},
		{
			title: "Composite",
			links: [
				{
					label: "GFRP Composite Testing",
					to: "/testing/gfrp-composite-testing"
				},
				{
					label: "CFRP Composite Testing",
					to: "/testing/cfrp-composite-testing"
				},
				{
					label: "Fatigue (S-N Curve)",
					to: "/testing/fatigue-sn-curve"
				},
				{
					label: "High Strain Rate & DIC",
					to: "/testing/high-strain-rate-dic"
				}
			]
		},
		{
			title: "Structural & Specialized",
			links: [
				{
					label: "Structural Testing",
					to: "/testing/structural-testing"
				},
				{
					label: "EV Structural Testing",
					to: "/testing/ev-structural-testing"
				},
				{
					label: "Automotive Durability",
					to: "/testing/automotive-durability"
				},
				{
					label: "Medical Device Testing",
					to: "/testing/medical-device-testing"
				}
			]
		}
	],
	feature: {
		title: "View full testing capabilities",
		body: "15+ mechanical test types, 20+ composite methods, and structural rigs up to 2 MN.",
		to: "/testing"
	}
};
function MegaPanel({ menu }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute left-0 right-0 top-full bg-white border-t border-border shadow-2xl animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid grid-cols-1 md:grid-cols-4 gap-10 py-10",
			children: [menu.columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-xs font-bold uppercase tracking-widest text-amber mb-4",
				children: col.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2.5",
				children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "text-sm text-foreground/80 hover:text-brand transition-colors",
					children: l.label
				}) }, l.to))
			})] }, col.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: menu.feature.to,
				className: "group bg-brand text-white p-6 rounded-lg flex flex-col justify-between hover:bg-brand-deep transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-amber mb-2 font-semibold",
						children: "Explore"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-bold text-lg leading-snug",
						children: menu.feature.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-white/70 mt-2",
						children: menu.feature.body
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 text-sm font-semibold text-amber group-hover:translate-x-1 transition-transform",
					children: "Learn more →"
				})]
			})]
		})
	});
}
function Navbar() {
	const [openMenu, setOpenMenu] = (0, import_react.useState)(null);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [mobileSection, setMobileSection] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const navLink = "text-sm font-semibold text-foreground/80 hover:text-brand transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-brand-deep text-white/80 text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x flex justify-end gap-6 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "|" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "hover:text-amber flex items-center gap-1",
							children: ["Language ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-3 h-3" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "|" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact-us",
							className: "hover:text-amber",
							children: "Contact Us"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: `bg-white border-b border-border transition-shadow ${scrolled ? "shadow-md" : ""}`,
				onMouseLeave: () => setOpenMenu(null),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-x flex items-center justify-between h-16 lg:h-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex items-center gap-2 font-display font-black text-brand tracking-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center justify-center w-9 h-9 rounded-md bg-brand text-white text-sm",
									children: "B"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xl",
									children: ["BISS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-amber",
										children: "Labs"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden lg:flex items-center gap-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: navLink,
										activeProps: { className: "text-brand" },
										children: "Home"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about-us",
										className: navLink,
										activeProps: { className: "text-brand" },
										children: "About Us"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onMouseEnter: () => setOpenMenu("products"),
										onClick: () => setOpenMenu(openMenu === "products" ? null : "products"),
										className: `${navLink} flex items-center gap-1`,
										children: ["Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onMouseEnter: () => setOpenMenu("testing"),
										onClick: () => setOpenMenu(openMenu === "testing" ? null : "testing"),
										className: `${navLink} flex items-center gap-1`,
										children: ["Testing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact-us",
										className: navLink,
										children: "Contact Us"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden lg:flex items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"aria-label": "Search",
										className: "text-foreground/60 hover:text-brand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "LinkedIn",
										href: "#",
										className: "text-foreground/60 hover:text-brand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "Facebook",
										href: "#",
										className: "text-foreground/60 hover:text-brand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "YouTube",
										href: "#",
										className: "text-foreground/60 hover:text-brand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact-us",
										className: "ml-2 inline-flex items-center rounded-md bg-amber px-4 py-2 text-sm font-semibold text-amber-foreground shadow-sm hover:brightness-95 hover:-translate-y-0.5 transition",
										children: "Request a Quote"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "lg:hidden text-brand",
								"aria-label": "Open menu",
								onClick: () => setMobileOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-6 h-6" })
							})
						]
					}),
					openMenu === "products" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MegaPanel, { menu: productsMenu }),
					openMenu === "testing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MegaPanel, { menu: testingMenu })
				]
			}),
			mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden fixed inset-0 z-[60] bg-white overflow-y-auto animate-fade-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-4 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display font-black text-brand",
						children: ["BISS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-amber",
							children: "Labs"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Close menu",
						onClick: () => setMobileOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							onClick: () => setMobileOpen(false),
							className: "block py-3 border-b border-border font-semibold",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about-us",
							onClick: () => setMobileOpen(false),
							className: "block py-3 border-b border-border font-semibold",
							children: "About Us"
						}),
						["products", "testing"].map((k) => {
							const menu = k === "products" ? productsMenu : testingMenu;
							const open = mobileSection === k;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "w-full flex justify-between items-center py-3 font-semibold capitalize",
									onClick: () => setMobileSection(open ? null : k),
									children: [
										k,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `w-4 h-4 transition-transform ${open ? "rotate-180" : ""}` })
									]
								}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pb-3 pl-2 space-y-3",
									children: menu.columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-widest text-amber mb-1",
										children: c.title
									}), c.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: l.to,
										onClick: () => setMobileOpen(false),
										className: "block py-1.5 text-sm text-foreground/80",
										children: l.label
									}, l.to))] }, c.title))
								})]
							}, k);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact-us",
							onClick: () => setMobileOpen(false),
							className: "block py-3 border-b border-border font-semibold",
							children: "Contact Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact-us",
							onClick: () => setMobileOpen(false),
							className: "mt-4 inline-flex items-center rounded-md bg-amber px-4 py-2 text-sm font-semibold text-amber-foreground",
							children: "Request a Quote"
						})
					]
				})]
			})
		]
	});
}
var industries = [
	"Automotive",
	"Aerospace & Defence",
	"Renewable Energy",
	"Medical Devices",
	"Manufacturing",
	"Research & Academia"
];
var testingLinks = [
	{
		label: "Mechanical Testing",
		to: "/testing/mechanical-testing"
	},
	{
		label: "Metal Testing",
		to: "/testing/metal-testing"
	},
	{
		label: "GFRP Composite Testing",
		to: "/testing/gfrp-composite-testing"
	},
	{
		label: "CFRP Composite Testing",
		to: "/testing/cfrp-composite-testing"
	},
	{
		label: "Structural Testing",
		to: "/testing/structural-testing"
	},
	{
		label: "EV Structural Testing",
		to: "/testing/ev-structural-testing"
	},
	{
		label: "Automotive Durability",
		to: "/testing/automotive-durability"
	},
	{
		label: "Medical Device Testing",
		to: "/testing/medical-device-testing"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-brand-deep text-white/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display font-bold mb-4 text-sm uppercase tracking-widest",
						children: "Industries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: industries.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-amber transition",
							children: i
						}) }, i))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display font-bold mb-4 text-sm uppercase tracking-widest",
						children: "Products"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/products/$slug`,
							params: { slug: p.slug },
							className: "hover:text-amber transition",
							children: p.title
						}) }, p.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display font-bold mb-4 text-sm uppercase tracking-widest",
						children: "Testing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: testingLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "hover:text-amber transition",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-white font-display font-bold mb-4 text-sm uppercase tracking-widest",
						children: "About Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about-us",
								className: "hover:text-amber",
								children: "Company Overview"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about-us",
								hash: "journey",
								className: "hover:text-amber",
								children: "Our Journey"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about-us",
								hash: "vision",
								className: "hover:text-amber",
								children: "Vision & Mission"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about-us",
								hash: "values",
								className: "hover:text-amber",
								children: "Core Values"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about-us",
								hash: "global",
								className: "hover:text-amber",
								children: "Global Presence"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-amber",
								children: "Certifications"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-amber",
								children: "Careers"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact-us",
								className: "hover:text-amber",
								children: "Contact Us"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2 md:col-span-3 lg:col-span-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white/5 border border-white/10 rounded-lg p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-white font-display font-bold mb-2",
									children: "Subscribe to our newsletter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-white/60 mb-4",
									children: "Testing insights, standards updates and lab news."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "space-y-3",
									onSubmit: (e) => e.preventDefault(),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											required: true,
											placeholder: "Email *",
											className: "w-full px-3 py-2 rounded bg-white/10 border border-white/10 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-amber"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "w-full px-3 py-2 rounded bg-white/10 border border-white/10 text-sm text-white focus:outline-none focus:border-amber",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													className: "text-foreground",
													children: "Please Select…"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													className: "text-foreground",
													children: "Automotive"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													className: "text-foreground",
													children: "Aerospace & Defence"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													className: "text-foreground",
													children: "Renewable Energy"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													className: "text-foreground",
													children: "Medical Devices"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													className: "text-foreground",
													children: "Manufacturing"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													className: "text-foreground",
													children: "Research & Academia"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex gap-2 text-[11px] text-white/60 leading-snug",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												className: "mt-0.5"
											}), "I agree to receive communications from BISS Labs and have read the privacy notice."]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "w-full rounded bg-amber text-amber-foreground text-sm font-semibold py-2 hover:brightness-95 transition",
											children: "Subscribe"
										})
									]
								})
							]
						})
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex flex-col md:flex-row items-center gap-4 justify-between py-5 text-xs text-white/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-display font-black text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center justify-center w-7 h-7 rounded-md bg-white text-brand text-xs",
								children: "B"
							}),
							"BISS ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber",
								children: "Labs"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" BISS Labs. All rights reserved."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-amber",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact-us",
								className: "hover:text-amber",
								children: "Contact Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-amber",
								children: "Customer Portal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3 ml-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										"aria-label": "LinkedIn",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										"aria-label": "Facebook",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										"aria-label": "YouTube",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "w-4 h-4" })
									})
								]
							})
						]
					})
				]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "BISS Labs — Material & Mechanical Testing Laboratory in India" },
			{
				name: "description",
				content: "BISS Labs delivers precision material testing, mechanical testing, structural validation and calibration services for automotive, aerospace, energy and medical industries."
			},
			{
				name: "author",
				content: "BISS Labs"
			},
			{
				property: "og:title",
				content: "BISS Labs — Precision Testing Solutions for Engineering Excellence"
			},
			{
				property: "og:description",
				content: "Advanced material, mechanical and structural testing services. NABL, DGAQA and BIS aligned. 50+ testing systems. 24/7 laboratory operations."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-dvh flex-col bg-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$4 = () => import("./testing-Ch3FRbgO.mjs");
var Route$5 = createFileRoute("/testing")({
	head: () => ({ meta: [
		{ title: "Testing Services — Mechanical, Structural, Composite & Medical | BISS Labs" },
		{
			name: "description",
			content: "Advanced mechanical, structural, composite, EV and medical device testing. 15+ mechanical test types, 20+ composite methods, ASTM/ISO/EN/BIS aligned."
		},
		{
			property: "og:title",
			content: "BISS Labs Testing Services"
		},
		{
			property: "og:description",
			content: "Comprehensive engineering testing capabilities across metals, composites and structural systems."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var BASE_URL = "";
var Route$4 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/about-us",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/products",
			changefreq: "weekly",
			priority: "0.9"
		},
		{
			path: "/testing",
			changefreq: "weekly",
			priority: "0.9"
		},
		{
			path: "/contact-us",
			changefreq: "monthly",
			priority: "0.7"
		},
		...products.map((p) => ({
			path: `/products/${p.slug}`,
			changefreq: "monthly",
			priority: "0.7"
		})),
		...testingServices.map((t) => ({
			path: `/testing/${t.slug}`,
			changefreq: "monthly",
			priority: "0.7"
		}))
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$3 = () => import("./products-C_F9yd70.mjs");
var Route$3 = createFileRoute("/products")({
	head: () => ({ meta: [
		{ title: "Products — Universal Testing Machines & Testing Systems | BISS Labs" },
		{
			name: "description",
			content: "Explore the BISS Labs product range: universal testing machines, damper and structural systems, controllers, actuators, load cells, extensometers, testing software and calibration equipment."
		},
		{
			property: "og:title",
			content: "BISS Labs Products"
		},
		{
			property: "og:description",
			content: "Twelve product families engineered for precision testing."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-us-D7iMSFTS.mjs");
var Route$2 = createFileRoute("/contact-us")({
	head: () => ({ meta: [
		{ title: "Contact BISS Labs | Material Testing Laboratory in India" },
		{
			name: "description",
			content: "Contact BISS Labs for material, mechanical, structural, calibration and engineering testing services. Request a quotation or connect with our specialists."
		},
		{
			property: "og:title",
			content: "Contact BISS Labs"
		},
		{
			property: "og:description",
			content: "Talk to our engineering experts about your testing project."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-us-XjH9NNhn.mjs");
var Route$1 = createFileRoute("/about-us")({
	head: () => ({ meta: [
		{ title: "About BISS Labs | Material Testing Laboratory & Engineering Excellence" },
		{
			name: "description",
			content: "Learn about BISS Labs, a trusted Material Testing Laboratory in India. Discover our global association with ITW and Instron, advanced testing infrastructure and certifications."
		},
		{
			property: "og:title",
			content: "About BISS Labs"
		},
		{
			property: "og:description",
			content: "Engineering confidence through knowledge, innovation and precision."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-k4043p2K.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var TestingRoute = Route$5.update({
	id: "/testing",
	path: "/testing",
	getParentRoute: () => Route$6
});
var SitemapDotxmlRoute = Route$4.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var ProductsRoute = Route$3.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$6
});
var ContactUsRoute = Route$2.update({
	id: "/contact-us",
	path: "/contact-us",
	getParentRoute: () => Route$6
});
var AboutUsRoute = Route$1.update({
	id: "/about-us",
	path: "/about-us",
	getParentRoute: () => Route$6
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var TestingSlugRoute = Route$8.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TestingRoute
});
var ProductsRouteChildren = { ProductsSlugRoute: Route$7.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProductsRoute
}) };
var ProductsRouteWithChildren = ProductsRoute._addFileChildren(ProductsRouteChildren);
var TestingRouteChildren = { TestingSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutUsRoute,
	ContactUsRoute,
	ProductsRoute: ProductsRouteWithChildren,
	SitemapDotxmlRoute,
	TestingRoute: TestingRoute._addFileChildren(TestingRouteChildren)
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
