import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-B5RqkReU.mjs";
import { F as Beaker, L as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as useMatches, f as Outlet, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as labStats, r as testingServices } from "./testing-DVrxKiIT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testing-Ch3FRbgO.js
var import_jsx_runtime = require_jsx_runtime();
function TestingLayout() {
	if (useMatches().some((m) => m.routeId === "/testing/$slug")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestingIndex, {});
}
function TestingIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-brand-deep text-white py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-amber font-semibold",
						children: "Testing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-5xl lg:text-6xl font-extrabold",
						children: "Engineering Testing Capabilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-white/70 max-w-2xl",
						children: "From metals and composites to full-scale structural validation, our lab covers 15+ mechanical test types and 20+ composite methods."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: testingServices.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/testing/$slug",
						params: { slug: t.slug },
						className: "group block rounded-lg overflow-hidden border border-border bg-white hover:shadow-lg hover:-translate-y-1 transition h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-[16/10] bg-gradient-to-br from-amber to-brand-deep relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beaker, { className: "absolute right-5 bottom-5 w-16 h-16 text-white/25 group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-5 top-5 text-white text-xs uppercase tracking-widest font-bold",
								children: "Testing"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-brand-deep font-display",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: t.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-amber",
									children: ["View capabilities ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
								})
							]
						})]
					})
				}, t.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-amber font-semibold",
							children: "Facility overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl lg:text-4xl font-bold text-brand-deep",
							children: "Testing Laboratory Statistics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "A snapshot of the equipment, temperature ranges and standards our lab supports."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-lg border border-border bg-white shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-brand-deep text-white text-xs uppercase tracking-widest",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4",
								children: "Capability"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4",
								children: "Specification"
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: labStats.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: i % 2 ? "bg-surface" : "bg-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 font-semibold text-brand-deep",
								children: row.capability
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 text-muted-foreground",
								children: row.specification
							})]
						}, row.capability)) })]
					})
				})]
			})
		})
	] });
}
//#endregion
export { TestingLayout as component };
