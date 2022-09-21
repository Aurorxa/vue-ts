<template>
  <div>当前n的值为：{{n}}</div>
  <button @click="add">点我+1</button>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
let n = ref<number>(0)

// 增加方法
const add = () => {
  n.value++
}

type ResultType = {
  code: string,
  msg: string,
  data: {a:number,b:number}[]
}

let p: Promise<ResultType> = new Promise<ResultType>((resolve, reject) => {
  resolve({
    code: '200',
    msg: '',
    data: [
      { a: 100, b: 100 }
    ]
  })
})

p.then(res => {
  console.log(res.code);
  console.log(res.data);
  console.log(res.msg);
})


</script>

<style lang="scss">

</style>