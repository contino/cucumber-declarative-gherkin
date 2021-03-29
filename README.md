# cucumber-declarative-gherkin

This is a training aide to help people learn Declarative Gherkin.  It is not
easy to learn Declarative Gherkin.  Thus, this is helps people understand how
to take what they learned in training and see it working, as a whole.

## Perquisites 

- Need Node and NPM, built with node 14.16.0
- NX needs to be installed globally 
- - `npm i -g nx`

## Run the Example App

This demo uses a single app with everything running in memory.  No servers are
used for this demo.

From the repo root folder run `npm run start`, then go to `http:\\localhost:4200`.

## Local Development

When developing locally, you can run `npm run start` it will watch your file 
changes and reload.  In addition, when working on e2e tests, run 
`npm run e2e-dev`, it only runs the test suite.

To run lint, use `npm run lint`

To run unit tests, use `npm run test`

### Troubleshooting e2e Tests

See [Cucumber Logging](./docs/cucumber-logging.md)