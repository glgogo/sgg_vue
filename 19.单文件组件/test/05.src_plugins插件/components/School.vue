<template>
    <div>
        <h2>学习名称：{{name | mySlice}}</h2>
        <h2>学习地址：{{address}}</h2>
    </div>
</template>

<script>
    // 单组件中引入插件
    // import Vue from 'vue'
    // import plugins from '../plugins'

    // Vue.use(plugins)
    export default {
        name:'School',
        data(){
            return {
                name:'尚硅谷atguigu',
                address:'北京'
            }
        }
    }
</script>

<style>

</style>