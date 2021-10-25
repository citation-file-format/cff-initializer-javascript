<template>
    <div id="metroline">
        <Stepper />
    </div>
    <div id="form">
        <div id="form-title">
            <h1 class="page-title">
                Preferred citation
            </h1>
        </div>

        <div id="form-content">
            <p class="question">
                Do you have a reference to another work that should be cited instead of the software or dataset itself?
            </p>
            <p class="question">
                This form does not (yet) support entering a preferred citation, instead you have to download the file and edit it yourself. The
                <a
                    href="https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md#preferred-citation"
                    target="_blank"
                >
                    schema guide
                </a> has some examples.
            </p>
        </div>

        <div id="form-button-bar">
            <StepperActions />
        </div>
    </div>
</template>

<script lang="ts">
import Stepper from 'components/Stepper.vue'
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ScreenPreferredCitation',
    components: {
        Stepper,
        StepperActions
    }
})
</script>

<style scoped>
</style>
