<template>
  <div class="wrapper-signIn">
    <div class="container">
      <header class="header">用户登录</header>
      <el-form
        class="main"
        ref="formRef"
        :model="ruleForm"
        :rules="rules"
        status-icon
      >
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            :prefix-icon="UserFilled"
            type="username"
            autocomplete="off"
            placeholder="用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            :prefix-icon="Lock"
            type="password"
            autocomplete="off"
            placeholder="密码"
            show-password
          />
        </el-form-item>
      </el-form>
      <footer class="footer">
        <el-button class="loginBtn" type="primary" @click="login"
          >登录</el-button
        >
        <span class="register" @click="toRegister">注册</span>
      </footer>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  watch,
  defineEmits,
  getCurrentInstance,
  onBeforeUnmount
} from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import { useStore } from 'vuex'
import storage from '@/utils/storage'
import { UserFilled, Lock } from '@element-plus/icons-vue'
const store = useStore()
const route = useRoute()
const router = useRouter()
// console.log(router.options.routes)
// console.log(router.currentRoute.value.path)
const emit = defineEmits(['isChangeView'])
const isRegister = ref(false)
const ruleForm = reactive({
  username: null,
  password: null
})
const rules = reactive({
  username: [
    {
      required: true,
      message: 'Please input activity name',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input activity pass',
      trigger: 'blur'
    }
  ]
})

const formRef = ref(null)
const login = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      store.dispatch('login/login', ruleForm)
      //   location.reload()
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const toRegister = () => {
  isRegister.value = true
  emit('isChangeView', isRegister.value)
}

// watch(
//   menuList,
//   (newVal, oldVal) => {
//   },
//   { immediate: true, deep: true }
// )
onBeforeRouteLeave((to, from) => {
  // console.log('组件路由离开前')
})
onBeforeUnmount(() => {
  // console.log('组件销毁前')
})
</script>

<style lang="scss" scoped>
.wrapper-signIn {
  padding: 20px 25px 20px 25px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: auto;
  height: auto;
  //   background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  font-size: 22px;
  font-weight: 530;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
}
.main {
  //   margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  ::v-deep .el-form-item__content {
    margin: 0 !important;
  }
  .el-input {
    width: $loginInputWidth;
    height: 42px;
  }
  //   & .el-input:nth-child(2) {
  //     margin-top: 15px;
  //   }
}
.footer {
  width: $loginInputWidth;
  display: flex;
  flex-direction: column;
  align-items: center;
  .loginBtn {
    width: 100%;
    height: 38px;
    margin-top: 15px;
  }
  .register {
    margin-top: 15px;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
