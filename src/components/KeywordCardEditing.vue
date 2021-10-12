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
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'KeywordCardEditing',
    props: {
        keyword: {
            type: String,
            default: ''
        }        
    },
    emits: ['removePressed', 'update']
})
</script>
