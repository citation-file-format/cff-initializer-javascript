<template>
    <div id="metroline">
        <Stepper />
    </div>
    <div id="form">
        <div id="form-title">
            <h1 class="page-title">
                Identifiers
            </h1>
        </div>

        <div id="form-content">
            <div
                v-for="(identifier, index) in identifiers"
                v-bind:key="index"
                class="q-mb-md"
            >
                <IdentifierCardViewing
                    v-if="editingId !== index"
                    v-bind:index="index"
                    v-bind:identifier="identifier"
                    v-on:editPressed="() => (editingId = index)"
                />
                <IdentifierCardEditing
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
            <q-btn
                no-caps
                v-on:click="addIdentifier"
                color="primary"
            >
                Add identifier
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
import IdentifierCardEditing from 'components/IdentifierCardEditing.vue'
import IdentifierCardViewing from 'components/IdentifierCardViewing.vue'
import { IdentifierType, IdentifierTypeType } from 'src/types'
import { useCff } from 'src/store/cff'

export default defineComponent({
    name: 'ScreenIdentifiers',
    components: {
        Stepper,
        StepperActions,
        IdentifierCardEditing,
        IdentifierCardViewing
    },
    setup () {
        const { identifiers, setIdentifiers } = useCff()
        const editingId = ref(0)
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
            }
        }
    }
})
</script>

<style scoped>
</style>
