<template>
  <div class="animated bounceInRight">
    <div class="aside-card BlogCard-box theme-color">
      <p class="BlogCard-text">
        {{ timeText }}, <br />
        我叫<span class="theme-color-font blog-name">liku</span>,<br />
        欢迎来到
        <br />
        我的<span class="theme-color-font blog-name">个人博客</span>。
      </p>
      <img :src="avatarUrl" alt="avatar" class="avatar" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { avatarUrl } from '@/utils/constant'

const hour = new Date().getHours()
let timeText: string = ''
if (hour < 6) {
  timeText = '凌晨好'
} else if (hour < 9) {
  timeText = '早上好'
} else if (hour < 11) {
  timeText = '上午好'
} else if (hour < 13) {
  timeText = '中午好'
} else if (hour < 17) {
  timeText = '下午好'
} else if (hour < 19) {
  timeText = '傍晚好'
} else {
  timeText = '晚上好'
}
</script>

<style>
.aside-card {
  margin-bottom: 20px;
  border-radius: 20px;
  /* background-color: #232324; */
  overflow: hidden;
  user-select: none;
  transition: all 0.2s;
}
.aside-card:hover {
  transform: scale(1.04);
}

.BlogCard-box {
  height: 200px;
  position: relative;
}

.avatar {
  position: absolute;
  border-radius: 100px;
  top: 16px;
  right: 16px;
  height: 120px;
  width: 120px;
  /* 图片不可拖动 */
  -webkit-user-drag: none;
}

.BlogCard-text {
  margin: 0;
  position: absolute;
  top: 36px;
  left: 20px;
  font-size: 20px;
  line-height: 34px;
}

.blog-name {
  font-weight: 700;
}
</style>
