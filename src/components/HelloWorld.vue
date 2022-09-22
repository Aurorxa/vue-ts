<template>
  <p>子组件 {{num}}</p>
  <button @click="handleClick">按钮</button>
</template>

<script lang="ts" setup>

interface Props {
  num: number
}

defineProps<Props>()

const emit = defineEmits<{
  (event: 'update:num', n: number): void
}>()


const handleClick = () => {
  emit('update:num', 40)
}

</script>

<style lang="scss">

</style>