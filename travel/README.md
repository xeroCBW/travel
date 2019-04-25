# travel

> a travel project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目搭建
1. 使用命令初始化项目
```vue init webpack```
## 改造路由
router下文件夹index.js
```$xslt
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }

```

## 设置viewport
修改不能进行缩放
```
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

## 设置css 样式
 ```
  // 引入清除css样式
  import './assets/styles/reset.css'
  // 解决一个像素问题
  import './assets/styles/border.css'
  ```
## 设置300ms延迟

 结局300ms延迟的问题
 ``` 
 npm install fastclcik --save
 //--save 表示开发还是线上都要使用
 ```
 
 在main.js中进行设置
 import fastclick from 'fastclick'
 fastclick.attach(document.body)

## iconfont设置标签
iconfont.cn 进行注册设置

# day02 

## 添加stylus
```
npm install stylus --save
npm install stylus-loader --save
```
## 采用流式布局

display:flex

## 设置图标iconfont

在iconfont官网下载对应的图标

将含有icon文件放到assets/style/iconfont文件下

iconfont.css 除外

iconfont.css 所有路径修改为iconfont/iconfont.eot-->./iconfont/iconfont.eot

代开main.js 引入文件
```aidl
import  './assets/styles/iconfont.css'
```

- 修改返回(返回官网复制标识)
```aidl
   <div class="header-left"><span class="iconfont">&#xe624;</span></div>
```
- 修改字体大小
```aidl
  .search-icon{

    font-size 0.3rem
  }
```

- @import 
```aidl
  @import "../../../assets/styles/varibles.styl"
```
@ 表示src目录

```aidl
  @import "~@assets/styles/varibles.styl"
```
在css中要写成~@

- 可以将通用的一些颜色抽离出来

## webpack 中取别名

  ```aidl
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles':resolve('src/assets/variables.styl'),
    }
  },
```
# 轮播图组件

```aidl
npm install vue-awesome-swiper@2.6.7 --save
```

- 防止抖动
```aidl
  .wrapper{

    width 100%
    height:0
    padding-bottom 32.5%
    /*设置overflow hidden*/
    overflow hidden

  }


```

- 修改提示器颜色

```aidl

  /*类选择器要一直挨着*/
  /*类选择器要一直挨着*/
  .wrapper>>>.swiper-pagination-bullet-active{
    /*background-color red*/
    /*color red*/
    background red
  }

```
```aidl
层次选择器 类型	功能描述

E   F 后代选择器	选择匹配的F元素，且F元素被包含在匹配的E元素内

E > F 子选择器	选择匹配的F元素，且F元素是E元素的子元素

E + F 相邻兄弟选择器	选择匹配的F元素，且F元素是E元素后面紧邻的兄弟元素

E ~ F 通用选择器	选择匹配的F元素，且F元素是E元素后面的所有兄弟元素

```


- 修改数据源

```aidl

简单来说，区别如下：
1.v-bind用来绑定数据和属性以及表达式，缩写为'：'
2.v-model使用在表单中，实现双向数据绑定的，在表单元素外使用不起作用
```

- 实现无线轮播
 ```aidl
            swiperOption:{
              //设置显示点点
              pagination:'.swiper-pagination',
              loop:true
            },
```

## 实现图标

- 使用swiper 来装数据
- 直接使用for 循环没有办法实现分页,要用conpute属性 
    + computed 中涉及到数据一个公式,直接将数据push进去的公式
    ```aidl
      computed:{
        pages(){
          const  pages = []
          this.lists.forEach((item,index)=>{
            const page=Math.floor((index/8))
            //如果不存在就创建一个数组,
            //然后根据index每次放一些进去
            if(!pages[page]){
              pages[page] = []
            }
            pages[page].push(item);
          });
          return pages
        }
      }
    ```
  
 ### 实现推荐内容
  - flex 会自动撑开屏幕的内容
  - 设置文字...
  
  ```aidl
ellipsis()
min-width: 0  /*设置形成...*/

```


# ajax 获取数据
```vuejs
npm install axios
```  
- 从static中获取数据
```vuejs
// 在ignore中添加忽略文件
static/mock
```
- index.js 修改线上和线下版本
```vuejs
    proxyTable: {
      '/api': {
        target: 'http://localhost:8081',  // 通过本地服务器将你的请求转发到这个地址
        changeOrigin: true,  // 设置这个参数可以避免跨域
        pathRewrite: {
          '^/api': '/static/mock'
        }
      },
    },
```

## 父子组件传值
- 要子组件对应的属性和传过来的一致
```vue
  <home-header></home-header>
  <home-swiper :lists="swiperList"></home-swiper>
  <home-icons :lists="iconList"></home-icons>
  <home-recommand :lists="recommandList"></home-recommand>
  <home-weekend :lists="weekendList"></home-weekend>
  
```

```vuejs
      props:{
          lists:Array
      },
```

# 城市界面制作

## header 制作

- 父组件使用positIon:relative
- 子组件使用position:absolute left =0 top0
## 搜索框制作
- 设置搜索框和宽度一样大
```css
          .search-input
            width 100%
```
## list

- 使用wrapper进行占位,只要规定占用的宽度就可以,高度根据文字宽度+padding 确定
```css

    .button-wrapper
      float left
      width 33.33%
      /*background-color green*/
      .button
        border 1px solid #ccc
        border-radius 0.1rem
        /*background yellow*/
        margin: .1rem
        padding: .1rem 0
        text-align center
```
- 在border中插入样式
```css
  .border-bottom
    &:before
      border-color #ccc
```
## 使用better-scroll

```js
npm install better-scroll --save
```
- 修改最外层的list,将其变成absolute
- 引入better-scroll 并且将其设置好,这样就可以头部不动了
    + 设置ref="wrapper"
    + wrapper之后是一个div(多加一层)
    + 引入头文件

## 字母表

- 设置位置 absolute
- 布局为垂直布局
```stylus
    display: flex
    flex-direction: column
    justify-content: center
```

#### 兄弟组件传值
1. 先传值给父组件
2. 然后父组件传值给子组件


- js常用的事件
```js
onload加载完成事件    
onclick单击事件 
onblur失去焦点事件
onchange内容发生改变事件  经常用于select下拉列表选中后的内容发生改变时候触发
onsubmit表单提交事件 经常用来在表单提交的时候验证所有表单项是否合法。

```
- ref用来标识的,往后可以使用$refs来获取数据
```vue
      <div class="area"  v-for="(item,key) in cities" :ref="key" :key="key">
```
```vuejs
      watch:{
        letter(){
          if(this.letter){
            //获取数据
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
          }
        }
      }

```

