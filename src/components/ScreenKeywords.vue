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
            <div class="scroll-to-bottom-container">
                <span class="bottom" />
                <div>
                    <Keyword
                        class="q-mr-lg"
                        v-bind:class="keywords.length - 1 == index ? 'last' : ''"
                        v-bind:key="index"
                        v-bind:keyword="keyword"
                        v-for="(keyword, index) in keywords"
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
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import Keyword from 'components/Keyword.vue'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'ScreenKeywords',
    components: {
        Stepper,
        StepperActions,
        Keyword
    },
    setup () {
        const { keywords, setKeywords } = useCff()

        function addKeyword () {
            const newKeyword = ''
            const newKeywords = [...keywords.value, newKeyword]
            setKeywords(newKeywords)
            setTimeout(() => {
                // FIXME shouldn't have to use a timeout but it seems the DOM doesn't update in time
                document.getElementsByClassName('bottom')[0].scrollIntoView({ behavior: 'smooth' })
            }, 100)
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
.scroll-to-bottom-container {
    display: flex;
    flex-direction: column-reverse;
    max-height: 450px;
    overflow-y: auto;
}
</style>
