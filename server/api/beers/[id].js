export default defineEventHandler(async (event) => {
	const runtimeConfig = useRuntimeConfig();
	const id = getRouterParam(event, 'id');
	const apiUrl = `${runtimeConfig.API_BASE_URL}/beers/${id}`;

	try {
		const data = await $fetch(apiUrl);

		return {
			...data[0],
			has_lactose: data[0].ingredients.hops.some((malt) =>
				malt.name.toLowerCase().includes('lactose')
			),
			has_dry_hop: data[0].ingredients.hops.some((hop) => hop.add.toLowerCase().includes('dry')),
		};
	} catch (error) {
		console.error(error);
		return error;
	}
});
