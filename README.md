# PaycapClient

## Common actions

## Main build procedure

...after cloning :)

### Build the dev. environment

```
npm install
npm run build
```

Install the local version of the dependencies (to please your code editor) + the development docker image. All the build/dev steps run the image, so we have an unique platform that is independent from the developer's machine, CI. etc. Actually, the product does not use your local `node_modules`.

### Start the local webpack server

`npm start`

### Unit tests

Execute once:

`npm run unittest`

Execute in watch mode:

`npm run unittest:watch`

The commands generate coverage report to `reports/coverage`.

### System tests

Execute once, assuming that the test web server is running:

`npm run e2e`

Execute with starting/stopping the webpack web server:

`npm run e2e:full`

Execute with starting/stopping the prod web server (the command also builds the container):

`npm run e2e:prod`

The commands generate html test report in `reports/e2e`.

### Linting

`npm run lint`

### Prepare documentation

Generate the compodoc-based html documentation into the `./docs` folder:

`npm run doc:build`

Generate the compodoc-based html documentation into the `./docs` folder, and start serving the files:

`npm run doc:buildandserve`

### Prod build

Create an AOT version into the `./artifacts/dist/browser` folder:

`npm run build:prod`

For "prod" build, we have two options: fully optimized built + un-optimized build. By default, the build is not optimized (the `default` config
in the `angular.json`). To produce the fully optimized build:

```
export PROJECT_CONFIG=production
npm run build:prod
```

This will produce the `production` config in the `angular.json`.

### Misc commands

Commit the code using the commitizen forms:

`npm run commit`

Format the code with prettier:

`npm run prettier`

## Recommended CI/CD flow

```
npm run build
npm run lint:fix
npm run unittest
npm run build:prod
npm run e2e:prod
npm run doc:build
npm run deploy
```
