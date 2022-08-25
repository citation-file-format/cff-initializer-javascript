<template>
    <div id="form-title">
        <h1 class="page-title">
            Authors
        </h1>
    </div>

    <div id="form-content">
        <h2 class="question">
            Who are the author(s) of the work?
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showAuthorsHelp = true"
                style="cursor:pointer;"
            />
        </h2>
        <div class="scroll-to-bottom-container">
            <span class="bottom" />
            <div>
                <div
                    class="q-mb-md q-mr-lg"
                    v-bind:key="index"
                    v-for="(author, index) in authors"
                >
                    <AuthorCardViewing
                        v-if="editingId !== index"
                        v-bind:index="index"
                        v-bind:author="author"
                        v-bind:num-authors="authors.length"
                        v-on:editPressed="() => (editingId = index)"
                        v-on:moveDown="moveAuthorDown(index)"
                        v-on:moveUp="moveAuthorUp(index)"
                        v-on:removePressed="removeAuthor(index)"
                    />
                    <AuthorCardEditing
                        v-else
                        v-bind:index="index"
                        v-bind="author"
                        v-on:update="setAuthorField"
                        v-on:closePressed="() => (editingId = -1)"
                        v-on:removePressed="removeAuthor(editingId)"
                    />
                </div>
            </div>
        </div>

        <q-btn
            class="q-mt-md q-mb-md"
            color="primary"
            data-cy="btn-add-author"
            no-caps
            v-on:click="addAuthor"
        >
            Add author
        </q-btn>

        <q-banner
            v-if="authorsErrors.length > 0"
            v-bind:class="['bg-warning', 'text-negative', authorsErrors.length > 0 ? 'has-error' : '']"
        >
            <div
                v-bind:key="index"
                v-for="(screenMessage, index) in authorsErrors"
            >
                {{ screenMessage }}
            </div>
        </q-banner>
        <InfoDialog
            v-model="showAuthorsHelp"
            v-bind:data="helpData.authors"
        />
    </div>
</template>

<script lang="ts">
import { authorsQueries, byError } from 'src/error-filtering'
import { computed, defineComponent, nextTick, onUpdated, ref } from 'vue'
import { moveDown, moveUp } from 'src/updown'
import AuthorCardEditing from 'components/AuthorCardEditing.vue'
import AuthorCardViewing from 'components/AuthorCardViewing.vue'
import { AuthorType } from 'src/types'
import InfoDialog from 'components/InfoDialog.vue'
import { scrollToBottom } from 'src/scroll-to-bottom'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenAuthors',
    components: {
        AuthorCardEditing,
        AuthorCardViewing,
        InfoDialog
    },
    setup () {
        onUpdated(() => {
            const { setErrorStateScreenAuthors } = useStepperErrors()
            setErrorStateScreenAuthors(document.getElementsByClassName('has-error').length > 0)
        })
        const { authors, setAuthors } = useCff()
        const { errors } = useValidation()
        const editingId = ref(-1)
        const addAuthor = async () => {
            const newAuthor: AuthorType = {}
            const newAuthors = [...authors.value, newAuthor]
            setAuthors(newAuthors)
            editingId.value = newAuthors.length - 1
            // await the DOM update that resulted from updating the authors list
            await nextTick()
            scrollToBottom()
        }
        const removeAuthor = (index: number) => {
            const newAuthors = [...authors.value]
            newAuthors.splice(index, 1)
            setAuthors(newAuthors)
            if (index < editingId.value) {
                editingId.value -= 1
            } else if (index === editingId.value) {
                editingId.value = -1
            }
        }
        const setAuthorField = (field: keyof AuthorType, value: string) => {
            const newAuthor = { ...authors.value[editingId.value] }
            newAuthor[field] = value === '' ? undefined : value
            authors.value[editingId.value] = newAuthor
            setAuthors(authors.value)
        }
        const moveAuthorUp = (index: number) => {
            moveUp(index, authors.value, setAuthors)
            if (editingId.value === index && index > 0) {
                editingId.value = editingId.value - 1
            } else if (editingId.value === index - 1) {
                editingId.value = editingId.value + 1
            }
        }
        const moveAuthorDown = (index: number) => {
            moveDown(index, authors.value, setAuthors)
            if (editingId.value === index && index < authors.value.length - 1) {
                editingId.value = editingId.value + 1
            } else if (editingId.value === index + 1) {
                editingId.value = editingId.value - 1
            }
        }
        const authorsErrors = computed(() => {
            return authorsQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const helpData = {
            authors: {
                title: 'authors',
                url: [
                    {
                        text: 'Click here to see the documentation for authors.',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#authors'
                    },
                    {
                        text: 'How to deal with unknown individual authors?',
                        link: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#how-to-deal-with-unknown-individual-authors'
                    }
                ],
                description: 'The authors of a software or dataset.',
                examples: [
                    ' given-names: Jane\n family-names: Doe',
                    ' name: "The Research Software project"',
                    ' given-names: John\n family-names: Doe\n name: "The Research Software project"'
                ]
            }
        }
        return {
            addAuthor,
            authors,
            authorsErrors,
            editingId,
            helpData,
            moveAuthorDown,
            moveAuthorUp,
            removeAuthor,
            setAuthorField,
            showAuthorsHelp: ref(false)
        }
    }
})
</script>

<style scoped>
.scroll-to-bottom-container {
    display: flex;
    flex-direction: column-reverse;
    max-height: 450px;
    overflow-y: auto;
}
</style>
