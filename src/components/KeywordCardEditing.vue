<template>
    <div class="q-gutter-md row items-between no-wrap">
        <div class="col-11">
            <q-input
                bg-color="white"
                outlined
                dense
                v-bind:model-value="keyword"
                placeholder="Type a keyword"
                v-on:update:modelValue="
                    $emit('update', $event)
                "
                v-bind:rules="[ validateKeyword ]"
            />
        </div><div class="col-1">
            <q-btn
                icon="delete"
                color="negative"
                title="Remove"
                dense
                v-on:click="$emit('removePressed')"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { makeFieldValidator } from 'src/validator'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'KeywordCardEditing',
    props: {
        keyword: {
            type: String,
            default: ''
        }
    },
    setup () {
        return {
            validateKeyword: makeFieldValidator('/properties/keywords/items')
        }
    },
    emits: ['removePressed', 'update']
})
</script>
