import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-B5RqkReU.mjs";
import { L as ArrowRight, i as Wrench } from "../_libs/lucide-react.mjs";
import { n as products } from "./products-DRThLdRL.mjs";
import { d as useMatches, f as Outlet, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-C_9_qz28.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsLayout() {
	if (useMatches().some((m) => m.routeId === "/products/$slug")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsIndex, {});
}
function ProductsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-slate-950",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/banner.png",
					alt: "BISS Labs products and equipment",
					className: "h-full w-full object-cover opacity-50",
					width: 1920,
					height: 1080
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-brand-deep/40" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 -right-40 w-96 h-96 bg-amber/20 rounded-full blur-3xl opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-20 -left-20 w-80 h-80 bg-brand-deep/30 rounded-full blur-3xl opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 right-1/3 w-72 h-72 bg-amber/10 rounded-full blur-2xl opacity-20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative isolate container-x py-16 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/15 px-4 py-2 text-sm text-amber font-semibold backdrop-blur-sm mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-amber" }), "Products & Solutions"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 text-5xl lg:text-7xl font-extrabold text-white leading-tight",
							children: "Testing Systems & Instruments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xl text-white/80 max-w-2xl leading-relaxed",
							children: "Twelve product families engineered for precision — from load cells and extensometers to full multi-axis structural systems."
						})
					]
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
			children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 40,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/products/$slug",
					params: { slug: p.slug },
					className: "group block rounded-lg overflow-hidden border border-border bg-white hover:shadow-lg hover:-translate-y-1 transition h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "aspect-[16/10] bg-gradient-to-br from-brand to-brand-deep relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "absolute right-5 bottom-5 w-16 h-16 text-white/25 group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-5 top-5 text-amber text-xs uppercase tracking-widest font-bold",
							children: "System"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-brand-deep font-display",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: p.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-amber",
								children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
							})
						]
					})]
				})
			}, p.slug))
		})
	})] });
}
//#endregion
export { ProductsLayout as component };
