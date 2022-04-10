<template>
  <div class="animated bounceInRight">
    <div class="aside-card TagCard-box theme-color">
      <span class="theTag common-hover" v-for="item in tagsList" :key="item.id">
        {{ item.tag }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { usecommonState } from '@/store/index'

const tagsList: any = computed(() => usecommonState().tagsList)
</script>

<style>
.TagCard-box {
  padding: 12px;
}

.theTag {
  display: inline-block;
  padding: 0 10px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  user-select: none;
  transition: all 0.2s;
  color: var(--theme-color-font1);
  border-radius: 12px;
  cursor: pointer;
}
</style>
