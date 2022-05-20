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
                    v-bind:error="valueError != null"
                    v-bind:error-message="valueError"
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
import { getMatchingError } from 'src/store/validator'
import SchemaGuideLink from 'src/components/SchemaGuideLink.vue'

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
        const linkInfo = {
            doi: { label: 'DOI', anchor: '#definitionsdoi', type: 'doi' },
            url: { label: 'URL', anchor: '#definitionsurl', type: 'url' },
            swh: {
                label: 'Software Heritage identifier',
                anchor: '#definitionsswh-identifier',
                type: 'swh-identifier'
            },
            other: { label: 'identifier', anchor: '#definitionsidentifier', type: 'other' }
        }
        const valueRef = ref<HTMLElement | null>(null)
        onMounted(() => {
            valueRef.value?.focus()
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
            valueError: computed(() => getMatchingError({
                instancePath: `/identifiers/${props.index}/value`,
                schemaPath: `#/definitions/${linkInfo[props.type].type}/pattern`
            }))
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
