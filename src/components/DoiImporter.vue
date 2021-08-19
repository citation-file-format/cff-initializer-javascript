<template>
    <div>
        <q-btn
            label="Import from existing DOI"
            v-on:click="importOpen = true"
        />
        <q-dialog
            v-model="importOpen"
            persistent
        >
            <q-card style="min-width: 350px">
                <q-card-section>
                    <div class="text-h6">
                        Import data from DOI
                    </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-input
                        dense
                        v-model="doi2import"
                        label="DOI"
                        autofocus
                        v-on:keyup.enter="importOpen = false"
                    />
                    <p>Replaces any data already present in form</p>
                </q-card-section>

                <q-card-actions
                    align="right"
                    class="text-primary"
                >
                    <q-btn
                        flat
                        label="Cancel"
                        v-close-popup
                    />
                    <q-btn
                        flat
                        label="Import"
                        v-close-popup
                        v-on:click="() => importDoi(doi2import)"
                    />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { importDoi } from '../importer'

export default defineComponent({
    name: 'DoiImporter',
    setup () {
        const importOpen = ref(false)
        // TODO replace hardcoded DOI with placeholder
        const doi2import = ref('10.1038/s41589-020-00724-z')

        return {
            importOpen,
            doi2import,
            importDoi
        }
    }
})
</script>
