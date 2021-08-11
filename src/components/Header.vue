<template>
    <q-header class="bg-grey-4 text-primary">
        <q-toolbar>
            <q-space />
            <q-toolbar-title align="right">
                <q-btn-group flat>
                    <q-btn
                        no-caps
                        flat
                        color=""
                        label="Report an issue"
                        icon-right="ion-logo-github"
                        type="a"
                        href=""
                        target="_blank"
                    />
                    <q-btn
                        no-caps
                        flat
                        color=""
                        label="Documentation"
                    />
                    <q-btn
                        no-caps
                        flat
                        color=""
                        label="About"
                    />
                </q-btn-group>
            </q-toolbar-title>
        </q-toolbar>
    </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStep } from '../store/step'

export default defineComponent({
    name: 'Header',

    setup () {
        const step = useStep()
        return {
            step
        }
    }

})
</script>

<style>

</style>
