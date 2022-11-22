<template>
    <q-input
        autogrow
        data-cy="ta-cff-preview"
        id="cff-preview"
        label="CITATION.cff preview"
        readonly
        v-bind:class="['bg-white', 'cffstr', insideDrawer ? '' : 'elevated', 'rounded-borders', 'q-pa-md']"
        v-model="cffstr"
        wrap="hard"
    >
        <template v-slot:append>
            <q-btn
                aria-label="copy to clipboard"
                class="q-pa-sm"
                color="primary"
                flat
                icon="content_copy"
                v-bind:ripple="false"
                v-on:click="copyToClipboard"
            >
                <q-tooltip class="bg-primary text-subtitle2">
                    Copy to clipboard
                </q-tooltip>
                <q-tooltip
                    anchor="center left"
                    self="center right"
                    v-bind:offset="[10, 10]"
                    no-parent-event
                    v-bind:model-value="showTooltip"
                    class="text-subtitle2"
                >
                    Copied
                    <q-icon
                        size="md"
                        name="check"
                        class="text-positive"
                    />
                </q-tooltip>
            </q-btn>
        </template>
    </q-input>
    <q-card
        class="transparent"
        flat
    >
        <q-card-section
            data-cy="text-validation-msg"
            horizontal
        >
            <q-card-actions>
                <q-icon
                    v-bind:class="isValidCFF ? 'text-primary' : 'text-negative'"
                    v-bind:name="isValidCFF ? 'ion-checkmark-circle' : 'warning'"
                    size="40px"
                />
            </q-card-actions>
            <q-card-section v-if="doesNotHaveRequiredFields">
                Your CITATION.cff does not have the minimum fields. Make sure the title has been filled and that at least one author was added.
            </q-card-section>
            <q-card-section v-else>
                Your CITATION.cff is {{ isValidCFF ? "valid" : "not valid" }}
            </q-card-section>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useCffstr } from 'src/store/cffstr'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'Preview',
    props: {
        insideDrawer: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    setup () {
        const { cffstr } = useCffstr()
        const { errors } = useValidation()
        const showTooltip = ref(false)

        const copyToClipboard = async () => {
            await navigator.clipboard.writeText(cffstr.value)
            showTooltip.value = true
            await new Promise(resolve => setTimeout(resolve, 3000))
            showTooltip.value = false
        }

        return {
            cffstr,
            copyToClipboard,
            doesNotHaveRequiredFields: computed(() => errors.value
                .map((v) => v.instancePath)
                .some((i) => i.includes('title') || i.includes('authors') || i.includes('message'))),
            isValidCFF: computed(() => errors.value.length === 0),
            showTooltip
        }
    }
})
</script>
