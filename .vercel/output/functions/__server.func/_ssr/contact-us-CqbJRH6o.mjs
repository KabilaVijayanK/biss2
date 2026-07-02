import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-B5RqkReU.mjs";
import { S as Globe, d as Phone, g as Mail, h as MapPin, p as MessageCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-us-CqbJRH6o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var industries = [
	"Automotive",
	"Aerospace & Defence",
	"Renewable Energy",
	"Medical Devices",
	"Manufacturing",
	"Research & Academia"
];
function Contact() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-slate-950",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/banner.png",
						alt: "BISS Labs facility",
						className: "h-full w-full object-cover opacity-50",
						width: 1920,
						height: 1080
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-deep via-slate-950/80 to-slate-950" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-20 w-96 h-96 bg-amber/15 rounded-full blur-3xl opacity-60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-20 w-80 h-80 bg-brand-deep/30 rounded-full blur-3xl opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-40 left-1/2 w-72 h-72 bg-amber/5 rounded-full blur-2xl opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative isolate container-x py-16 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/15 px-4 py-2 text-sm text-amber font-semibold backdrop-blur-sm mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-amber animate-pulse" }), "Get in Touch"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 text-5xl lg:text-7xl font-extrabold text-white leading-tight",
								children: "Connect with Our Engineering Experts"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xl text-white/80 max-w-2xl leading-relaxed",
								children: "Let's discuss your testing requirements — from product validation to research support and customized solutions."
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-16 bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid lg:grid-cols-3 gap-6",
				children: [
					{
						icon: Phone,
						title: "Phone",
						body: "+91 XXXXX XXXXX",
						link: "tel:+91"
					},
					{
						icon: Mail,
						title: "Email",
						body: "info@bisslabs.com",
						link: "mailto:info@bisslabs.com"
					},
					{
						icon: Globe,
						title: "Website",
						body: "www.bisslabs.com",
						link: "#"
					}
				].map(({ icon: Icon, title, body, link }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link,
					className: "group rounded-lg border border-border bg-white p-6 flex items-start gap-4 hover:shadow-lg hover:-translate-y-1 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-11 h-11 rounded-md bg-amber/15 text-amber flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground font-semibold",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-bold text-brand-deep group-hover:text-brand",
						children: body
					})] })]
				}, title))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-brand text-white p-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-11 h-11 rounded-md bg-amber text-amber-foreground flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-amber font-semibold",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-semibold",
							children: "Connect instantly with our engineering support team for testing inquiries and quotations."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 font-semibold text-amber-foreground hover:brightness-95",
						children: "Chat with Us"
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid lg:grid-cols-2 gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-amber font-semibold",
						children: "Visit Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl lg:text-4xl font-bold text-brand-deep",
						children: "Locate Our Laboratory"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Our modern laboratory is conveniently located in Peenya Industrial Area, Bengaluru, one of India's leading manufacturing and engineering hubs."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 rounded-lg bg-white border border-border p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5 text-amber mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-brand-deep",
								children: "BISS Labs"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-muted-foreground mt-1",
								children: [
									"Peenya Industrial Area",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Bengaluru, Karnataka, India"
								]
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 aspect-[16/10] rounded-lg overflow-hidden border border-border bg-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "BISS Labs location map",
							src: "https://www.google.com/maps?q=Peenya+Industrial+Area+Bengaluru&output=embed",
							className: "w-full h-full border-0",
							loading: "lazy"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSubmitted(true);
						},
						className: "bg-white rounded-lg border border-border p-8 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-amber font-semibold",
								children: "Send us your requirements"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-2xl font-bold text-brand-deep",
								children: "Contact Form"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Fill out the form and one of our technical specialists will contact you shortly."
							}),
							submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 rounded-md bg-amber/10 border border-amber text-brand-deep p-4 text-sm",
								children: "Thank you — our team will reach out shortly."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid sm:grid-cols-2 gap-4",
								children: [
									[
										{
											name: "fullName",
											label: "Full Name *",
											type: "text",
											req: true,
											span: 1
										},
										{
											name: "company",
											label: "Company Name *",
											type: "text",
											req: true,
											span: 1
										},
										{
											name: "email",
											label: "Email Address *",
											type: "email",
											req: true,
											span: 1
										},
										{
											name: "mobile",
											label: "Mobile Number *",
											type: "tel",
											req: true,
											span: 1
										},
										{
											name: "city",
											label: "City",
											type: "text",
											req: false,
											span: 1
										}
									].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: f.span === 2 ? "sm:col-span-2" : "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-semibold text-brand-deep mb-1",
											children: f.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: f.name,
											type: f.type,
											required: f.req,
											className: "w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber transition"
										})]
									}, f.name)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-semibold text-brand-deep mb-1",
										children: "Industry"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select…"
										}), industries.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: i }, i))]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-semibold text-brand-deep mb-1",
											children: "Subject *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											className: "w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-semibold text-brand-deep mb-1",
											children: "Message *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											required: true,
											rows: 5,
											className: "w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "w-full inline-flex justify-center items-center rounded-md bg-amber px-6 py-3 font-semibold text-amber-foreground shadow hover:brightness-95 transition",
											children: "Submit Inquiry"
										})
									})
								]
							})
						]
					})
				})]
			})
		})
	] });
}
//#endregion
export { Contact as component };
