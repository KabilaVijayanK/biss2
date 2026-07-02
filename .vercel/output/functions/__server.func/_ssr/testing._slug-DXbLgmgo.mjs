import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-B5RqkReU.mjs";
import { A as ChevronRight, L as ArrowRight, M as Check } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as testingServices } from "./testing-DVrxKiIT.mjs";
import { t as Route } from "./testing._slug-Byg6CapK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testing._slug-DXbLgmgo.js
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
function TestingDetail() {
	const { service } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-brand-deep text-white py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-1 text-xs text-white/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-amber",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/testing",
								className: "hover:text-amber",
								children: "Testing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/90",
								children: service.title
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-xs uppercase tracking-widest text-amber font-semibold",
						children: "Testing Service"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl lg:text-6xl font-extrabold",
						children: service.h1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-white/70 max-w-2xl",
						children: service.tagline
					})
				]
			})
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
							children: service.overview
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Capabilities",
									items: service.capabilities
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Available Tests",
									items: service.tests
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Specifications",
									items: service.specifications
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Facility Highlights",
									items: service.facilities
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
									title: "Applications",
									items: service.applications
								}),
								service.standards?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold text-brand-deep font-display",
									children: "Testing Standards"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 overflow-hidden rounded-lg border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-left text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "bg-surface text-brand-deep",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3",
												children: "Standard"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3",
												children: "Method"
											})] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: service.standards.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: i % 2 ? "bg-surface" : "bg-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 font-semibold text-brand-deep",
												children: s.code
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 text-muted-foreground",
												children: s.name
											})]
										}, i)) })]
									})
								})] }) : null
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-surface border border-border p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-brand-deep",
							children: "Related standards"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-amber mt-0.5" }), " ASTM · ISO · EN · BIS"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-amber mt-0.5" }), " Customer-defined protocols"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-amber mt-0.5" }), " Traceable calibration"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-brand text-white p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold",
								children: "Discuss your specimen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/70 mt-2",
								children: "Send us your standard, geometry and required test conditions — we'll come back with a plan."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact-us",
								className: "mt-4 inline-flex items-center gap-2 rounded-md bg-amber text-amber-foreground font-semibold px-4 py-2",
								children: ["Request a Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
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
					children: "Related testing services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-4",
					children: testingServices.filter((t) => t.slug !== service.slug).slice(0, 4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/testing/$slug",
						params: { slug: t.slug },
						className: "rounded-lg border border-border bg-white p-5 hover:shadow-md hover:-translate-y-1 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-amber font-bold",
							children: "Testing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-bold text-brand-deep text-sm",
							children: t.title
						})]
					}, t.slug))
				})]
			})
		})
	] });
}
//#endregion
export { TestingDetail as component };
