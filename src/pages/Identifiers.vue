<template>
    <div class="q-pa-md">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="page-title">
                Identifiers
            </p>
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCFF } from '../store/cff'

export default defineComponent({
    name: 'PageIdentifiers',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCFF()
        return {
            identifiers: cff.identifiers,
            setIdentifiers: cff.setIdentifiers
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
