<template>
  <div>
    <!-- 推荐商家标题行 -->
    <div class="flex items-center justify-center my-2">
      <div class="h-px bg-gray-200 flex-1"></div>
      <p class="px-4 text-sm text-gray-600">{{ title }}</p>
      <div class="h-px bg-gray-200 flex-1"></div>
    </div>

    <!-- 排序方式 -->
    <ul class="flex justify-around px-4 py-2 bg-white text-sm text-gray-600 border-b">
      <li class="flex items-center">综合排序<i class="ml-1 fa fa-caret-down"></i></li>
      <li>距离最近</li>
      <li>销量最高</li>
      <li class="flex items-center">筛选<i class="ml-1 fa fa-filter"></i></li>
    </ul>

    <!-- 商家列表 -->
    <ul class="pb-16">
      <li
        v-for="(business, index) in businesses"
        :key="index"
        class="p-4 border-b flex gap-3 bg-white"
      >
        <img
          :src="getBusinessImage(index + imageOffset)"
          class="w-20 h-20 rounded"
          :alt="business.name"
        >

        <div class="flex-1">
          <div class="flex justify-between">
            <h3 class="font-bold">{{ business.name }}</h3>
            <div class="text-gray-400">&#8226;</div>
          </div>

          <div class="flex justify-between items-center mt-1 text-xs">
            <div class="flex items-center">
              <i class="fa fa-star text-yellow-400 mr-1" v-for="n in 5" :key="n"></i>
              <span class="text-gray-500 ml-1">{{ business.rating }} 月售{{ business.sales }}单</span>
            </div>
            <div class="bg-blue-100 text-blue-600 text-xs px-1 rounded">蜂鸟专送</div>
          </div>

          <div class="flex justify-between text-xs text-gray-500 mt-1">
            <p>&#165;{{ business.minPrice }}起送 | &#165;{{ business.deliveryFee }}配送</p>
            <p>{{ business.distance }}km | {{ business.deliveryTime }}分钟</p>
          </div>

          <div class="mt-2 flex flex-wrap gap-1">
            <div
              v-for="(promo, i) in business.promotions"
              :key="i"
              class="flex items-center text-xs"
            >
              <div
                :class="['w-4 h-4 text-white text-center rounded mr-1',
                         promo.type === 'new' ? 'bg-green-500' : 'bg-orange-400']"
              >
                {{ promo.type === 'new' ? '新' : '特' }}
              </div>
              <span>{{ promo.text }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '推荐商家'
  },
  businesses: {
    type: Array,
    required: true
  },
  imageOffset: {
    type: Number,
    default: 1
  }
})

const getBusinessImage = (id) => {
  const paddedId = id.toString().padStart(2, '0')
  return new URL(`../assets/images/sj${paddedId}.png`, import.meta.url).href
}
</script>
