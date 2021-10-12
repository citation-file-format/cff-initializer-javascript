<template>
    <div class="keyword">
        <div class="keyword-input">
            <q-input
                bg-color="white"
                dense
                outlined
                placeholder="Type a keyword"
                v-bind:model-value="keyword"
                v-bind:rules="[ validateKeyword ]"
                v-on:update:modelValue="$emit('update', $event)"
            />
        </div>
        <q-btn
            class="remove-keyword-btn"
            color="negative"
            dense
            icon="delete"
            title="Remove"
            v-on:click="$emit('removePressed')"
        />
    </div>
</template>

<script lang="ts">
import { makeFieldValidator } from 'src/validator'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'KeywordCard',
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
<style scoped>
.keyword {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
}
.keyword-input {
    flex-grow: 1.0;
}
.remove-keyword-btn {
    height: 40px;
    margin-left: 20px;
    width: 40px;
}
</style>
