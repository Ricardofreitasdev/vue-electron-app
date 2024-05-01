<template>
  <div>
    <button @click="getData">getttttttttt</button>
    <pre>{{ message }}</pre>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
const message = ref('');
const $electron = inject('$electron');

async function getData() {
  const response = await $electron.invoke('customFuncion', 'testeeee');
  message.value = response;
}
</script>
