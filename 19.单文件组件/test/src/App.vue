<template>
    <div>
        <Student></Student>
        <School></School>
    </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

// 引入混入对象
import {mixin1} from './mixin.js'
import Vue from 'vue'
// 全局使用 混入对象
Vue.mixin(mixin1)

    export default {
        name:'App',
        components:{
            Student,
            School,
        },

    }
</script>
