<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden -mx-4">
    <header class="h-12 bg-blue-600 text-white fixed w-full top-0 left-0 z-50 flex items-center px-4">
      <div class="flex items-center gap-2">
        <div class="w-5 h-5 bg-white rounded-full"></div>
        <span class="text-sm">当前地点<i class="ml-1 fa fa-caret-down"></i></span>
      </div>
    </header>

    <div class="mt-12 px-4 py-2 sticky top-12 z-40 bg-white -mx-4">
      <div class="search-box h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
        <i class="fa fa-search mr-2"></i>
        <span>搜索饿了么商家、商品名称</span>
      </div>
    </div>

    <ul class="grid grid-cols-5 gap-4 px-4 py-4 bg-white -mx-5">
      <li
          v-for="(item, index) in categories"
          :key="index"
          class="flex flex-col items-center"
          @click="goToBusinessList"
      >
        <img
            :src="getCategoryImage(index + 1)"
            class="w-12 h-12"
            :alt="item.name"
        >
        <p class="text-xs mt-1">{{ item.name }}</p>
      </li>
    </ul>

    <div class="m-4 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white">
      <h3 class="text-lg font-bold">品质套餐</h3>
      <p class="text-sm">搭配齐全吃得好</p>
      <a class="text-xs mt-2 inline-block">立即抢购 &gt;</a>
    </div>

    <div class="m-4 p-3 bg-white rounded-lg flex justify-between items-center shadow-sm">
      <div class="flex items-center gap-2">
        <img :src="getImagePath('super_member.png')" class="w-8 h-8" alt="获取图片路径">
        <div>
          <h3 class="text-sm font-bold">超级会员</h3>
          <p class="text-xs text-gray-500">&#8226; 每月享超值权益</p>
        </div>
      </div>
      <div class="text-sm text-orange-500">立即开通 &gt;</div>
    </div>

    <RecommendedSection :businesses="indexBusinesses" title="推荐商家" :imageOffset="1"/>
    <FooterNav title="底部栏"/>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import FooterNav from '../components/FooterNav.vue';
import RecommendedSection from "@/components/RecommendedSection.vue";

const router = useRouter();

// 分类数据
const categories = ref([
  {id: 1, name: '美食'},
  {id: 2, name: '早餐'},
  {id: 3, name: '跑腿代购'},
  {id: 4, name: '汉堡披萨'},
  {id: 5, name: '甜品饮品'},
  {id: 6, name: '速食简餐'},
  {id: 7, name: '地方小吃'},
  {id: 8, name: '米粉面馆'},
  {id: 9, name: '包子粥铺'},
  {id: 10, name: '炸鸡炸串'}
]);

// 商家数据
const indexBusinesses = ref([
  {
    id: 1,
    name: '万家饺子（软件园E18店）',
    rating: 4.9,
    sales: 345,
    minPrice: 15,
    deliveryFee: 3,
    distance: 3.22,
    deliveryTime: 30,
    promotions: [
      {type: 'new', text: '饿了么新用户首单立减9元'},
      {type: 'special', text: '特价商品5元起'}
    ]
  },
  {
    id: 2,
    name: '小锅饭豆腐馆（全运店）',
    rating: 4.8,
    sales: 289,
    minPrice: 20,
    deliveryFee: 4,
    distance: 2.5,
    deliveryTime: 25,
    promotions: [
      {type: 'new', text: '新用户立减10元'}
    ]
  },
  {
    id: 3,
    name: '麦当劳麦乐送（全运路店）',
    rating: 4.7,
    sales: 512,
    minPrice: 30,
    deliveryFee: 5,
    distance: 1.8,
    deliveryTime: 20,
    promotions: [
      {type: 'special', text: '超值套餐优惠'}
    ]
  },
  {
    id: 4,
    name: '米村拌饭（浑南店）',
    rating: 4.6,
    sales: 198,
    minPrice: 25,
    deliveryFee: 4,
    distance: 3.5,
    deliveryTime: 35,
    promotions: [
      {type: 'new', text: '首单立减8元'},
      {type: 'special', text: '招牌拌饭特价'}
    ]
  },
  {
    id: 5,
    name: '申记串道（中海康城店）',
    rating: 4.5,
    sales: 276,
    minPrice: 40,
    deliveryFee: 6,
    distance: 4.2,
    deliveryTime: 40,
    promotions: [
      {type: 'special', text: '满100减15'}
    ]
  }
]);

const getImagePath = (filename) => {
  return new URL(`../assets/images/${filename}`, import.meta.url).href;
};

const getCategoryImage = (id) => {
  const paddedId = id.toString().padStart(2, '0');
  return getImagePath(`dcfl${paddedId}.png`);
};

const goToBusinessList = () => {
  router.push('/businessList');
};
</script>

<style>
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
</style>