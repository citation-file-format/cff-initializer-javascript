<template>
    <h1
        id="form-title"
        tabindex="-1"
    >
        License
    </h1>

    <q-select
        aria-label="License. Press tab to reach help button."
        data-cy="select-license"
        label="License"
        clearable
        fill-input
        hide-selected
        input-debounce="0"
        outlined
        standout
        use-input
        v-bind:model-value="license"
        v-bind:options="options"
        v-on:filter="licenseFilterFunction"
        v-on:update:model-value="setLicense"
    >
        <template v-slot:no-option>
            <q-item>
                <q-item-section class="text-grey">
                    No results
                </q-item-section>
            </q-item>
        </template>
        <template v-slot:after>
            <InfoDialog name="license" />
        </template>
    </q-select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InfoDialog from 'components/InfoDialog.vue'
import { QSelect } from 'quasar'
import schema from 'src/schemas/1.2.0/schema.json'
import { useCff } from 'src/store/cff'

export default defineComponent({
    name: 'ScreenLicense',
    components: {
        InfoDialog
    },
    setup () {
        const { license, setLicense } = useCff()
        const licenses = schema.definitions['license-enum'].enum
        const options = ref(licenses)

        return {
            license,
            options,
            setLicense,
            licenseFilterFunction (val: string, update: (a: unknown, b: unknown) => void) {
                update(() => {
                    if (val === '') {
                        options.value = licenses
                    } else {
                        const needle = val.toLowerCase()
                        options.value = licenses.filter(v => v.toLowerCase().indexOf(needle) > -1)
                    }
                },
                (ref: QSelect) => {
                    if (val !== '' && ref.options !== undefined && ref.options.length > 0) {
                        ref.setOptionIndex(-1)
                        ref.moveOptionSelection(1, true)
                    }
                })
            }
        }
    }
})
</script>
