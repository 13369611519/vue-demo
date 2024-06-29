<template>
    <div>
      <h1>User List</h1>
      <ul>
        <li v-for="(item, index) in list" :key="item.id">
          <span>{{ index + 1 }}.</span><span>学号：{{ item.id }}</span> -
          <span>姓名: {{ item.userName }}</span> -
          <span>年龄: {{ item.age }}</span>
          <button @click="deleteUser(index)">删除</button>
          <button @click="editUser(index)">编辑</button>
          <button @click="getYourName(item.id)">问名字</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const list = ref([
    {
      id: 220812002,
      userName: '刘淑文',
      age: 18
    },
    {
      id: 220812003,
      userName: '蔡欣怡',
      age: 18
    },
    {
      id: 220812004,
      userName: '龙依',
      age: 18
    }
  ]);
  
  const deleteUser = (index) => {
    list.value.splice(index, 1);
  };
  
  const editUser = (index) => {
    const item = list.value[index];
    item.age = 20;
  };
  
  const getYourName = (id) => {
    const student = list.value.find(item => item.id === id);
    alert(student.userName);
  };
  </script>
  
  <style scoped></style>
  