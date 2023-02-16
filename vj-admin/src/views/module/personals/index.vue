<template>
  <div class="wrapper">
    <About class="about" v-if="userInfo"></About>
    <Modify class="modify"></Modify>
    <!-- <section class="about" v-if="userInfo">
      <About></About>
    </section>
    <section class="modify">
      <Modify></Modify>
    </section> -->
  </div>
</template>

<script setup>
import About from '@/views/personal/about/index.vue'
import Modify from '@/views/personal/modify/index.vue'
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
//初始化加载列表数据
const aa = () => {
  store.dispatch('login/userInfo')
}
aa()
const userInfo = computed(() => store.state.login.userInfo)
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
.modify {
  margin-left: 30px;
}
</style>
