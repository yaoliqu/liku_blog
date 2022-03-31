<template>
  <Main v-if="done" />
  <Loading v-else />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Main from '@/components/Blog/index.vue'
import Loading from '@/components/Loading/index.vue'

const done = ref<boolean>(true)

// import { jirishiju } from '@/mook/data'
// import { usecommonState } from '@/store/common'
// import { Test } from './api/api'

// export default defineComponent({
//   name: 'App',
//   setup() {
//     // const commonState = usecommonState()
//     // commonState.getPoem(jirishiju)
//     // Test.test({})
//     return {
//       done
//     }
//   },
//   components: {
//     Main,
//     Loading
//   }
// })
</script>

<style lang="stylus">
#app {
  margin:0
  padding:0
  height 100%
}
</style>
