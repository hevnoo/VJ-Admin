<template>
  <div class="wrapper-roles">
    <header class="header-btn" style="margin-bottom: 20px">
      <el-button type="primary" @click="addUserList()">新增角色</el-button>
    </header>
    <el-table
      :data="userList"
      ref="tableRef"
      style="width: 100%"
      :border="true"
    >
      <el-table-column prop="role" label="Role Key" width="180" />
      <el-table-column prop="username" label="User Name" />
      <el-table-column prop="nickname" label="Nick Name" />
      <el-table-column prop="password" label="Password" />
      <el-table-column label="Operations" width="400">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑权限</el-button
          >
          <el-popconfirm
            title="确认要删除吗?"
            confirm-button-text="删除"
            cancel-button-text="取消"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <template #reference>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <!-- 弹框 -->
  <rolesDialog
    :isDialog="isDialog"
    :info="info"
    :eventMark="eventMark"
    @isDialogRoles="isDialogRoles"
  ></rolesDialog>
</template>

<script setup>
//引入hooks
// import useMousePosition from '@/hooks/useMousePosition'
import rolesDialog from '@/components/rolesDialog/index.vue'
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import { useStore } from 'vuex'
import storage from '@/utils/storage.js'
const store = useStore()
const route = useRoute()
const router = useRouter()

const tableRef = ref(null)
let isDialog = ref(false)
let eventMark = ref('') //传事件标识
let info = reactive({
  username: null,
  nickname: null,
  password: null
})
const userList = computed(() => store.state.userList.userList)

//弹框
const isDialogRoles = (emi) => {
  isDialog.value = emi
}
//1.编辑更新
const handleEdit = (index, row) => {
  eventMark = 'rolesTable'
  info = row
  isDialog.value = true
}
//2.删除
const handleDelete = (index, row) => {
  const id = { id: row.id }
  store.dispatch('userList/deleUser', id)
}
//新增用户按钮
const addUserList = () => {
  eventMark = 'rolesHeader'
  isDialog.value = true
}
</script>

<style lang="scss" scoped>
.wrapper-roles {
  margin-top: 10px;
}
//行高
::v-deep .el-table tr {
  height: 50px;
}
//每一项文本居中
::v-deep .el-table .cell {
  text-align: center;
}
</style>
