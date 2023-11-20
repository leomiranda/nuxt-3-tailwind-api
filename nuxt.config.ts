// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	tailwindcss: {
		exposeConfig: true,
	},
	app: {
		head: {
			title: 'codeBeer | Nuxt 3 App',
			meta: [
				{ name: 'description', content: 'Nuxt 3 app example with tailwind and punkapi' },
				{
					name: 'keywords',
					content: 'nuxt 3, vue 3, tailwind, punkapi',
				},
			],
			htmlAttrs: {
				lang: 'en',
			},
		},
	},
	runtimeConfig: {
		API_BASE_URL: process.env.API_BASE_URL,
	},
});
