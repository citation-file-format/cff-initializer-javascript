<template>
    <q-card
        bordered
        v-bind:class="['bg-formcard', authorErrors.length > 0 ? 'red-border has-error' : '']"
        flat
        style="display: flex; flex-direction: row"
    >
        <div style="flex-grow: 1.0">
            <ul v-bind:data-cy="'card-info' + index">
                <li>{{ author.givenNames }} {{ author.nameParticle }} {{ author.familyNames }} {{ author.nameSuffix }}</li>
                <li>{{ author.email }}</li>
                <li>{{ author.affiliation }} {{ author.orcid }}</li>
            </ul>
        </div>
        <div>
            <q-btn
                class="author-button"
                color="blue"
                icon="ion-arrow-up"
                v-bind:aria-label="`Move author ${index + 1} up`"
                v-bind:data-cy="'btn-move-up' + index"
                v-bind:disable="index == 0"
                v-on:click="$emit('moveUp')"
            />
            <q-btn
                class="author-button"
                color="blue"
                icon="ion-arrow-down"
                v-bind:aria-label="`Move author ${index + 1} down`"
                v-bind:data-cy="'btn-move-down' + index"
                v-bind:disable="index >= numAuthors - 1"
                v-on:click="$emit('moveDown')"
            />
            <q-btn
                class="author-button"
                color="primary"
                flat
                hover-color="negative"
                icon="edit"
                title="Edit"
                v-bind:aria-label="`Edit author ${index + 1}`"
                v-bind:data-cy="'btn-edit' + index"
                v-on:click="$emit('editPressed')"
            />
            <q-btn
                class="author-button"
                color="negative"
                hover-color="negative"
                icon="delete"
                title="Remove author"
                v-bind:aria-label="`Remove author ${index + 1}`"
                v-bind:data-cy="'btn-remove' + index"
                v-on:click="$emit('removePressed')"
            />
        </div>
    </q-card>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue'
import { byError, duplicateAuthorQueries, duplicateMatcher, emailQueries, orcidQueries } from 'src/error-filtering'
import { AuthorType } from 'src/types'
import { useValidation } from 'src/store/validation'

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
        const { errors } = useValidation()
        const emailErrors = computed(() => {
            return emailQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const orcidErrors = computed(() => {
            return orcidQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const duplicateErrors = computed(() => {
            return duplicateAuthorQueries
                .filter(byError(errors.value))
                .filter(byError(errors.value, duplicateMatcher(props.index)))
                .map(query => query.replace.message)
        })
        const authorErrors = computed(() => [...emailErrors.value, ...orcidErrors.value, ...duplicateErrors.value])
        return {
            authorErrors
        }
    },
    emits: ['editPressed', 'moveDown', 'moveUp', 'removePressed']
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
