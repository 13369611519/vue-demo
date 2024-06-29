import { ref, onMounted } from 'vue';

export function useMouse() {
  // 当鼠标移动时获取鼠标的位置
  let x = ref(0);
  let y = ref(0);

  onMounted(() => {
    window.addEventListener('mousemove', (event) => {
      x.value = event.pageX;
      y.value = event.pageY;
    });
  });

  return { x, y };
}
