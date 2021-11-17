<template>
  <div class="app-wrapper">
    <h1>Hello from Vue! {{ count }} seconds since app started</h1>
    <random-fact />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import RandomFact from "./Components/RandomFact.vue";
export default {
  components: { RandomFact },
  setup() {
    const count = ref(0);

    onMounted(() => {
      const timer = setInterval(() => count.value++, 1000);
      return () => {
        clearInterval(timer);
      };
    });

    return {
      count,
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.app-wrapper {
  background-color: rgb(27, 27, 27);
  color: rgb(236, 236, 236);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
