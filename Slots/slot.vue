<!-- Parent.vue -->
<script setup>
import Child from "./Child.vue";
</script>

<template>
  <Child>
    <p>Это контент, который попадет в слот.</p>
  </Child>
</template>

<!-- Child.vue -->
/** * Usage: * *
<!-- <template>
  <div>
    <slot></slot>
  </div>
</template> -->
