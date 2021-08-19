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
                    v-bind:rules="[
                        (val) =>
                            (val && val.length > 3) ||
                            'Please use minimum 3 characters',
                    ]"
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
                    v-bind:rules="[
                        (val) =>
                            (val && val.length > 3) ||
                            'Please use minimum 3 characters',
                    ]"
                />
            </div>
        </q-card-section>
        <q-card-actions align="around">
            <q-btn
                icon="delete"
                color="negative"
                label="Remove"
                dense
                v-on:click="$emit('removePressed')"
            />
            <q-btn
                icon="close"
                label="Close"
                dense
                v-on:click="$emit('closePressed')"
            />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IdentifierEditCard',
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
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    setup () {
        return {
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
