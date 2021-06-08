# cucumber-declarative-gherkin

[![Linter](https://github.com/contino/cucumber-declarative-gherkin/actions/workflows/linter.yml/badge.svg)](https://github.com/contino/cucumber-declarative-gherkin/actions/workflows/linter.yml)
[![Unit Tests](https://github.com/contino/cucumber-declarative-gherkin/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/contino/cucumber-declarative-gherkin/actions/workflows/unit-tests.yml)
[![e2e Tests](https://github.com/contino/cucumber-declarative-gherkin/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/contino/cucumber-declarative-gherkin/actions/workflows/e2e-test.yml)

This is a training aide to help people learn Declarative Gherkin.  It is not
easy to learn Declarative Gherkin.  Thus, this app helps people understand how
to take what they learned in training and see a working implementation.

## Where to Start?

Want to learn more about declarative Gherkin, read the training or
look at the docs [here](./docs/declarative-gherkin.md).

Want to see the declarative Gherkin, go into the `contino/features`
folder.

Want to run the declarative Gherkin:

1. Install the perquisites
1. Run `nvm use` in the root folder
1. run `npm install` in the `contino` folder
1. run `npm run e2e`
1. Then open the file
    `cucumber-declarative-gherkin/contino/.tmp/report/index.html` in a browser

**NOTE:** The e2e test will fail.  It is to demo the advance logging.  
navigate to the failing scenario to see a screenshot, test suite failure
location and client logging entries.

## Perquisites

- Need Node and NPM, built with node 14.16.0
- NX needs to be installed globally
  - `npm i -g nx`

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

### Generate Cucumber Step Definitions

WebdriverIO Cucumber framework does not generate the step definitions when
they are missing.  So, we use the VS Code extension
[Jest-cucumber code generator](https://marketplace.visualstudio.com/items?itemName=Piotr-Porzuczek.jest-cucumber-code-generator-extension).  

**NOTE:** the plugin generates regex requiring alteration, example:

Failing regex:

```gehrkin
Then(/^they see a submittal response (.*)$/
```

Correct regex: (Double quotes)

```gehrkin
Then(/^they see a submittal response "(.*)"$/
```

Without the double quotes, the string will contain them and fail comparisons.

### Troubleshooting e2e Tests

See [Cucumber Logging](./docs/cucumber-logging.md)
