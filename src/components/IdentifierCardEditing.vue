<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <q-card-section>
            <div class="items-center no-wrap">
                <q-option-group
                    data-cy="radio-identifier"
                    inline
                    type="radio"
                    v-bind:model-value="type"
                    v-bind:options="typeOptions"
                    v-on:update:modelValue="$emit('updateType', 'type', $event)"
                />
            </div>
            <div class="q-mt-md items-center no-wrap">
                <div class="row">
                    <h3 class="subquestion">
                        What is the value of the {{ label }}?
                        <InfoDialog v-bind:name="identifierType" />
                    </h3>
                </div>
                <q-input
                    autofocus
                    bg-color="white"
                    data-cy="input-identifier-value"
                    label="Value"
                    outlined
                    standout
                    dense
                    v-bind:class="identifierValueErrors.length > 0 ? 'has-error' : ''"
                    v-bind:error="identifierValueErrors.length > 0"
                    v-bind:error-message="identifierValueErrors.join(', ')"
                    v-bind:model-value="value"
                    v-on:update:modelValue="$emit('updateValue', 'value', $event)"
                />
            </div>
            <div class="q-mt-md items-center no-wrap">
                <div class="row">
                    <h3 class="subquestion">
                        What is the description for the {{ label }}?
                        <InfoDialog name="identifierDescription" />
                    </h3>
                </div>
                <q-input
                    bg-color="white"
                    data-cy="input-identifier-description"
                    label="Description"
                    outlined
                    standout
                    dense
                    v-bind:model-value="description"
                    v-on:update:modelValue="$emit('updateDescription', 'description', $event)"
                />
            </div>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn
                color="negative"
                data-cy="btn-identifier-remove"
                dense
                icon="delete"
                label="Remove"
                v-on:click="$emit('removePressed')"
            />
            <q-btn
                data-cy="btn-identifier-done"
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
<style scoped>
.row {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
}
</style>
