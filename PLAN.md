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

### JS Framework
  - Vue.js 3

### UI Framework
  - Quasar

### State management
  - Vue 3 with composition API 

### Deployment
  - GitHub.io page

### Language
  - Typescript

### CSS flavor
  - Plain CSS

### YAML syntax higlighting
  - highlight.js

### Linting:
  - ESLint
  - StyleLint

### Commit hooks
  - Husky

### Testing:
  - Unit testing
    - Jest

### Artwork

  - icons
    Quasar support a few options (https://quasar.dev/vue-components/icon)
    - we chose ion-icons from quasar (https://ionic.io/ionicons)
  - fonts
    - Roboto Condensed
    - Roboto Mono

## To be decided:

### e2e testing  (TBD)
- WebdriverIO
- Storybook.js

### Schema validation  (TBD)
  - AJV
  - JSON schema --> Typescript conversion

@sverhoeven prefers to use both, 
  AJV for sanity check if generated YAML is OK
  jsonschema2ts for typing store

### Documentation

### Code coverage

