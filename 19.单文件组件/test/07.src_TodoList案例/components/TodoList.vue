<template>
    <ul class="todo-main">
        <!-- 循环遍历代办事项，:todo='todo':向子组件传递 每一个获取到的todo项-->
        <ListItem 
            v-for="todo in todos" 
            :key="todo.id" 
            :todo='todo' 
            :changeCheckedStatus="changeCheckedStatus"
            :deletTodo="deletTodo"
        />
    </ul>
</template>

<script>
    // 引入ListItem 组件
    import ListItem from './ListItem.vue'
    export default {
        name:'TodoList',
        // 使用组件
        components:{ListItem},
        // 接收App组件传递的 todos 数据
        props:['todos','changeCheckedStatus','deletTodo']
    }
</script>

<style scoped>
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>