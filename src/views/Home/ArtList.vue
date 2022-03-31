<template>
  <div class="animated bounceInLeft" v-for="item in articlesList" :key="item._id">
    <div class="article-item theme-color">
      <h1 class="article-item-title">{{ item.title }}</h1>
      <p class="article-item-abstract">{{ item.content }}</p>
      <div class="article-item-info">
        <span class="article-item-date theme-color-1 common-hover">
          {{ item.date }}
        </span>
        <div class="article-item-tags">
          <span
            class="article-item-tag theme-color-1 common-hover"
            v-for="tag in item.tags"
            :key="tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import { articleListIFC } from '@/common/types'
import { articles } from '@/mook/data'

const { list } = articles
const articlesList: articleListIFC[] = list.map((i: articleListIFC) => ({
  ...i,
  content: i.content.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, ''),
  date: moment(i.date).format('YYYY-MM-DD')
}))
</script>

<style scoped>
.article-item {
  height: 220px;
  border-radius: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  user-select: none;
  transition: all 0.2s;
}

.article-item:hover {
  transform: scale(1.02);
  cursor: pointer;
}

.article-item-title {
  margin: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  color: var(--theme-color-font);
}

.article-item-abstract {
  margin: 0;
  height: 80px;
  text-indent: 2em;
  color: var(--theme-color-font1);
  font-size: 18px;
  padding: 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.article-item-info {
  position: relative;
  height: 60px;
}
.article-item-date,
.article-item-tag {
  padding: 0 10px;
  border-radius: 10px;
  transition: all 0.2s;
  color: var(--theme-color-font1);
  height: 30px;
  font-size: 18px;
}
.article-item-date {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.article-item-tags {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 0;
  max-width: 800px;
  height: 30px;
}
.article-item-tag {
  display: inline-block;
  margin-right: 20px;
  text-align: center;
  line-height: 30px;
}

@media all and (max-width: 1240px) {
  .article-item {
    height: 154px;
    margin-bottom: 10px;
  }
  .article-item-title {
    height: 70px;
    font-size: 18px;
    font-weight: 400;
    padding: 0 30px;
  }
  .article-item-abstract {
    font-size: 16px;
    text-indent: 0;
    height: 74px;
  }
  .article-item-date,
  .article-item-tag {
    display: none;
  }
}
</style>
