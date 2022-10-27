<template>
    <h1 id="form-title">
        Authors
    </h1>

    <h2 class="question">
        Who are the author(s) of the work?
        <InfoDialog name="authors" />
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
                    v-bind:data-cy="'card-author' + index"
                    v-on:editPressed="() => (editingId = index)"
                    v-on:moveDown="moveAuthorDown(index)"
                    v-on:moveUp="moveAuthorUp(index)"
                    v-on:removePressed="removeAuthor(index)"
                />
                <AuthorCardEditing
                    v-else
                    v-bind:index="index"
                    v-bind="author"
                    v-bind:data-cy="'card-author' + index"
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

    <BannerErrorMessages v-bind:error-messages="authorsErrors" />
</template>

<script lang="ts">
import { authorsQueries, byError } from 'src/error-filtering'
import { computed, defineComponent, nextTick, ref } from 'vue'
import { moveDown, moveUp } from 'src/updown'
import AuthorCardEditing from 'components/AuthorCardEditing.vue'
import AuthorCardViewing from 'components/AuthorCardViewing.vue'
import { AuthorType } from 'src/types'
import BannerErrorMessages from 'src/components/BannerErrorMessages.vue'
import InfoDialog from 'components/InfoDialog.vue'
import { scrollToBottom } from 'src/scroll-to-bottom'
import { useCff } from 'src/store/cff'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenAuthors',
    components: {
        AuthorCardEditing,
        AuthorCardViewing,
        BannerErrorMessages,
        InfoDialog
    },
    setup () {
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
        return {
            addAuthor,
            authors,
            authorsErrors,
            editingId,
            moveAuthorDown,
            moveAuthorUp,
            removeAuthor,
            setAuthorField
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
