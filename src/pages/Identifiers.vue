<template>
    <div class="q-pa-md col-flex">
        <div class="q-gutter-md title-field text-dark">
            <p class="q-mt-xl page-title">
                Identifiers
            </p>
        </div>

        <div
            v-for="(identifier, index) in identifiers"
            v-bind:key="index"
            class="q-mb-md"
        >
            <IdentifierViewCard
                v-if="editingId !== index"
                v-bind:index="index"
                v-bind:identifier="identifier"
                v-on:editPressed="() => (editingId = index)"
            />
            <IdentifierEditCard
                v-else
                v-bind:index="index"
                v-bind="identifier"
                v-on:updateType="setIdentifierTypeField"
                v-on:updateValue="setIdentifierValueField"
                v-on:updateDescription="setIdentifierDescriptionField"
                v-on:closePressed="() => (editingId = -1)"
                v-on:removePressed="removeIdentifier"
            />
        </div>
        <div
            class="errors"
            v-if="errors.identifiers?.length > 0"
        >
            <p
                class="text-negative"
                v-for="(e, ei) in errors.identifiers"
                v-bind:key="ei"
            >
                {{ e }}
            </p>
        </div>
        <q-btn
            no-caps
            v-on:click="addIdentifier"
            color="primary"
        >
            Add identifier
        </q-btn>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import StepperActions from 'components/StepperActions.vue'
import IdentifierEditCard from 'components/IdentifierEditCard.vue'
import IdentifierViewCard from 'components/IdentifierViewCard.vue'
import { IdentifierType, IdentifierTypeType } from 'src/types'
import { useCff } from 'src/store/cff'
import { useFileValidator } from 'src/store/validator'

export default defineComponent({
    name: 'Identifiers',
    components: {
        StepperActions,
        IdentifierEditCard,
        IdentifierViewCard
    },
    setup () {
        const { identifiers, setIdentifiers } = useCff()
        const editingId = ref(-1)
        const { groupedErrors } = useFileValidator()
        return {
            identifiers,
            editingId,
            setIdentifierTypeField (field: keyof IdentifierType, value: IdentifierTypeType) {
                const identifier = { ...identifiers.value[editingId.value] }
                identifier.type = value
                identifiers.value[editingId.value] = identifier
                setIdentifiers(identifiers.value)
            },
            setIdentifierValueField (field: keyof IdentifierType, value: string) {
                const identifier = { ...identifiers.value[editingId.value] }
                identifier.value = value
                identifiers.value[editingId.value] = identifier
                setIdentifiers(identifiers.value)
            },
            setIdentifierDescriptionField (field: keyof IdentifierType, value: string) {
                const identifier = { ...identifiers.value[editingId.value] }
                identifier.description = value
                identifiers.value[editingId.value] = identifier
                setIdentifiers(identifiers.value)
            },
            removeIdentifier () {
                const newIdentifiers = [...identifiers.value]
                newIdentifiers.splice(editingId.value, 1)
                setIdentifiers(newIdentifiers)
                editingId.value = -1
            },
            addIdentifier () {
                const newIdentifier: IdentifierType = {
                    type: 'doi',
                    value: '',
                    description: ''
                }
                const newIdentifiers = [...identifiers.value, newIdentifier]
                setIdentifiers(newIdentifiers)
                editingId.value = newIdentifiers.length - 1
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
