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
                <SchemaInfoIcon section="keywords" />
            </p>
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
                v-if="keywordsErrors.messages.length > 0"
                class="bg-warning text-negative"
            >
                <div
                    v-bind:key="index"
                    v-for="(screenMessage, index) in keywordsErrors.messages"
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
import SchemaInfoIcon from 'components/SchemaInfoIcon.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import Keyword from 'components/Keyword.vue'
import { computed, defineComponent, nextTick } from 'vue'
import { moveDown, moveUp } from '../updown'
import { useCff } from '../store/cff'
import { scrollToBottom } from '../scroll-to-bottom'
import { getMyErrors } from 'src/store/validator'

export default defineComponent({
    name: 'ScreenKeywords',
    components: {
        SchemaInfoIcon,
        Stepper,
        StepperActions,
        Keyword
    },
    setup () {
        const { keywords, setKeywords } = useCff()
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
        return {
            addKeyword,
            keywords,
            moveDown,
            moveUp,
            removeKeyword,
            setKeyword,
            setKeywords,
            keywordsErrors: computed(() => getMyErrors('/keywords'))
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
