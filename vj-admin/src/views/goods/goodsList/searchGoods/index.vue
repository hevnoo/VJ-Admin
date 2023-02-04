<template>
  <div class="item date">
    <span class="name">日期</span>
    <el-date-picker
      v-model="searchForm.date"
      type="daterange"
      range-separator="-"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      clearable
    />
  </div>
  <div class="item classes">
    <span class="name">商品类别</span>
    <el-select
      v-model="searchForm.goodsClass"
      placeholder="请选择分类"
      clearable
    >
      <el-option
        v-for="item in classList"
        :key="item.id"
        :label="item.className"
        :value="item.className"
      />
    </el-select>
  </div>
  <div class="item goodsName">
    <span class="name">商品名称</span>
    <el-input
      v-model="searchForm.goodsName"
      placeholder="请输入内容"
      clearable
    />
  </div>
  <!--  -->
  <el-button class="btn1" type="primary" @click="search">查询</el-button>
  <el-button class="btn2" type="success" @click="addGoodsLog"
    >弹窗添加</el-button
  >
  <el-button class="btn3" type="primary">页面添加</el-button>
  <!-- 弹框 -->
  <GoodsDialog
    :isDialog="isDialog"
    :form="form"
    :eventMark="eventMark"
    @isDialogGoods="isDialogGoods"
    @sendImg="sendImg"
  ></GoodsDialog>
  <!-- <el-dialog v-model="isDialog" title="添加商品">
    <el-form destroy-on-close>
      <el-form-item label="商品名称">
        <el-input v-model="form.goodsName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品数量">
        <el-input v-model="form.goodsNumber" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.goodsPrice" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品分类">
        <el-input v-model="form.goodsClass" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品图片">
        <el-input v-model="form.goods_img" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input v-model="form.goodsDescribe" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isDialog = false">取消</el-button>
        <el-button type="primary" @click="confirm"> 添加 </el-button>
      </span>
    </template>
  </el-dialog> -->
</template>

<script setup>
import GoodsDialog from '@/components/goodsDialog/index.vue'
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import storage from '@/utils/storage.js'
import store from '@/store'
import dayjs from 'dayjs'
import { ElMessage } from 'element-plus'
const searchForm = reactive({
  date: '',
  goodsClass: '',
  goodsName: ''
})
const form = reactive({
  goodsName: '',
  goodsNumber: 0,
  goodsPrice: 0,
  goodsClass: '',
  goods_img: null,
  goodsDescribe: ''
})
let isDialog = ref(false)
const classList = computed(() => store.state.classes.classList)
const eventMark = ref('searchGoods') //传事件标识，dialog子组件依据标识判断
const currentPage = computed(() => store.state.appSwitch.currentPage)
let isSearch = ref(false) //标识是否是搜索状态，搜索状态就传页码到搜索请求。
//搜索
const search = () => {
  // store.commit('goods/changePage', 1)
  if (!searchForm.date && !searchForm.goodsName && !searchForm.goodsClass) {
    isSearch.value = false
    store.dispatch('goods/getGoodsList', currentPage.value)
  } else {
    isSearch.value = true //开启搜索状态标识
    searchForm.page = currentPage.value //添加page属性到searchForm
    store.dispatch('goods/getSearchGoods', searchForm)
    isSearch.value = false
  }
}
//添加
const addGoodsLog = () => {
  isDialog.value = true
}
const isDialogGoods = (emi) => {
  isDialog.value = emi
}
const sendImg = (emi) => {
  form.goods_img = emi
}
// const confirm = () => {
//   store.dispatch('goods/addGoods', form)
//   setTimeout(() => {
//     store.dispatch('goods/getGoodsList', currentPage.value)
//   }, 500)
//   isDialog.value = false
// }
watch(
  currentPage,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      //如果搜索状态标识为true，那么请求的是搜索列表，否则为默认数据列表。
      if (isSearch.value === true) {
        isSearch.value = false
        searchForm.page = currentPage.value
        store.dispatch('goods/getSearchGoods', searchForm)
      } else {
        store.dispatch('goods/getGoodsList', currentPage.value)
      }
    }
  }
  // { immediate: true, deep: true }
)
</script>

<style lang="scss" scoped>
.item {
  margin-right: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .name {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    margin-right: 7px;
    white-space: nowrap;
  }
}
//1.日期
.date {
  width: 20%;
  ::v-deep .el-input__wrapper {
    flex: 1;
    height: 35px;
  }
}
//2.选项分类
.classes {
  width: 22%;
  ::v-deep .el-input {
    flex: 1;
    height: 35px;
  }
}
//3.商品名称
.goodsName {
  width: 22%;
  ::v-deep .el-input {
    flex: 1;
    height: 35px;
  }
}

//按钮
.el-button {
  width: 6%;
  height: 35px;
  // margin-left: 20px;
}
.btn1 {
  margin-left: 15px;
}
.btn2,
.btn3 {
  width: 8%;
  margin-left: 20px;
}
</style>
