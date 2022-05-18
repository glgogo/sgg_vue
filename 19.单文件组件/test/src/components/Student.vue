<template>
    <div>
        <!-- 使用混入对象中配置的 showName属性 -->
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    // 导入混入对象
    import {mixin2} from '../mixin.js'
    export default {
        name:'Student',
        data(){
            return {
                name:'张三',
                sex:'男',
                age:18
            }
        },
        // 局部使用混入对象
        mixins:[mixin2]

    }
</script>
