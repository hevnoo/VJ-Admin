<template>
  <el-dialog
    :model-value="props.isDialog"
    width="32%"
    destroy-on-close
    @before-close="beforeClose"
    @close="beforeClose"
    draggable
  >
    <el-form>
      <el-form-item label="用户账号" v-if="eventMark === 'rolesHeader'">
        <el-input
          v-model="props.info.username"
          autocomplete="off"
          placeholder="请输入账号"
          clearable
        />
      </el-form-item>
      <el-form-item label="用户账号：" v-if="eventMark === 'rolesTable'">
        <p>{{ props.info.username }}</p>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input
          v-model="props.info.password"
          placeholder="密码"
          autocomplete="off"
          clearable
        />
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input
          v-model="props.info.nickname"
          autocomplete="off"
          placeholder="请输入昵称"
          clearable
        />
      </el-form-item>
      <el-form-item label="角色权限">
        <el-select
          v-model="props.info.role"
          placeholder="请选择角色权限"
          clearable
        >
          <el-option
            v-for="item in rolesList"
            :key="item.id"
            :label="item.rolesName"
            :value="item.rolesName"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="beforeClose">取消</el-button>
        <el-button
          v-if="eventMark === 'rolesTable'"
          type="primary"
          @click="confirm"
        >
          更新
        </el-button>
        <el-button v-else type="primary" @click="confirm"> 添加 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {
  ref,
  reactive,
  onMounted,
  computed,
  watch,
  defineProps,
  defineEmits
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
const emits = defineEmits(['isDialogRoles'])
const store = useStore()
const route = useRoute()
const router = useRouter()
const isDialog = ref(false)

let props = defineProps({
  isDialog: Boolean,
  info: Object,
  eventMark: String
})
let rolesList = reactive([
  { id: 0, rolesName: 'admin' },
  { id: 1, rolesName: 'vip' }
])
// const currentPage = computed(() => store.state.appSwitch.currentPage)

//弹框的确认按钮
const confirm = () => {
  if (props.info.username && props.info.nickname && props.info.password) {
    //根据标识区分父组件
    if (props.eventMark === 'rolesHeader') {
      store.dispatch('userList/addUser', props.info)
    } else if (props.eventMark === 'rolesTable') {
      store.dispatch('userList/upUser', props.info)
    } else {
      //   console.log('未知的事件标识')
    }
  } else {
    ElMessage.warning('请填写内容')
  }
  emits('isDialogRoles', false)
}
const beforeClose = () => {
  //关闭前的回调
  emits('isDialogRoles', false)
}

//props是单向数据流，所以要关闭就要emit发送关闭信号给父组件,再让父组件传过来关闭信号！
</script>

<style lang="scss" scoped></style>
