<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden pb-16">
    <header class="h-12 bg-blue-600 text-white fixed w-full top-0 left-0 z-50 flex justify-center items-center">
      <p class="text-center px-4 truncate">在线支付</p>
    </header>

    <div class="mt-12 p-4">
      <h3 class="font-bold mb-2">订单信息：</h3>
      <div class="bg-white rounded-lg p-3 flex justify-between items-center mb-4">
        <p>{{ order.business }}</p>
        <p class="font-bold">&#165;{{ order.total }}</p>
      </div>

      <ul class="bg-white rounded-lg overflow-hidden mb-4">
        <li
            v-for="(item, index) in order.items"
            :key="index"
            class="p-3 border-b flex justify-between"
        >
          <p>{{ item.name }} x {{ item.quantity }}</p>
          <p>&#165;{{ item.price }}</p>
        </li>
        <li class="p-3 border-b flex justify-between">
          <p>配送费</p>
          <p>&#165;{{ order.deliveryFee }}</p>
        </li>
      </ul>

      <h3 class="font-bold mb-2">支付方式：</h3>
      <ul class="bg-white rounded-lg overflow-hidden mb-8">
        <li
            v-for="(method, index) in paymentMethods"
            :key="index"
            class="p-3 border-b flex justify-between items-center"
            @click="selectPayment(index)"
        >
          <img :src="method.icon" class="h-8" alt="">
          <i
              class="fa text-xl"
              :class="[selectedPayment === index ? 'fa-check-circle text-green-500' : 'fa-circle-o text-gray-300']"
          ></i>
        </li>
      </ul>

      <button
          class="w-full bg-green-500 text-white py-3 rounded-full font-bold"
          @click="confirmPayment"
      >
        确认支付
      </button>
    </div>

    <FooterNav title="底部栏"/>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import FooterNav from '../components/FooterNav.vue';

const router = useRouter();

const order = ref({
  business: '万家饺子（软件园E18店）',
  items: [
    {name: '纯肉鲜肉（水饺）', price: 15, quantity: 2},
    {name: '玉米鲜肉（水饺）', price: 16, quantity: 1}
  ],
  deliveryFee: 3,
  total: 49
});

const paymentMethods = ref([
  {name: '支付宝', icon: new URL('../assets/images/alipay.png', import.meta.url).href},
  {name: '微信支付', icon: new URL('../assets/images/wechat.png', import.meta.url).href}
]);

const selectedPayment = ref(0);

const selectPayment = (index) => {
  selectedPayment.value = index;
};

const confirmPayment = () => {
  // 支付逻辑
  router.push('/order-list');
};
</script>