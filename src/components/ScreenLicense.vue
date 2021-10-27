<template>
    <div id="metroline">
        <Stepper />
    </div>
    <div id="form">
        <div id="form-title">
            <h1 class="page-title">
                License
            </h1>
        </div>

        <div id="form-content">
            <p class="question">
                What is the license of the work?
            </p>
            <q-select
                bg-color="white"
                label="license"
                clearable
                outlined
                standout
                use-input
                v-bind:model-value="license"
                v-bind:options="options"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:filter="licenseFilterFunction"
                v-on:update:model-value="setLicense"
            />
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCff } from '../store/cff'
import schema from '../schemas/1.2.0/schema.json'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'

export default defineComponent({
    name: 'ScreenLicense',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const { license, setLicense } = useCff()
        const licenses = schema.definitions['license-enum'].enum
        const options = ref(licenses)

        return {
            license,
            licenses,
            options,
            setLicense,
            licenseFilterFunction (val: string, update: (a: unknown) => void) {
                if (val === '') {
                    update(() => {
                        options.value = licenses
                    })
                    return
                }

                update(() => {
                    const needle = val.toLowerCase()
                    options.value = licenses.filter(v => v.toLowerCase().indexOf(needle) > -1)
                })
            }
        }
    }
})
</script>

<style scoped>
</style>
