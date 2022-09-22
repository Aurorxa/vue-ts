<template>
  <HelloWorld v-model:num="num" />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue';

let num = ref<number>(10)

</script>

<style scoped>

</style>
