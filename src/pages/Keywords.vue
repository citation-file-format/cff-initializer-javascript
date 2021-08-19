<template>
    <div class="q-pa-md col-flex screen">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="q-mt-xl page-title">
                Keywords
            </p>

            <p class="question">
                What keywords describe the work?
            </p>

            <div
                v-for="(keyword, index) in keywords"
                v-bind:key="index"
            >
                <KeywordEditCard
                    v-bind:keyword="keyword"
                    v-on:update="setKeyword(index, $event)"
                    v-on:removePressed="removeKeyword(index)"
                />
            </div>

            <q-btn v-on:click="addKeyword">
                Add keyword
            </q-btn>
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import KeywordEditCard from 'components/KeywordEditCard.vue'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'Keywords',
    components: {
        StepperActions,
        KeywordEditCard
    },
    setup () {
        const { keywords, setKeywords } = useCff()

        function addKeyword () {
            const newKeyword = ''
            const newKeywords = [...keywords.value, newKeyword]
            console.log(newKeywords)
            setKeywords(newKeywords)
        }

        function removeKeyword (index: number) {
            const newKeywords = [...keywords.value]
            newKeywords.splice(index, 1)
            setKeywords(newKeywords)
        }

        function setKeyword (index: number, newKeyword: string) {
            const newKeywords = [...keywords.value]
            newKeywords[index] = newKeyword
            setKeywords(newKeywords)
        }
        return {
            keywords,
            addKeyword,
            removeKeyword,
            setKeyword
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
