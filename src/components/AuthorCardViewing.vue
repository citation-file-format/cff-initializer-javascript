<template>
    <q-card
        bordered
        v-bind:class="['bg-formcard', authorErrors.hasError ? 'red-border' : '']"
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
                class="author-button"
                flat
                v-bind:disable="index == 0"
                icon="ion-arrow-up"
                tabindex="-1"
                v-on:click="$emit('moveUp')"
            />
            <q-btn
                class="author-button"
                flat
                v-bind:disable="index >= numAuthors - 1"
                icon="ion-arrow-down"
                tabindex="-1"
                v-on:click="$emit('moveDown')"
            />
            <q-btn
                class="author-button"
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
import { computed, defineComponent, PropType } from 'vue'
import { AuthorType } from 'src/types'
import { authorErrors } from 'src/author-errors'

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
        },
        numAuthors: {
            type: Number,
            default: 0
        }
    },
    setup (props) {
        return {
            authorErrors: computed(() => authorErrors(props.index))
        }
    },
    emits: ['editPressed', 'moveDown', 'moveUp']
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
.author-button {
    background-color: white;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    padding: 10px;
}
</style>
