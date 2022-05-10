<template>
    <div class="scale-container">
        <div id="app">
            <span class="spacer" />
            <div id="header-outer">
                <div id="header-inner">
                    <ComponentHeader />
                </div>
            </div>
            <div id="middle">
                <router-view />
                <div id="preview">
                    <div id="preview-content">
                        <ComponentPreview />
                    </div>

                    <div id="preview-button-bar">
                        <ComponentDownloadButton v-if="isNotFinish" />
                    </div>
                </div>
            </div>
            <div id="footer-outer">
                <div id="footer-inner">
                    <ComponentFooter />
                </div>
            </div>
            <span class="spacer" />
        </div>
    </div>
</template>

<script lang="ts">
import ComponentHeader from 'components/ComponentHeader.vue'
import ComponentPreview from 'components/ComponentPreview.vue'
import ComponentDownloadButton from 'components/ComponentDownloadButton.vue'
import ComponentFooter from 'components/ComponentFooter.vue'
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'StepperLayout',
    components: {
        ComponentHeader,
        ComponentPreview,
        ComponentDownloadButton,
        ComponentFooter
    },
    setup () {
        return {
            isNotFinish: computed(() => {
                const currentPath = useRoute().path
                return currentPath !== '/finish-minimum' && currentPath !== '/finish-advanced'
            })
        }
    }
})
</script>
<style scoped>
.spacer {
    flex-grow: 1.0;
}
</style>
