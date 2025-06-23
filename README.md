# 🍔 饿了么高仿点餐系统 (Vue 3 + TypeScript)

一个基于 Vue 3 和 TypeScript 的高仿饿了么外卖点餐系统，完整实现商家展示、购物车管理、订单支付等核心功能。

## ✨ 功能特性

- 🏠 **多页面导航**：首页、商家列表、商家详情、订单确认等10+页面
- 🛒 **完整购物流程**：商品添加/删除、实时计算总价、订单提交
- 🔐 **用户系统**：登录/注册、个人中心、订单历史
- 📱 **移动优先**：完美适配移动端，支持iOS安全区域
- ⚡ **性能优化**：动态图片加载、原子化CSS

## 🛠 技术栈

| 技术领域     | 主要技术选型                                        |
|----------|-----------------------------------------------|
| **前端框架** | Vue 3 + Composition API + `<script setup>` 语法 |
| **开发语言** | TypeScript                                    |
| **UI框架** | UnoCSS (原子化CSS) + 原生CSS布局                     |
| **路由管理** | Vue Router 4                                  |
| **图标方案** | SVG图标 (Material Icons + IconPark)             |
| **构建工具** | Vite                                          |

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

## 📂 项目结构

```
src/
├── assets/            # 静态资源
├── components/        # 公共组件
│   ├── FooterNav.vue  # 底部导航栏
│   └── RecommendedSection.vue # 推荐商家组件
├── views/             # 页面组件
│   ├── Index.vue      # 首页
│   ├── BusinessList.vue # 商家列表
│   └── ...            # 其他页面
├── router/            # 路由配置
└── main.ts            # 应用入口
```

## 🧩 核心组件

### 1. FooterNav 底部导航

- 采用固定定位(`fixed`)
- 支持iOS安全区域适配
- 动态渲染导航图标

```vue
<FooterNav title="底部导航"/>
```

### 2. RecommendedSection 推荐商家

- 支持自定义标题和数据源
- 动态评分渲染(5星制)
- 促销标签条件渲染

```vue
<RecommendedSection 
  :businesses="businesses" 
  title="附近推荐"
/>
```

## 🔧 关键技术实现

1. **动态图片加载**

```typescript
const getImagePath = (filename: string) => {
  return new URL(`../assets/images/${filename}`, import.meta.url).href
}
```

2. **购物车逻辑**

```typescript
// 计算总价
const total = computed(() => {
  return items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
})
```

## 📄 许可证

MIT License

```
