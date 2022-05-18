<template>
    <div class="demo">
        <h2>学习名称：{{name}}</h2>    
        <h2>学习地址：{{address}}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京'
        }
    }
}
</script>

<style>
    .demo{
        background: skyblue;
    }
</style>