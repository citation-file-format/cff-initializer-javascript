<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl page-title">
                Keywords
            </p>

            <p class="question">
                What keywords describe the work?
            </p>

            <q-btn v-on:click="addKeyword">
                Add keyword
            </q-btn>
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'Keywords',
    components: {
        StepperActions
    },
    setup () {
        const { keywords, setKeywords } = useCff()

        function addKeyword () {
            const newKeyword = ''
            const newKeywords = [...keywords.value ? keywords.value : [], newKeyword]
            setKeywords(newKeywords)
        }
        return {
            keywords,
            addKeyword
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
