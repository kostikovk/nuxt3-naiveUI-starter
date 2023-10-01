export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function $reset() {
    count.value = 0
  }

  function increment() {
    count.value++
  }

  return { count, $reset, increment }
})
