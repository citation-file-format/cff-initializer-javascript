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
                outlined
                standout
                use-input
                v-bind:model-value="license"
                v-bind:options="options"
                v-bind:error="myLicenseScreenErrors.license.length > 0"
                v-bind:error-message="myLicenseScreenErrors.license"
                v-on:filter="filterFn"
                v-on:update:model-value="setLicense"
            />
        </div>

        <div>
            {{ myLicenseScreenErrors }}
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
import { useFileValidator } from 'src/store/validator'

export default defineComponent({
    name: 'ScreenLicense',
    components: {
        Stepper,
        StepperActions
    },
    setup () {
        const cff = useCff()
        const { myLicenseScreenErrors } = useFileValidator()

        const licenses = schema.definitions['license-enum'].enum
        const options = ref(licenses)

        return {
            license: cff.license,
            licenses: licenses,
            options,
            setLicense: cff.setLicense,

            filterFn (val: string, update: (a:unknown) => void) {
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
            },
            myLicenseScreenErrors
        }
    }
})
</script>

<style scoped>
</style>
