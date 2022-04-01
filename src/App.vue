<template>
  <Main v-if="done" />
  <Loading v-else />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Main from '@/components/Blog/index.vue'
import Loading from '@/components/Loading/index.vue'
import { getGobalStatus } from './api/api'
import { usecommonState } from '@/store/common'

const commonState = usecommonState()

// 获取描述
getGobalStatus.getDesc({}).then((res) => {
  commonState.setPoem(res.data)
})
const done = ref(true)
</script>
<style lang="stylus">
#app {
  margin:0
  padding:0
  height 100%
}
</style>
