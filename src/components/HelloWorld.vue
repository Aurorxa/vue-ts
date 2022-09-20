<template>
  <div>当前n的值为：{{n}}</div>
  <button @click="n++">点我+1</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let n = ref(0)
</script>

<style lang="scss">

</style>