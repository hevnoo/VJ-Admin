<template>
  <div class="wrapper-login">
    <SignIn v-show="isRegister == false" @isChangeView="getView"></SignIn>
    <Register v-show="isRegister == true" @isChangeViews="getView"></Register>
  </div>
</template>

<script setup>
import SignIn from '@/views/login/signIn/index.vue'
import Register from '@/views/login/register/index.vue'
import { ref, reactive, defineProps } from 'vue'
const isRegister = ref(false)
const getView = (val) => {
  isRegister.value = val
}
</script>

<style lang="scss" scoped>
.wrapper-login {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/img/login/infinity-7096443.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
