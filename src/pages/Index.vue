<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-grey-4 text-white">
      <q-toolbar>
        <q-toolbar-title>

        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-4 text-white">
      <q-toolbar>
        <q-toolbar-title>
            <img src="~/assets/nlesc-logo.svg">
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/CompositionComponent.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: { },
  setup () {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ])
    const meta = ref<Meta>({
      totalCount: 1200
    })
    return { todos, meta }
  }
})
</script>
