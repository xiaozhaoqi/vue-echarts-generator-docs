---
sidebarDepth: 3
---
# 配置

## 在脚手架项目中使用
### [renren-fast-vue](https://gitee.com/renrenio/renren-fast-vue)
renren-fast-vue是一个后台管理的boilerplate项目，与基于springboot的服务端项目renrne-fast配套使用，前后端代码分离但是业务耦合度较高，适合全栈开发。  
使用示例：
``` js
// 升级依赖到以下版本：
// npm i vue@2.6.12 vue-template-compiler@2.6.12 element-ui@2.13.2 --save
// 删除原有的echarts静态文件，使用NPM版本
// 安装以下新增依赖：
// npm i echarts vue-echarts vue-echarts-generator@1 --save

// 修改main.js：以下为diff行
// import '@/element-ui' // 这里关闭了按需引入
// import '@/element-ui-theme' // 这里关闭了主题配置
import vcg from 'vue-echarts-generator'
import 'vue-echarts-generator/dist/VueEchartsGenerator.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'echarts'
import vc from 'vue-echarts'
import ElementUI from 'element-ui'
Vue.component('v-chart', vc)
Vue.use(vcg)
Vue.use(ElementUI, { size: 'mini' })

// 然后在页面中引入设计器即可使用
```

### [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
vue-element-admin是一个后台管理的boilerplate项目，使用了较新的前端技术栈（vue-cli、webpack@4），适合前后端分离开发。  
使用示例：
``` js
// 安装以下新增依赖：
// npm i vue-echarts vue-echarts-generator@1 --save

// 修改main.js：以下为diff行
import vcg from 'vue-echarts-generator'
import 'vue-echarts-generator/dist/VueEchartsGenerator.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'echarts'
import vc from 'vue-echarts'
import ElementUI from 'element-ui'
Vue.component('v-chart', vc)
Vue.use(vcg)
Vue.use(ElementUI)
// 然后在页面中引入设计器即可使用
// 注意：vue-element-admin使用不友好的方式覆盖了element-ui的全局样式
// 如果存在设计器样式错误的情况，应该修改vue-element-admin覆盖的样式，而不是调整设计器的样式。
```

### [iview-admin](https://github.com/iview/iview-admin)
iview-admin是一个后台管理的boilerplate项目，使用了iview作为组件库，需要额外引入element-ui支持设计器。  
使用示例：
``` js
// 升级依赖到以下版本：
// npm i vue@2.6.12 vue-template-compiler@2.6.12 echarts@4.8 --save
// 安装以下新增依赖：
// npm i vue-echarts vue-echarts-generator@1 element-ui@2.13.2 --save

// 修改main.js：以下为diff行
import vcg from 'vue-echarts-generator'
import 'vue-echarts-generator/dist/VueEchartsGenerator.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'echarts'
import vc from 'vue-echarts'
import ElementUI from 'element-ui'
Vue.component('v-chart', vc)
Vue.use(vcg)
// iview默认开启了i18n，需要兼容element-ui的i18n配置
Vue.use(ElementUI, { size: 'mini', i18n: (key, value) => i18n.t(key, value) })
// 然后在页面中引入设计器即可使用
```

### [vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)
vue-enterprise-boilerplate与前几种脚手架项目不同，它不提供组件库和基础布局，而是集合了主流的前端技术栈，并暴露了大部分配置文件用于按需定制，适合灵活的、复杂的企业级应用。  
使用示例：
``` js
// 安装以下新增依赖：
// npm i element-ui@2.13.2 echarts@4.8 vue-echarts vue-echarts-generator@1 --save

// 修改main.js：以下为diff行
import vcg from 'vue-echarts-generator'
import 'vue-echarts-generator/dist/VueEchartsGenerator.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'echarts'
import vc from 'vue-echarts'
import ElementUI from 'element-ui'
Vue.component('v-chart', vc)
Vue.use(vcg)
Vue.use(ElementUI, { size: 'mini' })

// 然后在页面中引入设计器即可使用
```

## 设计器配置
设计器操作栏的“选择预设页面”内置了一些常用功能的设计结果，供[参考](/guide/example/)。  
详细用法如下：
### 触发器组件
TODO

### 图表组件
TODO

## 调整设计器的样式
### element-ui
设计器使用了默认的element-ui配置，大多数情况下，调整element-ui的[全局配置](https://element.eleme.cn/#/zh-CN/component/quickstart#quan-ju-pei-zhi)和[主题](https://element.eleme.cn/#/zh-CN/component/custom-theme)，就可以对1.x.x版本的设计器生效。
### "vcg-style"
设计器和生成器组件都被包含在一个class为 "vcg-style" 的元素中，因此您可以使用自定义的CSS覆盖默认的样式。

## 性能优化
### echarts
您可以只引用一部分echarts的图表，以减少构建软件包的大小，例如：
``` js
import Vue from 'vue'
import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// register component to use
Vue.component('v-chart', ECharts)
```
这种情况下设计器不会对图表类型做校验，当用户设计了一个箱型图，而您的项目没有引入时，将会抛出错误提示。  
因此您可以在项目中仅开放一部分图表，限制用户可以设计的图表类型。
### element-ui
您可以使用element-ui的[按需引入](https://element.eleme.cn/#/zh-CN/component/quickstart#an-xu-yin-ru)功能，以减少构建软件包的大小。  
设计器正常工作必需的组件有：
``` js
import {
  Dialog,
  Input,
  InputNumber,
  Checkbox,
  Switch,
  Select,
  Option,
  Button,
  Popover,
  Tooltip,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Icon,
  Row,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Link,
  Loading,
  Message,
} from 'element-ui';
```
生成器正常工作必需的组件有：
``` js
import {
  Form,
  FormItem,
  Loading,
  Message,
  // 以及设计结果使用到的组件
} from 'element-ui';
```
建议在使用设计器的项目中引入全部element-ui组件；仅使用生成器的项目中，可以做按需引入。
### 异步加载
通过vue-loader和import()，当用户切换到设计器界面时，才加载vue-echarts-generator并渲染，不需要将本模块打包到您的项目入口文件。
