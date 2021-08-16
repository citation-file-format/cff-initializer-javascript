# Implementation details of the design

## Sprint Goal (11 August 2021 - 24 August 2021):

### Release today (11 August 2021): 2.0.0-alpha.0

### Milestone 2.0.0-alpha.1
1. Add a placeholder Identifiers screen
1. Create the screens below: update the router, update the stepper to add a step for the screen, do not spend too much time on styling, use Title screen as a starting point
    1. Related
    1. Abstract
    1. Keywords
    1. License
    1. Version-specific
1. Create Authors screen
1. Create Identifiers screen
1. Add the preview of the generated CFF on Finish page
1. Add download functionality

### Milestone 2.0.0-alpha.2
1. Copy clipboard functionality
1. Add text to Start page and update the CFF example
1. Add text to Finish page and the generated CFF
1. Work on validation
1. Fix obvious styling issues (needs grooming)

### Milestone ?
1. Highlighting CFF preview 
1. Importing Authors

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

