import { ref } from "vue";

/**
 *
 * @param {*} start
 * @returns
 */

export default function useCounter(start = 0) {
  const count = ref(start);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return { count, increment, decrement };
}

/**
 * Usage
 *
 * <script setup>
 * import { useCounter } from './useCounter'
 * const { count, increment, decrement } = useCounter(5)
 * </script>
 * <template>
 *  <button @click="decrement">–</button>
 *  {{ count }}
 *  <button @click="increment">+</button>
 * </template>
 *
 */
