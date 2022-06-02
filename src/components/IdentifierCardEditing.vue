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
                    <q-label class="text-dark">
                        What is the value of the {{ label }}?
                        <SchemaGuideLink v-bind:anchor="anchor" />
                    </q-label>
                </div>
                <q-input
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
                    ref="valueRef"
                />
            </div>
            <div class="q-mt-md items-center no-wrap">
                <div class="row">
                    <q-label class="text-dark">
                        What is the description for the {{ label }}?
                        <SchemaGuideLink anchor="#definitionsidentifier-description" />
                    </q-label>
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
                dense
                color="blue"
                v-bind:disable="index == 0"
                icon="ion-arrow-up"
                tabindex="-1"
                v-on:click="$emit('moveUp')"
            />
            <q-btn
                dense
                color="blue"
                v-bind:disable="index >= numIdentifiers - 1"
                icon="ion-arrow-down"
                tabindex="-1"
                v-on:click="$emit('moveDown')"
            />
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
import { IdentifierTypeType } from '../types'
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import SchemaGuideLink from 'src/components/SchemaGuideLink.vue'
import { byError, identifierValueQueries } from 'src/error-filtering'
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
        },
        numIdentifiers: {
            type: Number,
            default: 0
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
        const valueRef = ref<HTMLElement | null>(null)
        onMounted(() => {
            valueRef.value?.focus()
        })
        const identifierValueErrors = computed(() => {
            return identifierValueQueries(props.index, ['doi', 'url', 'swh', 'other'].indexOf(props.type))
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        return {
            valueRef,
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
        'updateDescription',
        'moveUp',
        'moveDown'
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
