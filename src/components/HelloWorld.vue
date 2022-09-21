<template>
  <div>当前n的值为：{{n}}</div>
  <button @click="add">点我+1</button>
  <h2>学生信息</h2>
  <ul>
    <li>学生姓名：{{student.name}}</li>
    <li>学生年龄：{{student.age}}</li>
  </ul>
  <h2>学校信息</h2>
  <ul>
    <li>学校名称：{{school.name}}</li>
    <li>学校地址：{{school.address}}</li>
  </ul>
</template>

<script lang="tsx" setup>
import { reactive, ref, Ref } from 'vue'
const n: Ref<number> = ref<number>(0)

type StudentType = {
  name: string,
  age: number
}

const student: Ref<Partial<StudentType>> = ref<Partial<StudentType>>({
  name: '许大仙',
  age: 18
})

type SchoolType = {
  name: string,
  address: string
}

const school = reactive<SchoolType>({
  name: '江苏苏州大学',
  address: '江苏苏州'
})

// 增加方法
const add = () => {
  n.value++
}

</script>

<style lang="scss">

</style>