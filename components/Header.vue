<template>
	<header class="shadow-lg shadow-gray-200 bg-white">
		<nav class="container mx-auto px-4 py-6 flex justify-between">
			<Logo />
			<ul class="flex gap-4 menu">
				<li>
					<NuxtLink to="/">Home</NuxtLink>
				</li>

				<li>
					<NuxtLink to="/beers">Beer</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about">About</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
	.menu a {
		@apply inline-block px-2 hover:bg-yellow-200 uppercase font-semibold tracking-tight;
	}
	.menu a.router-link-exact-active {
		@apply font-bold text-white md:hover:text-yellow-200 hover:shadow-md md:hover:shadow-yellow-200 md:hover:rotate-3 bg-black transition;
	}
</style>
