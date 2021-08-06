# Developer notes

We're developing the wireframes and interaction designs over at [https://www.figma.com/](https://www.figma.com/).

`cffinit` is a Single Page App written in [TypeScript](https://www.typescriptlang.org/) using [Vue.js v3](https://v3.vuejs.org/) and [its composition API](https://v3.vuejs.org/api/composition-api.html).

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
npm install
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

## Tests

To run unit tests (`src/**/*.jest.spec.ts`)

```shell
npm run test:unit
```
