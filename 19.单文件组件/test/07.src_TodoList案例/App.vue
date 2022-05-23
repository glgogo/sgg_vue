<template>
<body>
    <div id="App">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- addTodo:给HeaderTodo传递函数，用于子组件HeaderTodo调用函数获取新增代办事项的数据 -->
                <HeaderTodo :addTodo='addTodo'/>
                <!-- 将数据 todos 传递给TodoList -->
                <TodoList :todos='todos' :changeCheckedStatus="changeCheckedStatus" :deletTodo="deletTodo"/>
                <FooterTodo :todos='todos' :setCheckedAll="setCheckedAll" :deleteDone="deleteDone"/>
            </div>
        </div>
    </div>
</body>
</template>

<script>
    // 引入 HeaderTodo 组件
    import HeaderTodo from './components/HeaderTodo.vue'
    // 引入 TodoList 组件
    import TodoList from './components/TodoList.vue'
    // 引入 FooterTodo 组件
    import FooterTodo from './components/FooterTodo.vue'
    export default {
        name:'App',
        components:{HeaderTodo,TodoList,FooterTodo},
        data(){
            return {
                todos:[
                    {id:'001',todo:'吃饭',done:true},
                    {id:'002',todo:'学习',done:false},
                    {id:'003',todo:'睡觉',done:false}
                ]
            }
        },
        methods:{
            // 通过addTodo函数获取HeaderTodo组件传递过来的todoObj数据，并实现增加代办事项功能
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            // 动态绑定多选框的选中状态，并更新 done 值
            changeCheckedStatus(id){
                this.todos.forEach(todoObj => {
                    if(todoObj.id === id){
                       return todoObj.done = !todoObj.done
                    }
                });
            },
            // 删除 todo 项
            deletTodo(id){
                this.todos=this.todos.filter(todo => todo.id !== id)
            },
            // 全选 or 全不选
            setCheckedAll(checked){
                this.todos.forEach(todo => {
                    return todo.done = checked;
                })
            },

            // 删除已完成项目
            deleteDone(){
                this.todos = this.todos.filter(todo=>{
                    return !todo.done;
                })
            }
            
        },
        // watch:{
        //     todos:{
        //         immediate:true,
        //         deep:true,
        //         handler(value){
        //             localStorage.setItem('todos',JSON.stringify(this.todos))
        //         }
        //     }
        // },

        // mounted(){
        //     this.todos = JSON.parse(localStorage.getItem('todos'))
        // }
    }
</script>

<style>
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
</style>