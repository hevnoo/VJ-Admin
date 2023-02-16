<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
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
const pathName = computed(() => {
  if (storage.getItem('pathName')) {
    return storage.getItem('pathName')
  } else {
    storage.setItem('pathName', store.state.bread.pathName)
    console.log('---', storage.getItem('pathName'))
    return store.state.bread.pathName
  }
  // return store.state.bread.pathName
})
// storage.setItem('pathName', pathName.value)
</script>

<style lang="scss" scoped></style>
