<template>
    <q-card
        bordered
        flat
        v-bind:class="['bg-formcard', identifierErrors.length > 0 ? 'red-border' : '']"
    >
        <q-card-section
            horizontal
        >
            <div class="col">
                <ul
                    class="q-pl-md"
                    v-bind:data-cy="'card-info' + index"
                >
                    <li class="row">
                        {{ identifier.description }}
                    </li>
                    <li class="row">
                        {{ identifier.type }}: {{ identifier.value }}
                    </li>
                </ul>
            </div>
            <q-card-actions>
                <q-btn
                    color="secondary"
                    flat
                    icon="ion-arrow-up"
                    v-bind:aria-label="`Move identifier ${index + 1} up`"
                    v-bind:data-cy="'btn-move-up' + index"
                    v-bind:disable="index == 0"
                    v-on:click="$emit('moveUp')"
                />
                <q-btn
                    color="secondary"
                    flat
                    icon="ion-arrow-down"
                    v-bind:aria-label="`Move identifier ${index + 1} down`"
                    v-bind:data-cy="'btn-move-down' + index"
                    v-bind:disable="index >= numIdentifiers - 1"
                    v-on:click="$emit('moveDown')"
                />
                <q-btn
                    color="secondary"
                    flat
                    hover-color="negative"
                    icon="edit"
                    title="Edit"
                    v-bind:aria-label="`Edit identifier ${index + 1}`"
                    v-bind:data-cy="'btn-edit' + index"
                    v-on:click="$emit('editPressed')"
                />
                <q-btn
                    color="negative"
                    flat
                    hover-color="negative"
                    icon="delete"
                    title="Remove Identifier"
                    v-bind:aria-label="`Remove identifier ${index + 1}`"
                    v-bind:data-cy="'btn-remove' + index"
                    v-on:click="$emit('removePressed')"
                />
            </q-card-actions>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue'
import { byError, duplicateIdentifierQueries, duplicateMatcher, identifierValueQueries } from 'src/error-filtering'
import { IdentifierType } from 'src/types'
import { useValidation } from 'src/store/validation'

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
                .filter(byError(errors.value))
                .filter(byError(errors.value, duplicateMatcher(props.index)))
                .map(query => query.replace.message)
        })
        const identifierErrors = computed(() => [...identifierValueErrors.value, ...duplicateErrors.value])
        return {
            identifierErrors
        }
    },
    emits: ['editPressed', 'moveDown', 'moveUp', 'removePressed']
})
</script>
