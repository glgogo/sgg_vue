<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter='add' v-model='value'/>
    </div>
</template>

<script>
    // 引入nanoid，用于生成id值：nanoid采用分别暴露方式，所以引入使用{nanoid}
    // 使用nanoid时，直接当做一个函数调用即可：id:nanoid()
    import {nanoid} from 'nanoid'
    export default {
        name:'HeaderTodo',
        data(){
            return {
                // 定义双向绑定数据，用于获取用户输入内容
                value:''
            }
        },
        // addTodo:接收 App父组件传递过来的函数，用于传递新增代办事项的值
        props:['addTodo'],
        methods:{
            add(e){
                // console.log(e.target.value,nanoid())
                // 获取新增事项的对象 todoObj
                const todoObj = {id:nanoid(),todo:this.value,done:false}
                // 判断用户输入的 代办事项是否为空，如果不为空则向 App组件传递todoObj
                if(this.value.trim()){
                    this.addTodo(todoObj)
                }else{
                    alert('输入的代办事项为空！')
                }
                // 执行增加代办事项完毕后，清空输入框内容
                this.value=''
            },
            
        },
        
    }
</script>

<style scoped>
    .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    }

    .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }

</style>