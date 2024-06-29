<template>
    <div>
      <h1 :class="'text-' + age" class="font-size-20">
        {{ name }} - {{ age === 16 ? '少女' : '成年人' }} - {{ sex(0) }}
      </h1>
  
      <h1 :v-bind="obj">{{ name }} - {{ age === 16 ? '少女' : '成年人' }} - {{ sex(0) }}</h1>
  
      <h1 v-if="hasBro">有弟弟: 王钢蛋</h1>
      <h2 v-if="hasBro">{{ state.name }} - {{ state.age }} - {{ state.sex }}</h2>
      <h1 v-else>没有弟弟</h1>
  
      <button @click="isBro">疑问？</button>
      <button @click="change">切换</button>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  const name = 'MuiluhsneM';
  const age = 18;
  function sex(sex) {
    return sex === 1 ? '男' : '女';
  }
  
  const obj = {
    class: 'text-16',
    id: 'font-size-24'
  };
  
  let hasBro = ref(false);
  console.log(hasBro);
  
  function isBro() {
    alert('到底有没有？');
    console.log(age);
  }
  
  const change = () => {
    hasBro.value = !hasBro.value;
    console.log(hasBro);
  };
  
  const state = reactive({
    name: '王钢蛋',
    age: 16,
    sex: '男'
  });
  console.log(state);
  </script>
  
  <style scoped></style>
  