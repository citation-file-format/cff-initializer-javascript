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
                    <div class="col-5 bg-secondary q-mr-lg form-page">
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
import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'
import Stars from 'components/Stars.vue'
import Stepper from 'components/Stepper.vue'
import Preview from 'components/Preview.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MainLayout',

    components: {
        Header,
        Footer,
        Stars,
        Stepper,
        Preview
    },

    setup () {
        return {
        }
    }
})
</script>

<style scoped>

.form-page {
  border-left-style: solid;
  border-left-width: 1px;
  border-color: #c4c4c4;
  min-height: 800px;
  padding-left: 30px
}

</style>
