# Implementation details of the design
## Sprint Goal (28 July 2021 - 10 August 2021):
    1. Until Tuesday (3 August):
      - Fiddling with Vue.js 3.0 and Nuxt.js to decide what option we prefer
      - Select UI Framework (see section below for the options)
    2. From 3 August Tuesday until 10 August Tuesday
      - Develop the first prototype (see below for the requirements)

## Minimal requirements of the first prototype:
  - Router with 2 steps: start and finish pages
  - Simple input field which the value (state) of will be stored (similar to CFF preview widget)
  - First draft of README.dev.md

## Technology choices

### General:
 - Dedicated configuration for each tool
 - Package manager: npm
 - Single Page App

### JS Framework (TBD)
  - Vue.js 3
  - Nuxt.js (easy routing, state management, plugins etc) 

Criteria, results by @sverhoeven:
- first page loads quickly
	* nuxtjs: out of the box with static deployment (pre rendered)
	* vue js: slower with https://router.vuejs.org/guide/advanced/lazy-loading.html
- seo
	* nuxtjs: out of the box
	* vuejs: a plugin away https://vue-meta.nuxtjs.org/, but requires search indexer to run JS
- only want static hosting, no nodejs server of lambda functions
	* both OK
- least amount of moving parts that I have to maintain
	* In vuejs all direct deps need to be kept up 2 date, while in nuxtjs most are indirect deps
	* vuejs+our direct deps is less complicated then nuxtjs
@verhoeven prefers to start with Vue.js and if not performant or if we are recreating nuxt then switch to Nuxt.js.

### UI Framework (TBD)
  - Vuetify.js
  - Quasar
  - Primer.css (from GitHub)
  - Tailwind.css
  - Buefy

Criteria, results by @sverhoeven:
- supports vue3
  - primer.css has no support for vue3
  - Tailwind.css only vue2
- has stepper widget which can be configured to our design
  - vuetify3 has no stepper, while veutify2 does
  - quasar has vertical stepper, however example shows single column design instead of 2 stepper + form page
  - primer.css no stepper
  - Tailwind.css no stepper
  - Buefy has vertical stepper
- can be themed to make own branding
  - they all can, some more than other
@verhoeven prefers to use quasar

### State management
  - vuex
  - Vue 3 / Nuxt composition API 

### Storing informatio
  - local storage

### Deployment  (TBD)
  - GitHub.io page
  - Do we want a custom domain?

@verhoeven prefers to use GH pages

### Language
  - Typescript

### Schema validation  (TBD)
  - AJV
  - JSON schema --> Typescript convertion

@sverhoeven prefers to use both, 
  AJV for sanity check if generated YAML is OK
  jsonschema2ts for typing store

### CSS flavor
  - CSS

### YAML syntax higlighting  (TBD)
  - prism.js 
  - highlight.js <- preferred by @sverhoeven, more downloads, more GH stars, more vue wrappers, can be themed to match UI framework


### Testing:
  - Unit testing
    - Jest (comes with coverage reporting?)
  - e2e testing  (TBD)
    - WebdriverIO
    - Storybook.js

### Linting:
  - ESLint
  - Prettier (Jesus: eslint is sufficient, eslint+prettier may be conflicting)
  - StyleLint

### Commit hooks
  - GitHook
  - Husky <- preferred by @sverhoeven, due to popularity and easy of maintenance (config easier to maintain then  shell script)

### Artwork
  - icons  (TBD)
    - material-design-icons
    - font awesome (Jesus: use SVG)
    - octicons (from GitHub)
    - hero-icons (https://heroicons.com/)
    - feather-icons (https://feathericons.com/)
  - fonts (Jesus: don't use fonts, use system fonts)
    - Roboto Condensed
    - Roboto Mono

## To be decided:
### Documentation
### Code coverage
