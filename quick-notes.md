
```
################
### pre-reqs ...

# have/get node (this might error if you get a newer version)
brew install node

# make sure you have node v14 (incase you had a newer one)
brew install node@14
brew unlink node
brew link --overwrite node@14
node -v
echo 'export PATH="/opt/homebrew/opt/node@14/bin:$PATH"' >> ~/.zshrc

# node-gyp is used in the project - and expects python
brew install python
alias python=python3

# NX needs to be installed globally
npm i -g nx





################
### project ...

# web.conf.ts should have:
# add browserVersion: 'stable',
# comment out "services"

cd first-bank-of-change

# remove old package file
rm package-lock.json

# instal deps
npm install

# This demo uses a single app with everything running in memory. No servers are used for this demo.
npm run start # then go to http://localhost:4200

# run the e2e tests - which will also bring the app up - will depend on selenium/chromedriver
# wdio.confs.ts - remove services, add browserVersion
#  /Users/drewkhoury/repos/cucumber-declarative-gherkin/first-bank-of-change/.tmp/report/index.html
npm run e2e

```

# notes
https://liatrio.github.io/dojo-portal/#/catalogue/behavior-driven-development/
https://webdriver.io/
https://webdriver.io/blog/
http://localhost:4200/
https://github.com/drewkhoury/cucumber-declarative-gherkin/blob/main/docs/declarative-gherkin.md
file:///Users/drewkhoury/repos/cucumber-declarative-gherkin/first-bank-of-change/.tmp/report/index.html
https://cucumber.io/docs/bdd/better-gherkin/
https://cucumber.io/docs/bdd/
