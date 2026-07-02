import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-B5RqkReU.mjs";
import { A as ChevronRight, L as ArrowRight, M as Check } from "../_libs/lucide-react.mjs";
import { n as products } from "./products-DRThLdRL.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./products._slug-Ckjj2R4b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-BO69Kqj4.js
var import_jsx_runtime = require_jsx_runtime();
function List({ title, items }) {
	if (!items?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-xl font-bold text-brand-deep font-display",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 grid sm:grid-cols-2 gap-2",
		children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-start gap-2 text-sm text-foreground/80",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-amber mt-0.5 flex-shrink-0" }),
				" ",
				it
			]
		}, it))
	})] });
}
function ProductDetail() {
	const { product } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-slate-950",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/banner.png",
						alt: "Product detail banner",
						className: "h-full w-full object-cover opacity-50",
						width: 1920,
						height: 1080
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-deep via-slate-950 to-slate-950" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-20 right-0 w-96 h-96 bg-amber/15 rounded-full blur-3xl opacity-50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/4 w-80 h-80 bg-brand-deep/25 rounded-full blur-3xl opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative isolate container-x py-16 lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-1 text-xs text-white/60 mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-amber transition font-medium",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								className: "hover:text-amber transition font-medium",
								children: "Products"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber font-semibold",
								children: product.title
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-2 text-sm text-amber font-semibold backdrop-blur-sm mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-amber" }), "Product Details"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 text-5xl lg:text-6xl font-extrabold text-white",
								children: product.h1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xl text-white/80 max-w-2xl",
								children: product.tagline
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid lg:grid-cols-3 gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold text-brand-deep",
							children: "Overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: product.overview
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Key Features",
									items: product.features
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Services",
									items: product.services
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Products",
									items: product.products
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Benefits",
									items: product.benefits
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Applications",
									items: product.applications
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Industries Served",
									items: product.industries
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-surface border border-border p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-brand-deep",
							children: "Why choose BISS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-amber mt-0.5" }), " ASTM, ISO, EN and BIS aligned methods"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-amber mt-0.5" }), " Force capability from 1 N to 2 MN"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-amber mt-0.5" }), " 24/7 laboratory operations"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-amber mt-0.5" }), " Global ITW Test & Measurement network"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-brand text-white p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold",
								children: "Request a quote"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/70 mt-2",
								children: "Talk to a BISS engineer about your standard, load range and specimen geometry."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact-us",
								className: "mt-4 inline-flex items-center gap-2 rounded-md bg-amber text-amber-foreground font-semibold px-4 py-2",
								children: ["Contact Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-brand-deep mb-8",
					children: "Explore other products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-4",
					children: products.filter((p) => p.slug !== product.slug).slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						className: "rounded-lg border border-border bg-white p-5 hover:shadow-md hover:-translate-y-1 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-amber font-bold",
							children: "System"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-bold text-brand-deep text-sm",
							children: p.title
						})]
					}, p.slug))
				})]
			})
		})
	] });
}
//#endregion
export { ProductDetail as component };
