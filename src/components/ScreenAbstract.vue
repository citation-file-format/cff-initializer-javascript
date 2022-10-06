<template>
    <h1 id="form-title">
        Abstract
    </h1>

    <h2 class="question">
        Please provide a description of the work
        <InfoDialog name="abstract" />
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
</template>

<script lang="ts">
import InfoDialog from 'components/InfoDialog.vue'
import { defineComponent } from 'vue'
import { useCff } from 'src/store/cff'

export default defineComponent({
    name: 'ScreenAbstract',
    components: {
        InfoDialog
    },
    setup () {
        const { abstract, setAbstract } = useCff()
        return {
            abstract,
            setAbstract
        }
    }
})
</script>

<style scoped>
</style>
