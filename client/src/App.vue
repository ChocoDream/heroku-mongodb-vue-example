<template>
  <div class="app-wrapper">
    <h1>Hello from Vue!</h1>
    <random-fact />
  </div>
</template>

<script>
import RandomFact from "./Components/RandomFact.vue";
export default {
  components: { RandomFact },
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
