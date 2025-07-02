<template>
  <component :is="currentComponent" />
</template>

<script setup>
import { computed } from "vue";
import ComponentOne from "./ComponentOne.vue";
import ComponentTwo from "./ComponentTwo.vue";
import ComponentThree from "./ComponentThree.vue";

const props = defineProps({
  conditionType: String,
});

const currentComponent = computed(() => {
  switch (props.conditionType) {
    case "one":
      return ComponentOne;
    case "two":
      return ComponentTwo;
    case "three":
      return ComponentThree;
    default:
      return DefaultComponent;
  }
});
</script>
