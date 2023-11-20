# codeBeer - Nuxt 3 App

Look at the [DEMO](https://nuxt-3-tailwind-api.vercel.app/beers).

*Beer Menu*

![image]([https://github.com/leomiranda/nuxt-3-tailwind-api/assets/32196/cfb22ce5-e085-4d2e-b101-33e7c56a03e5](https://nuxt-3-tailwind-api.vercel.app/beers))

*Beer Page*

![image]([https://github.com/leomiranda/nuxt-3-tailwind-api/assets/32196/7cc34b47-c274-4db5-924d-1e76560f58b2](https://nuxt-3-tailwind-api.vercel.app/beers/48))


## Challenge

Hit this brew dog api, display the results:
url: https://api.punkapi.com/v2/beers?brewed_after=11-2012

- Use Vue with Nuxt
- Display:
  - Name
  - Tagline
  - Description
  - Image
  - ABV
  - IBU
- Warning of some sort if contains lactose
- Hi-lite of some sort if dry hopped
- Sort by ascending ABV
- Remove any with Centennial hops


### Links

Challenge delivered: [Beer Menu](https://nuxt-3-tailwind-api.vercel.app/beers)
Others:
- [Beer Page](https://nuxt-3-tailwind-api.vercel.app/beers/48)
- [Beer Menu API](https://nuxt-3-tailwind-api.vercel.app/api/beers)
- [Beer Details API](https://nuxt-3-tailwind-api.vercel.app/api/beers/48)


### Google Lighthouse

#### Beer Page

![telegram-cloud-photo-size-1-5102893315333925893-y](https://github.com/leomiranda/nuxt-3-tailwind-api/assets/32196/128390ba-a62a-468d-b006-461920fb94be)

#### Beer Menu

![telegram-cloud-photo-size-1-5102893315333925894-y](https://github.com/leomiranda/nuxt-3-tailwind-api/assets/32196/597db79f-15c5-4077-90ef-7cf9092bbddf)


## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

Clone the file `.env.example` and rename to `.env`.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
