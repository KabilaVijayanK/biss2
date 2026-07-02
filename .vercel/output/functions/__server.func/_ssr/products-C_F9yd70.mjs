import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-B5RqkReU.mjs";
import { L as ArrowRight, i as Wrench } from "../_libs/lucide-react.mjs";
import { n as products } from "./products-DRThLdRL.mjs";
import { d as useMatches, f as Outlet, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-C_F9yd70.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsLayout() {
	if (useMatches().some((m) => m.routeId === "/products/$slug")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsIndex, {});
}
function ProductsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-brand-deep text-white py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-amber font-semibold",
					children: "Products"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-5xl lg:text-6xl font-extrabold",
					children: "Testing Systems & Instruments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-white/70 max-w-2xl",
					children: "Twelve product families engineered for precision — from load cells and extensometers to full multi-axis structural systems."
				})
			]
		})
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
