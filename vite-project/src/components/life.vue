<template>
  <div>
    <div>State: {{ state }}</div>
    <div>State2: {{ state2 }}</div>
    <div>y: {{ y }}</div>
    <div id="content">{{ context }}</div>
    <button @click="context = 'Hello World'">Change Context</button>
  </div>
</template>

<script setup>
import { reactive, ref, watch, onBeforeMount, onMounted } from 'vue';

// 响应式变量
const y = ref(0);

// 响应式对象
const state = reactive({
  name: '王钢蛋',
  age: 16,
  sex: '男'
});

// 深拷贝 state 对象
const state2 = reactive({ ...state });

// 监听多个变量的变化
watch([y], ([newY], [oldY]) => {
  console.log('watch:', newY, oldY);
});

// 监听 state 的变化
watch(
  state,
  (newValue, oldValue) => {
    console.log('watch:', newValue, oldValue);
  },
  { deep: true } // 深度监听
);

// 生命周期钩子
onBeforeMount(() => {
  console.log('1.组件即将挂载，此时组件的模板已经编译好，但是还没有挂载到 DOM 上。');
  const content = document.getElementById('content');
  console.log(content); // 输出: null
});

onMounted(() => {
  console.log('2.组件已挂载，此时 DOM 已经被渲染。');
  const content = document.getElementById('content');
  console.log(content); // 输出: <div id="content">Hello Vue 3</div>
});

const context = ref('Hello Vue 3');



</script>

<style scoped>
</style>
