<template>
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <input type="text" v-fbind="name">
        <button @click="sayHello">打个招呼吧</button>
    </div>
</template>

<script>
    // 单组件中引入插件
    // import Vue from 'vue'

    // import plugins from '@/plugins'

    // Vue.use(plugins)
    export default {
        name:'Student',
        data(){
            return {
                name:'张三',
                sex:'男',
                age:18
            }
        },
        methods:{
            sayHello(){
                this.hello()
            }
        }
    }
</script>

<style>

</style>