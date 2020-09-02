<template>
  <div style="margin:20px;">
    <p>设计器：</p>
    <el-button type="primary"
               @click="dialogVisible = true">打开设计器</el-button>
    <el-dialog title="设计器 - 点击操作栏→保存→复制，将设计结果装载到生成器组件"
               :visible.sync="dialogVisible"
               width="90%"
               fullscreen
               :before-close="handleClose">
      <vcg-designer style="height:500px;"
                    @onSave="handleSave" />
    </el-dialog>
    <p>生成器：</p>
    <vcg-generator :data="json"
                   v-if="json!==null" />
    <p v-else>请先在设计器中生成一个页面</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      json: null,
      dialogVisible: false
    }
  },
  methods: {
    handleSave (json) {
      this.json = JSON.parse(json)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }
}
</script>

<style>
</style>
