<template>
  <el-table
    ref="tableRef"
    :data="goodsList"
    style="width: 100%"
    @selection-change="SelectionChange"
    :border="true"
    stripe
    fit
  >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="id" label="商品ID" width="70"> </el-table-column>
    <el-table-column prop="goodsName" label="商品名称" />
    <el-table-column prop="goodsPrice" label="商品价格" />
    <el-table-column prop="goodsNumber" label="商品数量" />
    <el-table-column prop="goodsClass" label="商品分类" />
    <el-table-column prop="goods_img" label="商品图片" show-overflow-tooltip />
    <el-table-column
      prop="goodsDescribe"
      label="商品描述"
      show-overflow-tooltip
    />
    <el-table-column label="操作" width="210">
      <template #default="scope">
        <el-button size="small" @click="handleView(scope.$index, scope.row)"
          >查看</el-button
        >
        <!--  -->
        <el-button
          size="small"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-popconfirm
          title="确认要删除吗?"
          confirm-button-text="删除"
          cancel-button-text="取消"
          @confirm="handleDelete(scope.$index, scope.row)"
        >
          <template #reference>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <!-- 清空与批量删除 -->
  <div style="margin-top: 20px; margin-left: 15px">
    <el-button type="primary" @click="toggleSelection()">清空</el-button>
    <el-button @click="deleMore">批量删除</el-button>
  </div>
  <!-- 添加或编辑弹框 -->
  <GoodsDialog
    :isDialog="isDialog"
    :form="form"
    :eventMark="eventMark"
    @isDialogGoods="isDialogGoods"
    @sendImg="sendImg"
  ></GoodsDialog>
  <!-- 详情弹框 -->
  <Detail :isView="isView" :form="form" @isDetail="isDetail"></Detail>
</template>

<script setup>
import GoodsDialog from '@/components/goodsDialog/index.vue'
import Detail from '@/views/goods/goodsList/goodsTable/detail/index.vue'
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElTable } from 'element-plus'
import storage from '@/utils/storage.js'
const store = useStore()
const route = useRoute()
const router = useRouter()
const tableRef = ref(null)
const isDialog = ref(false)
const isView = ref(false)
let eventMark = ref('goodsTable') //传事件标识，dialog子组件依据标识判断
let form = reactive({
  goodsName: '',
  goodsNumber: 0,
  goodsPrice: 0,
  goodsClass: '',
  goods_img: null,
  goodsDescribe: ''
})
const currentPage = computed(() => store.state.appSwitch.currentPage)
const goodsList = computed(() => store.state.goods.goodsList)

//1.查看
const handleView = (index, row) => {
  form = row
  // form.createDate = dayjs(form.createDate).format('YYYY-MM-DD HH:mm:ss')
  isView.value = true
}

//2.更新
const handleEdit = (index, row) => {
  form = row
  isDialog.value = true
}
const isDialogGoods = (emi) => {
  isDialog.value = emi
}
const sendImg = (emi) => {
  form.goods_img = emi
}
const isDetail = (emi) => {
  isView.value = emi
}
// const confirms = () => {
//   store.dispatch('goods/updateGoods', form)
//   isDialog.value = false
// }
//3.删除
const handleDelete = (index, row) => {
  const currentId = { id: row.id }
  store.dispatch('goods/deleteGoods', currentId)
}
//*监听并获取选中行的内容,以数组形式保存
const SelectionChange = (val) => {}
//*批量删除
const deleMore = () => {
  // console.log(tableRef.value.getSelectionRows())
  let idArr = []
  if (tableRef.value.getSelectionRows().length !== 0) {
    tableRef.value.getSelectionRows().map((m) => {
      idArr.push(m.id)
    })
    const currentId = { id: idArr }
    store.dispatch('goods/deleteGoods', currentId)
  } else {
    console.log('未选中')
  }
}
//*清空
const toggleSelection = (val) => {
  if (val) {
    val.forEach((f) => {
      tableRef.value.toggleRowSelection(f, undefined)
    })
  } else {
    tableRef.value.clearSelection()
  }
}
</script>

<style lang="scss" scoped>
//
.el-table {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
//表格头部 行
::v-deep .el-table__header {
  height: 55px;
}
//每一行
::v-deep .el-table__row {
  height: 57px;
}
//编辑...按钮

// ::v-deep .el-button {
//   width: 50px;
//   height: 28px;
//   span {
//     font-size: 13px;
//   }
// }
</style>
