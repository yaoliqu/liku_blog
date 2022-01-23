<template>
  <Main />
  <!-- <Loading /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from '@/components/Blog/index.vue'
// import Loading from '@/components/Loading/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Main
    // Loading
  }
})
</script>

<style lang="stylus">
#app {
  margin:0
  padding:0
  height 100%
}
</style>
