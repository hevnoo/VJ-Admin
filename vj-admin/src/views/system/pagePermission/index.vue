<template>
  <div class="wrapper">
    <header class="header">
      <section>
        <p>你的权限：</p>
        <span>["{{ role }}"]</span>
      </section>
      <section>
        <p>切换权限：</p>
        <el-button type="primary">admin</el-button>
      </section>
    </header>
    <!--  -->
    <main class="main">
      <div v-for="item in list" :key="list.id" class="box">
        <section class="card">{{ item.name }}</section>
        <section
          v-if="item.children"
          v-for="res in item.children"
          :key="res.id"
          class="card cards"
        >
          {{ res.name }}
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import storage from '@/utils/storage.js'
const store = useStore()
const route = useRoute()
const router = useRouter()

const role = computed(() => store.state.login.role)
const menuList = computed(() => store.state.login.menuList)
let list = reactive([])
list = menuList.value

console.log(list)
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
}
.header {
  section {
    display: flex;
    margin-bottom: 20px;
    .el-button {
      display: inline-block;
    }
    &:nth-child(2) {
      display: flex;
      align-items: center;
    }
  }
}
.main {
  margin-top: 20px;
  margin-right: 50%;
}
.card {
  display: inline-block;
  text-align: center;
  padding: 12px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: #f0f9eb;
  color: #77cb7c;
}
.cards {
  color: #30a8ff;
}
</style>
