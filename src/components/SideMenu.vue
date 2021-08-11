<template>
    <q-item
        clickable
        v-bind:to="link"
    >
        <q-item-section
            v-if="icon"
            avatar
        >
            <q-icon v-bind:name="icon" />
        </q-item-section>

        <q-item-section>
            <q-item-label>{{ title }}</q-item-label>
            <q-item-label caption>
                {{ caption }}
            </q-item-label>
        </q-item-section>
    </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SideMenu',
    props: {
        title: {
            type: String,
            required: true
        },

        caption: {
            type: String,
            default: ''
        },

        link: {
            type: String,
            default: '#'
        },

        icon: {
            type: String,
            default: ''
        }
    }
})
</script>
