<template>
    <h1
        id="form-title"
        tabindex="-1"
    >
        Authors
    </h1>

    <p>
        Add all authors of the work. At least one must be provided.
        <InfoDialog name="authors" />
    </p>
    <div>
        <span class="bottom" />
        <div>
            <div
                class="q-mb-md q-mr-lg"
                v-bind:key="index"
                v-for="(author, index) in authors"
            >
                <div v-if="authorsKind[index] == 'person'">
                    <PersonCardViewing
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
                    <PersonCardEditing
                        v-else
                        v-bind:index="index"
                        v-bind:author="author"
                        v-bind:data-cy="'card-author' + index"
                        v-on:update="setPersonField"
                        v-on:closePressed="() => (editingId = -1)"
                        v-on:removePressed="removeAuthor(editingId)"
                    />
                </div>
                <div v-else>
                    <EntityCardViewing
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
                    <EntityCardEditing
                        v-else
                        v-bind:index="index"
                        v-bind:author="author"
                        v-bind:data-cy="'card-author' + index"
                        v-on:update="setEntityField"
                        v-on:closePressed="() => (editingId = -1)"
                        v-on:removePressed="removeAuthor(editingId)"
                    />
                </div>
            </div>
        </div>
    </div>

    <q-btn-group class="rounded-borders">
        <q-btn
            class="rounded-borders"
            color="secondary"
            data-cy="btn-add-person"
            icon="person"
            label="Add person"
            no-caps
            v-on:click="addAuthor('person')"
        />
        <q-btn
            class="rounded-borders"
            color="secondary"
            data-cy="btn-add-entity"
            icon="business"
            label="Add entity"
            no-caps
            v-on:click="addAuthor('entity')"
        />
    </q-btn-group>

    <BannerErrorMessages v-bind:error-messages="authorsErrors" />
</template>

<script lang="ts">
import { AuthorKind, AuthorsType, EntityType, PersonType } from 'src/types'
import { authorsQueries, byError } from 'src/error-filtering'
import { computed, defineComponent, nextTick, ref } from 'vue'
import BannerErrorMessages from 'src/components/BannerErrorMessages.vue'
import EntityCardEditing from 'components/EntityCardEditing.vue'
import EntityCardViewing from 'components/EntityCardViewing.vue'
import InfoDialog from 'components/InfoDialog.vue'
import PersonCardEditing from 'components/PersonCardEditing.vue'
import PersonCardViewing from 'components/PersonCardViewing.vue'
import { scrollToBottom } from 'src/scroll-to-bottom'
import { useCff } from 'src/store/cff'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenAuthors',
    components: {
        EntityCardEditing,
        EntityCardViewing,
        PersonCardEditing,
        PersonCardViewing,
        BannerErrorMessages,
        InfoDialog
    },
    setup () {
        const { authors, authorsKind, setAuthors } = useCff()
        const { errors } = useValidation()
        const editingId = ref(0)

        const addAuthor = async (kind: AuthorKind) => {
            const newAuthors = [...authors.value, {}]
            const newAuthorsKind = [...authorsKind.value, kind]
            setAuthors(newAuthors, newAuthorsKind)
            editingId.value = newAuthors.length - 1
            // await the DOM update that resulted from updating the authors list
            await nextTick()
            scrollToBottom()
        }
        const removeAuthor = (index: number) => {
            const newAuthors = [...authors.value]
            const newAuthorsKind = [...authorsKind.value]
            newAuthors.splice(index, 1)
            newAuthorsKind.splice(index, 1)
            setAuthors(newAuthors, newAuthorsKind)
            if (index < editingId.value) {
                editingId.value -= 1
            } else if (index === editingId.value) {
                editingId.value = -1
            }
        }
        const setPersonField = (field: keyof PersonType, value: string) => {
            const newAuthor: PersonType = { ...authors.value[editingId.value] }
            newAuthor[field] = value === '' ? undefined : value
            authors.value[editingId.value] = newAuthor
            setAuthors(authors.value, authorsKind.value)
        }
        const setEntityField = (field: keyof EntityType, value: string) => {
            const newAuthor: EntityType = { ...authors.value[editingId.value] }
            newAuthor[field] = value === '' ? undefined : value
            authors.value[editingId.value] = newAuthor
            setAuthors(authors.value, authorsKind.value)
        }
        const moveAuthorUp = (index: number) => {
            if (index === 0) return
            const newAuthors: AuthorsType = [...authors.value]
            newAuthors[index] = newAuthors.splice(index - 1, 1, newAuthors[index])[0]
            const newAuthorsKind: Array<AuthorKind> = [...authorsKind.value]
            newAuthorsKind[index] = newAuthorsKind.splice(index - 1, 1, newAuthorsKind[index])[0]
            setAuthors(newAuthors, newAuthorsKind)
            if (editingId.value === index && index > 0) {
                editingId.value = editingId.value - 1
            } else if (editingId.value === index - 1) {
                editingId.value = editingId.value + 1
            }
        }
        const moveAuthorDown = (index: number) => {
            if (index === authors.value.length - 1) return
            const newAuthors: AuthorsType = [...authors.value]
            newAuthors[index] = newAuthors.splice(index + 1, 1, newAuthors[index])[0]
            const newAuthorsKind: Array<AuthorKind> = [...authorsKind.value]
            newAuthorsKind[index] = newAuthorsKind.splice(index + 1, 1, newAuthorsKind[index])[0]
            setAuthors(newAuthors, newAuthorsKind)
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
            authorsKind,
            editingId,
            moveAuthorDown,
            moveAuthorUp,
            removeAuthor,
            setEntityField,
            setPersonField
        }
    }
})
</script>
