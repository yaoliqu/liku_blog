<template>
  <div class="animated bounceInRight">
    <div class="aside-card TagCard-box theme-color">
      <span class="theTag common-hover"> {item.tag} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
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
