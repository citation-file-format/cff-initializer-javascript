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
            <p class="question">
                Who are the author(s) of the work?
                <SchemaInfoIcon section="authors" />
            </p>
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
                        />
                        <AuthorCardEditing
                            v-else
                            v-bind:index="index"
                            v-bind:num-authors="authors.length"
                            v-bind="author"
                            v-on:update="setAuthorField"
                            v-on:closePressed="() => (editingId = -1)"
                            v-on:removePressed="removeAuthor"
                            v-on:moveDown="moveAuthorDown(index)"
                            v-on:moveUp="moveAuthorUp(index)"
                        />
                    </div>
                </div>
            </div>

            <q-btn
                class="q-mt-md q-mb-md"
                color="primary"
                no-caps
                v-on:click="addAuthor"
            >
                Add author
            </q-btn>

            <q-banner
                v-if="authorsErrors.messages.length > 0"
                class="bg-warning text-negative"
            >
                <div
                    v-bind:key="index"
                    v-for="(screenMessage, index) in authorsErrors.messages"
                >
                    {{ screenMessage }}
                </div>
            </q-banner>
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import SchemaInfoIcon from 'components/SchemaInfoIcon.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import AuthorCardEditing from 'components/AuthorCardEditing.vue'
import AuthorCardViewing from 'components/AuthorCardViewing.vue'
import { AuthorType } from 'src/types'
import { moveDown, moveUp } from '../updown'
import { useCff } from 'src/store/cff'
import { scrollToBottom } from '../scroll-to-bottom'
import { authorsErrors } from 'src/authors-errors'

export default defineComponent({
    name: 'ScreenAuthors',
    components: {
        SchemaInfoIcon,
        Stepper,
        StepperActions,
        AuthorCardEditing,
        AuthorCardViewing
    },
    setup () {
        const { authors, setAuthors } = useCff()
        const editingId = ref(0)
        const addAuthor = async () => {
            let newAuthors:AuthorType[]
            const newAuthor: AuthorType = {}
            if (authors.value === undefined) {
                newAuthors = [newAuthor]
            } else {
                newAuthors = [...authors.value, newAuthor]
            }
            setAuthors(newAuthors)
            editingId.value = newAuthors.length - 1
            // await the DOM update that resulted from updating the authors list
            await nextTick()
            scrollToBottom()
        }
        const removeAuthor = () => {
            if (authors.value !== undefined) {
                const newAuthors = [...authors.value]
                newAuthors.splice(editingId.value, 1)
                setAuthors(newAuthors)
                editingId.value = -1
                if (Array.isArray(newAuthors) && newAuthors.length === 0) {
                    setAuthors(undefined)
                }
            }
        }
        const setAuthorField = (field: keyof AuthorType, value: string) => {
            if (authors.value !== undefined) {
                const author = { ...authors.value[editingId.value] }
                author[field] = value === '' ? undefined : value
                authors.value[editingId.value] = author
                setAuthors(authors.value)
            }
        }
        const moveAuthorUp = (index: number) => {
            if (authors.value === undefined) return
            moveUp(index, authors.value, setAuthors)
            if (editingId.value === index && index > 0) {
                editingId.value = editingId.value - 1
            } else if (editingId.value === index - 1) {
                editingId.value = editingId.value + 1
            }
        }
        const moveAuthorDown = (index: number) => {
            if (authors.value === undefined) return
            moveDown(index, authors.value, setAuthors)
            if (editingId.value === index && index < authors.value.length - 1) {
                editingId.value = editingId.value + 1
            } else if (editingId.value === index + 1) {
                editingId.value = editingId.value - 1
            }
        }

        return {
            addAuthor,
            authors,
            editingId,
            moveAuthorDown,
            moveAuthorUp,
            removeAuthor,
            setAuthorField,
            authorsErrors: computed(() => authorsErrors(authors.value))
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
