<template>
    <div id="form-title">
        <h1 class="page-title">
            Abstract
        </h1>
    </div>

    <div id="form-content">
        <h2 class="question">
            Please provide a description of the work
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showAbstractHelp = true"
                style="cursor:pointer;"
            />
        </h2>
        <q-input
            autogrow
            bg-color="white"
            data-cy="input-abstract"
            input-style="min-height: 100px; max-height: 444px"
            label="abstract"
            outlined
            standout
            type="textarea"
            v-bind:model-value="abstract"
            v-on:update:modelValue="setAbstract"
        />
        <InfoDialog
            v-model="showAbstractHelp"
            v-bind:data="helpData.abstract"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import { useCff } from 'src/store/cff'

export default defineComponent({
    name: 'ScreenAbstract',
    components: {
        InfoDialog
    },
    setup () {
        const { abstract, setAbstract } = useCff()
        const helpData = {
            abstract: {
                title: 'abstract',
                url: [
                    {
                        text: 'Click here to see the documentation for abstract.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#abstract'
                    }
                ],
                description: 'A description or summary of the work.'
            }
        }
        return {
            abstract,
            helpData,
            setAbstract,
            showAbstractHelp: ref(false)
        }
    }
})
</script>

<style scoped>
</style>
