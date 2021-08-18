<template>
    <q-layout view="hHh LpR fFf">
        <q-page-container>
            <Header />
            <Stars />
            <q-page padding>
                <div class="row q-ml-lg q-mr-lg justify-center">
                    <div class="col-2 bg-secondary">
                        <Stepper />
                    </div>
                    <div class="col-5 bg-secondary q-mr-lg form-page col-flex">
                        <router-view />
                    </div>
                    <div class="col-4">
                        <Preview />
                    </div>
                </div>
            </q-page>
            <Footer />
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import Footer from 'components/Footer.vue'
import Header from 'components/Header.vue'
import Preview from 'components/Preview.vue'
import Stepper from 'components/Stepper.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MainLayout',

    components: {
        Footer,
        Header,
        Preview,
        Stepper
    },

    setup () {
        return {
        }
    }
})
</script>

<style scoped>

.col-flex {
    display: flex;
    flex-direction: column;
}
.form-page {
    border-left-style: solid;
    border-left-width: 1px;
    border-color: #c4c4c4;
    min-height: 800px;
    padding-left: 30px;
}

</style>
