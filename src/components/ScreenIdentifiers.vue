<template>
    <h1
        id="form-title"
        tabindex="-1"
    >
        Identifiers
    </h1>

    <p>
        You can add persistent identifiers such as DOIs, Software Heritage numbers, or ArXiv URLs.
        <InfoDialog name="identifiers" />
    </p>
    <div>
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
                    v-bind:data-cy="'card-identifier' + index"
                    v-on:editPressed="() => (editingId = index)"
                    v-on:moveDown="moveIdentifierDown(index)"
                    v-on:moveUp="moveIdentifierUp(index)"
                    v-on:removePressed="removeIdentifier(index)"
                />
                <IdentifierCardEditing
                    v-else
                    v-bind:index="index"
                    v-bind="identifier"
                    v-bind:data-cy="'card-identifier' + index"
                    v-on:updateType="setIdentifierTypeField"
                    v-on:updateValue="setIdentifierValueField"
                    v-on:updateDescription="setIdentifierDescriptionField"
                    v-on:closePressed="() => (editingId = -1)"
                    v-on:removePressed="removeIdentifier(editingId)"
                />
            </div>
        </div>
    </div>
    <q-btn
        class="q-mt-md q-mb-md rounded-borders"
        color="secondary"
        data-cy="btn-add-identifier"
        no-caps
        v-on:click="addIdentifier"
    >
        Add identifier
    </q-btn>

    <BannerErrorMessages v-bind:error-messages="identifiersErrors" />
</template>

<script lang="ts">
import { IdentifierType, IdentifierTypeType } from 'src/types'
import { byError, identifiersQueries } from 'src/error-filtering'
import { computed, defineComponent, nextTick, ref } from 'vue'
import { moveDown, moveUp } from 'src/updown'
import BannerErrorMessages from 'src/components/BannerErrorMessages.vue'
import IdentifierCardEditing from 'components/IdentifierCardEditing.vue'
import IdentifierCardViewing from 'components/IdentifierCardViewing.vue'
import InfoDialog from 'components/InfoDialog.vue'
import { scrollToBottom } from 'src/scroll-to-bottom'
import { useCff } from 'src/store/cff'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenIdentifiers',
    components: {
        BannerErrorMessages,
        InfoDialog,
        IdentifierCardEditing,
        IdentifierCardViewing
    },
    setup () {
        const { identifiers, setIdentifiers } = useCff()
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
            const radio = document.getElementById('radiogroup')
            if (radio) {
                radio.focus()
            }
            scrollToBottom()
        }
        const removeIdentifier = (index: number) => {
            if (identifiers.value !== undefined) {
                const newIdentifiers = [...identifiers.value]
                newIdentifiers.splice(index, 1)
                setIdentifiers(newIdentifiers)
                if (index < editingId.value) {
                    editingId.value -= 1
                } else if (index === editingId.value) {
                    editingId.value = -1
                }
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
        return {
            addIdentifier,
            editingId,
            identifiers,
            identifiersErrors,
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
