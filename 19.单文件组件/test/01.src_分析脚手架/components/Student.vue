<template>
    <div >
        <h3>学生姓名：{{name}}</h3>    
        <h3>学生年龄：{{age}}</h3>    
        <h3>学生性别：{{sex}}</h3>    
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 18,
            sex: '男'
        }
    }
}
</script>

<style>
    
</style>