<template>
    <div class="q-pa-md col-flex">
        <div
            class="q-gutter-md title-field text-dark"
        >
            <p class="page-title">
                Authors
            </p>

            <q-skeleton
                height="200px"
                square
            />
            <q-skeleton
                class="text-subtitle1"
                type="text"
            />
            <q-skeleton
                class="text-subtitle1"
                type="text"
                width="50%"
            />
            <q-skeleton
                class="text-caption"
                type="text"
            />
        </div>
    </div>
    <StepperActions />
</template>

<script lang="ts">
import StepperActions from 'components/StepperActions.vue'
import { defineComponent } from 'vue'
import { useCFF } from '../store/cff'

export default defineComponent({
    name: 'Authors',
    components: {
        StepperActions
    },
    setup () {
        const cff = useCFF()
        return {
            identifiers: cff.identifiers,
            setIdentifiers: cff.setIdentifiers
        }
    }
})
</script>

<style scoped>

.col-flex {
    flex: 1;
}
.title-field {
    margin-right: 120px;
    max-width: 700px;
    min-width: 300px;
}

</style>
