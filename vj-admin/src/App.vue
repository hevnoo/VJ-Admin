<template>
  <router-view />
</template>

<script setup>
// App.vue文件内插入生产者provide
import * as echarts from 'echarts'
import { provide } from 'vue'
import { ref, computed, watch } from 'vue'
provide('echarts', echarts)
// const menuList = computed(() => store.state.login.menuList)
// const mark = computed(() => store.state.login.mark)
</script>

<style lang="scss"></style>
