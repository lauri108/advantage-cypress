# advantage-cypress

## What does this repo do?
This repo provides some cypress.io examples, along with a Proof Of Concept UAT test for Schrole Advantage sign-up.

## How to install
- Run `npm install` in the project root. Cypress.io and other relevant NPM packages will install. This will take about 5 mins.
- Rename the `.env.example` file to `.env` and fill in username/login details. Note that the `.env` file you've created will be ignored by Git, and should not be committed to source code.

## How to run tests

- If you want to open the cypress.io user interface, run this command in the project root: `npm run cy:ropen`
- If you want to run Cypress in headless mode, run this command in the project root: `npm run cy:run`
