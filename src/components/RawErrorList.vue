<template>
    <h2 v-if="errors.length > 0">
        Error list
    </h2>
    <q-list
        data-cy="list-raw-errors"
        dense
        separator
    >
        <q-item
            v-for="(error, errorIndex) in errors"
            v-bind:key="errorIndex"
        >
            <q-item-section
                side
                top
            >
                <q-icon
                    name="warning"
                    color="red"
                    size="24px"
                />
            </q-item-section>
            <q-item-section>
                <q-item-label
                    v-if="error.instancePath !== ''"
                    v-bind:data-cy="`item-raw-error-instancePath-${errorIndex}`"
                >
                    instancePath: "{{ error.instancePath }}"
                </q-item-label>
                <q-item-label
                    v-if="error.schemaPath !== ''"
                    v-bind:data-cy="`item-raw-error-schemaPath-${errorIndex}`"
                >
                    schemaPath: "{{ error.schemaPath }}"
                </q-item-label>
                <q-item-label v-bind:data-cy="`item-raw-error-keyword-${errorIndex}`">
                    keyword: "{{ error.keyword }}"
                </q-item-label>
                <q-item-label v-bind:data-cy="`item-raw-error-message-${errorIndex}`">
                    message: "{{ error.message }}"
                </q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'RawErrorList',
    setup () {
        const { errors } = useValidation()
        return {
            errors
        }
    }
})
</script>
