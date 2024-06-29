<template>
    <div class="sidebar">
      <ul>
        <li><a href="#" @click.prevent="navigate('welcome')">首页</a></li>
        <li><a href="#" @click.prevent="navigate('students')">学生管理</a></li>
        <li><a href="#" @click.prevent="navigate('about')">关于</a></li>
        <li><a href="#" @click.prevent="navigate('mouse')">鼠标位置</a></li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineEmits } from 'vue';
  
  const emit = defineEmits(['navigate']);
  
  function navigate(page) {
    emit('navigate', page);
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 100vh;
    background: #343a40;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin-bottom: 20px;
  }
  
  .sidebar a {
    color: white;
    text-decoration: none;
  }
  
  .sidebar a:hover {
    text-decoration: underline;
  }
  </style>
  