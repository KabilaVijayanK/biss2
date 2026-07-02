import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatCounter-CEhTe0R0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var about_lab_default = "/assets/about-lab-CKQ7WLa7.jpg";
function StatCounter({ end, suffix = "", prefix = "", duration = 1600 }) {
	const ref = (0, import_react.useRef)(null);
	const [value, setValue] = (0, import_react.useState)(0);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting && !started.current) {
				started.current = true;
				const start = performance.now();
				const tick = (t) => {
					const p = Math.min((t - start) / duration, 1);
					setValue(Math.floor(p * end));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			}
		});
		io.observe(el);
		return () => io.disconnect();
	}, [end, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			value.toLocaleString(),
			suffix
		]
	});
}
//#endregion
export { about_lab_default as n, StatCounter as t };
