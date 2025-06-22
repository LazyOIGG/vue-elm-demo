<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <!-- 头部 -->
    <header class="h-12 bg-blue-600 text-white fixed w-full top-0 left-0 z-50 flex justify-center items-center">
      <p class="text-center px-4 truncate">我的资料</p>
    </header>

    <!-- 未登录状态 -->
    <div v-if="!isAuthenticated" class="mt-12 flex-1 p-4 flex flex-col items-center justify-center">
      <div class="max-w-md w-full space-y-4">
        <h3 class="text-xl font-bold text-center mb-6">请先登录或注册</h3>

        <router-link
          to="/login"
          class="block w-full h-12 bg-green-500 text-white font-bold rounded-lg flex items-center justify-center active:scale-95 transition-transform"
        >
          登录
        </router-link>

        <router-link
          to="/register"
          class="block w-full h-12 bg-gray-100 text-gray-600 font-bold border border-gray-300 rounded-lg flex items-center justify-center active:scale-95"
        >
          注册
        </router-link>
      </div>
    </div>

    <!-- 已登录状态 -->
    <div v-else class="mt-12 flex-1 p-4 max-w-screen-sm mx-auto w-full">
      <div class="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <!-- 用户头像 -->
        <div class="flex justify-center">
          <div class="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
            <span class="text-3xl text-blue-600">
              {{ userInitial }}
            </span>
          </div>
        </div>

        <!-- 用户信息 -->
        <div class="space-y-4">
          <div class="flex justify-between border-b pb-2">
            <span class="text-gray-600">手机号码</span>
            <span>{{ user.phone }}</span>
          </div>

          <div class="flex justify-between border-b pb-2">
            <span class="text-gray-600">姓名</span>
            <span>{{ user.name }}</span>
          </div>

          <div class="flex justify-between border-b pb-2">
            <span class="text-gray-600">性别</span>
            <span>{{ user.gender === 'male' ? '男' : '女' }}</span>
          </div>
        </div>

        <!-- 退出登录按钮 -->
        <button
          @click="handleLogout"
          class="w-full h-12 bg-red-500 text-white font-bold rounded-lg active:scale-95 transition-transform mt-8"
        >
          退出登录
        </button>
      </div>
    </div>

    <FooterNav title="底部栏"/>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import FooterNav from '../components/FooterNav.vue'

const router = useRouter()

const isAuthenticated = ref(false)
const user = ref({
  phone: '',
  name: '',
  gender: ''
})

// 计算用户姓名的首字母
const userInitial = computed(() => {
  return user.value.name ? user.value.name.charAt(0) : '我'
})

// 检查登录状态
const checkAuth = () => {
  const auth = localStorage.getItem('isAuthenticated')
  const userData = localStorage.getItem('user')

  isAuthenticated.value = !!auth
  if (userData) {
    user.value = JSON.parse(userData)
  }
}

// 退出登录
const handleLogout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('user')
  isAuthenticated.value = false
  router.push('/')
}

// 初始化时检查登录状态
onMounted(() => {
  checkAuth()
})
</script>