export default defineEventHandler(async (event) => {
	const runtimeConfig = useRuntimeConfig();
	const queryParams = getQuery(event);
	const queryString = Object.entries(queryParams)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		.join('&');

	const apiUrl = `${runtimeConfig.API_BASE_URL}/beers?${queryString}`;

	try {
		const data = await $fetch(apiUrl);

		return data
			.filter((item) => !item.ingredients.hops.some((hop) => hop.name === 'Centennial'))
			.sort((a, b) => a.abv - b.abv)
			.map((item) => ({
				...item,
				has_lactose: item.ingredients.hops.some((hop) => hop.name === 'Lactose'),
				has_dry_hop: item.ingredients.hops.some((hop) => hop.add === 'dry hop'),
			}));
	} catch (error) {
		console.error(error);
		return error;
	}
});
