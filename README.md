## Vue 小任务

* [Vue & to do list](./src/pages/vue-todo-list/index.vue)

  自己写一个，和官方的版本进行比较，了解vue的特性。

* [Vue 组件](./src/components)

  设计几个酷炫的小组件，并且实现它。例如：悬浮在页面上的导航按钮，类似ios系统的辅助触控小圆点。

  高阶:

      * 能够体现和展示组件的生命周期
      * 能够实现组件之间的通讯（父子通讯、子父通讯、子子通讯）

* [Vue 状态管理](./src/pages/vue-component/index.vue)

    * 如何管理页面/组件的状态
    * 理解Vuex的设计理念，并且使用Vuex

* [Vue 路由管理](./src/router/index.js)

    * 理解浏览器 history 概念和特性（包括HTML5的特性）
    * 学会使用Vue-Router的 Hash 模式 和 History 模式

* [Vue & ajax](./src/pages/vue-query/index.vue)

  自己写一个页面，实现模糊城市查询。

  API: https://h5.133.cn/hangban/basic/search_airport?q=%E5%8C%97%E4%BA%AC  （查询参数需要进行url encode，
  调用`encodeURIComponent()` )

  高阶功能：输入频次太快，只响应最后一次

## Express 小任务

* Express 静态server

* [Express 中转http请求](./src/pages/express-query/index.vue)

  请求express的某个路由，返回 `https://h5.133.cn/hangban/basic/search_airport?q=%E5%8C%97%E4%BA%AC` 这个api的返回结果

  高阶功能：

       * 提供一个api，返回上述api对应的返回值
       * 解析上述api的返回内容，添加对应的国家参数（如 `nation: 'china'`）
       * 提供日志分析功能（如最近一小时内，请求了多少次，成功了多少次，失败了多少次，成功率是多少）

* [Express 中间件](./src/pages/express-middleware/index.vue)

      设计一个express 中间件，提供某一个能力（如检查请求是否符合API规则，参数校验；给每个API添加返回时间戳）

* [Express Session](./src/pages/express-session/index.vue)

       理解session的工作机制，操作session的注意事项，如何管理和操作session。


  

