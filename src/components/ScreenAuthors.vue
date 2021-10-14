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
            <div class="scroll-to-bottom-container">
                <div
                    class="q-mb-md q-mr-lg scroll-to-bottom-item"
                    v-bind:key="index"
                    v-for="(author, index) in authors"
                >
                    <AuthorCardViewing
                        v-if="editingId !== index"
                        v-bind:index="index"
                        v-bind:author="author"
                        v-on:editPressed="() => (editingId = index)"
                    />
                    <AuthorCardEditing
                        v-else
                        v-bind:index="index"
                        v-bind="author"
                        v-on:update="setAuthorField"
                        v-on:closePressed="() => (editingId = -1)"
                        v-on:removePressed="removeAuthor"
                    />
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
import AuthorCardEditing from 'components/AuthorCardEditing.vue'
import AuthorCardViewing from 'components/AuthorCardViewing.vue'
import { AuthorType } from 'src/types'
import { useCff } from 'src/store/cff'

export default defineComponent({
    name: 'ScreenAuthors',
    components: {
        Stepper,
        StepperActions,
        AuthorCardEditing,
        AuthorCardViewing
    },
    setup () {
        const { authors, setAuthors } = useCff()
        const editingId = ref(0)
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
.scroll-to-bottom-container {
    scroll-snap-type: y mandatory;
    max-height: 450px;
    overflow-y: auto;
}
.scroll-to-bottom-item {
    scroll-snap-align: start;
}
</style>
