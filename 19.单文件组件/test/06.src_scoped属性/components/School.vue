<template>
    <div class="demo">
        <h2>学习名称：{{name}}</h2>
        <h2>学习地址：{{address}}</h2>
    </div>
</template>

<script>
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

<!-- 加入scoped 防止css命名冲突导致的样式应用错误 -->
<style scoped>
    .demo {
        background: skyblue;
    }
</style>