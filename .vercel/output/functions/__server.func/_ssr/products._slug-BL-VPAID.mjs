import { t as getProduct } from "./products-DRThLdRL.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-BL-VPAID.js
var $$splitComponentImporter = () => import("./products._slug-C7S8GWx_.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.product.title} | BISS Labs` },
		{
			name: "description",
			content: loaderData.product.tagline
		},
		{
			property: "og:title",
			content: `${loaderData.product.title} | BISS Labs`
		},
		{
			property: "og:description",
			content: loaderData.product.tagline
		}
	] : [] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
