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

            <div
                v-for="(keyword, index) in keywords"
                v-bind:key="index"
            >
                <div class="flex">
                    <q-input
                        bg-color="white"
                        outlined
                        v-bind:model="keyword"
                        placeholder="Type a keyword"
                    />
                    <q-btn
                        icon="remove"
                        label="Remove"
                    />
                </div>
            </div>

            <div class="flex">
                <q-input
                    bg-color="white"
                    outlined
                    v-bind:model="newKeyword"
                    placeholder="Type a keyword"
                    v-on:keyup.enter="addKeyword(newKeyword)"
                />
                <q-btn v-on:click="addKeyword(newKeyword)">
                    Add keyword
                </q-btn>
            </div>
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { defineComponent, ref } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'Keywords',
    components: {
        StepperActions
    },
    setup () {
        const { keywords, setKeywords } = useCff()
        const newKeyword = ref('')

        function addKeyword (keyword: string) {
            console.log(keyword)
            const newKeywords = [...keywords.value ? keywords.value : [], keyword]
            console.log(newKeywords)
            setKeywords(newKeywords)
            newKeyword.value = ''
        }
        return {
            keywords,
            newKeyword,
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
