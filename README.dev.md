# Developer documentation

If you are looking for user documentation, go [here](README.md).

## Prerequisites

- [npm CLI](https://docs.npmjs.com/cli/v7): Package manager command line interface shipped with NodeJS.

## Code editor

- VSCode extensions: https://code.visualstudio.com/
  - https://marketplace.visualstudio.com/items?itemName=Vue.volar
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

- [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

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

## Publishing

This app is published using [GitHub pages](https://github.com/citation-file-format/cff-initializer-javascript/settings/pages) automatically by the [Publish workflow](.github/workflows/publish.yml).
The way this works is:

- After a new tag is created, the workflow runs.
- The workflow builds the app (using the `npm run build` command) into the folder `./dist`.
- The GitHub action `peaceiris/actions-gh-pages@v3` pushes the contents of `./dist` to the branch [gh-pages](https://github.com/citation-file-format/cff-initializer-javascript/tree/gh-pages).
- The `gh-pages` content is served by GitHub into <https://citation-file-format.github.io/cff-initializer-javascript/#/>

For this to work, a few things have to be set up for first time use:

- A `gh-pages` has to exist before the action is run. You can create an orphan branch to have a clean history with the following commands:

```bash
git checkout --orphan gh-pages
git rm -rf .
# git rm other files and folders if necessary
touch index.html
git add index.html
git commit -m "gh-pages created"
git push origin gh-pages
```

- After `gh-pages` is created, select it as the source for deployment of [GitHub pages](https://github.com/citation-file-format/cff-initializer-javascript/settings/pages).
- Enable write permissions for `secrets.GITHUB_TOKEN` on workflows (see, e.g. [this post](https://github.com/peaceiris/actions-gh-pages/issues/744#issuecomment-1119685318)). This is done on [Settings -> Actions -> General -> Workflow permissions](https://github.com/citation-file-format/cff-initializer-javascript/settings/actions).

## Previewing

This is app is previewed using [Netlify](https://netlify.com) automatically by the [Preview workflow](.github/workflows/preview.yml).
The main branch is previewed into <https://cffinit.netlify.app/main> and each Pull Request is previewing into a `https://cffinit.netlify.app/PRXXX` page.
The way this works is:

- The branch `gh-preview` is served by Netlify. There is a folder `main` and several folders `PRXXX` in that branch.
- After a Pull Request or a push to `main` is created, the workflow runs.
- The workflow changes the `publicPath` configuration in [quasar.conf.js](quasar.conf.js) to reflect the folder `main` or `PRXXX`.
  - This is stored in a environment variable `PUBLICPATH` to be used later.
  - We use `sed` with a `-i` to replace the value in-place.
- The workflow builds the app (using the `npm run build` command) into a folder `./dist`.
- The GitHub action `peaceiris/actions-gh-pages@v3` pushes the contents of `./dist` to the branch [gh-preview](https://github.com/citation-file-format/cff-initializer-javascript/tree/gh-preview) in the indicated path.
- After the push is complete, we create a comment on the pull request (if applicable) with the link to the preview page.

For this to work, you need a `gh-preview` branch to exist and to enable write permissions for `secrets.GITHUB_TOKEN`.
See the section on [Publishing](#publishing) for details on how to do this.

## Making a release

This section describes how to make a release in 2 parts:

1. preparation
1. making a release on GitHub

### (1/2) Preparation

1. Update the information in `CITATION.cff`.
1. Generate an updated version of `.zenodo.json` if needed using `cffconvert`.
1. Update the `version` field in `package.json` and `package-lock.json`.
1. Update the version in the [landing page footer](src/components/LayoutLanding.vue).
1. Update the version in the [app footer](src/components/Footer.vue).
1. Run `npm run lint` and make sure the linter does not complain.
1. Run the unit tests with `npm run test:unit:ci`.
1. Push any changes to GitHub, then review and merge to the default branch `main`.
1. Check that the [Publish](https://github.com/citation-file-format/cff-initializer-javascript/actions/workflows/publish.yml) workflow was triggered by merging to `main`, and that it was successful.
1. Inspect the Netlify preview website.

### (2/2) Making a release on GitHub

1. Make a [release on GitHub](https://github.com/citation-file-format/cff-initializer-javascript/releases/new).
1. Check that the [Publish](https://github.com/citation-file-format/cff-initializer-javascript/actions/workflows/publish.yml) workflow was triggered by making the release, and that it was successful.
1. Inspect the deployed github.io website [https://citation-file-format.github.io/cff-initializer-javascript/](https://citation-file-format.github.io/cff-initializer-javascript/).
1. Check whether the [zenodraft](https://github.com/citation-file-format/cff-initializer-javascript/actions/workflows/zenodraft.yml) workflow was triggered correctly by making the GitHub release.
1. Go to Zenodo, log in, inspect the draft release. If all looks good, click "Publish" in Zenodo's frontend.

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
