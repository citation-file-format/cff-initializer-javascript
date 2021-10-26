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
            <p class="question">
                What persistent identifiers are available for the work?
                See
                <a
                    href="https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md#definitionsidentifier"
                    target="_blank"
                >
                    schema guide
                </a> for examples.
            </p>
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
                            v-bind:num-identifiers="identifiers.length"
                            v-on:editPressed="() => (editingId = index)"
                            v-on:moveDown="moveIdentifierDown(index)"
                            v-on:moveUp="moveIdentifierUp(index)"
                        />
                        <IdentifierCardEditing
                            v-else
                            v-bind:index="index"
                            v-bind="identifier"
                            v-bind:num-identifiers="identifiers.length"
                            v-on:updateType="setIdentifierTypeField"
                            v-on:updateValue="setIdentifierValueField"
                            v-on:updateDescription="setIdentifierDescriptionField"
                            v-on:closePressed="() => (editingId = -1)"
                            v-on:removePressed="removeIdentifier"
                            v-on:moveDown="moveIdentifierDown(index)"
                            v-on:moveUp="moveIdentifierUp(index)"
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
import { moveDown, moveUp } from '../updown'

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
        const moveIdentifierUp = (index: number) => {
            moveUp(index, identifiers.value, setIdentifiers)
            if (editingId.value === index && index > 0) {
                editingId.value = editingId.value - 1
            } else if (editingId.value === index - 1) {
                editingId.value = editingId.value + 1
            }
        }
        const moveIdentifierDown = (index: number) => {
            moveDown(index, identifiers.value, setIdentifiers)
            if (editingId.value === index && index < identifiers.value.length - 1) {
                editingId.value = editingId.value + 1
            } else if (editingId.value === index + 1) {
                editingId.value = editingId.value - 1
            }
        }

        return {
            addIdentifier,
            editingId,
            identifiers,
            moveIdentifierUp,
            moveIdentifierDown,
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
