<template>
	<div class="container mx-auto p-4">
		<h2 class="my-4">Beer Menu</h2>
		<p class="my-4">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Aperiam dolor ipsa
			laudantium nihil cum est voluptatem numquam repellendus.
		</p>
		<div v-if="beers" class="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
			<div v-for="beer in beers" :key="beer.id" class="my-4">
				<BeerCard :beer="beer" />
			</div>
		</div>
		<div v-else>
			<p class="error">Sorry, we're updating our beer menu, check back later.</p>
		</div>
	</div>
</template>

<script setup>
	const { data: beers, error } = await useFetch(`/api/beers`, {
		query: {
			brewed_after: '11-2012',
		},
	});

	if (error.value) {
		console.error(error.value);
		throw createError({
			statusCode: 500,
			message: 'Error fetching beers',
			fatal: true,
		});
	}

	useHead({
		title: 'codeBeer | Beer Menu',
		meta: [
			{
				name: 'description',
				content:
					'With a name like codeBeer, you know what you’ll get. Big brews, big tastes, big stuffed heads on the wall, and big friendly northern Michigan attitude.',
			},
			{
				name: 'keywords',
				content:
					'beer, craft beer, beer menu, beer list, beer finder, beer search, beer locator, beer near me',
			},
		],
	});
</script>
