<template>
    <div>
        <!-- 使用混入对象中配置的 showName属性 -->
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    // 引入 mixin1 和 mixin2 混入对象
    import {mixin2} from '../mixin.js'
    
    export default {
        name:'Student',
        data(){
            return {
                name:'尚硅谷',
                address:'北京'
            }
        },
        mixins:[mixin2]

    }
</script>
