<template>
  <!-- 添加 overflow-hidden 防止横向滚动 -->
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <!-- 头部 -->
    <header class="h-12 bg-blue-600 text-white text-lg fixed w-full top-0 left-0 z-50 flex justify-center items-center">
      <p class="text-center px-4 truncate">用户注册</p>
    </header>

    <!-- 表单容器 -->
    <main class="mt-12 flex-1 p-4 max-w-screen-sm mx-auto w-full">
      <!-- 手机号码 -->
      <div class="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
        <label class="sm:w-24 font-bold text-gray-600">手机号码：</label>
        <input v-model="phone"
               type="tel"
               placeholder="请输入手机号"
               class="w-full h-10 border-b border-gray-300 focus:border-blue-500 px-2"
        >
      </div>

      <!-- 密码 -->
      <div class="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
        <label class="sm:w-24 font-bold text-gray-600">密码：</label>
        <input v-model="password"
               type="password"
               placeholder="请输入密码"
               class="w-full h-10 border-b border-gray-300 focus:border-blue-500 px-2"
        >
      </div>

      <!-- 确认密码 -->
      <div class="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
        <label class="sm:w-24 font-bold text-gray-600">确认密码：</label>
        <input v-model="confirmPassword"
               type="password"
               placeholder="请再次输入密码"
               class="w-full h-10 border-b border-gray-300 focus:border-blue-500 px-2"
        >
      </div>

      <!-- 用户姓名 -->
      <div class="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
        <label class="sm:w-24 font-bold text-gray-600">用户姓名：</label>
        <input v-model="name"
               type="text"
               placeholder="请输入姓名"
               class="w-full h-10 border-b border-gray-300 focus:border-blue-500 px-2"
        >
      </div>

      <!-- 性别 -->
      <div class="mb-6 flex flex-col sm:flex-row sm:items-center gap-2">
        <label class="sm:w-24 font-bold text-gray-600">性别：</label>
        <div class="flex items-center gap-4">
          <label class="flex items-center gap-1">
            <input type="radio" name="gender" value="male" v-model="gender" class="accent-blue-500">
            男
          </label>
          <label class="flex items-center gap-1">
            <input type="radio" name="gender" value="female" v-model="gender" class="accent-pink-500">
            女
          </label>
        </div>
      </div>

      <!-- 按钮容器 -->
      <div class="px-2 space-y-4">
        <button
            @click="handleRegister"
            class="w-full h-12 bg-green-500 text-white font-bold rounded-lg active:scale-95 transition-transform"
        >
          注册
        </button>
        <button
            @click="goToLogin"
            class="w-full h-12 bg-gray-100 text-gray-600 font-bold border border-gray-300 rounded-lg active:scale-95"
        >
          返回登录
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

// 表单数据
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const name = ref('')
const gender = ref('')

// 跳转函数
const goToLogin = () => {
  router.push('/login')
}

// 注册函数
const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert('两次密码不一致')
    return
  }

  // 存储用户信息
  localStorage.setItem('isAuthenticated', 'true')
  localStorage.setItem('user', JSON.stringify({
    phone: phone.value,
    name: name.value,
    gender: gender.value
  }))
  router.push('/profile')
}
</script>
