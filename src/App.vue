<template>
  <Table :arr="state.arr">
    <template #btns="scope">
      <button @click="handleEdit(scope)">编辑</button>
    </template>
  </Table>
  <Table :arr="state.arr">
    <template #btns>
      <button>编辑</button>
      <button>删除</button>
    </template>
  </Table>
</template>

<script setup lang="ts">
import Table from '@/components/Child.vue'
import { StateType } from '@/types/index'
import { reactive } from 'vue';

const state = reactive<StateType>({
  arr: [
    { name: '张三', age: 18 },
    { name: '李四', age: 19 }
  ]
})

const handleEdit = (scope: any) => {
  console.log(scope.row);
}

</script>

<style scoped>

</style>
