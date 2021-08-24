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
                v-bind:error="errors.license?.length > 0"
                v-bind:error-message="errors.license ? errors.license.join(', ') : ''"
                v-on:update:model-value="setLicense"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { useFileValidator } from 'src/store/validator'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'License',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCff()
        const { groupedErrors } = useFileValidator()
        return {
            license: cff.license,
            setLicense: cff.setLicense,
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
    max-width: 700px;
    min-width: 300px;
}

</style>
