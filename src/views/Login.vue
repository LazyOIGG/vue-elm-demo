<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <header class="h-12 bg-blue-600 text-white text-lg fixed w-full top-0 left-0 z-50 flex justify-center items-center">
      <p class="text-center px-4 truncate">用户登录</p>
    </header>

    <main class="mt-12 flex-1 p-4 max-w-screen-sm mx-auto w-full">
      <div class="mb-6 flex flex-col sm:flex-row sm:items-center gap-2">
        <label class="sm:w-24 font-bold text-gray-600">手机号码：</label>
        <input
            type="tel"
            placeholder="请输入手机号"
            class="w-full h-10 border-b border-gray-300 focus:border-blue-500 px-2"
        >
      </div>

      <div class="mb-8 flex flex-col sm:flex-row sm:items-center gap-2">
        <label class="sm:w-24 font-bold text-gray-600">密码：</label>
        <input
            type="password"
            placeholder="请输入密码"
            class="w-full h-10 border-b border-gray-300 focus:border-blue-500 px-2"
        >
      </div>

      <div class="px-2 space-y-4">
        <button
            @click="handleLogin"
            class="w-full h-12 bg-green-500 text-white font-bold rounded-lg active:scale-95 transition-transform"
        >
          登录
        </button>
        <button
            @click="goToRegister"
            class="w-full h-12 bg-gray-100 text-gray-600 font-bold border border-gray-300 rounded-lg active:scale-95"
        >
          去注册
        </button>
      </div>
    </main>

    <FooterNav/>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import FooterNav from '../components/FooterNav.vue'

const router = useRouter()

const phone = ref('')

const goToRegister = () => {
  router.push('/register')
}

const handleLogin = () => {
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}')
  if (storedUser.phone === phone.value) {
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/profile')
  } else {
    alert('用户不存在，请先注册')
  }
}
</script>


