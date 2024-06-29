<!-- <template>
  <div>
    <h1>Main App</h1>
    <button :class="{ active: type === 'base' }" @click="type = 'base'">Show Base</button>
    <button :class="{ active: type === 'computed' }" @click="type = 'computed'">Show Computed</button>
    <button :class="{ active: type === 'list' }" @click="type = 'list'">Show List</button>
    <button :class="{ active: type === 'form' }" @click="type = 'form'">Show Form</button>
    <button :class="{ active: type === 'life' }" @click="type = 'life'">Show Life</button>

    <div class="border pd-20">
      <BaseVue v-if="type === 'base'" />
      <Computed v-if="type === 'computed'" />
      <List v-if="type === 'list'" />
      <FormModel v-if="type === 'form'" />
      <Life v-if="type === 'life'" />
    </div>

    <button @click="alertMessage">显示消息</button>
    <button @click="warn('event', $event)">显示警告</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import List from './components/List.vue';
import Computed from './components/Computed.vue';
import BaseVue from './components/BaseVue.vue';
import FormModel from './components/FormModel.vue';
import Life from './components/life.vue';

const type = ref('base');
const message = ref('你好👋');

function alertMessage() {
  alert(message.value);
}

function warn(message, event) {
  console.log('event:', event);
  if (event) {
    event.preventDefault();
  }
  alert(message);
}
</script>

<style scoped>
.active {
  background-color: #42b983;
  color: white;
}
.border {
  border: 1px solid #ddd;
}
.pd-20 {
  padding: 20px;
}
.text-16 {
  color: pink;
}
.text-18 {
  color: aqua;
}
.font-size-20 {
  font-size: 10px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover { 
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->


<!-- 大作业 -->
<template>
  <div id="app">
    <Sidebar @navigate="navigate" />
    <div class="main-content">
      <Carousel v-if="currentView === 'welcome'" />
      <StudentList v-if="currentView === 'students'" />
      <div v-if="currentView === 'about'" class="about-content">
        <h1>关于我们</h1>
        <p>我们是一家专注于创新和技术的公司，致力于为客户提供最优质的服务和解决方案。我们的团队由经验丰富的专业人士组成，他们在各自的领域中都是顶尖的专家。我们相信，通过不懈的努力和不断的创新，我们可以为客户创造更多的价值。</p>
        <img src="/images/about-us.jpg" alt="About Us">
      </div>
      <div v-if="currentView === 'mouse'">
        <h1>鼠标位置</h1>
        <p>X: {{ x }}, Y: {{ y }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Carousel from './components/Carousel.vue';
import StudentList from './components/StudentList.vue';
import { useMouse } from './utils/hooks';

const currentView = ref('welcome');
const { x, y } = useMouse();

function navigate(view) {
  currentView.value = view;
}
</script>

<style>
#app {
  display: flex;
}

.sidebar {
  width: 200px;
  height: 100vh;
  background: #343a40;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.main-content {
  margin-left: 220px; 
  padding: 20px;
  width: calc(100% - 220px);
  background-color: #f8f9fa;
}

.about-content {
  text-align: center;
}

.about-content img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}
</style>
