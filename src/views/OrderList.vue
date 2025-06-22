<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden pb-16">
    <header class="h-12 bg-blue-600 text-white fixed w-full top-0 left-0 z-50 flex justify-center items-center">
      <p class="text-center px-4 truncate">我的订单</p>
    </header>

    <div class="mt-12 p-4">
      <!-- 新增创建订单按钮 -->
      <div class="mb-4 flex justify-end">
        <button
          @click="goToOrder"
          class="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-1"
        >
          <i class="fa fa-plus"></i>
          <span>创建新订单</span>
        </button>
      </div>

      <h3 class="font-bold mb-2">未支付订单信息：</h3>
      <ul>
        <li v-for="(order, index) in unpaidOrders" :key="index" class="mb-4 bg-white rounded-lg overflow-hidden">
          <div class="p-3 border-b flex justify-between items-center">
            <p>{{ order.business }}</p>
            <div class="flex items-center gap-2">
              <p class="font-bold">&#165;{{ order.total }}</p>
              <button
                class="bg-green-500 text-white px-3 py-1 rounded-full text-sm"
                @click="goToOrder(order)"
              >
                去支付
              </button>
            </div>
          </div>
          <ul class="p-3">
            <li v-for="(item, i) in order.items" :key="i" class="flex justify-between py-1 text-sm">
              <p>{{ item.name }} x {{ item.quantity }}</p>
              <p>&#165;{{ item.price }}</p>
            </li>
            <li class="flex justify-between py-1 text-sm border-t mt-1">
              <p>配送费</p>
              <p>&#165;{{ order.deliveryFee }}</p>
            </li>
          </ul>
        </li>
      </ul>

      <h3 class="font-bold mt-6 mb-2">已支付订单信息：</h3>
      <ul>
        <li v-for="(order, index) in paidOrders" :key="index" class="mb-4 bg-white rounded-lg overflow-hidden">
          <div class="p-3 border-b flex justify-between items-center">
            <p>{{ order.business }}</p>
            <p class="font-bold">&#165;{{ order.total }}</p>
          </div>
          <ul class="p-3">
            <li v-for="(item, i) in order.items" :key="i" class="flex justify-between py-1 text-sm">
              <p>{{ item.name }} x {{ item.quantity }}</p>
              <p>&#165;{{ item.price }}</p>
            </li>
            <li class="flex justify-between py-1 text-sm border-t mt-1">
              <p>配送费</p>
              <p>&#165;{{ order.deliveryFee }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <FooterNav title="底部栏"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FooterNav from '../components/FooterNav.vue';

const router = useRouter();

const unpaidOrders = ref([
  {
    id: 1, // 添加订单ID
    business: '万家饺子（软件园E18店）',
    items: [
      { id: 1, name: '纯肉鲜肉（水饺）', price: 15, quantity: 2 },
      { id: 2, name: '玉米鲜肉（水饺）', price: 16, quantity: 1 }
    ],
    deliveryFee: 3,
    total: 49
  }
  // 其他未支付订单...
]);

const paidOrders = ref([
  {
    id: 2, // 添加订单ID
    business: '小锅饭豆腐馆（全运店）',
    items: [
      { id: 3, name: '蛋黄焗豆花', price: 25, quantity: 1 },
      { id: 4, name: '麻婆豆腐', price: 18, quantity: 1 }
    ],
    deliveryFee: 3,
    total: 46
  }
  // 其他已支付订单...
]);

// 跳转到订单页面
const goToOrder = (order = null) => {
  // 如果有订单信息，可以传递到订单页面
  if (order) {
    router.push({
      path: '/order',
      query: {
        orderId: order.id
      }
    });
  } else {
    // 创建新订单
    router.push('/order');
  }
};
</script>

<style scoped>
button {
  transition: all 0.2s ease;
}
button:active {
  transform: scale(0.95);
}
</style>