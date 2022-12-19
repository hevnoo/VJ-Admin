<template>
  <div class="wrapper-header">
    <div class="front">
      <section class="switch" @click="changeSwitch">
        <el-icon v-if="!isClose"><Fold /></el-icon>
        <el-icon v-else><Expand /></el-icon>
      </section>
      <span class="navBread">
        <Bread :key="breadKeys"></Bread>
      </span>
    </div>
    <div class="back">
      <Driver></Driver>
      <ScreenFull></ScreenFull>
      <Lang></Lang>
      <Dropdown></Dropdown>
    </div>
  </div>
</template>

<script setup>
import Bread from '@/layout/headers/bread/index.vue'
import Dropdown from '@/layout/headers/dropdown/index.vue'
import Lang from '@/layout/headers/lang/index.vue'
import ScreenFull from '@/layout/headers/screenFull/index.vue'
import Driver from '@/layout/headers/driver/index.vue'
import { ref, computed, watch, defineEmits } from 'vue'
import { Expand, Fold, UserFilled } from '@element-plus/icons-vue'
import { useStore } from 'vuex'

const store = useStore()

let isClose = ref(false)
const breadKeys = computed(() => store.state.keys.breadKeys)
const changeSwitch = () => {
  isClose.value = !isClose.value
  store.commit('appSwitch/change', isClose.value)
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
