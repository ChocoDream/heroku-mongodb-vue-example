<template>
  <div class="fact-wrapper">
    <h2> {{fact}} </h2>
    <button class="fact-button">Another fact</button>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
export default {
  setup(){
    const fact = computed(() => "moo moo")

    return {
      fact
    }
  }
};
</script>

<style scoped>
.fact-wrapper {
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.fact-button {
  width: 100%;
  font-size: 1.1rem;
}
</style>
