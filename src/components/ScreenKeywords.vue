<template>
    <div id="metroline">
        <Stepper />
    </div>
    <div id="form">
        <div id="form-title">
            <h1 class="page-title">
                Keywords
            </h1>
        </div>

        <div id="form-content">
            <p class="question">
                What keywords describe the work?
            </p>

            <div
                v-for="(keyword, index) in keywords"
                v-bind:key="index"
            >
                <KeywordCardEditing
                    v-bind:keyword="keyword"
                    v-on:update="setKeyword(index, $event)"
                    v-on:removePressed="removeKeyword(index)"
                />
            </div>

            <q-btn
                color="primary"
                no-caps
                v-on:click="addKeyword"
            >
                Add keyword
            </q-btn>

            <div
                class="text-negative screen-error"
                v-if="keywordErrors.hasError"
            >
                {{ keywordErrors.message }}
            </div>
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import KeywordCardEditing from 'components/KeywordCardEditing.vue'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

import { useKeywordErrors } from 'src/store/errors'

export default defineComponent({
    name: 'ScreenKeywords',
    components: {
        Stepper,
        StepperActions,
        KeywordCardEditing
    },
    setup () {
        const { keywords, setKeywords } = useCff()

        const keywordErrors = useKeywordErrors()

        function addKeyword () {
            const newKeyword = ''
            const newKeywords = [...keywords.value, newKeyword]
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
            keywordErrors,
            addKeyword,
            removeKeyword,
            setKeyword
        }
    }
})
</script>
