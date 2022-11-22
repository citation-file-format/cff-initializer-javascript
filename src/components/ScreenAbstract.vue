<template>
    <h1
        id="form-title"
        tabindex="-1"
    >
        Abstract
    </h1>
    <p>
        Adding an abstract (short description) helps possible users know at a glance if this work is what they are looking for.
    </p>

    <q-input
        aria-label="Abstract/Description of the work. Press tab to reach help button."
        autogrow
        data-cy="input-abstract"
        input-style="min-height: 100px; max-height: 444px"
        label="Abstract/Description"
        outlined
        standout
        type="textarea"
        v-bind:model-value="abstract"
        v-on:update:modelValue="setAbstract"
    >
        <template v-slot:after>
            <InfoDialog name="abstract" />
        </template>
    </q-input>
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
