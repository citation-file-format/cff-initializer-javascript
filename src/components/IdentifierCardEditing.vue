<template>
    <q-card
        flat
        bordered
        class="bg-formcard q-pa-md"
    >
        <q-card-section>
            <div class="items-center no-wrap">
                <q-option-group
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
                        <SchemaGuideLink v-bind:anchor="anchor" />
                    </h3>
                </div>
                <q-input
                    autofocus
                    bg-color="white"
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
                        <SchemaGuideLink anchor="#definitionsidentifier-description" />
                    </h3>
                </div>
                <q-input
                    bg-color="white"
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
                dense
                icon="delete"
                label="Remove"
                v-on:click="$emit('removePressed')"
            />
            <q-btn
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
import { byError, identifierValueQueries } from 'src/error-filtering'
import { IdentifierTypeType } from 'src/types'
import SchemaGuideLink from 'src/components/SchemaGuideLink.vue'
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
        SchemaGuideLink
    },
    setup (props) {
        const { errors } = useValidation()
        const linkInfo = {
            doi: { label: 'DOI', anchor: '#definitionsdoi' },
            url: { label: 'URL', anchor: '#definitionsurl' },
            swh: {
                label: 'Software Heritage identifier',
                anchor: '#definitionsswh-identifier'
            },
            other: { label: 'identifier', anchor: '#definitionsidentifier' }
        }
        const identifierValueErrors = computed(() => {
            return identifierValueQueries(props.index, ['doi', 'url', 'swh', 'other'].indexOf(props.type))
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        return {
            typeOptions: [
                { label: 'DOI', value: 'doi' },
                { label: 'URL', value: 'url' },
                { label: 'Software Heritage', value: 'swh' },
                { label: 'Other', value: 'other' }
            ],
            label: computed(() => linkInfo[props.type].label),
            anchor: computed(() => linkInfo[props.type].anchor),
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
