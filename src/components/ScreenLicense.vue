<template>
    <div id="form-title">
        <h1 class="page-title">
            License
        </h1>
    </div>

    <div id="form-content">
        <h2 class="question">
            What is the license of the work?
            <q-icon
                name="ion-information-circle-outline"
                size="24px"
                color="primary"
                v-on:click="showLicenseHelp = true"
                style="cursor:pointer;"
            />
        </h2>
        <q-select
            bg-color="white"
            label="license"
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
        </q-select>
        <InfoDialog
            v-model="showLicenseHelp"
            v-bind:data="helpData.license"
        />
    </div>
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
        const helpData = {
            license: {
                title: 'license',
                url: 'https://github.com/citation-file-format/citation-file-format/blob/1.2.0/schema-guide.md#license',
                description: 'The SPDX license identifier for the license under which the work is available.',
                examples: [
                    'Apache-2.0',
                    'MIT',
                    'GPL-3.0'
                ]
            }
        }

        return {
            helpData,
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
            },
            showLicenseHelp: ref(false)
        }
    }
})
</script>

<style scoped>
</style>
