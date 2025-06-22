<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden pb-16">
    <header class="h-12 bg-blue-600 text-white fixed w-full top-0 left-0 z-50 flex justify-center items-center">
      <p class="text-center px-4 truncate">商家列表</p>
    </header>

    <ul class="mt-12">
      <li
        v-for="(business, index) in businesses"
        :key="index"
        class="p-4 border-b flex gap-3 bg-white"
        @click="goToBusinessInfo(business.id)"
      >
        <img
          :src="getBusinessImage(business.id)"
          class="w-20 h-20 rounded"
          :alt="business.name"
        >
        <div class="flex-1">
          <h3 class="font-bold">{{ business.name }}</h3>
          <div class="flex justify-between text-xs text-gray-500 mt-1">
            <p>&#165;{{ business.minPrice }}起送 | &#165;{{ business.deliveryFee }}配送</p>
          </div>
          <p class="text-sm mt-1">{{ business.description }}</p>
          <div v-if="business.quantity" class="absolute top-14 right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {{ business.quantity }}
          </div>
        </div>
      </li>
    </ul>

    <FooterNav title="底部栏"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FooterNav from '../components/FooterNav.vue';

const router = useRouter();

const businesses = ref([
  {
    id: 1,
    name: '万家饺子（软件园E18店）',
    minPrice: 15,
    deliveryFee: 3,
    description: '各种饺子炒菜',
    quantity: 3
  },
  {
    id: 2,
    name: '小锅饭豆腐馆（全运店）',
    minPrice: 15,
    deliveryFee: 3,
    description: '特色美食',
    quantity: 2
  },
  {
    id: 3,
    name: '麦当劳麦乐送（全运路店）',
    minPrice: 30,
    deliveryFee: 5,
    description: '经典美式快餐',
    quantity: 5
  },
  {
    id: 4,
    name: '米村拌饭（浑南店）',
    minPrice: 20,
    deliveryFee: 4,
    description: '韩式拌饭套餐',
    quantity: 4
  },
  {
    id: 5,
    name: '申记串道（中海康城店）',
    minPrice: 40,
    deliveryFee: 6,
    description: '特色串串烧烤',
    quantity: 2
  },
  {
    id: 6,
    name: '半亩良田排骨米饭',
    minPrice: 22,
    deliveryFee: 4,
    description: '招牌排骨米饭',
    quantity: 3
  },
  {
    id: 7,
    name: '茶兮鲜果饮品（国际软件园店）',
    minPrice: 10,
    deliveryFee: 2,
    description: '新鲜水果饮品',
    quantity: 6
  },
  {
    id: 8,
    name: '唯一水果捞（软件园E18店）',
    minPrice: 12,
    deliveryFee: 3,
    description: '多样水果甜品',
    quantity: 1
  },
  {
    id: 9,
    name: '满园春饼（全运路店）',
    minPrice: 18,
    deliveryFee: 3,
    description: '东北特色春饼',
    quantity: 4
  }
])


const getBusinessImage = (id) => {
  const paddedId = id.toString().padStart(2, '0');
  return new URL(`../assets/images/sj${paddedId}.png`, import.meta.url).href;
};

const goToBusinessInfo = (id) => {
  router.push(`/business-info/${id}`);
};
</script>