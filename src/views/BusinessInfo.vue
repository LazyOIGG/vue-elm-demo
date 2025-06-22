<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden pb-32">
    <header class="h-12 bg-blue-600 text-white fixed w-full top-0 left-0 z-50 flex justify-center items-center">
      <p class="text-center px-4 truncate">商家信息</p>
    </header>

    <div class="mt-12 p-4">
      <img
          v-if="business.id"
          :src="getBusinessImage(business.id)"
          class="w-full h-40 object-cover rounded-lg"
          :alt="business.name"
      />
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
          <div v-if="totalQuantity"
               class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
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
import {ref, computed, onMounted, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import FooterNav from '../components/FooterNav.vue';

const route = useRoute();
const router = useRouter();

// 模拟数据
const businessesData = [
  {id: 1, name: '万家饺子（软件园E18店）', minPrice: 15, deliveryFee: 3, description: '各种饺子炒菜'},
  {id: 2, name: '小锅饭豆腐馆（全运店）', minPrice: 15, deliveryFee: 3, description: '特色美食'},
  {id: 3, name: '麦当劳麦乐送（全运路店）', minPrice: 30, deliveryFee: 5, description: '经典美式快餐'},
  {id: 4, name: '米村拌饭（浑南店）', minPrice: 20, deliveryFee: 4, description: '韩式拌饭套餐'},
  {id: 5, name: '申记串道（中海康城店）', minPrice: 40, deliveryFee: 6, description: '特色串串烧烤'},
  {id: 6, name: '半亩良田排骨米饭', minPrice: 22, deliveryFee: 4, description: '招牌排骨米饭'},
  {id: 7, name: '茶兮鲜果饮品（国际软件园店）', minPrice: 10, deliveryFee: 2, description: '新鲜水果饮品'},
  {id: 8, name: '唯一水果捞（软件园E18店）', minPrice: 12, deliveryFee: 3, description: '多样水果甜品'},
  {id: 9, name: '满园春饼（全运路店）', minPrice: 18, deliveryFee: 3, description: '东北特色春饼'}
];


const foodsData = {
  1: [
    {id: 1, name: '纯肉鲜肉（水饺）', description: '新鲜猪肉', price: 15, quantity: 2},
    {id: 2, name: '玉米鲜肉（水饺）', description: '玉米鲜肉', price: 16, quantity: 1},
  ],
  2: [
    {id: 3, name: '小锅豆腐', description: '招牌豆腐', price: 18, quantity: 0},
    {id: 4, name: '红烧肉', description: '经典红烧肉', price: 28, quantity: 0},
  ],
  3: [
    {id: 5, name: '巨无霸', description: '牛肉大汉堡', price: 36, quantity: 0},
    {id: 6, name: '薯条', description: '酥脆金黄', price: 12, quantity: 0},
  ],
  4: [
    {id: 7, name: '石锅拌饭', description: '韩式风味', price: 25, quantity: 0},
    {id: 8, name: '海带汤', description: '健康营养', price: 8, quantity: 0},
  ],
  5: [
    {id: 9, name: '烤串拼盘', description: '多样选择', price: 45, quantity: 0},
    {id: 10, name: '烤茄子', description: '香辣美味', price: 18, quantity: 0},
  ],
  6: [
    {id: 11, name: '排骨米饭', description: '秘制排骨', price: 22, quantity: 0},
    {id: 12, name: '酸辣汤', description: '开胃小菜', price: 6, quantity: 0},
  ],
  7: [
    {id: 13, name: '芒果鲜奶', description: '新鲜现做', price: 14, quantity: 0},
    {id: 14, name: '草莓果饮', description: '香甜可口', price: 13, quantity: 0},
  ],
  8: [
    {id: 15, name: '水果捞小杯', description: '小份尝鲜', price: 12, quantity: 0},
    {id: 16, name: '水果捞大杯', description: '多料满满', price: 18, quantity: 0},
  ],
  9: [
    {id: 17, name: '春饼套餐A', description: '配菜齐全', price: 20, quantity: 0},
    {id: 18, name: '春饼套餐B', description: '辣味精选', price: 22, quantity: 0},
  ]
};


const business = ref({});
const foods = ref([]);

// 加载数据
const loadBusinessData = (id) => {
  const numericId = parseInt(id);
  const foundBusiness = businessesData.find(b => b.id === numericId);
  if (foundBusiness) {
    business.value = foundBusiness;
    foods.value = foodsData[numericId] || [];
    console.log('Data loaded:', {business: business.value, foods: foods.value});
  } else {
    console.error(`Business with ID ${id} not found`);
    router.push('/business-list');
  }
};

// 监听路由参数变化
watch(() => route.params.id, (newId) => {
  if (newId) loadBusinessData(newId);
});

// 初始化加载
onMounted(() => {
  const id = route.params.id;
  console.log('Initial ID:', id);
  if (id) loadBusinessData(id);
});

// 计算属性
const totalQuantity = computed(() => {
  return foods.value.reduce((total, food) => total + (food.quantity || 0), 0);
});

const subtotal = computed(() => {
  return foods.value.reduce((total, food) => total + (food.price * (food.quantity || 0)), 0);
});

// 图片路径方法
const getBusinessImage = (id) => {
  const paddedId = id.toString().padStart(2, '0');
  return new URL(`../assets/images/sj${paddedId}.png`, import.meta.url).href;
};

const getFoodImage = (id) => {
  const paddedId = id.toString().padStart(2, '0');
  return new URL(`../assets/images/sp${paddedId}.png`, import.meta.url).href;
};
</script>