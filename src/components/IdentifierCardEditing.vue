<template>
    <q-card
        flat
        bordered
        class="bg-formcard"
    >
        <q-card-section>
            <div class="row items-center no-wrap">
                <q-option-group
                    inline
                    type="radio"
                    v-bind:model-value="type"
                    v-bind:options="typeOptions"
                    v-on:update:modelValue="
                        $emit('updateType', 'type', $event)
                    "
                />
            </div>
            <div class="q-gutter-md items-center no-wrap">
                <q-input
                    bg-color="white"
                    label="Value"
                    outlined
                    standout
                    dense
                    v-bind:model-value="value"
                    v-on:update:modelValue="
                        $emit('updateValue', 'value', $event)
                    "
                />
            </div>
            <div class="q-gutter-md items-center no-wrap">
                <q-input
                    bg-color="white"
                    label="Description"
                    outlined
                    standout
                    dense
                    v-bind:model-value="description"
                    v-on:update:modelValue="
                        $emit('updateDescription', 'description', $event)
                    "
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
import { IdentifierTypeType } from '../types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'IdentifierCardEditing',
    props: {
        index: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            default: ''
        },
        value: {
            type: String as PropType<IdentifierTypeType>,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    setup (props) {
        // validating of value depends on type
        // const valueValidators: Record<IdentifierTypeType, (val: unknown) => true | string > = {
        //     doi: makeFieldValidator('/definitions/identifier/anyOf/0/properties/value'),
        //     url: makeFieldValidator('/definitions/identifier/anyOf/1/properties/value'),
        //     swh: makeFieldValidator('/definitions/identifier/anyOf/2/properties/value'),
        //     other: makeFieldValidator('/definitions/identifier/anyOf/3/properties/value')
        // }
        return {
        //     validateValue: (val: string) => valueValidators[props.type as IdentifierTypeType](val),
        //     validateDescription: makeOptionalFieldValidator('/definitions/identifier-description'),
            typeOptions: [
                { label: 'DOI', value: 'doi' },
                { label: 'URL', value: 'url' },
                { label: 'Software Heritage', value: 'swh' },
                { label: 'Other', value: 'other' }
            ]
        }
    },
    emits: ['closePressed', 'removePressed', 'updateType', 'updateValue', 'updateDescription']
})
</script>
