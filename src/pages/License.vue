<template>
    <div class="q-pa-md col-flex">
        <div class="q-gutter-md title-field text-dark">
            <p class="page-title">
                License
            </p>
            <p class="question">
                What is the license of the work?
            </p>
            <q-input
                bg-color="white"
                label="license"
                outlined
                standout
                v-bind:model-value="license"
                v-bind:rules="[ validateLicense ]"
                v-on:update:model-value="setLicense"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { makeOptionalFieldValidator } from 'src/validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'License',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCff()
        return {
            license: cff.license,
            setLicense: cff.setLicense,
            validateLicense: makeOptionalFieldValidator('/definitions/license-enum')
        }
    }
})
</script>

<style scoped>
.col-flex {
    flex: 1;
}
.title-field {
    margin-right: 120px;
    max-width: 700px;
    min-width: 300px;
}

</style>
