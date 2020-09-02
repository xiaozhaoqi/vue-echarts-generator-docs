/**
 * 扩展 VuePress 应用
 */
import vcg from 'vue-echarts-generator'
import 'vue-echarts-generator/dist/VueEchartsGenerator.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(vcg)
}
