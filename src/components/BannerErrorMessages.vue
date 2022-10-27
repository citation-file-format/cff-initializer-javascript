<template>
    <p
        v-if="errorMessages.length > 0"
        class="q-pt-md"
        data-cy="banner-error-messages"
    >
        <q-icon
            class="text-negative q-pr-md q"
            name="warning"
            size="32px"
        />
        <span
            v-bind:key="index"
            v-for="(errorMessage, index) in errorMessages"
        >
            {{ errorMessage }}
        </span>
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BannerErrorMessages',
    props: {
        errorMessages: {
            type: Array,
            required: true
        }
    }
})
</script>
