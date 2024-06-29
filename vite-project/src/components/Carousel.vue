<template>
  <div class="homepage">
    <header class="welcome-header">
      <h1>欢迎来到我们的网站</h1>
      <p>我们很高兴您来到这里。请浏览我们的内容。</p>
    </header>
    <div class="carousel">
      <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide" alt="Slide Image">
        </div>
      </div>
      <button @click="prevSlide">‹</button>
      <button @click="nextSlide">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const slides = ref([
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg'
]);

const currentSlide = ref(0);

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
}

let interval;

onMounted(() => {
  interval = setInterval(nextSlide, 3000);
});
</script>

<style scoped>
.homepage {
  text-align: center;
  padding: 20px;
}

.welcome-header {
  margin-bottom: 20px;
}

.welcome-header h1 {
  font-size: 2.5em;
  margin: 0;
}

.welcome-header p {
  font-size: 1.2em;
  color: #666;
}

.carousel {
  position: relative;
  width: 1400px;
  height: 800px; /* Adjust the height to your preference */
  margin: 0 auto;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  min-width: 100%;
  height: 100%; /* Make sure each slide takes the full height of the carousel */
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* Ensures the image covers the slide area without distortion */
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

button:nth-of-type(1) {
  left: 10px;
}

button:nth-of-type(2) {
  right: 10px;
}
</style>
