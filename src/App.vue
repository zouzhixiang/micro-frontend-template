<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    $route (val) {
      // eslint-disable-next-line no-unused-expressions
      window.$wujie?.bus.$emit('module-route-change', 'vue2', val)
    }
  }
}
</script>
