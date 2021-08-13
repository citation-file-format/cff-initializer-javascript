<template>
    <div class="q-pa-md">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl page-title">
                Abstract
            </p>

            <p class="question">
                What is the abstract of the work?
            </p>
            <q-input
                bg-color="white"
                label="abstract"
                outlined
                standout
                type="textarea"
                v-bind:model-value="abstract"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
                v-on:update:modelValue="setAbstract"
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
    name: 'PageTitle',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCFF()
        return {
            abstract: cff.abstract,
            setAbstract: cff.setAbstract
        }
    }
})
</script>

<style scoped>

.title-field {
    margin-right: 120px;
    min-width: 300px;
    max-width: 700px;
}

</style>
