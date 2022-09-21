<template>
  <div>当前n的值为：{{n}}</div>
  <button @click="add">点我+1</button>
</template>

<script lang="tsx" setup>
import { ref, Ref } from 'vue'
let n: Ref<number> = ref<number>(0)

// 增加方法
const add = () => {
  n.value++
}

</script>

<style lang="scss">

</style>