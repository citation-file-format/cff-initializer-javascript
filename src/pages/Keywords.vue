<template>
    <div class="q-pa-md">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl page-title">
                Keywords
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
    name: 'PageKeywords',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCFF()
        return {
            keywords: cff.keywords,
            setKeywords: cff.setKeywords
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
