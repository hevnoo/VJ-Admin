<template>
  <!-- 订单审核 -->
  <div class="wrapper-auditing">
    <header class="header">
      <el-input class="input" v-model="input" placeholder="请输入订单" />
      <el-button class="btn" type="primary">审核</el-button>
    </header>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import storage from '@/utils/storage.js'
const store = useStore()
const route = useRoute()
const router = useRouter()
let input = ref('')
</script>

<style lang="scss" scoped>
.wrapper-auditing {
  margin-top: 30px;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input {
  width: 40%;
  height: 45px;
}
.btn {
  width: 6%;
  height: 35px;
  margin-left: 10px;
}
</style>
