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
                        {{ identifier.type }}
                    </div>
                    <div class="text-subtitle1">
                        {{ identifier.value }}
                    </div>
                    <div class="text-subtitle1">
                        {{ identifier.description }}
                    </div>
                </div>

                <div class="col-1">
                    <q-icon
                        v-if="hasErrors"
                        color="negative"
                        name="warning"
                        title="Identifier is invalid"
                    />
                    <q-btn
                        v-if="showEdit"
                        color="primary"
                        round
                        flat
                        icon="edit"
                        v-on:click="$emit('editPressed')"
                    />
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue'
import { IdentifierType } from 'src/types'
import { useFileValidator } from 'src/store/validator'

export default defineComponent({
    name: 'IdentifierViewCard',
    props: {
        index: {
            type: Number,
            required: true
        },
        identifier: {
            type: Object as PropType<IdentifierType>,
            required: true
        }
    },
    setup () {
        const { groupedErrors } = useFileValidator()
        const showEdit = ref(false)
        return {
            showEdit,
            hasErrors: computed(() => !!((groupedErrors.value.identifiersList && groupedErrors.value.identifiersList[index])))
        }
    },
    emits: ['editPressed']
})
</script>
