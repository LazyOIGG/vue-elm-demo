<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden pb-32">
    <header class="h-12 bg-blue-600 text-white fixed w-full top-0 left-0 z-50 flex justify-center items-center">
      <p class="text-center px-4 truncate">商家信息</p>
    </header>

    <div class="mt-12 p-4">
      <img
        :src="getBusinessImage(business.id)"
        class="w-full h-40 object-cover rounded-lg"
        :alt="business.name"
      >
      <h1 class="text-xl font-bold mt-2">{{ business.name }}</h1>
      <p class="text-gray-600">&#165;{{ business.minPrice }}起送 &#165;{{ business.deliveryFee }}配送</p>
      <p class="text-gray-600">{{ business.description }}</p>

      <ul class="mt-4">
        <li v-for="(food, index) in foods" :key="index" class="py-3 border-b flex justify-between">
          <div class="flex gap-3">
            <img
              :src="getFoodImage(food.id)"
              class="w-16 h-16 rounded"
              :alt="food.name"
            >
            <div>
              <h3 class="font-bold">{{ food.name }}</h3>
              <p class="text-sm text-gray-500">{{ food.description }}</p>
              <p class="text-red-500">&#165;{{ food.price }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <i class="fa fa-minus text-xs"></i>
            </button>
            <span v-if="food.quantity">{{ food.quantity }}</span>
            <button class="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
              <i class="fa fa-plus text-xs"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div class="fixed bottom-16 left-0 right-0 bg-white border-t p-3 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="relative">
          <i class="fa fa-shopping-cart text-2xl"></i>
          <div v-if="totalQuantity" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {{ totalQuantity }}
          </div>
        </div>
        <div>
          <p class="font-bold">&#165;{{ subtotal }}</p>
          <p class="text-xs text-gray-500">另需配送费{{ business.deliveryFee }}元</p>
        </div>
      </div>
      <button
        class="bg-green-500 text-white px-6 py-2 rounded-full"
        :class="{ 'opacity-50': subtotal < business.minPrice }"
      >
        {{ subtotal >= business.minPrice ? '去结算' : `¥${business.minPrice}起送` }}
      </button>
    </div>

    <FooterNav title="底部栏"/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import FooterNav from '../components/FooterNav.vue';

const route = useRoute();
const router = useRouter();

const business = ref({
  id: 1,
  name: '万家饺子（软件园E18店）',
  minPrice: 15,
  deliveryFee: 3,
  description: '各种饺子炒菜'
});

const foods = ref([
  { id: 1, name: '纯肉鲜肉（水饺）', description: '新鲜猪肉', price: 15, quantity: 2 },
  { id: 2, name: '玉米鲜肉（水饺）', description: '玉米鲜肉', price: 16, quantity: 1 },
  // 其他食品数据...
]);

const totalQuantity = computed(() => {
  return foods.value.reduce((total, food) => total + (food.quantity || 0), 0);
});

const subtotal = computed(() => {
  return foods.value.reduce((total, food) => total + (food.price * (food.quantity || 0)), 0);
});

const getBusinessImage = (id) => {
  const paddedId = id.toString().padStart(2, '0');
  return new URL(`../assets/images/sj${paddedId}.png`, import.meta.url).href;
};

const getFoodImage = (id) => {
  const paddedId = id.toString().padStart(2, '0');
  return new URL(`../assets/images/sp${paddedId}.png`, import.meta.url).href;
};
</script>