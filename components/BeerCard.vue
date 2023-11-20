<template>
	<NuxtLink :to="`/beers/${beer.id}`" class="group/beer">
		<div class="group/beer relative overflow-hidden">
			<img
				:src="beer.image_url"
				:alt="beer.name"
				class="w-full my-4 h-64 object-contain group-hover/beer:scale-105 transition"
			/>
			<div class="absolute left-0 top-0 h-16 w-16" v-if="beer.has_dry_hop">
				<div
					class="absolute transform -rotate-45 bg-gray-600 md:bg-gray-200 group-hover/beer:bg-gray-600 text-center text-white font-semibold text-sm py-1 left-[-34px] top-[32px] w-[170px]"
				>
					Dry Hopped
				</div>
			</div>
		</div>

		<div class="p-4">
			<h3 class="mb-2 text-lg font-bold">
				<span
					class="bg-black text-white p-1 box-decoration-clone group-hover/beer:bg-yellow-200 group-hover/beer:text-black"
				>
					{{ beer.name }}
				</span>
			</h3>
			<p class="mb-2 text-gray-800 text-sm font-semibold">{{ beer.tagline }}</p>
			<div class="flex gap-4 text-gray-600 text-sm mb-2">
				<p>
					<span class="text-gray-800 font-bold p-1 box-decoration-clone">{{ beer.abv }}</span>
					ABV
				</p>
				<p>
					<span class="text-gray-800 font-bold p-1 box-decoration-clone">{{ beer.ibu }}</span>
					IBU
				</p>
				<p>
					<span
						class="text-white text-xs rounded-sm bg-red-700 md:bg-gray-200 group-hover/beer:bg-red-700 p-1 box-decoration-clone"
						v-if="beer.has_lactose"
						>LACTOSE</span
					>
				</p>
			</div>

			<p class="mb-2 text-gray-600 text-sm">{{ beer.description }}</p>
		</div>
	</NuxtLink>
</template>

<script setup>
	const { beer } = defineProps(['beer']);
</script>

<style scoped></style>
