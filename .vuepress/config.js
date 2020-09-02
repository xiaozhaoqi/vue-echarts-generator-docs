module.exports = {
  title: 'vue-echarts-generator',
  description: 'generate dynamic charts page by GUI(vue, element-ui, echarts)',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/guide/' },
      { text: '配置', link: '/guide/config/' },
      { text: '示例', link: '/guide/example/' },
      { text: 'DEMO', link: '/guide/demo/' },
      {
        text: '仓库',
        items: [
          { text: 'NPM', link: 'https://www.npmjs.com/package/vue-echarts-generator' },
          { text: 'GitHub', link: 'https://github.com/xiaozhaoqi/vue-echarts-generator' }
        ]
      }
    ],
    sidebar: ['/guide/guide/', '/guide/config/', '/guide/example/', '/guide/demo/']
  },
  dest: './docs',
  base: '/vue-echarts-generator-docs/'
}
