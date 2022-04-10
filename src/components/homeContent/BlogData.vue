<template>
  <div class="animated bounceInRight">
    <div class="aside-card BlogData-box theme-color">
      <div class="blogData common-hover">
        <div class="type-name">文章</div>
        <div class="type-num theme-color-font">{{ artCount }}</div>
      </div>
      <div class="blogData common-hover">
        <div class="type-name">分类</div>
        <div class="type-num theme-color-font">{{ classCount }}</div>
      </div>
      <div class="blogData common-hover">
        <div class="type-name">标签</div>
        <div class="type-num theme-color-font">{{ tagsCount }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { usecommonState } from '@/store/index'

const artCount = computed(() => usecommonState().artCount)
const tagsCount = computed(() => usecommonState().tagsCount)
const classCount = computed(() => usecommonState().classCount)
</script>
<style>
.BlogData-box {
  height: 80px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.blogData {
  width: 70px;
  height: 56px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
}

.type-name,
.type-num {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.type-num {
  transition: all 0.2s;
}

.blogData:hover .type-num {
  color: var(--theme-color-font1) !important;
}
</style>
