<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl page-title">
                License
            </p>
            <p class="question">
                What is the license of the work?
            </p>
            <q-input
                v-bind:model-value="license"
                v-on:update:model-value="setLicense"
                label="license"
                outlined
                standout
                bg-color="white"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCFF } from '../store/cff'

export default defineComponent({
    name: 'License',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCFF()
        return {
            license: cff.license,
            setLicense: cff.setLicense
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
