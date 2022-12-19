<template>
  <div @click="handleFullScreen" id="screenFull">
    <el-icon><FullScreen /></el-icon>
  </div>
</template>

<script setup>
import { FullScreen } from '@element-plus/icons-vue'
import screenfull from 'screenfull'
const handleFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
</script>

<style lang="scss" scoped>
.el-icon {
  font-size: $headRightIconSize;
  color: $headRightIconColor;
  margin-right: $headRightIconMargin;
}
</style>
