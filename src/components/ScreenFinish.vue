<template>
    <h1
        id="form-title"
        v-if="isValidCFF"
        tabindex="-1"
    >
        Congratulations
    </h1>
    <h1
        id="form-title"
        v-else
        tabindex="-1"
    >
        Uh-oh!
    </h1>

    <div v-if="isValidCFF">
        <p>
            Use the buttons below to download your CITATION.cff file, or reset the form to start over.
        </p>
        <p>
            Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository.
        </p>
        <div class="row q-gutter-md justify-center">
            <DownloadButton />
        </div>
        <div class="row justify-center">
            <q-btn
                class="q-mt-md q-mb-md rounded-borders bg-secondary text-white"
                icon="refresh"
                label="Reset form"
                no-caps
                v-on:click="confirmAndReset"
            />
        </div>
    </div>
    <div v-else>
        <p>
            Your CITATION.cff is not valid just yet. Go back to the form to make some changes.
        </p>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import DownloadButton from 'src/components/DownloadButton.vue'
import { useApp } from 'src/store/app'
import { useCff } from 'src/store/cff'
import { useQuasar } from 'quasar'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenFinish',
    components: {
        DownloadButton
    },
    setup () {
        const { setStepName } = useApp()
        const { reset: resetCffData } = useCff()
        const { errors } = useValidation()
        const q = useQuasar()
        return {
            confirmAndReset: () => {
                q.dialog({
                    title: 'Confirm',
                    message: 'Would you like to reset the form? All changes will be lost.',
                    cancel: true,
                    persistent: true
                }).onOk(() => {
                    resetCffData()
                    void setStepName('start')
                })
            },
            isValidCFF: computed(() => errors.value.length === 0)
        }
    }
})
</script>
