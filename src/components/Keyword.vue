<template>
    <div class="keyword">
        <div class="keyword-input">
            <q-input
                bg-color="white"
                dense
                outlined
                placeholder="Type a keyword"
                v-bind:model-value="keyword"
                v-bind:error="keywordError.hasError"
                v-bind:error-message="keywordError.messages.join(', ')"
                v-on:update:modelValue="$emit('update', $event)"
            />
        </div>
        <q-btn
            class="keyword-btn"
            v-bind:disable="index == 0"
            icon="ion-arrow-up"
            tabindex="-1"
            v-on:click="$emit('moveUp')"
        />
        <q-btn
            class="keyword-btn"
            v-bind:disable="index == numKeywords - 1"
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
import { computed, defineComponent } from 'vue'
import { getMyErrors } from 'src/store/validator'

export default defineComponent({
    name: 'KeywordCard',
    props: {
        keyword: {
            type: String,
            default: ''
        },
        index: {
            type: Number,
            required: true
        },
        numKeywords: {
            type: Number,
            default: 0
        }
    },
    setup (props) {
        return {
            keywordError: computed(() => getMyErrors(`/keywords/${props.index}`))
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
