<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden pb-16">
    <header class="h-12 bg-blue-600 text-white fixed w-full top-0 left-0 z-50 flex justify-center items-center">
      <p class="text-center px-4 truncate">确认订单</p>
    </header>

    <div class="mt-12 p-4">
      <h5 class="text-gray-500">订单配送至：</h5>
      <div class="flex justify-between items-center p-3 bg-white rounded-lg mt-2">
        <p>沈阳市浑南区智慧四街1-121号</p>
        <i class="fa fa-angle-right text-gray-400"></i>
      </div>
      <p class="mt-1">彭锦涛先生 13656785432</p>

      <h3 class="text-lg font-bold mt-4">{{ business.name }}</h3>

      <ul class="mt-2">
        <li v-for="(item, index) in orderItems" :key="index" class="py-3 border-b flex justify-between">
          <div class="flex items-center gap-2">
            <img
                :src="getFoodImage(item.id)"
                class="w-10 h-10 rounded"
                :alt="item.name"
            >
            <p>{{ item.name }} x {{ item.quantity }}</p>
          </div>
          <p>&#165;{{ item.price * item.quantity }}</p>
        </li>
      </ul>

      <div class="flex justify-between py-3 border-b">
        <p>配送费</p>
        <p>&#165;{{ business.deliveryFee }}</p>
      </div>

      <div class="fixed bottom-16 left-0 right-0 bg-white border-t p-3 flex justify-between items-center">
        <div class="text-lg font-bold">&#165;{{ total }}</div>
        <button
            class="bg-green-500 text-white px-6 py-2 rounded-full"
            @click="goToPayment"
        >
          去支付
        </button>
      </div>
    </div>

    <FooterNav title="底部栏"/>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router';
import FooterNav from '../components/FooterNav.vue';

const router = useRouter();

const business = ref({
  name: '万家饺子（软件园E18店）',
  deliveryFee: 3
});

const orderItems = ref([
  {id: 1, name: '纯肉鲜肉（水饺）', price: 15, quantity: 2},
  {id: 2, name: '玉米鲜肉（水饺）', price: 16, quantity: 1}
]);

const total = computed(() => {
  const subtotal = orderItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return subtotal + business.value.deliveryFee;
});

const getFoodImage = (id) => {
  const paddedId = id.toString().padStart(2, '0');
  return new URL(`../assets/images/sp${paddedId}.png`, import.meta.url).href;
};

const goToPayment = () => {
  router.push('/payment');
};
</script>