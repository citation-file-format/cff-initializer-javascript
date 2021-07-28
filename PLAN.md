# Implementation details of the design
## Sprint Goal (28 July 2021 - 10 August 2021):
    1. Until Tuesday (3 August):
      - Fiddling with Vue.js 3.0 and Nuxt.js to decide what option we prefer
      - Select UI Framework (see section below for the options)
    2. From 3 August Tuesday until 10 August Tuesday
      - Develop the first prototype (see below for the requirements)

## Minimal requirements of the first prototype:
  - Router with 2 steps: start and finish pages
  - Simple input field which the value of will be stored somewhere (CFF)
  - First draft of README.dev.md

## Technology choices

### General:
 - Dedicated configuration for each tool
 - Package manager: npm
 - Single Page App

### JS Framework (TBD)
  - Vue.js 3
  - Nuxt.js (easy routing, state management, plugins etc) 

### UI Framework (TBD)
  - Vuetify.js
  - Quasar
  - Primer.css (from GitHub)
  - Tailwind.css
  - Buefy

### State management
  - vuex

### Storing informatio
  - local storage

### Deployment  (TBD)
  - GitHub.io page
  - Do we want a custom domain?

### Language
  - Typescript

### Schema validation  (TBD)
  - AJV
  - JSON schema --> Typescript convertion

### CSS flavor
  - CSS

### YAML syntax higlighting  (TBD)
  - prism.js 
  - ask Jesus

### Testing:
  - Unit testing
    - Jest (comes with coverage reporting?)
  - e2e testing  (TBD)
    - WebdriverIO
    - Storybook.js

### Linting:
  - ESLint
  - Prettier 
  - StyleLint

### Commit hooks
  - GitHook
  - Husky

### Artwork
  - icons  (TBD)
    - material-design-icons
    - font awesome
    - octicons (from GitHub) 
  - fonts
    - Roboto Condensed
    - Roboto Mono

## To be decided:
### Documentation
### Code coverage
