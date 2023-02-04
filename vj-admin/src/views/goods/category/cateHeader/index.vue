<template>
  <div class="container">
    <el-input
      class="input"
      v-model="info.className"
      placeholder="请输入分类名称"
    >
      <template #append>
        <el-button class="btn" @click="adds()">添加分类</el-button>
      </template>
    </el-input>
    <!-- <section></section> -->
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()
let info = reactive({
  className: null
})

const adds = () => {
  if (info.className) {
    store.dispatch('classes/addClass', info)
    info.className = ''
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
  margin-left: 7px;
}
.input {
  width: 300px;
  height: 35px;
}
.btn {
  color: rgba(250, 250, 250, 1) !important;
}
//添加分类按钮
::v-deep .el-input-group__append {
  background-color: rgba(32, 176, 172, 0.7);
  border: none;
  cursor: pointer;
}
::v-deep .el-input-group__append:hover {
  background-color: rgba(32, 176, 172, 0.5);
}
::v-deep .el-input-group__append:active {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
