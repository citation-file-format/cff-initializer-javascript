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
                <SchemaInfoIcon section="license" />
            </p>
            <q-select
                bg-color="white"
                label="license"
                clearable
                fill-input
                hide-selected
                input-debounce="0"
                outlined
                standout
                use-input
                v-bind:model-value="license"
                v-bind:options="options"
                v-bind:error="false"
                v-bind:error-message="''"
                v-on:filter="licenseFilterFunction"
                v-on:update:model-value="setLicense"
            >
                <template #no-option>
                    <q-item>
                        <q-item-section class="text-grey">
                            No results
                        </q-item-section>
                    </q-item>
                </template>
            </q-select>
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCff } from '../store/cff'
import { QSelect } from 'quasar'
import schema from '../schemas/1.2.0/schema.json'
import SchemaInfoIcon from 'components/SchemaInfoIcon.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'

export default defineComponent({
    name: 'ScreenLicense',
    components: {
        SchemaInfoIcon,
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
            licenseFilterFunction (val: string, update: (a: unknown, b: unknown) => void) {
                update(() => {
                    if (val === '') {
                        options.value = licenses
                    } else {
                        const needle = val.toLowerCase()
                        options.value = licenses.filter(v => v.toLowerCase().indexOf(needle) > -1)
                    }
                },
                (ref: QSelect) => {
                    if (val !== '' && ref.options !== undefined && ref.options.length > 0) {
                        ref.setOptionIndex(-1)
                        ref.moveOptionSelection(1, true)
                    }
                })
            }
        }
    }
})
</script>

<style scoped>
</style>
