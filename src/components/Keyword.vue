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
            class="keyword-btn"
            color="blue"
            icon="ion-arrow-up"
            tabindex="-1"
            v-on:click="$emit('moveUp')"
        />
        <q-btn
            class="keyword-btn"
            color="blue"
            icon="ion-arrow-down"
            tabindex="-1"
            v-on:click="$emit('moveDown')"
        />
        <q-btn
            class="keyword-btn"
            color="negative"
            dense
            icon="delete"
            tabindex="-1"
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
    emits: ['moveDown', 'moveUp', 'removePressed', 'update']
})
</script>
<style scoped>
.keyword {
    display: flex;
    flex-direction: row;
    margin-bottom: 14px;
}
.keyword-input {
    flex-grow: 1.0;
}
.keyword-btn {
    height: 40px;
    margin-left: 10px;
    width: 40px;
}
</style>
