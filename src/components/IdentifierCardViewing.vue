<template>
    <q-card
        bordered
        v-bind:class="['bg-formcard', identifierErrors.length > 0 ? 'red-border has-error' : '']"
        flat
        style="display: flex; flex-direction: row"
    >
        <div style="flex-grow: 1.0">
            <ul>
                <li>{{ identifier.description }}</li>
                <li>{{ identifier.type }}: {{ identifier.value }}</li>
            </ul>
        </div>
        <div>
            <q-btn
                class="identifier-button"
                color="blue"
                v-bind:disable="index == 0"
                icon="ion-arrow-up"
                tabindex="-1"
                v-on:click="$emit('moveUp')"
            />
            <q-btn
                class="identifier-button"
                color="blue"
                v-bind:disable="index >= numIdentifiers - 1"
                icon="ion-arrow-down"
                tabindex="-1"
                v-on:click="$emit('moveDown')"
            />
            <q-btn
                class="identifier-button"
                color="primary"
                flat
                hover-color="negative"
                icon="edit"
                title="Edit"
                v-on:click="$emit('editPressed')"
            />
        </div>
    </q-card>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { IdentifierType } from 'src/types'
import { useValidation } from 'src/store/validation'
import { byError, duplicateIdentifierMatcher, duplicateIdentifierQueries, identifierValueQueries } from 'src/error-filtering'

export default defineComponent({
    name: 'IdentifierCardViewing',
    props: {
        index: {
            type: Number,
            required: true
        },
        identifier: {
            type: Object as PropType<IdentifierType>,
            required: true
        },
        numIdentifiers: {
            type: Number,
            default: 0
        }
    },
    setup (props) {
        const { errors } = useValidation()
        const identifierValueErrors = computed(() => {
            return identifierValueQueries(props.index, ['doi', 'url', 'swh', 'other'].indexOf(props.identifier.type))
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const duplicateErrors = computed(() => {
            return duplicateIdentifierQueries
                .filter(byError(errors.value, duplicateIdentifierMatcher(props.index)))
                .map(query => query.replace.message)
        })
        const identifierErrors = computed(() => [...identifierValueErrors.value, ...duplicateErrors.value])
        return {
            identifierErrors
        }
    },
    emits: ['editPressed', 'moveDown', 'moveUp']
})
</script>
<style scoped>
ul {
    padding-inline-start: 20px;
}
li {
    list-style: none;
    list-style-position: inside;
}
.identifier-button {
    background-color: white;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    padding: 10px;
}
</style>
