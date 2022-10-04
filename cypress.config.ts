/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:8080/cff-initializer-javascript/#',
        setupNodeEvents (on, config) {
            require('@cypress/code-coverage/task')(on, config)

            return config
        }
    }
})
