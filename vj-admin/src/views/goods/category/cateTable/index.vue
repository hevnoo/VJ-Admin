<template>
  <el-table
    ref="tableRef"
    :data="classList"
    style="width: 100%"
    @selection-change="SelectionChange"
    :border="true"
    fit
  >
    <el-table-column type="selection" width="55" />
    <el-table-column property="id" label="ID" width="220" />
    <el-table-column property="className" label="类名" show-overflow-tooltip />
    <el-table-column label="操作" width="130">
      <template #default="scope">
        <!--  -->
        <el-icon
          @click="handleEdit(scope.$index, scope.row)"
          style="margin: auto 18px auto 5px"
          ><EditPen
        /></el-icon>
        <el-popconfirm
          title="确认要删除吗?"
          confirm-button-text="删除"
          cancel-button-text="取消"
          @confirm="handleDelete(scope.$index, scope.row)"
        >
          <template #reference>
            <el-icon><Delete /></el-icon>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <!-- 清空与批量删除 -->
  <div style="margin-top: 10px; margin-left: 5px">
    <el-button @click="toggleSelection()">清空</el-button>
    <!-- <el-button @click="deleMore()">批量删除</el-button> -->
  </div>
  <!-- 编辑弹框 -->
  <el-dialog
    v-model="dialogVisible"
    title="编辑"
    width="30%"
    destroy-on-close
    draggable
  >
    <span><input class="logInput" v-model="info.className" type="text" /></span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel()">取消</el-button>
        <el-button type="primary" @click="confirm()"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import store from '@/store'
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'
const tableRef = ref(null)
let dialogVisible = ref(false)
let info = reactive({
  className: null
})
const classList = computed(() => store.state.classes.classList)

//1.编辑更新
const handleEdit = (index, row) => {
  info = row
  dialogVisible.value = true
}
//1.1
const confirm = () => {
  if (info.className) {
    store.dispatch('classes/upClass', info)
  } else {
    ElMessage.error('类名不能为空')
    store.dispatch('classes/getClass')
  }
  dialogVisible.value = false
}
const cancel = () => {
  dialogVisible.value = false
}

//2.删除
const handleDelete = (index, row) => {
  const class_id = { class_id: row.id }
  store.dispatch('classes/deleClass', class_id)
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
//*批量删除
// const deleMore = () => {
//   let idArr = []
//   if (tableRef.value.getSelectionRows().length !== 0) {
//     tableRef.value.getSelectionRows().map((m) => {
//       idArr.push(m.id)
//     })
//     const currentId = { id: idArr }
//     store.dispatch('classes/deleClass', currentId)
//   } else {
//     console.log('未选中')
//   }
// }
//*监听并获取选中行的内容,以数组形式保存
const SelectionChange = (val) => {}
</script>

<style lang="scss" scoped>
//
.el-table {
  // box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
//表格头部 行
::v-deep .el-table__header {
}
//表头
::v-deep th {
  height: 42px;
  background-color: #f5fafe !important;
}
//每一行
::v-deep .el-table__row {
  height: 43px;
}
.logInput {
  width: 70%;
  height: 30px;
  padding: 7px;
}
</style>
