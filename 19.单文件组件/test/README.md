# 笔记

## 脚手架文件结构
|—— node_modules
|—— public
|    |—— favicom.ico：页签图标
|    |__ index.html：主页面
|
|—— src
|    |—— assets：存放静态资源
|    |   |__ logo.png
|    |
|    |—— components：存放组件
|    |   |__ Hello.vue
|    |
|    |—— App.vue：汇总所有组件
|    |
|    |—— main.js：入口文件
|
|—— .gitignore：git版本管制忽略的配置
|—— babel.config.js：babel的配置文件
|—— package.json：应用包配置文件
|—— README.md：应用描述文件
|—— package-lock.json：包版本控制文件


## 关于不同版本的Vue：

1.vue.js与vue.runtime.xxx.js的区别
    (1).vue.js是完整版vue,包含：核心功能 + 模板解析器
    (2).vue.runtime.xxx.js是运行版vue,只包含：核心功能，不包含 模板解析器

2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数
  接收到的createElement函数去指定具体内容。

## vue.config.js配置文件

1.使用vue.inspect > output.js 可以查看到Vue脚手架的默认配置
2.使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## ref属性

1.被用来给元素或子组件注册引用信息（id的替代者）
2.应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上是组件实例对象（vc）
3.使用方式：
    打标识：<h1 ref='xxx'>....</h1>  或  <School ref='xxx'></School>
    获取DOM 或 实例对象（vc）：this.$refs.xxx


## 配置项props
功能：让组件接收外部传过来的数据
    (1).传递数据： <Student name='xxx' age='xx' sex='x'>
    (2).接收数据：在与data、methods、watch、computed等同级，添加props属性
        第一种方式：【只接收】
            props:['name','age','sex']
        第二种方式：【限制类型】
            props:{
                name:String,
                age:Number,
                sex:String
            }
        第三种方式：【限制类型、限制必要性、指定默认值】
            props:{
                name:{
                    type:String, //定义类型
                    required:true, //定义必要性
                    default：'张三' //定义默认值
                },
                age:{
                    type:Number,
                    required:true,
                    default:18
                },
                sex:{
                    type:String,
                    required:true,
                    default:'男'
                }
            }

    备注：1.props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，
            那么请复制（newProp:this.oldProp）props的内容到data中一份，然后去修改data中的数据（this.newProp++）

          2.如果props和data中有重名属性，控制台会报错，但是页面默认渲染的数据是props中的，由此说明props中的数据
            优先级高于data中的数据优先级


## mixin混入
    功能：可以把多个组件共用配置提取成一个 混入对象
    使用方式：
        第一步：定义混入对象，并对外暴露，例如：
            export const mixin = {
                data(){
                    return {
                        ……
                    }
                }
            }
        第二步：引入混入对象：import mixin from '具体路径'
        第三步：使用混入，例如：
            (1).全局混入：Vue.mixin(xxx)
            (2).局部混入：mixin:['xxx]

    备注：1.如果组件中的data、methods、watch、computed等配置信息，与mixin混入配置信息发生冲突时，以组件中
            定义的配置信息为主；
          2.如果组件中生命周期函数中配置信息与mixin中配置信息发生冲突，那么两种冲突配置信息均会生效


## plugins插件的使用
    功能：用于曾强Vue
    本质：包含install方法的一个对象，install的第一个参数时Vue，第二个以后的参数是插件使用者传递的数据。
    定义插件：
        对象.install = function(Vue,argument){
            //1.添加全局过滤器
            Vue.filter(……)

            //2.添加全局指令
            Vue.directiv(……)

            //3.配置全局混入对象
            Vue.mixin(……)

            //4.在Vue原型上添加实例方法和属性
            Vue.prototype.hello = function(){……}
            Vue.prototype.xxx = yyy
        }

    插件的使用：在入口文件（main.js）中 使用 Vue.use(xxx)


## scoped样式
    作用：让样式在局部生效，防止命名相同导致样式冲突
    写法：<style scoped>……</style>
    扩展：style 标签中可以使用 lang='xxx' 指定样式的类型（xxx可以是less、sass等其他css语言）
          使用lang定义非 css 样式后，需要按照解析less、sass解析插件


## webStorage（浏览器本地存储）
    1.存储内容大小一般支持5mb左右（不同浏览器可能不一样）
    2.浏览器端通过Window.sessionStorage 和 Window.localStorage  属性实现本地存储机制
    3.相关API:(XXXX代表session 或 local)
        (1).xxxxstorage.setItem('key','value')
            该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
        
        (2).xxxxStorage.getItem('key')
            该方法接收一个键名作为参数，返回键名对应的值（JSON格式字符串，可使用JSON.parse进行转换）

        (3).xxxxStorage.removeItem('key')
            该方法接收一个键名作为参数，并把该键名从本地存储中删除

        (4).xxxxStorage.clear()
            该方法无参数，可清空存储中所有数据

    4.备注：
        (1).SessionStorage存储的内容会随着浏览器窗口关闭而消失
        (2).LocalStorage存储的内容，需要手动清除才会消失
        (3).xxxxStorage.getItem('key')，如果key对应的value获取不到，那么getItem的返回值是 null
        (4).JSON.parse(null)的结果依然是null





