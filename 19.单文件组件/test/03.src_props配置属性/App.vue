<template>
    <Student name="张三" sex="男" :age="18"></Student>
</template>

<script>
import Student from './components/Student'
    export default {
        name:'App',
        components:{
            Student
        }
    }
</script>
