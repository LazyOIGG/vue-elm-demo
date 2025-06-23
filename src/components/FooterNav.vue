<template>
  <!-- 添加 left-0 和 overflow-hidden 防止偏移 -->
  <nav class="h-14 bg-white border-t border-gray-300 fixed bottom-0 left-0 w-full overflow-hidden">
    <!-- 限制最大宽度并水平居中 -->
    <div class="container mx-auto h-full max-w-screen-sm px-4">
      <ul class="h-full flex justify-around items-center">
        <li
            v-for="item in navItems"
            :key="item.path"
            @click="navigateTo(item.path)"
            class="flex flex-col items-center text-gray-500 active:text-blue-500 transition-colors"
        >
          <component
              :is="item.icon"
              class="text-xl sm:text-2xl mb-1"
          />
          <span class="text-xs sm:text-sm">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import {useRouter} from 'vue-router'
import {
  HomeIcon,
  CompassIcon,
  OrderIcon,
  UserIcon
} from '@/icons'

const router = useRouter()

const navItems = [
  {path: '/', icon: HomeIcon, label: '首页'},
  {path: '/discover', icon: CompassIcon, label: '发现'},
  {path: '/orderList', icon: OrderIcon, label: '订单'},
  {path: '/profile', icon: UserIcon, label: '我的'}
]

const navigateTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
/* 修复 iOS 底部安全区域 */
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  nav {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>