<template>
  <div class="animated bounceInRight">
    <div class="aside-card MyNotice-box theme-color">
      <div class="notice">{{ saySay }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { usecommonState } from '@/store/index'

const saySay = computed(() => usecommonState().saySay)
</script>
<style>
.MyNotice-box {
  padding: 20px;
}

.notice {
  border-radius: 20px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.8) inset;
  padding: 14px;
  font-size: 16px;
}
</style>
