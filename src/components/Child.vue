<template>
    <table>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>操作</th>
        </tr>
        <tr v-for="(item,index) in arr" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>
                <slot name="btns" :row="item"></slot>
            </td>
        </tr>
    </table>
</template>

<script lang="ts" setup>
import { IPerson } from '@/types/index'
interface Props {
    arr: IPerson[]
}

defineProps<Props>()

</script>

<style lang="scss">

</style>