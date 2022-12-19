<template>
  <router-view />
</template>

<script setup>
// App.vue文件内插入生产者provide
import * as echarts from 'echarts'
import { provide } from 'vue'
provide('echarts', echarts)
</script>

<style lang="scss"></style>
