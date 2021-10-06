<template>
    <div id="metroline">
        <Stepper />
    </div>
    <div id="form">
        <div id="form-title">
            <h1 class="page-title">
                Authors
            </h1>
        </div>

        <div id="form-content">
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
            <q-btn
                no-caps
                v-on:click="addAuthor"
                color="primary"
            >
                Add author
            </q-btn>
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import AuthorEditCard from 'components/AuthorEditCard.vue'
import AuthorViewCard from 'components/AuthorViewCard.vue'
import { AuthorType } from 'src/types'
import { useCff } from 'src/store/cff'

export default defineComponent({
    name: 'Authors',
    components: {
        Stepper,
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
            }
        }
    }
})
</script>

<style scoped>
</style>
