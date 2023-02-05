<template>
  <div>Roles</div>
</template>

<script setup>
//引入hooks
import useMousePosition from '@/hooks/useMousePosition'
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

//
const { x, y } = useMousePosition()
watch(x, (val) => {
  console.log('****', x.value, y.value)
})
</script>

<style lang="scss" scoped></style>
