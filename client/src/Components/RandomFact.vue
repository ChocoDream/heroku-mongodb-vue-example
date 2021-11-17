<template>
  <div class="fact-wrapper">
    <h2>{{ fact }}</h2>
    <button class="fact-button" @click="getAnotherFact()">Another fact</button>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { randomize } from "../Utilities/Random";

const randomFacts = ["moo", "moooo", "I'm a dog bark bark", "bark", "baaaark"];
export default {
  setup() {
    const fact = ref(randomize(randomFacts));

    const getAnotherFact = () => {
      fact.value = randomize(randomFacts);
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
