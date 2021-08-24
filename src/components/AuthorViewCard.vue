<template>
    <q-card
        flat
        bordered
        class="bg-formcard"
        v-on:mouseover="showEdit = true"
        v-on:mouseleave="showEdit = false"
    >
        <q-card-section>
            <div class="row items-center no-wrap">
                <div class="col-11">
                    <div class="text-subtitle1">
                        {{ author.givenNames }} {{ author.nameParticle }} {{ author.familyNames }} {{ author.nameSuffix }}
                    </div>
                    <div class="text-subtitle1">
                        {{ author.email }}
                    </div>
                </div>

                <div class="col-1">
                    <q-icon
                        v-if="hasErrors"
                        color="negative"
                        name="warning"
                        title="Author is invalid"
                    />
                    <q-btn
                        v-if="showEdit"
                        color="primary"
                        round
                        flat
                        icon="edit"
                        title="Edit"
                        v-on:click="$emit('editPressed')"
                    />
                </div>
            </div>
        </q-card-section>

        <q-card-section>
            {{ author.affiliation }} {{ author.orcid }}
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue'
import { AuthorType } from 'src/types'
import { useFileValidator } from 'src/store/validator'

export default defineComponent({
    name: 'AuthorViewCard',
    props: {
        index: {
            type: Number,
            required: true
        },
        author: {
            type: Object as PropType<AuthorType>,
            required: true
        }
    },
    setup (props) {
        const { groupedErrors } = useFileValidator()
        const showEdit = ref(false)
        return {
            showEdit,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            hasErrors: computed(() => !!((groupedErrors.value.authorsList && groupedErrors.value.authorsList[props.index])))
        }
    },
    emits: ['editPressed']
})
</script>
