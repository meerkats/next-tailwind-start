# Next.js + Tailwind Starter

## Installation

1. Clone this repository (`git clone «TBD»`)
2. Install dependencies (`npm install`)
3. Install `vercel` globally (`npm i -g vercel@latest`)
4. Log in to Vercel (`vc login`)
5. Link this project to Vercel with an initial deployment confirming all defaults (`vc -c`) **

## Development

1. Run the development server (`vc dev`)
2. Open http://localhost:3000
3. Add new routes as pages in `/pages` (e.g. `/pages/about.tsx` -> `http://localhost:3000/about`)

### Environment variables

Production, Preview, and Development environment variables can be set up for this project by viewing Project Settings on https://vercel.com/«your_account»/next-tailwind-start/settings/environment-variables. *

### Writing tests

End-to-end specs for Cypress are found in `/cypress/integration`. Tests can be run in the following ways:

* With a UI: `npm run cy:open`
* Headless: `npm test` or `npm run cy:run`
* Automatically for pull requests:
   1. Generate a new Token in https://vercel.com/account/tokens
   2. Create a new Secret called `DEPLOYMENT_ACCESS_TOKEN` in https://github.com/«your_account»/next-tailwind-start/settings/secrets *


## Deployment

1. Staging deployments: `npm run deploy`
2. Production deployments: `npm run deploy:prod`

---

\* Change `/next-tailwind-start/` if you have renamed your project

\*\* If you are linked to multiple Vercel accounts then run `vc` WITHOUT the `-c` flag and select the correct team when prompted.