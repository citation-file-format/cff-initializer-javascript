# Developer notes



## Technology stack

- [Single Page App](https://en.wikipedia.org/wiki/Single-page_application): The `cffinit` app will be a SPA. So app feels like a native app and no server-side code needs to run.
- [https://www.figma.com/](https://www.figma.com/): A vector graphics and prototyping editor used to developed the wireframes and interaction designs.
- [npm CLI](https://docs.npmjs.com/cli/v7): Package manager command line interface shipped with NodeJS.
- [TypeScript](https://www.typescriptlang.org/): Typed JavaScript language used for lowering maintenance cost.
- [Vue.js v3](https://v3.vuejs.org/): A frontend JS framework for building user interfaces.
- [Vue.js Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html): Is style of writing UI components to group logical concerns like state management.
- [Quasar](https://quasar.dev/): A UI framework, a group of UI components, that follow [Material design guidelines](https://material.io/design) to make a coherent/pleasing user interface.
- [Quasar CLI](https://quasar.dev/quasar-cli): Build and test infrastructure.
- [GitHub pages](https://pages.github.com/): Hosting of static HTML files. The build app (in `docs` folder) is deployed on it.
- [Husky](https://typicode.github.io/husky/#/): Automaticly runs checks before pushing changes to GitHub.
- [Jest](https://jestjs.io/): Testing framework to run unit tests and perform test assertions.
- [highlight.js]: To syntax highlight the YAML formatted file.
- [ESLint](https://eslint.org/): To get constistent code style and prevent errors the industry standard linter ESLint is used.

The notes about how we came to this technology stack, design and personas can be found in [project-docs/](project-docs/) folder.

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

We use Jest for unit tests. To run unit tests (`test/jest/__tests__/**/*.jest.spec.ts`)

You can run the test with

```shell
npm run test:unit:ci
```

You can also use the Majestic web interface to run the unit tests in your browser.

```shell
npm run test:unit:ui
```
