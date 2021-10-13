<template>
    <q-layout
        class="bg-white"
        view="hhh lpr fff"
    >
        <Header />
        <q-page-container>
            <q-page>
                <router-view />
            </q-page>
        </q-page-container>
        <Footer />
    </q-layout>
</template>

<script lang="ts">
import Footer from 'components/Footer.vue'
import Header from 'components/Header.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MainLayout',

    components: {
        Footer,
        Header
    },

    setup () {
        return {
        }
    }
})
</script>

<style scoped>
.bg-white {
    background-color: white;
}
</style>
