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
                <SchemaInfoIcon section="identifiers" />
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

            <q-banner
                v-if="identifiersErrors.messages.length > 0"
                class="bg-warning text-negative"
            >
                <div
                    v-bind:key="index"
                    v-for="(screenMessage, index) in identifiersErrors.messages"
                >
                    {{ screenMessage }}
                </div>
            </q-banner>
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import SchemaInfoIcon from 'components/SchemaInfoIcon.vue'
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import IdentifierCardEditing from 'components/IdentifierCardEditing.vue'
import IdentifierCardViewing from 'components/IdentifierCardViewing.vue'
import { IdentifierType, IdentifierTypeType } from 'src/types'
import { useCff } from 'src/store/cff'
import { scrollToBottom } from '../scroll-to-bottom'
import { moveDown, moveUp } from '../updown'
import { identifiersErrors } from 'src/identifiers-errors'

export default defineComponent({
    name: 'ScreenIdentifiers',
    components: {
        SchemaInfoIcon,
        Stepper,
        StepperActions,
        IdentifierCardEditing,
        IdentifierCardViewing
    },
    setup () {
        const { identifiers, setIdentifiers } = useCff()
        const editingId = ref(-1)
        const addIdentifier = async () => {
            let newIdentifiers:IdentifierType[]
            const newIdentifier: IdentifierType = {
                type: 'doi',
                value: '',
                description: undefined
            }
            if (identifiers.value === undefined) {
                newIdentifiers = [newIdentifier]
            } else {
                newIdentifiers = [...identifiers.value, newIdentifier]
            }
            setIdentifiers(newIdentifiers)
            editingId.value = newIdentifiers.length - 1
            // await the DOM update that resulted from updating the identifiers list
            await nextTick()
            scrollToBottom()
        }
        const removeIdentifier = () => {
            if (identifiers.value !== undefined) {
                const newIdentifiers = [...identifiers.value]
                newIdentifiers.splice(editingId.value, 1)
                setIdentifiers(newIdentifiers)
                editingId.value = -1
                if (Array.isArray(newIdentifiers) && newIdentifiers.length === 0) {
                    setIdentifiers(undefined)
                }
            }
        }
        const setIdentifierDescriptionField = (field: keyof IdentifierType, value: string) => {
            if (identifiers.value !== undefined) {
                const identifier = { ...identifiers.value[editingId.value] }
                identifier.description = value === '' ? undefined : value
                identifiers.value[editingId.value] = identifier
                setIdentifiers(identifiers.value)
            }
        }
        const setIdentifierTypeField = (field: keyof IdentifierType, value: IdentifierTypeType) => {
            if (identifiers.value !== undefined) {
                const identifier = { ...identifiers.value[editingId.value] }
                identifier.type = value
                identifiers.value[editingId.value] = identifier
                setIdentifiers(identifiers.value)
            }
        }
        const setIdentifierValueField = (field: keyof IdentifierType, value: string) => {
            if (identifiers.value !== undefined) {
                const identifier = { ...identifiers.value[editingId.value] }
                identifier.value = value
                identifiers.value[editingId.value] = identifier
                setIdentifiers(identifiers.value)
            }
        }
        const moveIdentifierUp = (index: number) => {
            if (identifiers.value === undefined) return
            moveUp(index, identifiers.value, setIdentifiers)
            if (editingId.value === index && index > 0) {
                editingId.value = editingId.value - 1
            } else if (editingId.value === index - 1) {
                editingId.value = editingId.value + 1
            }
        }
        const moveIdentifierDown = (index: number) => {
            if (identifiers.value === undefined) return
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
            setIdentifierValueField,
            identifiersErrors: computed(() => identifiersErrors(identifiers.value))
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
