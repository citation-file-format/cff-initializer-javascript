# Developer documentation

If you are looking for user documentation, go [here](README.md).

## Prerequisites

- [npm CLI](https://docs.npmjs.com/cli/v7): Package manager command line interface shipped with NodeJS.

## Code editor

- VSCode extensions: https://code.visualstudio.com/
  - https://marketplace.visualstudio.com/items?itemName=Vue.volar
  - https://marketplace.visualstudio.com/items?itemName=octref.vetur
  - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- WebStorm: https://www.jetbrains.com/webstorm/
- Atom: https://atom.io/
- Vim

## Virtual environments

[nvm](https://github.com/nvm-sh/nvm) or [nvs](https://github.com/jasongin/nvs) can be used to manage node versions.

## Installing the dependencies

The command below will install npm dependencies

```shell
npm clean-install
```

## Starting the development server

You can start the development server by running

```shell
npm run dev
```

Use a browser to navigate to [localhost:8080](http://localhost:8080/) to see the website.

## Building the application

The command below will build the application and save the output in `docs/` folder. This is what we serve in the demo page.

```shell
npm run build
```

## Debugging

1. Before you can launch the debugger, the app must be running. Start the development server by running

    ```shell
    npm run dev
    ```

2. Run the debugger
Select "CFFinit: chrome" in the dropdown on the title bar of the debug and run pane. Then click the green “Start Debugging” button in the “Run and Debug” pane(or press F5).

1. Set breakpoints and control step over/in/out etc.


**Note:** You can also launch the built-in Chrome debugger and it will stay in sync. This might be useful if you also have the [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) installed.


## Tests

We use `Jest` for unit tests. The unit tests can be found under `test/jest/__tests__/` folder.

You can run the test with

```shell
npm run test:unit:ci
```

You can also use the Majestic web interface to run the unit tests in your browser.

```shell
npm run test:unit:ui
```

## Linting and formatting

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

## Making a release

This section describes how to make a release in 2 parts:

1. preparation
1. making a release on GitHub

### (1/2) Preparation

1. Verify that the information in `CITATION.cff` is correct
2. Generate an updated version of `.zenodo.json` if needed using `cffconvert`
3. Make sure the version field in `package.json` is correct
4. By running `npm run lint` make sure the linter does not complain
5. Run the unit tests with `npm run test:unit:ci`
6. Make sure that github.io page is up to date
7. Check whether the [Publish](https://github.com/citation-file-format/cff-initializer-javascript/actions/workflows/publish.yml) workflow worked recently and it was successful

### (2/2) GitHub

Make a [release on GitHub](https://github.com/citation-file-format/cff-initializer-javascript/releases/new).

## References

Links to documentation or tutorials related to technologies/tools we use in the project are shown below. The notes about how we came to this technology stack, design and personas can be found in [project-docs/](project-docs/) folder.

- [Single Page App](https://en.wikipedia.org/wiki/Single-page_application): The `cffinit` app will be a SPA. So app feels like a native app and no server-side code needs to run.
- [Figma](https://www.figma.com/): A vector graphics and prototyping editor used to developed the wireframes and interaction designs.
- [TypeScript](https://www.typescriptlang.org/): Typed JavaScript language used for lowering maintenance cost.
- [Vue.js v3](https://v3.vuejs.org/): A frontend JS framework for building user interfaces.
- [Vue.js Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html): Is style of writing UI components to group logical concerns like state management.
- [Quasar](https://quasar.dev/): A UI framework, a group of UI components, that follow [Material design guidelines](https://material.io/design) to make a coherent/pleasing user interface.
- [GitHub pages](https://pages.github.com/): Hosting of static HTML files. The build app (in `docs` folder) is deployed on it.
- [Husky](https://typicode.github.io/husky/#/): Automaticly runs checks before pushing changes to GitHub.
- [Jest](https://jestjs.io/): Testing framework to run unit tests and perform test assertions.
- [ESLint](https://eslint.org/): To get constistent code style and prevent errors the industry standard linter ESLint is used.
- [Majestic Web UI](https://github.com/Raathigesh/majestic): Web UI for unit tests using Jest
