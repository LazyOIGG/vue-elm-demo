<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
    <header class="h-12 bg-pink-500 text-white fixed w-full top-0 left-0 z-50 flex items-center px-4">
      <div class="flex items-center gap-2">
        <i class="fa fa-compass"></i>
        <span class="text-sm">发现美食好去处</span>
      </div>
    </header>

    <div class="mt-12 p-4">
      <div class="rounded-lg bg-gradient-to-r from-red-400 to-pink-400 text-white p-4">
        <h2 class="text-lg font-bold">超值限时抢购</h2>
        <p class="text-sm">每日更新 · 超低折扣</p>
        <button class="mt-2 text-xs bg-white text-pink-500 px-2 py-1 rounded">立即参与</button>
      </div>
    </div>

    <div class="px-4 mt-2">
      <h3 class="text-sm font-bold mb-2 text-gray-700">热门商圈</h3>
      <div class="flex flex-wrap gap-2">
        <span class="bg-white border text-xs px-3 py-1 rounded shadow-sm">沈河区</span>
        <span class="bg-white border text-xs px-3 py-1 rounded shadow-sm">铁西广场</span>
        <span class="bg-white border text-xs px-3 py-1 rounded shadow-sm">中街</span>
        <span class="bg-white border text-xs px-3 py-1 rounded shadow-sm">北站</span>
        <span class="bg-white border text-xs px-3 py-1 rounded shadow-sm">奥体中心</span>
        <span class="bg-white border text-xs px-3 py-1 rounded shadow-sm">浑南新城</span>
      </div>
    </div>

    <div class="px-4 mt-6">
      <h3 class="text-sm font-bold mb-2 text-gray-700">附近推荐</h3>
      <ul class="space-y-4">
        <li class="bg-white p-3 rounded-lg shadow-sm flex gap-3 items-center">
          <img :src="getImagePath('discover01.jpg')" class="w-16 h-16 rounded" alt="附近推荐图">
          <div class="flex-1">
            <h4 class="text-sm font-bold">奶茶集合店（北站店）</h4>
            <p class="text-xs text-gray-500 mt-1">5分钟内送达 · 好评率96%</p>
          </div>
        </li>
        <li class="bg-white p-3 rounded-lg shadow-sm flex gap-3 items-center">
          <img :src="getImagePath('discover02.jpg')" class="w-16 h-16 rounded" alt="附近推荐图">
          <div class="flex-1">
            <h4 class="text-sm font-bold">望京串串香（浑南店）</h4>
            <p class="text-xs text-gray-500 mt-1">人气爆棚 · 月销2000+</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 会员广告 -->
    <div class="m-4 p-3 bg-white rounded-lg flex justify-between items-center shadow-sm">
      <div class="flex items-center gap-2">
        <img :src="getImagePath('super_member.png')" class="w-8 h-8" alt="会员">
        <div>
          <h3 class="text-sm font-bold">尊享会员</h3>
          <p class="text-xs text-gray-500">&#8226; 享受独家折扣</p>
        </div>
      </div>
      <div class="text-sm text-pink-500">立即加入 &gt;</div>
    </div>

    <RecommendedSection :businesses="indexBusinesses" title="推荐商家" :imageOffset="1"/>
    <FooterNav title="底部栏"/>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import FooterNav from '../components/FooterNav.vue'
import RecommendedSection from "@/components/RecommendedSection.vue";

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
}

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
