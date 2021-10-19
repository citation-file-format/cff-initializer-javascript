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
            <div class="scroll-to-bottom-container">
                <span class="bottom" />
                <div>
                    <div
                        class="q-mb-md q-mr-lg"
                        v-bind:key="index"
                        v-for="(identifier, index) in identifiers"
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
                </div>
            </div>
            <q-btn
                class="q-mt-md q-mb-md"
                color="primary"
                no-caps
                v-on:click="addIdentifier"
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
import { defineComponent, nextTick, ref } from 'vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import IdentifierCardEditing from 'components/IdentifierCardEditing.vue'
import IdentifierCardViewing from 'components/IdentifierCardViewing.vue'
import { IdentifierType, IdentifierTypeType } from 'src/types'
import { useCff } from 'src/store/cff'
import { scrollToBottom } from '../scroll-to-bottom'

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
        const editingId = ref(-1)
        const addIdentifier = async () => {
            const newIdentifier: IdentifierType = {
                type: 'doi',
                value: '',
                description: ''
            }
            const newIdentifiers = [...identifiers.value, newIdentifier]
            setIdentifiers(newIdentifiers)
            editingId.value = newIdentifiers.length - 1
            // await the DOM update that resulted from updating the identifiers list
            await nextTick()
            scrollToBottom()
        }
        const removeIdentifier = () => {
            const newIdentifiers = [...identifiers.value]
            newIdentifiers.splice(editingId.value, 1)
            setIdentifiers(newIdentifiers)
            editingId.value = -1
        }
        const setIdentifierDescriptionField = (field: keyof IdentifierType, value: string) => {
            const identifier = { ...identifiers.value[editingId.value] }
            identifier.description = value
            identifiers.value[editingId.value] = identifier
            setIdentifiers(identifiers.value)
        }
        const setIdentifierTypeField = (field: keyof IdentifierType, value: IdentifierTypeType) => {
            const identifier = { ...identifiers.value[editingId.value] }
            identifier.type = value
            identifiers.value[editingId.value] = identifier
            setIdentifiers(identifiers.value)
        }
        const setIdentifierValueField = (field: keyof IdentifierType, value: string) => {
            const identifier = { ...identifiers.value[editingId.value] }
            identifier.value = value
            identifiers.value[editingId.value] = identifier
            setIdentifiers(identifiers.value)
        }
        return {
            addIdentifier,
            editingId,
            identifiers,
            removeIdentifier,
            setIdentifierDescriptionField,
            setIdentifierTypeField,
            setIdentifierValueField
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
