// 定义mixin1混入对象，并使用单文件形式暴露
export const mixin1 = {
    data() {
        return {
            x: 100,
            y: 100
        }
    }
}

// 定义mixin2混入对象，并使用单文件形式暴露
export const mixin2 = {
    methods: {
        showName() {
            alert(this.name)
        }
    }
}