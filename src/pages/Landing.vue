<template>
    <div class="">
        <div class="row">
            <div class="col-6 q-pa-lg">
                <q-card
                    class="secondary q-mt-xl"
                    flat
                >
                    <div
                        align="left"
                        class="text-primary q-gutter-md q-mb-xl"
                        style="font-size: 2em"
                    >
                        <h2>Software Citations using Citation File Format</h2>

                        <p>CITATION.cff files are plain text files with human- and machine-readable citation information for software (and datasets). Code developers can include them in their repositories to let others know how to correctly cite their software.</p>

                        <p>This webpage will guide you to take the necessary steps to generate your own CFF file.</p>
                    </div>
                </q-card>
            </div>
            <div class="col-5  q-pa-lg">
                <q-card
                    bordered
                    class="secondary rotated-card"
                    style="overflow: hidden"
                >
                    <pre>
                        {{ exampleCFF }}
                    </pre>
                </q-card>
            </div>
        </div>

        <div
            class="row justify-center items-center q-pt-xl"
        >
            <q-btn
                color="primary"
                label="Get started"
                no-caps
                size="xl"
                to="/start"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Landing',
    components: { },
    setup () {
        const exampleCFF = `
    cff-version: 1.2.0
    message: "If you use this software, please cite it as below."
    authors:
      - family-names: John
        given-names: Stephan
        orcid: https://orcid.org/0000-0003-4925-7248
    title: "My Research Software"
    version: 2.0.4
    doi: 10.5281/zenodo.1234
    date-released: 2021-08-11`

        return {
            exampleCFF
        }
    }
})
</script>

<style scoped>

.rotated-card {
    transform: rotate(20deg) translateX(170px) translateY(185px);
    display: block;
}

</style>
