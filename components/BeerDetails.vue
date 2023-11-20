<template>
	<div class="flex flex-col w-full md:flex-row">
		<div class="w-full md:w-2/5 relative overflow-hidden flex flex-col items-center justify-center">
			<img :src="beer.image_url" :alt="beer.name" class="w-full my-4 h-64 object-contain" />
			<div class="absolute left-0 top-0 h-16 w-16" v-if="beer.has_dry_hop">
				<div
					class="absolute transform -rotate-45 bg-gray-600 text-center text-white font-semibold text-sm py-1 left-[-34px] top-[32px] w-[170px]"
				>
					Dry Hopped
				</div>
			</div>
			<p>
				<span
					class="text-white text-xs rounded-sm bg-red-700 p-1 box-decoration-clone"
					v-if="beer.has_lactose"
					>LACTOSE</span
				>
			</p>
		</div>

		<div class="w-full md:w-3/5 p-4">
			<h2 class="mb-4 leading-9 border-0">
				{{ beer.name }}
			</h2>
			<p class="my-4 text-gray-800 font-semibold">{{ beer.tagline }}</p>
			<div class="flex flex-col divide-y md:flex-row md:divide-y-0 md:gap-5 text-gray-600 my-4">
				<p v-show="beer.abv" class="flex items-center justify-between gap-2">
					<span class="text-gray-800 font-bold p-1 box-decoration-clone inline-block">{{
						beer.abv
					}}</span>
					<span>ABV</span>
				</p>
				<p v-show="beer.ibu" class="flex items-center justify-between gap-2">
					<span class="text-gray-800 font-bold p-1 box-decoration-clone inline-block">{{
						beer.ibu
					}}</span>
					<span>IBU</span>
				</p>
				<p v-show="beer.ebc" class="flex items-center justify-between gap-2">
					<span class="text-gray-800 font-bold p-1 box-decoration-clone inline-block">{{
						beer.ebc
					}}</span>
					<span>EBC</span>
				</p>
				<p v-show="beer.srm" class="flex items-center justify-between gap-2">
					<span class="text-gray-800 font-bold p-1 box-decoration-clone inline-block">{{
						beer.srm
					}}</span>
					<span>SRM</span>
				</p>
				<p v-show="beer.ph" class="flex items-center justify-between gap-2">
					<span class="text-gray-800 font-bold p-1 box-decoration-clone inline-block">{{
						beer.ph
					}}</span>
					<span>PH</span>
				</p>
			</div>
			<p class="my-4">{{ beer.description }}</p>
			<h3 class="mt-8 mb-4">Food Pairing</h3>
			<ul v-for="food in beer.food_pairing" class="max-w-md space-y-1 list-inside">
				<li class="flex items-center">
					<svg
						class="w-3.5 h-3.5 me-2 flex-shrink-0"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
						/>
					</svg>
					{{ food }}
				</li>
			</ul>
			<h3 class="mt-8 mb-4">Brewers Tips</h3>
			<p>
				{{ beer.brewers_tips }}
			</p>
		</div>
	</div>
</template>

<script setup>
	const { beer } = defineProps(['beer']);
</script>

<style scoped></style>
