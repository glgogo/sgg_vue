
// 创建一个插件，并使用默认暴露方式暴露出去
export default {
    // 定义插件必须使用install，并将Vue作为参数传入
    install(Vue) {

        // 定义一个过滤器插件
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 定义一个自定义指令插件
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value;
            },
            inserted(element, binding) {
                element.focus();
            },
            update() {
                element.value = binding.value;
            }

        })

        // 定义一个混入插件
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 100
                }
            }
        })

        // 在Vue的原型对象上定义一个方法（vm和vc都可以使用）
        Vue.prototype.hello = function () {
            console.log('你好！')
        }
    }
}