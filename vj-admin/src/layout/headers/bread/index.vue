<template>
  <el-breadcrumb separator="/" id="bread">
    <el-breadcrumb-item @click="removeStorage"
      ><a href="/">{{ $t('menu.home') }}</a></el-breadcrumb-item
    >
    <!-- <el-breadcrumb-item :to="{ path: '/' }" @click="removeStorage"
      >首页</el-breadcrumb-item
    > -->
    <el-breadcrumb-item v-show="name !== 'home'">{{
      $t(`menu.${name}`)
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, reactive, computed, watch, defineEmits } from 'vue'
import { useStore } from 'vuex'
import storage from '@/utils/storage.js'
const store = useStore()
// const emits = defineEmits(['sendClose'])
const name = computed(() => {
  return storage.getItem_s('name') || 'home'
})
const removeStorage = () => {
  storage.removeItem_s('name')
}

// const pathName = computed({
//   get() {
//     return store.state.bread.pathName
//   },
//   set(newVal) {
//     store.state.bread.pathName = newVal
//   }
// })
// watch(
//   name,
//   (newVal, oldVal) => {
//     console.log('新', newVal, oldVal)
//     pathName.value = newVal
//   },
//   { immediate: false, deep: true }
// )
</script>

<style lang="scss" scoped></style>
