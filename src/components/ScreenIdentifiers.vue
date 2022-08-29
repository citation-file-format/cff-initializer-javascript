<template>
    <div id="form-title">
        <h1 class="page-title">
            Identifiers
        </h1>
    </div>

    <div id="form-content">
        <h2 class="question">
            What persistent identifiers are available for the {{ type }}?
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showIdentifiersHelp = true"
                style="cursor:pointer;"
            />
        </h2>
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

        <q-banner
            v-if="identifiersErrors.length > 0"
            v-bind:class="['bg-warning', 'text-negative', identifiersErrors.length > 0 ? 'has-error' : '']"
        >
            <div
                v-bind:key="index"
                v-for="(screenMessage, index) in identifiersErrors"
            >
                {{ screenMessage }}
            </div>
        </q-banner>
        <InfoDialog
            v-model="showIdentifiersHelp"
            v-bind:data="helpData.identifiers"
        />
    </div>
</template>

<script lang="ts">
import { IdentifierType, IdentifierTypeType } from 'src/types'
import { byError, identifiersQueries } from 'src/error-filtering'
import { computed, defineComponent, nextTick, onUpdated, ref } from 'vue'
import { moveDown, moveUp } from 'src/updown'
import IdentifierCardEditing from 'components/IdentifierCardEditing.vue'
import IdentifierCardViewing from 'components/IdentifierCardViewing.vue'
import InfoDialog from 'components/InfoDialog.vue'
import { scrollToBottom } from 'src/scroll-to-bottom'
import { useCff } from 'src/store/cff'
import { useStepperErrors } from 'src/store/stepper-errors'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenIdentifiers',
    components: {
        InfoDialog,
        IdentifierCardEditing,
        IdentifierCardViewing
    },
    setup () {
        onUpdated(() => {
            const { setErrorStateScreenIdentifiers } = useStepperErrors()
            setErrorStateScreenIdentifiers(document.getElementsByClassName('has-error').length > 0)
        })
        const { identifiers, setIdentifiers, type } = useCff()
        const { errors } = useValidation()
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
        const identifiersErrors = computed(() => {
            return identifiersQueries
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const helpData = {
            identifiers: {
                title: 'identifiers',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#identifiers',
                description: `The identifiers of the ${type.value}, such as DOIs, Software Heritage deposits, and URLs for relevant objects.`,
                examples: [
                    `DOI: 10.5281/zenodo.1003149 - The concept DOI of the ${type.value}`,
                    'SWH: swh:1:dir:bc286860f423ea7ced246ba7458eef4b4541cf2d - The Software Heritage for version 1.1.0',
                    'URL: https://github.com/citation-file-format/citation-file-format/releases/tag/1.1.0 - The GitHub release URL of tag 1.1.0',
                    'OTHER: arXiv:2103.06681 - The ArXiv preprint of the paper'
                ]
            }
        }
        return {
            addIdentifier,
            editingId,
            helpData,
            identifiers,
            identifiersErrors,
            moveIdentifierUp,
            moveIdentifierDown,
            removeIdentifier,
            setIdentifierDescriptionField,
            setIdentifierTypeField,
            setIdentifierValueField,
            showIdentifiersHelp: ref(false),
            type
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
