# 指南
## 快速使用
在你的项目根目录：
```
npm i vue-echarts-generator@1 --save
```
在main.js文件或者Vue的入口文件：
``` js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'echarts'
import ECharts from 'vue-echarts'
import VueEchartsGenerator from 'vue-echarts-generator'

import 'vue-echarts-generator/dist/VueEchartsGenerator.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.component('v-chart', ECharts) // 不要改变"v-chart"的命名
Vue.use(ElementUI, { size: 'mini' })
Vue.use(VueEchartsGenerator)
```
新建一个设计器/生成器的单文件组件：
``` vue
<template>
  <div id="app">
    <!-- 设计器：用于设计页面，需要显式指定CSS高度 -->
    <vcg-designer @onSave="handleSave" class="designer" />
    <!-- 生成器：用于将设计结果渲染为页面 -->
    <vcg-generator :data="pageJSON" />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        pageJSON: {"list": []}
      }
    },
    methods:{
      handleSave(pageJSON) {
        this.pageJSON = pageJSON
      }
    }
  }
</script>

<style>
  .designer {
    height: 400px;
  }
</style>
```

## 版本差异
本模块依赖了vue@2.6, element-ui@2.13, echarts@4.8, vue-echarts@5，**请确认你的项目中这些软件包的版本兼容**。  
根据不同的场景需要，vue-echarts-generator每次更新都会并行发布为两个大版本，其中：  
+ （推荐）vue-echarts-generator@1.x.x为核心库（Gzipped 约 50 KiB），只包含了设计器和生成器本身的内容，不含其他依赖，因此使用@1.x.x版本需要您自行引入和注册其他依赖，关于peerDependencies的介绍请参考[peerDependencies](https://nodejs.org/en/blog/npm/peer-dependencies/)。这样做的好处是您可以完全控制和管理依赖包的行为，并针对性的做一些性能优化：  
示例代码见 [快速使用](#快速使用)

+ vue-echarts-generator@2.x.x为捆绑库（Gzipped 约 500 KiB，其中echarts 212 KiB，element-ui 157 KiB），这是一个开箱即用的版本，它包含了所有的第三方依赖，因此您只需要引入vue并注册即可：
```
npm i vue-echarts-generator@2 --save
```
``` js
import Vue from 'vue'
import VueEchartsGenerator from 'vue-echarts-generator'
import 'vue-echarts-generator/dist/VueEchartsGenerator.css'

Vue.use(VueEchartsGenerator)
```
## 常见问题
+ 安装时NPM输出“peerDependencies WARNING”  
通常是某些软件包的版本不兼容，按NPM的提示进行升级或降级操作即可
+ 引入后发现样式错误或渲染异常  
  依次排查：
  1. vcg-designer组件是否显式设定了高度
  2. 是否引入了element-ui/lib/theme-chalk/index.css、vue-echarts-generator/dist/VueEchartsGenerator.css
  3. 确认各个依赖包版本vue@2.6, element-ui@2.13, echarts@4.8, vue-echarts@5
  4. 仍无法解决的情况，显式引入源代码，进行断点调试：  
  import VueEchartsGenerator from 'vue-echarts-generator/dist/VueEchartsGenerator.umd.js'
+ 控制台报错 v-chart 组件不存在  
确认将vue-echarts软件包导入的组件注册为'v-chart'
