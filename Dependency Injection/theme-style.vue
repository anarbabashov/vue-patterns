<!-- Parent.vue -->
<script setup>
import { provide, ref } from "vue";
const theme = ref("dark");
provide("theme", theme);
</script>

<!-- Child.vue -->
<script setup>
import { inject } from "vue";
const theme = inject("theme");
</script>
<template>
  <div :class="theme">Content</div>
</template>
