<template>
  <div class="PageTitle-box">{{ titles }}</div>
</template>
<script lang="ts" setup>
import { withDefaults, defineProps, computed } from 'vue'

interface IProps {
  title: string
}
const props = withDefaults(defineProps<IProps>(), {
  title: ''
})
const titles = computed(() => props.title)
</script>
<style>
.PageTitle-box {
  /* background-color: #fff; */
  width: 1000px;
  margin: 0 auto;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-family: 'FiraCode', 'yu400';
  color: var(--theme-color-font);
  user-select: none;
}

@media all and (max-width: 1240px) {
  .PageTitle-box {
    height: 240px;
    font-size: 26px;
    width: 100%;
  }
}
</style>
