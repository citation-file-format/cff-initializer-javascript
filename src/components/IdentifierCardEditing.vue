<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <q-card-section>
            <fieldset
                class="q-mb-md"
                role="radiogroup"
            >
                <legend
                    class="question"
                >
                    What type of identifier?
                    <!-- <InfoDialog name="type" /> -->
                </legend>
                <label
                    v-for="typeOption in typeOptions"
                    v-bind:key="typeOption.label"
                >
                    <q-radio
                        v-bind:data-cy="'radio-identifier-' + typeOption.value"
                        v-bind:label="typeOption.label"
                        v-bind:model-value="type"
                        v-bind:val="typeOption.value"
                        v-on:update:modelValue="$emit('updateType', 'type', $event)"
                    />
                </label>
            </fieldset>

            <q-input
                autofocus
                bg-color="white"
                data-cy="input-value"
                dense
                outlined
                standout
                v-bind:aria-label="`Value of the ${label}. Press tab to reach help button.`"
                v-bind:error-message="identifierValueErrors.join(', ')"
                v-bind:error="identifierValueErrors.length > 0"
                v-bind:label="`Value of the ${label}`"
                v-bind:model-value="value"
                v-on:update:modelValue="$emit('updateValue', 'value', $event)"
            >
                <template v-slot:after>
                    <InfoDialog v-bind:name="identifierType" />
                </template>
            </q-input>

            <q-input
                bg-color="white"
                data-cy="input-description"
                dense
                outlined
                standout
                v-bind:aria-label="`Description of the ${label}. Press tab to reach help button.`"
                v-bind:label="`Description of the ${label}`"
                v-bind:model-value="description"
                v-on:update:modelValue="$emit('updateDescription', 'description', $event)"
            >
                <template v-slot:after>
                    <InfoDialog name="identifierDescription" />
                </template>
            </q-input>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn
                aria-label="Remove identifier being edited"
                color="negative"
                data-cy="btn-remove"
                dense
                icon="delete"
                label="Remove"
                v-on:click="$emit('removePressed')"
            />
            <q-btn
                data-cy="btn-done"
                dense
                icon="done"
                label="Done"
                v-on:click="$emit('closePressed')"
            />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue'
import { byError, identifierValueQueries, unique } from 'src/error-filtering'
import { IdentifierTypeType } from 'src/types'
import InfoDialog from 'src/components/InfoDialog.vue'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'IdentifierCardEditing',
    props: {
        index: {
            type: Number,
            required: true
        },
        type: {
            type: String as PropType<IdentifierTypeType>,
            required: true,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    components: {
        InfoDialog
    },
    setup (props) {
        const { errors } = useValidation()
        const labels = {
            doi: 'DOI',
            url: 'URL',
            swh: 'Software Heritage identifier',
            other: 'identifier'
        }
        const identifierValueErrors = computed(() => {
            return identifierValueQueries(props.index, ['doi', 'url', 'swh', 'other'].indexOf(props.type))
                .filter(byError(errors.value))
                .map(query => query.replace.message)
                .filter(unique)
        })
        return {
            typeOptions: [
                { label: 'DOI', value: 'doi' },
                { label: 'URL', value: 'url' },
                { label: 'Software Heritage', value: 'swh' },
                { label: 'Other', value: 'other' }
            ],
            identifierType: computed(() => 'identifier' + props.type.slice(0, 1).toUpperCase() + props.type.slice(1)),
            label: computed(() => labels[props.type]),
            identifierValueErrors
        }
    },
    emits: [
        'closePressed',
        'removePressed',
        'updateType',
        'updateValue',
        'updateDescription'
    ]
})
</script>
