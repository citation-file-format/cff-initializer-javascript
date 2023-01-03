<template>
    <h1
        id="form-title"
        tabindex="-1"
    >
        Extra CFF Fields
    </h1>
    <p>
        The CFF schema supports more fields than this form implements, for instance <code>preferred-citation</code>, or <code>references</code>.
        These extra fields can be pasted directly here.
        They will be validated, but the error messages will <strong>not</strong> be parsed, so they may not be helpful.
    </p>

    <q-input
        autogrow
        data-cy="input-extra-cff-fields"
        input-style="min-height: 100px; max-height: 444px"
        label="Extra CFF fields"
        outlined
        standout
        type="textarea"
        v-bind:model-value="extraCffFields"
        v-on:update:modelValue="setExtraCffFields"
    />

    <RawErrorList />
</template>

<script lang="ts">
import RawErrorList from 'src/components/RawErrorList.vue'
import { defineComponent } from 'vue'
import { useCff } from 'src/store/cff'

export default defineComponent({
    name: 'ScreenCffFields',
    setup () {
        const { extraCffFields, setExtraCffFields } = useCff()
        return {
            extraCffFields,
            setExtraCffFields
        }
    },
    components: { RawErrorList }
})
</script>
