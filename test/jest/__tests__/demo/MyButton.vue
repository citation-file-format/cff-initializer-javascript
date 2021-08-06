<script lang="ts" src="./MyButton.ts"></script>

<template>
  <div>
    <p class="content">
      {{ input }}
    </p>
    <span>{{ counter }}</span>
    <q-btn
      class="button"
      v-on:click="increment()"
    />
  </div>
</template>
