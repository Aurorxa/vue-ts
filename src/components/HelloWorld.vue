<template>
  <div>当前n的值为：{{n}}</div>
  <button @click="add">点我+1</button>
  <ul>
    <li>学生姓名：{{student.name}}</li>
    <li>学生年龄：{{student.age}}</li>
  </ul>
</template>

<script lang="tsx" setup>
import { ref, Ref } from 'vue'
const n: Ref<number> = ref<number>(0)

type StudentType = {
  name: string,
  age: number
}

const student: Ref<Partial<StudentType>> = ref<Partial<StudentType>>({
  name: '许大仙',
  age: 18
})

// 增加方法
const add = () => {
  n.value++
}

</script>

<style lang="scss">

</style>