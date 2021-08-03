<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal bordered elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          cffinit v2
        </q-toolbar-title>

        <div>cffinit v2</div>
      </q-toolbar>
    </q-header>

    <div class="row">
      <div class="col-2">
        <!-- <SideMenu
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->
        <Stepper />
      </div>
      <div class="col-6">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
      <div class="col-4">
        CFF preview
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import SideMenu from 'src/components/SideMenu.vue'
import Stepper from 'src/components/Stepper.vue'

const linksList = [
  {
    title: 'Start',
    caption: '',
    icon: 'star',
    link: '/start'
  },
  {
    title: 'Authors',
    caption: '',
    icon: 'star',
    link: '/authors'
  },
  {
    title: 'Finish',
    caption: '',
    icon: 'star',
    link: '/finish'
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    SideMenu,
    Stepper
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>

.row {
  margin-left: 200px;
  margin-right: 200px;
}

.col-2 {
  border-style: solid;
}

.col-6 {
  border-style: solid;
}

.col-4 {
  border-style: solid;
}

</style>
