<template>
    <div>
        <h1 v-text="msg"></h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{rAge}}</h2>
        <button @click="addOne">点我年龄+1</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                msg:'欢迎学习Vue！',
                // 修改props传递过来的年龄属性,需要在data中定义一个转存属性
                rAge:this.age
            }
        },
        methods:{
            addOne(){
                // 在这里 直接修改 props中传过来的属性值，控制台会报错，故不能直接修改
                // this.age++
                this.rAge++
            }
        },
        // 第一种写法：【只接收】
        // props:['name','age','sex']

        // 第二种写法：【限制参数类型】
        // props:{
        //     name:String,
        //     sex:String,
        //     age:Number
        // }

        // 第三种写法：【限制类型、限制必要性、指定默认值】
        props:{
            name:{
                type:String,
                required:true,
            },
            sex:{
                type:String,
                required:true
            },
            age:{
                type:Number,
                required:false,
                default:20
            }
        }
    }
</script>
