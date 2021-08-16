<template>
    <div>
        <div class="page-title">
            Authors
        </div>

        <div>
            <AuthorViewCard
                v-for="(author, index) in authors"
                v-bind:key="index"
                v-bind:index="index"
                v-bind:author="author"
                v-on:editPressed="() => editingId = index"
            />
        </div>
        <q-btn>Add author</q-btn> {{ editingId }}

        <StepperActions />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import StepperActions from 'components/StepperActions.vue'
import AuthorViewCard from 'components/AuthorViewCard.vue'
import { Author } from 'src/types/author'

export default defineComponent({
    name: 'Authors',
    components: {
        StepperActions,
        AuthorViewCard
    },
    setup () {
        const authors = ref<Author[]>([{
            givenNames: 'Stefan',
            familyNames: 'Verhoeven',
            email: 'me@bla.com',
            affiliation: 'NLeSC',
            orcid: 'https://orcid/123434'
        }, {
            givenNames: 'Faruk',
            familyNames: 'Diblen',
            email: 'me@bla.com',
            affiliation: 'NLeSC',
            orcid: 'https://orcid/123434'
        }])

        const editingId = ref(-1)
        return {
            authors,
            editingId
        }
    }
})
</script>
