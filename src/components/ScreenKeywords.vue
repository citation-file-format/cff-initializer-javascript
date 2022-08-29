<template>
    <div id="form-title">
        <h1 class="page-title">
            Keywords
        </h1>
    </div>

    <div id="form-content">
        <h2 class="question">
            What keywords describe the {{ type }}?
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showKeywordsHelp = true"
                style="cursor:pointer;"
            />
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
        <InfoDialog
            v-model="showKeywordsHelp"
            v-bind:data="helpData.keywords"
        />
    </div>
</template>

<script lang="ts">
import { byError, keywordsQueries } from 'src/error-filtering'
import { computed, defineComponent, nextTick, onUpdated, ref } from 'vue'
import { moveDown, moveUp } from 'src/updown'
import InfoDialog from 'components/InfoDialog.vue'
import Keyword from 'components/Keyword.vue'
import { scrollToBottom } from 'src/scroll-to-bottom'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenKeywords',
    components: {
        InfoDialog,
        Keyword
    },
    setup () {
        onUpdated(() => {
            const { setErrorStateScreenKeywords } = useStepperErrors()
            setErrorStateScreenKeywords(document.getElementsByClassName('has-error').length > 0)
        })
        const { keywords, setKeywords, type } = useCff()
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
        const helpData = {
            keywords: {
                title: 'keywords',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#keywords',
                description: `Keywords that describe the ${type.value}.`,
                examples: [
                    'keyword',
                    'other-keyword',
                    'Yet Another Keyword'
                ]
            }
        }
        return {
            addKeyword,
            keywords,
            keywordsErrors,
            helpData,
            moveDown,
            moveUp,
            removeKeyword,
            setKeyword,
            setKeywords,
            showKeywordsHelp: ref(false),
            type
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
