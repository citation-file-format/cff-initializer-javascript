<template>
    <q-card
        bordered
        v-bind:class="['bg-formcard', authorErrors.length > 0 ? 'red-border has-error' : '']"
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
                color="blue"
                v-bind:data-cy="'btn-move-up' + index"
                v-bind:disable="index == 0"
                icon="ion-arrow-up"
                tabindex="-1"
                v-on:click="$emit('moveUp')"
            />
            <q-btn
                class="author-button"
                color="blue"
                v-bind:data-cy="'btn-move-down' + index"
                v-bind:disable="index >= numAuthors - 1"
                icon="ion-arrow-down"
                tabindex="-1"
                v-on:click="$emit('moveDown')"
            />
            <q-btn
                class="author-button"
                color="primary"
                v-bind:data-cy="'btn-edit' + index"
                flat
                hover-color="negative"
                icon="edit"
                title="Edit"
                v-on:click="$emit('editPressed')"
            />
            <q-btn
                class="author-button"
                color="negative"
                v-bind:data-cy="'btn-remove' + index"
                hover-color="negative"
                icon="delete"
                title="Remove author"
                v-on:click="$emit('removePressed')"
            />
        </div>
    </q-card>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, onUpdated } from 'vue'
import { byError, duplicateAuthorQueries, duplicateMatcher, emailQueries, orcidQueries } from 'src/error-filtering'
import { AuthorType } from 'src/types'
import { useStepperErrors } from 'src/store/stepper-errors'
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
        onUpdated(() => {
            const { setErrorStateScreenAuthors } = useStepperErrors()
            setErrorStateScreenAuthors(document.getElementsByClassName('has-error').length > 0)
        })
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
