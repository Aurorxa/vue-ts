<template>
  <HelloWorld :num="num" @fn="changeNum" />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue';

let num = ref(100)

const changeNum = (n: number) => {
  console.log('@@@@', n);
  num.value = n
}
</script>

<style scoped>

</style>
