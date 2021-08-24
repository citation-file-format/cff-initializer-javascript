<template>
    <div class="q-pa-md col-flex">
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
                v-bind:error="errors.abstract?.length > 0"
                v-bind:error-message="errors.abstract ? errors.abstract.join(', ') : ''"
                v-on:update:modelValue="setAbstract"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { useFileValidator } from '../store/validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'Abstract',
    components: {
        StepperActions
    },
    setup () {
        const { abstract, setAbstract } = useCff()
        const { groupedErrors } = useFileValidator()
        return {
            abstract,
            setAbstract,
            errors: groupedErrors
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
    min-width: 300px;
    max-width: 700px;
}

</style>
