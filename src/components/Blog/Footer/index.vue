<template>
  <footer>
    <span>
      个人博客系统
      <a
        href="https://github.com/lzxjack/blog-show"
        target="_blank"
        rel="noreferrer"
        class="icp"
      >
        「源代码」
      </a>
    </span>
    <span>
      <a
        href="https://beian.miit.gov.cn/#/Integrated/index"
        target="_blank"
        rel="noreferrer"
        class="icp"
      >
        浙ICP备2020043821号-1
      </a>
    </span>
    <span>
      <span class="site-frame theme-color common-hover"> 123 </span>
      <span class="site-frame theme-color common-hover"> 123 </span>
      <span class="site-frame theme-color common-hover"> 123 </span>
      <span class="site-frame theme-color common-hover"> 123 </span>
    </span>
  </footer>
</template>

<style scoped>
footer {
  height: 120px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  font-size: 16px;
}

.icp {
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
</style>
