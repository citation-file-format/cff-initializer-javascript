<template>
    <div class="q-pa-md">
        <div class="q-gutter-md title-field text-dark">
            <p class="q-mt-xl text-h5">
                What is the license of the work?
            </p>
            <q-input
                v-bind:model-value="license"
                v-on:update:model-value="setLicense"
                label="license"
                outlined
                standout
                bg-color="white"
                v-bind:rules="[ val => val && val.length > 3 || 'Please use minimum 3 characters']"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCff } from '../store/cff'

export default defineComponent({
    name: 'PageLicense',
    components: {
        StepperActions
    },
    setup () {
        const { license, setLicense } = useCff()
        return {
            license,
            setLicense
        }
    }
})
</script>

<style scoped>
.title-field {
    margin-right: 120px;
    min-width: 300px;
    max-width: 700px;
}
</style>
