<template>
  <div>当前n的值为：{{n}}</div>
  <div>2倍n的值为：{{dbN}}</div>
  <button @click="add">点我+1</button>
  <h2>学生信息</h2>
  <ul>
    <li>学生姓名：{{student.name}}</li>
    <li>学生年龄：{{student.age}}</li>
  </ul>
  <h2>学校信息</h2>
  <ul>
    <li>学校名称：{{name}}</li>
    <li>学校地址：{{address}}</li>
  </ul>
</template>

<script lang="tsx" setup>
import { computed } from '@vue/reactivity';
import { reactive, ref, Ref, ToRefs, toRefs, UnwrapNestedRefs, watch } from 'vue'
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

// toRefs 的作用：在解构 reactive 得到的对象的时候，将其解构成响应式数据。
const { name, address }: ToRefs<SchoolType> = toRefs(reactive<SchoolType>({
  name: '江苏苏州大学',
  address: '江苏苏州'
}))

// 增加方法
const add = () => {
  n.value++
}

watch(n, (newValue, oldValue) => {
  console.log('@', newValue);
  console.log('##', oldValue);
})

let dbN = computed(() => n.value * 2)

</script>

<style lang="scss">

</style>