<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>

    export default {
        name:'Student',
        data(){
            return {
                name:'张三',
                sex:'男',
                age:18
            }
        },

    }
</script>
<!-- 加入scoped 防止css命名冲突导致的样式应用错误 -->
<style scoped>
    .demo{
        background: orange;
    }
</style>