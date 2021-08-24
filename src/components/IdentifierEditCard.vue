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
                    v-bind:error="errors.value?.length > 0"
                    v-bind:error-message="errors.value ? errors.value.join(', ') : ''"
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
                    v-bind:error="errors.description?.length > 0"
                    v-bind:error-message="errors.description ? errors.description.join(', ') : ''"
                />
            </div>
        </q-card-section>
        <q-card-actions align="between">
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
import { IdentifierTypeType } from '../types'
import { useFileValidator } from '../store/validator'
import { defineComponent, PropType, computed } from 'vue'

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
            type: String as PropType<IdentifierTypeType>,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    setup ({index}) {
        const { groupedErrors } = useFileValidator()
        return {
            errors: computed(() => {
                if (groupedErrors.value.identifgiersList && groupedErrors.value.identifgiersList[index]) {
                    return groupedErrors.value.identifgiersList[index]
                } else {
                    return {}
                }
            })
        }
    },
    emits: ['closePressed', 'removePressed', 'updateType', 'updateValue', 'updateDescription']
})
</script>
