<template>
    <div class="todo-footer" v-show="todos.length">
          <label>
            <input type="checkbox" :checked="checkedAll" @change="getCheckedAll($event)"/>
          </label>
          <span>
            <span>已完成{{countDone}}</span> / 全部{{todos.length}}
          </span>
          <button class="btn btn-danger" @click="clearTodo">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'FooterTodo',
        props:['todos','setCheckedAll','deleteDone'],
        computed:{
          // 计算属性，用于记录已完成项目 数量
          countDone(){
            let countNumber = 0;
            this.todos.forEach(todo => {
              if(todo.done) countNumber ++
            })
            return countNumber
          },

          // 计算属性，用于记录所有项目是否均为已完成，是，勾选全选复选框
          checkedAll(){
            return this.countDone === this.todos.length && this.todos.length > 0;
          }
        },
        methods:{
          // 获取 全选 复选框的选中状态 e.target.checked 并传递给 App组件
          getCheckedAll(e){
            // console.log(e.target.checked)
            this.setCheckedAll(e.target.checked)
          },
          // 调用父组件 App中 deleteTodo()方法，删除已完成项目
          clearTodo(){
            this.deleteDone()
          }
        }
    }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>