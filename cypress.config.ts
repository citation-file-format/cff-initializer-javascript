import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:8080/cff-initializer-javascript/#',
        supportFile: false // If the support/e2e.ts or support/commands.ts files are reinstated, delete this line
    }
})
