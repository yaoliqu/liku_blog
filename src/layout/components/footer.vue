<template>
  <footer>
    <span style="color: #fff"> liku的秘密基地 </span>
    <span>
      <a href="https://lzxjack.top/" target="_blank" rel="noreferrer" class="icp">
        参考自: 飞鸟小站
      </a>
    </span>
    <span>
      <span class="site-frame theme-color common-hover"> vue3 </span>
      <span class="site-frame theme-color common-hover"> typescript </span>
      <span class="site-frame theme-color common-hover"> vite </span>
      <span class="site-frame theme-color common-hover"> pinia </span>
      <span class="site-frame theme-color common-hover"> antd </span>
      <span class="site-frame theme-color common-hover"> egg </span>
      <span class="site-frame theme-color common-hover"> mysql </span>
    </span>
  </footer>
</template>

<style scoped>
footer {
  height: 120px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: var(--theme-color-font);
  /* color: #fff; */
  font-size: 16px;
}

.icp {
  /* color: var(--theme-color-font); */
  color: #fff;
  transition: all 0.2s;
}
.icp:hover {
  /* 字体颜色 */
  color: rgb(97, 147, 187);
}

.site-frame {
  padding: 2px 8px;
  margin-right: 10px;
  border-radius: 6px;
  user-select: none;
}
.site-frame:last-child {
  margin-right: 0;
}

@media all and (max-width: 1240px) {
  footer {
    font-size: 14px;
  }
}
@media screen and (max-width: 1240px) {
  footer {
    height: 70px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: var(--theme-color-font);
    font-size: 14px;
  }
  .site-frame {
    display: none;
  }
}
</style>
