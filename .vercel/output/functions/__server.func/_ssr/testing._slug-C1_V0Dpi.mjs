import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getTesting } from "./testing-DVrxKiIT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testing._slug-C1_V0Dpi.js
var $$splitComponentImporter = () => import("./testing._slug-IqSFLcZH.mjs");
var Route = createFileRoute("/testing/$slug")({
	loader: ({ params }) => {
		const service = getTesting(params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.service.title} | BISS Labs` },
		{
			name: "description",
			content: loaderData.service.tagline
		},
		{
			property: "og:title",
			content: `${loaderData.service.title} | BISS Labs`
		},
		{
			property: "og:description",
			content: loaderData.service.tagline
		}
	] : [] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
