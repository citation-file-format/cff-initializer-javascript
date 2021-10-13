<template>
    <q-card
        bordered
        class="bg-formcard"
        flat
        style="display: flex; flex-direction: row"
    >
        <div style="flex-grow: 1.0">
            <ul>
                <li>{{ author.givenNames }} {{ author.nameParticle }} {{ author.familyNames }} {{ author.nameSuffix }}</li>
                <li>{{ author.email }}</li>
                <li>{{ author.affiliation }} {{ author.orcid }}</li>
            </ul>
        </div>
        <div>
            <q-btn
                class="edit-button"
                color="primary"
                flat
                hover-color="negative"
                icon="edit"
                title="Edit"
                v-on:click="$emit('editPressed')"
            />
        </div>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { AuthorType } from 'src/types'

export default defineComponent({
    name: 'AuthorCardViewing',
    props: {
        index: {
            type: Number,
            required: true
        },
        author: {
            type: Object as PropType<AuthorType>,
            required: true
        }
    },
    emits: ['editPressed']
})
</script>
<style scoped>
ul {
    padding-inline-start: 20px;
}
li {
    list-style: none;
    list-style-position: inside;
}
.edit-button {
    background-color: white;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    padding: 10px;
}
</style>
