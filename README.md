# Next.js + Tailwind Starter

## Installation

1. Clone this repository (`git clone «TBD»`)
2. Install dependencies (`npm install`)
3. Install `vercel` globally (`npm i -g vercel@latest`)
4. Log in to Vercel (`vc login`)
5. Link this project to Vercel with an initial deployment confirming all defaults (`vc -c`)

## Development

1. Run the development server (`vc dev`)
2. Open http://localhost:3000
3. Add new routes as pages in `/pages` (e.g. `/pages/about.tsx` -> `http://localhost:3000/about`)

### Environment variables

Production, Preview, and Development environment variables can be set up for this project by viewing Project Settings on https://vercel.com/«your_account»/next-tailwind-start/settings/environment-variables. Change `/next-tailwind-start/` if you have renamed your pro

### Writing tests

End-to-end specs for Cypress are found in `/cypress/integration`. Tests can be run in the following ways:

1. With a UI: `npm run cy:open`
2. Headless: `npm test` or `npm run cy:run`
3. Automatically for pull requests: *coming soon*

## Deployment

1. Staging deployments: `npm run deploy`
2. Production deployments: `npm run deploy:prod`