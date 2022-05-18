<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="getNodes" ref="btn">点我输出h1的DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
    import School from './components/School' 

    export default {
        name:'App',
        components:{
            School
        },
        data(){
            return {
                msg:'欢迎学习Vue'
            }
        },
        methods:{
            getNodes(){
                // html元素添加ref属性，获取ref标识的真实dom
                console.log(this.$refs.title)
                console.log(this.$refs.btn)
                // 在组件标签上添加ref属性，获取的是该组件的实例对象（vc）
                console.log(this.$refs.sch)
                
            }
        }
    }
</script>
