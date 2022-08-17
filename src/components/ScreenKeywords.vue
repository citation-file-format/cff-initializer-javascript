<template>
    <Stepper />
    <div
        id="form"
        class="col-12 col-lg-5 col-sm-10"
    >
        <div id="form-title">
            <h1 class="page-title">
                Keywords
            </h1>
        </div>

        <div id="form-content">
            <h2 class="question">
                What keywords describe the work?
                <SchemaGuideLink anchor="#keywords" />
            </h2>
            <div class="scroll-to-bottom-container">
                <span class="bottom" />
                <div>
                    <Keyword
                        class="q-mr-lg"
                        v-bind:key="index"
                        v-bind:keyword="keyword"
                        v-bind:index="index"
                        v-bind:num-keywords="keywords.length"
                        v-for="(keyword, index) in keywords"
                        v-on:moveDown="moveDown(index, keywords, setKeywords)"
                        v-on:moveUp="moveUp(index, keywords, setKeywords)"
                        v-on:removePressed="removeKeyword(index)"
                        v-on:update="setKeyword(index, $event)"
                    />
                </div>
            </div>
            <q-btn
                class="q-mt-md q-mb-md"
                color="primary"
                no-caps
                style="width: max-content"
                v-on:click="addKeyword"
            >
                Add keyword
            </q-btn>

            <q-banner
                v-if="keywordsErrors.length > 0"
                v-bind:class="['bg-warning', 'text-negative', keywordsErrors.length > 0 ? 'has-error' : '']"
            >
                <div
                    v-bind:key="index"
                    v-for="(screenMessage, index) in keywordsErrors"
                >
                    {{ screenMessage }}
                </div>
            </q-banner>
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { byError, keywordsQueries } from 'src/error-filtering'
import { computed, defineComponent, nextTick, onUpdated } from 'vue'
import { moveDown, moveUp } from 'src/updown'
import Keyword from 'components/Keyword.vue'
import SchemaGuideLink from 'components/SchemaGuideLink.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { scrollToBottom } from 'src/scroll-to-bottom'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenKeywords',
    components: {
        SchemaGuideLink,
        Stepper,
        StepperActions,
        Keyword
    },
    setup () {
        onUpdated(() => {
            const { setErrorStateScreenKeywords } = useStepperErrors()
            setErrorStateScreenKeywords(document.getElementsByClassName('has-error').length > 0)
        })
        const { keywords, setKeywords } = useCff()
        const { errors } = useValidation()
        const addKeyword = async () => {
            let newKeywords:string[]
            const newKeyword = ''
            if (keywords.value === undefined) {
                newKeywords = [newKeyword]
            } else {
                newKeywords = [...keywords.value, newKeyword]
            }
            setKeywords(newKeywords)
            // await the DOM update that resulted from updating the keywords list
            await nextTick()
            scrollToBottom()
        }
        const removeKeyword = (index: number) => {
            if (keywords.value !== undefined) {
                const newKeywords = [...keywords.value]
                newKeywords.splice(index, 1)
                setKeywords(newKeywords)
                if (Array.isArray(newKeywords) && newKeywords.length === 0) {
                    setKeywords(undefined)
                }
            }
        }
        const setKeyword = (index: number, newKeyword: string) => {
            if (keywords.value !== undefined) {
                const newKeywords = [...keywords.value]
                newKeywords[index] = newKeyword
                setKeywords(newKeywords)
            }
        }
        const keywordsErrors = computed(() => {
            return keywordsQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        return {
            addKeyword,
            keywords,
            keywordsErrors,
            moveDown,
            moveUp,
            removeKeyword,
            setKeyword,
            setKeywords
        }
    }
})
</script>
<style scoped>
.scroll-to-bottom-container {
    display: flex;
    flex-direction: column-reverse;
    max-height: 450px;
    overflow-y: auto;
}
</style>
