<script setup lang="ts">
import {ref} from "vue";

let newTaskText= ref("")
</script>

<template>
  <div class="w-60em mx-auto bg-gray-2 h-40em">
    <div class="text-4xl text-center">Todo List</div>
    <div class="w-20em mx-auto nt-2 flex justify-between">
      <el-input type="text" class="w-3/4 mr-1" placeholder="添加一个新的待办事项" v-model="newTaskText"/>
      <el-button type="success">添加</el-button>
    </div>
  </div>
</template>

<style scoped>

</style>