<template>
    <div class="keyword">
        <div class="keyword-input">
            <q-input
                bg-color="white"
                dense
                outlined
                placeholder="Type a keyword"
                v-bind:model-value="keyword"
                v-bind:error="keywordErrors.length > 0"
                v-bind:error-message="keywordErrors.join(', ')"
                v-on:update:modelValue="$emit('update', $event)"
                ref="keywordRef"
            />
        </div>
        <q-btn
            class="keyword-btn"
            color="blue"
            v-bind:disable="index == 0"
            icon="ion-arrow-up"
            tabindex="-1"
            v-on:click="$emit('moveUp')"
        />
        <q-btn
            class="keyword-btn"
            color="blue"
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
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useValidation } from 'src/store/validation'
import { byError, keywordQueries } from 'src/error-filtering'

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
        const keywordRef = ref<HTMLElement | null>(null)
        onMounted(() => {
            keywordRef.value?.focus()
        })
        const { errors } = useValidation()
        const keywordErrors = computed(() => {
            return keywordQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        return {
            keywordRef,
            keywordErrors
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
