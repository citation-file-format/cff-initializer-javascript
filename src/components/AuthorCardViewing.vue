<template>
    <q-card
        bordered
        flat
        v-bind:class="['bg-formcard', authorErrors.length > 0 ? 'red-border' : '']"
    >
        <q-card-section
            horizontal
        >
            <div class="col">
                <ul
                    class="q-pl-md"
                    v-bind:data-cy="'card-info' + index"
                >
                    <li
                        v-for="(field, fieldIndex) in authorFields"
                        v-bind:key="fieldIndex"
                        class="row"
                    >
                        {{ field }}
                    </li>
                </ul>
            </div>
            <q-card-actions>
                <q-btn
                    color="secondary"
                    flat
                    icon="ion-arrow-up"
                    v-bind:aria-label="`Move author ${index + 1} up`"
                    v-bind:data-cy="'btn-move-up' + index"
                    v-bind:disable="index == 0"
                    v-on:click="$emit('moveUp')"
                />
                <q-btn
                    color="secondary"
                    flat
                    icon="ion-arrow-down"
                    v-bind:aria-label="`Move author ${index + 1} down`"
                    v-bind:data-cy="'btn-move-down' + index"
                    v-bind:disable="index >= numAuthors - 1"
                    v-on:click="$emit('moveDown')"
                />
                <q-btn
                    color="secondary"
                    flat
                    hover-color="negative"
                    icon="edit"
                    title="Edit"
                    v-bind:aria-label="`Edit author ${index + 1}`"
                    v-bind:data-cy="'btn-edit' + index"
                    v-on:click="$emit('editPressed')"
                />
                <q-btn
                    color="negative"
                    flat
                    hover-color="negative"
                    icon="delete"
                    title="Remove author"
                    v-bind:aria-label="`Remove author ${index + 1}`"
                    v-bind:data-cy="'btn-remove' + index"
                    v-on:click="$emit('removePressed')"
                />
            </q-card-actions>
        </q-card-section>
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
        const authorFields = computed(() => [
            [props.author.givenNames, props.author.nameParticle, props.author.familyNames, props.author.nameSuffix].join(' '),
            props.author.email,
            props.author.affiliation,
            props.author.orcid
        ].filter((x) => x))
        return {
            authorErrors,
            authorFields
        }
    },
    emits: ['editPressed', 'moveDown', 'moveUp', 'removePressed']
})
</script>
