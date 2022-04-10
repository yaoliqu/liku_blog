<template>
  <router-view />
</template>
<script lang="ts" setup>
import { usecommonState } from '@/store/index'
import setTheme from '@/utils/themeUtil'

setTheme(usecommonState().themeStatus)
</script>
<style lang="stylus">
#app {
  margin:0
  padding:0
  height 100%
}
</style>
