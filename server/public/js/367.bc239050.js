"use strict";(self["webpackChunkvj_admin"]=self["webpackChunkvj_admin"]||[]).push([[367,240,92],{89:function(e,t){t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[a,l]of t)o[a]=l;return o}},9926:function(e,t,o){o.d(t,{Z:function(){return c}});var a=o(3396),l=o(4870),r=o(2483),n=o(65),i=o(7178);o(7247);const u={class:"dialog-footer"};var d={__name:"index",props:{isDialog:Boolean,info:Object,eventMark:String},emits:["isDialogOrder"],setup(e,{emit:t}){const o=e,d=(0,n.oR)(),s=((0,r.yj)(),(0,r.tv)(),(0,l.iH)(!1),(0,a.Fl)((()=>d.state.appSwitch.currentPage)),()=>{if(o.info.goodsName&&o.info.saleNumber&&o.info.goodsPrice&&o.info.clientName)if("orderHeader"===o.eventMark){d.dispatch("order/getStock",o.info.goodsName);const e=(0,a.Fl)((()=>d.state.order.stock));setTimeout((()=>{if(0!==e.value.goodsNumber&&e.value.goodsNumber>=o.info.saleNumber){d.dispatch("order/addOrder",o.info);let t=e.value.goodsNumber-o.info.saleNumber;d.dispatch("order/upStock",{num:t,goodsName:o.info.goodsName})}else i.z8.warning(`库存不足！仅剩 ${e.value.goodsNumber} 件商品`)}),500)}else"orderTable"===o.eventMark?d.dispatch("order/upOrder",o.info):console.log("未知的事件标识");else i.z8.warning("请填写内容");t("isDialogOrder",!1)}),c=()=>{t("isDialogOrder",!1)};return(t,r)=>{const n=(0,a.up)("el-input"),i=(0,a.up)("el-form-item"),d=(0,a.up)("el-input-number"),p=(0,a.up)("el-form"),m=(0,a.up)("el-button"),g=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.j4)(g,{"model-value":(0,l.SU)(o).isDialog,title:"编辑",width:"32%","destroy-on-close":"",onBeforeClose:c,onClose:c,draggable:""},{footer:(0,a.w5)((()=>[(0,a._)("span",u,[(0,a.Wm)(m,{onClick:c},{default:(0,a.w5)((()=>[(0,a.Uk)("取消")])),_:1}),"orderTable"===e.eventMark?((0,a.wg)(),(0,a.j4)(m,{key:0,type:"primary",onClick:s},{default:(0,a.w5)((()=>[(0,a.Uk)(" 更新 ")])),_:1})):((0,a.wg)(),(0,a.j4)(m,{key:1,type:"primary",onClick:s},{default:(0,a.w5)((()=>[(0,a.Uk)(" 添加 ")])),_:1}))])])),default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{label:"商品名称"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{modelValue:(0,l.SU)(o).info.goodsName,"onUpdate:modelValue":r[0]||(r[0]=e=>(0,l.SU)(o).info.goodsName=e),autocomplete:"off",style:{width:"300px"},placeholder:"请输入名称"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(i,{label:"销售数量"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:(0,l.SU)(o).info.saleNumber,"onUpdate:modelValue":r[1]||(r[1]=e=>(0,l.SU)(o).info.saleNumber=e),step:1},null,8,["modelValue"])])),_:1}),(0,a.Wm)(i,{label:"商品价格"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:(0,l.SU)(o).info.goodsPrice,"onUpdate:modelValue":r[2]||(r[2]=e=>(0,l.SU)(o).info.goodsPrice=e),precision:2,step:.5},null,8,["modelValue","step"])])),_:1}),(0,a.Wm)(i,{label:"顾客姓名"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{modelValue:(0,l.SU)(o).info.clientName,"onUpdate:modelValue":r[3]||(r[3]=e=>(0,l.SU)(o).info.clientName=e),autocomplete:"off",placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["model-value"])}}};const s=d;var c=s},2823:function(e,t,o){o.d(t,{Z:function(){return s}});var a=o(3396),l=o(4870),r=o(2483),n=o(65);o(7247);const i={class:"wrapper"};var u={__name:"index",setup(e){const t=(0,n.oR)(),o=((0,r.yj)(),(0,r.tv)()),u=(0,a.Fl)((()=>"goodsList"===o.currentRoute.value.name?t.state.goods.total:(o.currentRoute.value.name,t.state.order.total))),d=(0,a.Fl)((()=>"goodsList"===o.currentRoute.value.name?t.state.goods.pageSize:(o.currentRoute.value.name,t.state.order.pageSize))),s=(0,a.Fl)((()=>t.state.appSwitch.currentPage)),c=e=>{t.commit("appSwitch/changePage",e)};return(e,t)=>{const o=(0,a.up)("el-pagination");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(o,{background:"",layout:"total, prev, pager, next, jumper",total:(0,l.SU)(u),"page-size":(0,l.SU)(d),"current-page":(0,l.SU)(s),onCurrentChange:c},null,8,["total","page-size","current-page"])])}}};const d=u;var s=d},3782:function(e,t,o){o.r(t),o.d(t,{default:function(){return b}});var a=o(3396),l=o(9242),r=o(4870),n=o(7240),i=o(4092),u=o(2823),d=o(2483),s=o(65),c=o(7247);const p={class:"wrapper"},m={class:"orderHeader"},g={class:"orderTable"},f={class:"pages"};var v={__name:"index",setup(e){const t=(0,s.oR)(),o=((0,d.yj)(),(0,d.tv)(),(0,a.Fl)((()=>t.state.appSwitch.currentPage)));c.Z.setItem_s("page",o.value);const v=()=>{t.dispatch("order/getOrder",o.value)};setTimeout((()=>{v()}),300);const w=(0,a.Fl)((()=>t.state.order.orderList));return(0,d.iS)(((e,o)=>{c.Z.removeItem_s("page"),t.commit("appSwitch/changePage",1)})),(e,t)=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("header",m,[(0,a.Wm)(n["default"])]),(0,a._)("main",g,[(0,a.Wm)(i["default"])]),(0,a._)("footer",f,[(0,a.Wm)(u.Z)])],512)),[[l.F8,(0,r.SU)(w)]])}},w=o(89);const _=(0,w.Z)(v,[["__scopeId","data-v-2da80166"]]);var b=_},7240:function(e,t,o){o.r(t),o.d(t,{default:function(){return p}});var a=o(3396),l=o(4870),r=o(9926),n=o(2483),i=o(65);const u={class:"container"};var d={__name:"index",setup(e){const t=(0,i.oR)();(0,n.yj)(),(0,n.tv)();let o=(0,l.iH)(!1);const d=(0,l.iH)("orderHeader");let s=(0,l.iH)(!1);const c=(0,a.Fl)((()=>t.state.appSwitch.currentPage)),p=(0,l.qj)({goodsName:null,saleNumber:0,clientName:null,goodsPrice:0}),m=(0,l.qj)({clientName:null,page:c.value||1}),g=()=>{m.clientName?(s.value=!0,m.page=c.value,t.dispatch("order/getSearchOrder",m),s.value=!1):(s.value=!1,t.dispatch("order/getOrder",c.value))},f=()=>{o.value=!0},v=e=>{o.value=e};return(0,a.YP)(c,((e,o)=>{e!==o&&(!0===s.value?(s.value=!1,m.page=c.value,t.dispatch("order/getSearchOrder",m)):t.dispatch("order/getOrder",c.value))})),(e,t)=>{const n=(0,a.up)("el-button"),i=(0,a.up)("el-input");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",u,[(0,a.Wm)(i,{class:"input",modelValue:m.clientName,"onUpdate:modelValue":t[1]||(t[1]=e=>m.clientName=e),placeholder:"请输入姓名查询"},{append:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"btn",onClick:t[0]||(t[0]=e=>g())},{default:(0,a.w5)((()=>[(0,a.Uk)("搜索")])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(n,{class:"addBtn",type:"primary",plain:"",onClick:t[2]||(t[2]=e=>f())},{default:(0,a.w5)((()=>[(0,a.Uk)("新增订单")])),_:1})]),(0,a.Wm)(r.Z,{isDialog:(0,l.SU)(o),info:p,eventMark:d.value,onIsDialogOrder:v},null,8,["isDialog","info","eventMark"])],64)}}},s=o(89);const c=(0,s.Z)(d,[["__scopeId","data-v-d00a5ae4"]]);var p=c},4092:function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});o(7658);var a=o(3396),l=o(4870),r=o(9926),n=o(2728);o(5743);const i={style:{"margin-top":"10px","margin-left":"5px"}};var u={__name:"index",setup(e){const t=(0,l.iH)(null);let o=(0,l.iH)(!1);const u=(0,l.iH)("orderTable");let d=(0,l.qj)({goodsName:null,saleNumber:0,clientName:null,goodsPrice:0});const s=(0,a.Fl)((()=>n.Z.state.order.orderList)),c=e=>{o.value=e},p=(e,t)=>{d=t,o.value=!0},m=(e,t)=>{const o={id:t.id};n.Z.dispatch("order/deleOrder",o)},g=e=>{e?e.forEach((e=>{t.value.toggleRowSelection(e,void 0)})):t.value.clearSelection()},f=()=>{let e=[];if(0!==t.value.getSelectionRows().length){t.value.getSelectionRows().map((t=>{e.push(t.id)}));const o={id:e};n.Z.dispatch("order/deleOrder",o)}else console.log("未选中")},v=e=>{};return(e,n)=>{const w=(0,a.up)("el-table-column"),_=(0,a.up)("EditPen"),b=(0,a.up)("el-icon"),h=(0,a.up)("Delete"),S=(0,a.up)("el-popconfirm"),k=(0,a.up)("el-table"),W=(0,a.up)("el-button");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(k,{ref_key:"tableRef",ref:t,data:(0,l.SU)(s),style:{width:"100%"},onSelectionChange:v,border:!0,fit:""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{type:"selection",width:"55"}),(0,a.Wm)(w,{property:"id",label:"ID",width:"70"}),(0,a.Wm)(w,{prop:"saleDate",label:"出售日期","show-overflow-tooltip":""}),(0,a.Wm)(w,{prop:"goodsName",label:"商品名称"}),(0,a.Wm)(w,{prop:"goodsPrice",label:"商品价格"}),(0,a.Wm)(w,{prop:"saleNumber",label:"销售数量"}),(0,a.Wm)(w,{prop:"clientName",label:"顾客姓名"}),(0,a.Wm)(w,{label:"操作",width:"150"},{default:(0,a.w5)((e=>[(0,a.Wm)(b,{onClick:t=>p(e.$index,e.row),style:{margin:"auto 18px auto 5px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(_)])),_:2},1032,["onClick"]),(0,a.Wm)(S,{title:"确认要删除吗?","confirm-button-text":"删除","cancel-button-text":"取消",onConfirm:t=>m(e.$index,e.row)},{reference:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h)])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),(0,a._)("div",i,[(0,a.Wm)(W,{onClick:n[0]||(n[0]=e=>g())},{default:(0,a.w5)((()=>[(0,a.Uk)("清空")])),_:1}),(0,a.Wm)(W,{onClick:n[1]||(n[1]=e=>f())},{default:(0,a.w5)((()=>[(0,a.Uk)("批量删除")])),_:1})]),(0,a.Wm)(r.Z,{isDialog:(0,l.SU)(o),info:(0,l.SU)(d),eventMark:u.value,onIsDialogOrder:c},null,8,["isDialog","info","eventMark"])],64)}}},d=o(89);const s=(0,d.Z)(u,[["__scopeId","data-v-4d697cf2"]]);var c=s}}]);
//# sourceMappingURL=367.bc239050.js.map