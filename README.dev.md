# Developer notes

We're developing the wireframes and interaction designs over at [https://www.figma.com/](https://www.figma.com/).

`cffinit` is a Single Page App written in [TypeScript](https://www.typescriptlang.org/) using [Vue.js v3](https://v3.vuejs.org/) and [its composition API](https://v3.vuejs.org/api/composition-api.html).

The notes about technology choices, design, personas can be found in [project-docs/](project-docs/) folder.

## Clone the repository

```shell
# clone this repository
git clone https://github.com/citation-file-format/cffinit
# change directory
cd cffinit
```

## install dependencies

The command below will install dependencies

```shell
npm clean-install
```

## start the development server

```shell
npm run dev
```

Use a browser to navigate to [localhost:8080](http://localhost:8080/) to see the website.

## build the application

The command below will build the application and save the output in `docs/` folder.

```shell
npm run build
```

## linting the code

```shell
npm run lint
```

try to automatically fix linting issues with

```shell
npm run lint -- --fix
```

To run linting on commit, you can install a git commit hook with

```shell
npx husky install
```

## Tests

We use Jest for unit tests. To run unit tests (`src/**/*.jest.spec.ts`)

You can run the test with

```shell
npm run test:unit:ci
```

You can also use the Majestic web interface to run the unit tests in your browser.

```shell
npm run test:unit:ui
