<template>
  <div class="fact-wrapper">
    <h2>{{ fact }}</h2>
    <button class="fact-button" @click="getAnotherFact()">Another fact</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const fact = ref("mooo");

    const getFact = async () => {
      return await axios
        .get("api/fact")
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.error("ERROR CAUGHT WHEN CALLING TO SERVER", error);
          return "mooo";
        });
    };

    onMounted(async () => {
      fact.value = await getFact();
    });

    const getAnotherFact = async () => {
      fact.value = await getFact();
    };

    return {
      fact,
      getAnotherFact,
    };
  },
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
