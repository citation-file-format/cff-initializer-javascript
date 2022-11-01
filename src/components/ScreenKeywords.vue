<template>
    <h1 id="form-title">
        Keywords
    </h1>

    <p>
        What keywords describe the work?
        <InfoDialog name="keywords" />
    </p>
    <div>
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
        class="q-mt-md q-mb-md rounded-borders"
        color="secondary"
        data-cy="btn-add-keyword"
        no-caps
        style="width: max-content"
        v-on:click="addKeyword"
    >
        Add keyword
    </q-btn>

    <BannerErrorMessages v-bind:error-messages="keywordsErrors" />
</template>

<script lang="ts">
import { byError, keywordsQueries } from 'src/error-filtering'
import { computed, defineComponent, nextTick } from 'vue'
import { moveDown, moveUp } from 'src/updown'
import BannerErrorMessages from 'src/components/BannerErrorMessages.vue'
import InfoDialog from 'components/InfoDialog.vue'
import Keyword from 'components/Keyword.vue'
import { scrollToBottom } from 'src/scroll-to-bottom'
import { useCff } from 'src/store/cff'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenKeywords',
    components: {
        BannerErrorMessages,
        InfoDialog,
        Keyword
    },
    setup () {
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
