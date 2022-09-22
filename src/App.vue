<template>
  <HelloWorld :num="num"/>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue';

let num = ref(100)
</script>

<style scoped>
</style>
