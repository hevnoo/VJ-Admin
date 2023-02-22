<template>
  <div class="wrapper-about">
    <!-- <div class="logo">About me</div> -->
    <div class="logo">
      <span>About me</span>
      <el-button v-if="isBtn" class="logoBtn" type="primary" @click="saveImg()"
        >保存</el-button
      >
    </div>
    <header class="header">
      <el-upload
        class="avatar-uploader"
        action="http://127.0.0.1:7171/api/users/upload"
        :show-file-list="false"
        :on-success="onSuccess"
        :before-upload="beforeUpload"
        name="head_img"
      >
        <img
          v-if="imgUrl || userInfo.head_img"
          :src="imgUrl === '' ? userInfo.head_img : imgUrl"
          alt=""
        />
        <img v-else src="@/assets/img/head/aHeader.png" alt="" />
      </el-upload>
      <span>Hello {{ nickname }}</span>
      <span>{{ role }}</span>
    </header>
    <main class="main">
      <section class="one">
        <div class="title">Discription</div>
        <div class="text">
          The vj admin is a Vue3 + Element-plus and Node.js project
        </div>
      </section>
      <section class="two">
        <div class="title">Skills</div>
        <div class="progress" :stroke-width="30" show-text text-inside>
          <div>Vue</div>
          <el-progress :percentage="67" />
          <div>JavaScript</div>
          <el-progress :percentage="21" :format="format" />
          <div>Css</div>
          <el-progress :percentage="12" :format="format" />
          <div>ESLint</div>
          <el-progress :percentage="100" status="success" />
        </div>
      </section>
    </main>
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
const role = computed(() => store.state.login.role)
const userInfo = computed(() => store.state.login.userInfo)
let nickname = ref(userInfo.value.nickname)
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
const imgUrl = ref('')
let isBtn = ref(false) //保存按钮的显隐
// 上传图片成功的回调，用作把上传的图片赋值到客户端显示出来！
const onSuccess = (res) => {
  imgUrl.value = res.data
  isBtn.value = true
}
const beforeUpload = (file) => {
  const isJPG = file.type === 'image/jpeg'
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isJPG) {
    ElMessage.error('上传头像图片只能是 JPG 格式!')
  }
  if (!isLt2M) {
    ElMessage.error('上传头像图片大小不能超过 2MB!')
  }
  return isJPG && isLt2M
}
const saveImg = () => {
  store.dispatch('login/updateUser', { head_img: imgUrl.value })
  isBtn.value = false
}
</script>

<style lang="scss" scoped>
.wrapper-about {
  width: 25%;
  height: 550px;
  background-color: rgb(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.logo {
  width: 100%;
  height: 50px;
  border-bottom: 1.5px solid rgb(0, 0, 0, 0.15);
  line-height: 50px;
  padding-left: 17px;
}
.logoBtn {
  margin-left: 100px;
}
.header {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-top: 25px;
  }
  span {
    margin-top: 13px;
  }
  span:nth-child(2) {
    // font-size: 20px;
    font-weight: 550;
  }
  span:nth-child(3) {
    color: rgb(0, 0, 0, 0.65);
  }
}
//主体main
.main {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  //   align-items: center;
}
.title {
  width: 100%;
  height: 40px;
  border-bottom: 1.5px solid rgb(0, 0, 0, 0.15);
  line-height: 40px;
  padding-left: 17px;
}
.progress {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-top: 10px;
  .el-progress {
    width: 100%;
  }
  div {
    font-size: 15px;
    color: rgb(0, 0, 0, 0.65);
  }
}
.one {
  margin-bottom: 10px;
}
.text {
  width: 80%;
  padding-left: 10%;
  margin-top: 10px;
  font-size: 15px;
  color: rgb(0, 0, 0, 0.65);
}
//上传图片--------
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: block;
}
//去掉图片边框
::v-deep .avatar-uploader .el-upload {
  border: 0 !important;
}
</style>
