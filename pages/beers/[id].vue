<template>
	<div v-if="beer" class="container mx-auto p-4 md:p-8">
		<BeerDetails :beer="beer" />
	</div>
	<div v-else>
		<p class="error">Sorry, we're updating our beer menu, check back later.</p>
	</div>
	<div class="flex flex-col items-center bg-gray-300">
		<nuxt-link to="/beers" class="btn my-6 md:my-12">Show Beer Menu</nuxt-link>
	</div>
</template>

<script setup>
	const { id } = useRoute().params;
	const { data: beer, error } = await useFetch(`/api/beers/${id}`, {
		key: id,
	});

	if (error.value) {
		console.error(error.value);
		throw createError({
			statusCode: 500,
			message: 'Error fetching beer',
			fatal: true,
		});
	}

	useHead({
		title: `codeBeer | ${beer.value.name}`,
		meta: [
			{
				name: 'description',
				content: beer.value.description,
			},
			{
				name: 'keywords',
				content: `beer ${beer.value.ingredients.hops.map((hop) => hop.name).join(', beer ')}`,
			},
		],
	});
</script>

<style scoped></style>
