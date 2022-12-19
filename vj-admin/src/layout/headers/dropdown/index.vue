<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <img class="logo" src="@/assets/logo.png" alt="" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="goPersonal">{{
          $t('menu.personal')
        }}</el-dropdown-item>
        <el-dropdown-item @click="goHome">{{
          $t('menu.home')
        }}</el-dropdown-item>
        <el-dropdown-item @click="logout">{{
          $t('menu.logout')
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import storage from '@/utils/storage'
const store = useStore()
const route = useRoute()
const router = useRouter()

const breadKeys = computed(() => store.state.keys.breadKeys)
const goPersonal = () => {
  storage.setItem_s('name', 'personal')
  store.commit('keys/changeBreadKeys', breadKeys.value)
  router.push('/personal')
}
const goHome = () => {
  storage.setItem_s('name', 'home')
  store.commit('keys/changeBreadKeys', breadKeys.value)
  router.push('/home')
}
const logout = () => {
  store.dispatch('login/logout')
}
</script>

<style lang="scss" scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.logo {
  width: 33px;
  height: 33px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
