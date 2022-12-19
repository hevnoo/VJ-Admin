<template>
  <div class="wrapper-signIn">
    <div class="container">
      <header class="header">用户登录</header>
      <main class="main">
        <el-input
          v-model="ruleForm.username"
          type="username"
          :prefix-icon="UserFilled"
          placeholder="用户名"
        />
        <el-input
          v-model="ruleForm.password"
          type="password"
          :prefix-icon="Lock"
          placeholder="密码"
          show-password
        />
      </main>
      <footer class="footer">
        <el-button type="primary">登录</el-button>
        <span class="register">注册</span>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { UserFilled, Lock } from '@element-plus/icons-vue'
const ruleForm = reactive({
  username: null,
  password: null
})
</script>

<style lang="scss" scoped>
.wrapper-signIn {
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
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
  font-size: 23px;
  font-weight: 550;
  margin-bottom: 30px;
}
.main {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  .el-input {
    width: 390px;
    height: 45px;
  }
  & .el-input:nth-child(2) {
    margin-top: 15px;
  }
}
.footer {
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-button {
    width: 100%;
    height: 40px;
  }
  .register {
    margin-top: 15px;
    cursor: pointer;
  }
}
</style>
