# Next.js + Tailwind Starter

## Installation

1. Clone this repository (`git clone git@github.com:meerkats/next-tailwind-start.git`)
2. Install dependencies (`npm install`)
3. Install `vercel` globally (`npm i -g vercel@latest`)
4. Log in to Vercel (`vc login`)
5. Link this project to Vercel with an initial deployment confirming all defaults (`vc -c`) *

## Development

1. Run the development server (`vc dev`)
2. Open http://localhost:3000
3. Add new routes as pages in `/pages` (e.g. `/pages/about.tsx` -> `http://localhost:3000/about`)

## Common tasks

### Custom fonts

1. Load web fonts either with a `link` tag (see `_app.tsx` for an example) or by placing the font files into the `/public` folder and create a CSS file to use them.
2. Add the new font families to the theme in `tailwind.config.js`
   ```
   theme: {
      ...
      fontFamily: {
        display: 'Roboto, sans-serif',
        body: 'Inter, sans-serif',
      },
      ...
   }
   ```
3. Add the `font-body` utility class to body tag. The above definition creates a `font-display` utility class.

### Colour palette

1. Define your colour palette in `tailwind.config.js`
   ```
      theme: {
         ...
         colors: {
            black: '#181818',
            white: '#fff',
            transparent: 'rgba(0, 0, 0, 0)',
            current: 'currentColor',
            'wtp-green': '#2ec3a1',
            'wtp-red': '#ff2900',
            ...
         },
         ...
      },
   ```
2. These colours will be available in utility classes such as `text-black`, `bg-wtp-green`, etc

### Environment variables

Production, Preview, and Development environment variables can be set up for this project by viewing Project Settings on https://vercel.com/«your_account»/next-tailwind-start/settings/environment-variables. **

### Writing tests

End-to-end specs for Cypress are found in `/cypress/integration`. Tests can be run in the following ways:

1. With a UI: `npm run cy:open`
2. Headless: `npm test` or `npm run cy:run`
3. Automatically for pull requests. (currently Github only)
   1. Link your project on Vercel to the Git repository of your project.
   2. Create a Pull Request or push a commit to an existing Pull Request
   3. View the **Checks** tab on your Pull Request page

## Deployment

1. Staging deployments: `npm run deploy`
2. Production deployments: `npm run deploy:prod`

---

\* If you are in multiple Vercel teams then exclude the `-c` flag and select the appropriate team when deploying.

\** Change `/next-tailwind-start/` if you have renamed your project.
