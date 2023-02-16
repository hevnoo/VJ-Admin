<template>
  <div class="wrapper-modify">
    <div class="logo">修改账户：</div>
    <el-form
      class="one card"
      ref="formRef"
      :model="info"
      :rules="rules"
      status-icon
      ><div>
        <span class="label">登录名：</span>
        <el-form-item prop="username">
          <el-input
            v-model="info.username"
            placeholder="Please input"
            clearable
          />
        </el-form-item>
      </div>
      <div>
        <span class="label">昵称：</span>
        <el-form-item prop="nickname">
          <el-input
            v-model="info.nickname"
            placeholder="Please input"
            clearable
          />
        </el-form-item>
      </div>
      <el-button type="primary" @click="yes()">确认修改</el-button>
    </el-form>
    <!--  -->
    <div class="logo">修改密码：</div>
    <el-form
      class="two card"
      ref="formRefs"
      :model="info"
      :rules="rules"
      status-icon
    >
      <div>
        <span class="label">原密码：</span>
        <el-form-item prop="oldPass"
          ><el-input
            v-model="info.oldPass"
            placeholder="Please input"
            clearable
        /></el-form-item>
      </div>
      <div>
        <span class="label">新密码：</span>
        <el-form-item prop="password"
          ><el-input
            v-model="info.password"
            placeholder="Please input"
            clearable
        /></el-form-item>
      </div>
      <el-button type="primary" @click="yess()">确认修改</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from 'vue'
import {
  useRoute,
  useRouter,
  onBeforeRouteLeave,
  onBeforeRouteUpdate
} from 'vue-router'
import { useStore } from 'vuex'
import storage from '@/utils/storage.js'
const store = useStore()
const route = useRoute()
const router = useRouter()
let info = reactive({
  username: null,
  nickname: null,
  password: null,
  oldPass: null
})
const rules = reactive({
  username: [
    {
      required: true,
      message: 'Please input activity name',
      trigger: 'blur'
    }
  ],

  nickname: [
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
  ],
  oldPass: [
    {
      required: true,
      message: 'Please input activity pass',
      trigger: 'blur'
    }
  ]
})
const role = computed(() => store.state.login.role)
const userInfo = computed(() => store.state.login.userInfo)
const formRef = ref(null)
const yes = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      store.dispatch('login/updateUser', info)
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const formRefs = ref(null)
const yess = () => {
  formRefs.value.validate(async (valid) => {
    if (valid) {
      store.dispatch('login/updateUser', info)
      info.password = ''
      info.oldPass = ''
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.wrapper-modify {
  width: 70%;
  height: 500px;
  //   background-color: antiquewhite;
}
.logo {
  height: 50px;
  line-height: 50px;
  //   margin-bottom: 20px;
}
.card {
  width: 100%;
  height: 210px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  background-color: rgb(255, 255, 255, 0.9);
  padding: 30px;
  div {
    display: flex;
    margin-bottom: 10px;
  }
  .el-input {
    width: 300px;
  }
  .el-button {
    margin-left: 80px;
  }
}

.one {
  margin-bottom: 20px;
}
.label {
  width: 80px;
  //   padding: 0 10px;
  display: flex;
  justify-content: end;
}
</style>
