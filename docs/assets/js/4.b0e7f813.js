(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{348:function(n,e,t){"use strict";t.r(e);var i={data:function(){return{json:null,dialogVisible:!1}},methods:{handleSave:function(n){this.json=JSON.parse(n)},handleClose:function(n){this.$confirm("确认关闭？").then((function(e){n()})).catch((function(n){}))}}},l=t(41),o=Object(l.a)(i,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{margin:"20px"}},[t("p",[n._v("设计器：")]),n._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(e){n.dialogVisible=!0}}},[n._v("打开设计器")]),n._v(" "),t("el-dialog",{attrs:{title:"设计器 - 点击操作栏→保存→复制，将设计结果装载到生成器组件",visible:n.dialogVisible,width:"90%",fullscreen:"","before-close":n.handleClose},on:{"update:visible":function(e){n.dialogVisible=e}}},[t("vcg-designer",{staticStyle:{height:"500px"},on:{onSave:n.handleSave}})],1),n._v(" "),t("p",[n._v("生成器：")]),n._v(" "),null!==n.json?t("vcg-generator",{attrs:{data:n.json}}):t("p",[n._v("请先在设计器中生成一个页面")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);