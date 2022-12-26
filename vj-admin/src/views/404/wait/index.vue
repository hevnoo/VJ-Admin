<template>
  <el-empty description="wait" />
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
const route = useRoute()
const router = useRouter()
const store = useStore()
onMounted(() => {
  // router.replace('/home')
})
// router.replace('/home')
</script>

<style lang="scss" scoped></style>
