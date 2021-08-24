<template>
    <div class="q-pa-md col-flex">
        <div class="q-gutter-md title-field text-dark">
            <p class="q-mt-xl page-title">
                Authors
            </p>
        </div>
        <div
            v-for="(author, index) in authors"
            v-bind:key="index"
            class="q-mb-md"
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
        <div
            class="errors"
            v-if="errors.authors?.length > 0"
        >
            <p
                class="text-negative"
                v-for="(e, ei) in errors.authors"
                v-bind:key="ei"
            >
                {{ e }}
            </p>
        </div>
        <q-btn
            no-caps
            v-on:click="addAuthor"
            color="primary"
        >
            Add author
        </q-btn>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import StepperActions from 'components/StepperActions.vue'
import AuthorEditCard from 'components/AuthorEditCard.vue'
import AuthorViewCard from 'components/AuthorViewCard.vue'
import { AuthorType } from 'src/types'
import { useCff } from 'src/store/cff'
import { useFileValidator } from 'src/validator'

export default defineComponent({
    name: 'Authors',
    components: {
        StepperActions,
        AuthorEditCard,
        AuthorViewCard
    },
    setup () {
        const { authors, setAuthors } = useCff()
        const { groupedErrors } = useFileValidator()
        const editingId = ref(-1)
        return {
            authors,
            editingId,
            setAuthorField (field: keyof AuthorType, value: string) {
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
                const newAuthor: AuthorType = {}
                const newAuthors = [...authors.value, newAuthor]
                setAuthors(newAuthors)
                editingId.value = newAuthors.length - 1
            },
            errors: groupedErrors
        }
    }
})
</script>

<style scoped>

.col-flex {
    flex: 1;
}
.title-field {
    margin-right: 120px;
    max-width: 700px;
    min-width: 300px;
}

</style>
