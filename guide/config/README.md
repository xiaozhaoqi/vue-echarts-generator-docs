# 配置
## 设计器配置
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
