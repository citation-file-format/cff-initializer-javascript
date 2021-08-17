<template>
    <div>
        <div class="page-title">
            Authors
        </div>

        <div
            v-for="(author, index) in authors"
            v-bind:key="index"
        >
            <AuthorViewCard
                v-if="editingId !== index"
                v-bind:index="index"
                v-bind:author="author"
                v-on:editPressed="() => (editingId = index)"
            />
            <AuthorEditCard
                v-else
                v-bind:index="index"
                v-bind="author"
                v-on:update="setAuthorField"
                v-on:closePressed="() => (editingId = -1)"
                v-on:removePressed="removeAuthor"
            />
        </div>
        <q-btn v-on:click="addAuthor">
            Add author
        </q-btn>

        <StepperActions />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import StepperActions from 'components/StepperActions.vue'
import AuthorEditCard from 'components/AuthorEditCard.vue'
import AuthorViewCard from 'components/AuthorViewCard.vue'
import { Author } from 'src/types/author'
import { useCff } from 'src/store/cff'

export default defineComponent({
    name: 'Authors',
    components: {
        StepperActions,
        AuthorEditCard,
        AuthorViewCard
    },
    setup () {
        const { authors, setAuthors } = useCff()
        const editingId = ref(-1)
        return {
            authors,
            editingId,
            setAuthorField (field: keyof Author, value: string) {
                const author = { ...authors.value[editingId.value] }
                author[field] = value
                authors.value[editingId.value] = author
                setAuthors(authors.value)
            },
            removeAuthor () {
                const newAuthors = [...authors.value]
                newAuthors.splice(editingId.value, 1)
                setAuthors(newAuthors)
                editingId.value = -1
            },
            addAuthor () {
                const newAuthor: Author = {}
                const newAuthors = [...authors.value, newAuthor]
                setAuthors(newAuthors)
                editingId.value = newAuthors.length - 1
            }
        }
    }
})
</script>
