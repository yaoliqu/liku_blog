<template>
  <PageTitle title="关于" />

  <div class="theme-color standard-page-box">
    <div class="about-title-box animated bounceInDown">
      <div :class="isMe ? 'about-site title-off' : 'about-site'">关于本站</div>
      <div class="Switch-box theme-color-1" @click="switchChange">
        <div
          :class="isMe ? 'switch-btn theme-color-2 is-me' : 'switch-btn theme-color-2'"
        ></div>
      </div>
      <div :class="isMe ? 'about-me' : 'about-me title-off'">关于我</div>
    </div>

    <div
      v-if="isMe"
      class="about-me-box markdownStyle animated bounceInRight"
      v-html="compiledMarkdown"
    ></div>
    <div v-else class="about-site-box animated bounceInLeft">
      <div class="articles-outline">文章分布</div>
      <div class="site-articles-data">
        <!-- <Chart /> -->
      </div>
      <div class="site-text markdownStyle" v-html="compiledMarkdown1"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import marked from 'marked'
import hljs from 'highlight.js'
import { computed, ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import { getArticleList } from '@/api/api'

const isMeContent = ref('')
const noisMeContent = ref('')
// 获取关于
getArticleList.getAbout({}).then((res) => {
  if (res) {
    isMeContent.value =
      res.data.filter((item) => item.isme === 'true')[0]?.content || ''
    noisMeContent.value =
      res.data.filter((item) => item.isme === 'false')[0]?.content || ''
  }
})
const isMe = ref(false)

// 配置marked
const options = {
  renderer: new marked.Renderer(),
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: (code: any) => hljs.highlightAuto(code).value,
  gfm: true, // 默认为true。 允许 GitHub标准的markdown.
  // tables: true, // 默认为true。 允许支持表格语法。该选项要求 gfm 为true。
  breaks: true // 默认为false。 允许回车换行。该选项要求 gfm 为true。
}

const compiledMarkdown = computed(() =>
  marked(isMeContent.value, options)
    .replace(/<pre>/g, "<pre id='hljs'>")
    .replace(/\\n/gm, '<br>')
)
const compiledMarkdown1 = computed(() =>
  marked(noisMeContent.value, options)
    .replace(/<pre>/g, "<pre id='hljs'>")
    .replace(/\\n/gm, '<br>')
)

// 配置highlight
hljs.configure({
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript', 'Markdown']
})
const switchChange = () => {
  isMe.value = !isMe.value
}
</script>

<style scoped>
.standard-page-box {
  padding: 40px;
  color: var(--theme-color-font);
  border-radius: 12px;
}
.about-title-box {
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 36px;
  font-family: 'yu400';
  user-select: none;
  margin-bottom: 20px;
}

.about-site {
  margin-right: 20px;
}
.about-me {
  margin-left: 20px;
}

.title-off {
  color: rgb(105, 105, 105);
}

.articles-outline {
  font-size: 24px;
  font-weight: 700;
}

@media all and (max-width: 1240px) {
  .about-title-box {
    height: 32px;
    margin-bottom: 4px;
  }
  .articles-outline,
  .site-articles-data {
    display: none;
  }
  .about-site {
    font-size: 18px;
    margin-right: 8px;
  }
  .about-me {
    font-size: 18px;
    margin-left: 8px;
  }
}
</style>
<style scoped>
.Switch-box {
  height: 36px;
  width: 70px;
  border-radius: 20px;
  position: relative;
}
.Switch-box:hover .switch-btn {
  /* 按钮颜色 */
  background-color: var(--theme-color-btn);
}

.switch-btn {
  height: 36px;
  width: 36px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  transition: all 0.3s;
}

.is-me {
  left: 34px;
}

@media all and (max-width: 1240px) {
  .Switch-box {
    height: 20px;
    width: 36px;
    border-radius: 20px;
  }

  .switch-btn {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    top: 50%;
    left: 0;
  }

  .is-me {
    left: 16px;
  }
}
</style>

<style>
/* .standard-page-main-content {
    font-size: 20px;
    color: #fff;
} */

/* ——————————————————————————————显示区markdown样式—————————————————————————————— */
/* 表格 */
.markdownStyle table {
  margin: 20px auto;
  border: 2px solid rgb(120, 120, 120);
  background-color: #0d1117;
  border-spacing: 0; /*去掉单元格间隙*/
  text-align: center;
}
.markdownStyle table th,
.markdownStyle table td {
  padding: 6px 14px;
  border: 1px solid rgb(120, 120, 120);
}

/* a链接 */
.markdownStyle a {
  font-weight: 700;
  margin: 0 4px;
  color: rgb(28, 186, 248);
  transition: all 0.2s;
}
.markdownStyle a:hover {
  color: rgb(248, 28, 120);
}

/* h1 h2 h3 h4 h5 h6 p */
.markdownStyle h1,
.markdownStyle h2,
.markdownStyle h3,
.markdownStyle h4,
.markdownStyle h5,
.markdownStyle h6 {
  color: #fff;
  font-weight: 700;
}
/* 行内代码 */
.markdownStyle code {
  background-color: rgb(55, 77, 78);
  font-family: 'yu100';
  padding: 0 6px;
}

/* 图片 */
.markdownStyle p img {
  display: block;
  max-width: 100%;
  margin: 14px auto;
  border-radius: 12px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.6); */
  -webkit-user-drag: none;
}

.markdownStyle strong {
  color: rgb(97, 147, 187);
}

.markdownStyle blockquote {
  background-color: #111111;
  padding: 14px 40px;
  font-size: 18px;
  border-radius: 20px;
  color: #ccc;
  border: 2px rgb(105, 105, 105) dashed;
}
.markdownStyle blockquote p {
  margin: 0;
}
/* ———————————————————————————————————————————————————————————— */

@media all and (max-width: 1240px) {
  /* 表格 */
  .markdownStyle table {
    margin: 10px auto;
    border: 1px solid rgb(120, 120, 120);
  }
  .markdownStyle table th,
  .markdownStyle table td {
    padding: 4px 6px;
    border: 1px solid rgb(120, 120, 120);
  }
  /* 图片 */
  .markdownStyle p img {
    margin: 8px auto;
    border-radius: 12px;
  }
  .markdownStyle blockquote {
    padding: 6px 16px;
    font-size: 14px;
    border-radius: 12px;
    border: 1px rgb(105, 105, 105) dashed;
  }
  #hljs code {
    font-size: 12px;
  }
}
</style>

<style>
#hljs {
  padding: 10px 20px;
  color: #c9d1d9;
  /* 副色1 */
  background-color: rgb(19, 19, 26);
  border-radius: 20px;
  box-shadow: 0 0 14px rgb(0, 0, 0) inset;
}

/* 设置滚动条的样式 */
#hljs::-webkit-scrollbar {
  height: 12px;
}
/* 滚动槽 */
#hljs::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}
/* 滚动条滑块 */
#hljs::-webkit-scrollbar-thumb {
  /* 副色2 */
  background-color: rgb(69, 69, 88);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

/* 代码片段 */
#hljs code {
  color: #c9d1d9;
  /* 副色1 */
  background-color: rgb(19, 19, 26);
  padding: 0;
  font-size: 16px;
  font-family: 'FiraCode', 'dengxian';
}

.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_ {
  /* prettylights-syntax-keyword */
  color: #ff7b72;
}

.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_ {
  /* prettylights-syntax-entity */
  color: #d2a8ff;
}

.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-operator,
.hljs-variable,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id {
  /* prettylights-syntax-constant */
  color: #79c0ff;
}

.hljs-regexp,
.hljs-string,
.hljs-meta .hljs-string {
  /* prettylights-syntax-string */
  color: #a5d6ff;
}

.hljs-built_in,
.hljs-symbol {
  /* prettylights-syntax-variable */
  color: #ffa657;
}

.hljs-comment,
.hljs-code,
.hljs-formula {
  /* prettylights-syntax-comment */
  color: #8b949e;
}

.hljs-name,
.hljs-quote,
.hljs-selector-tag,
.hljs-selector-pseudo {
  /* prettylights-syntax-entity-tag */
  color: #7ee787;
}

.hljs-subst {
  /* prettylights-syntax-storage-modifier-import */
  color: #c9d1d9;
}

.hljs-section {
  /* prettylights-syntax-markup-heading */
  color: #1f6feb;
  font-weight: bold;
}

.hljs-bullet {
  /* prettylights-syntax-markup-list */
  color: #f2cc60;
}

.hljs-emphasis {
  /* prettylights-syntax-markup-italic */
  color: #c9d1d9;
  font-style: italic;
}

.hljs-strong {
  /* prettylights-syntax-markup-bold */
  color: #c9d1d9;
  font-weight: bold;
}

.hljs-addition {
  /* prettylights-syntax-markup-inserted */
  color: #aff5b4;
  background-color: #033a16;
}

.hljs-deletion {
  /* prettylights-syntax-markup-deleted */
  color: #ffdcd7;
  background-color: #67060c;
}

/* .hljs-char.escape_,
.hljs-link,
.hljs-params,
.hljs-property,
.hljs-punctuation,
.hljs-tag {

} */
</style>
