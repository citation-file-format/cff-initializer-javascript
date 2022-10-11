<template>
    <h1
        id="form-title"
        v-if="isValidCFF"
    >
        Congratulations
    </h1>
    <h1
        id="form-title"
        v-else
    >
        Uh-oh!
    </h1>

    <div v-if="isValidCFF">
        <p class="finish-paragraph">
            You now have a minimal CITATION.cff file. Use the buttons below to download your CITATION.cff file, or continue adding more properties.
        </p>
        <p class="finish-paragraph">
            Distribute the CITATION.cff with your project, for instance, by adding it to the root of your GitHub repository.
        </p>
        <div class="row">
            <DownloadButton class="col-4 q-ma-lg" />
            <q-btn
                class="col-4 q-ma-lg"
                color="primary"
                data-cy="btn-add-more"
                icon="workspace_premium"
                label="Add more"
                no-caps
                size="xl"
                to="/identifiers"
                v-on:click="showAdvanced"
                v-bind:class="q.platform.is.mobile ? 'full-width' : ''"
            />
        </div>
    </div>
    <div v-else>
        <p class="finish-paragraph">
            Your CITATION.cff is not valid just yet. Go back to the form to make some changes.
        </p>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import DownloadButton from 'components/DownloadButton.vue'
import { useApp } from 'src/store/app'
import { useQuasar } from 'quasar'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'ScreenFinishMinimum',
    components: {
        DownloadButton
    },
    setup () {
        const { setShowAdvanced, setStepName } = useApp()
        const { errors } = useValidation()
        const q = useQuasar()
        return {
            q,
            isValidCFF: computed(() => errors.value.length === 0),
            showAdvanced: async () => {
                setShowAdvanced(true)
                await setStepName('identifiers')
            }
        }
    }
})
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: center
}
</style>
