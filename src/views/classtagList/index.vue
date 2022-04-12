<template>
  <PageTitle title="{myClass}" />
  <div class="standard-page-box theme-color animated bounceInLeft">
    <!-- <div class="art-show-none">暂时没有相应分类...</div> -->

    <div class="animated bounceInUp" key="{item._id}">
      <div class="art-show-item theme-color-1">
        <!-- onClick={() => turnToArticle(item.titleEng)} -->
        <div class="art-show-title">{item.title}</div>
        <span class="art-show-date common-hover"> 2020-10-10 </span>
      </div>
    </div>
    <PageNav
      :pageSize="pageSize"
      :pageNum="pageNum"
      :total="total"
      @pageChange="pageChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import PageNav from '@/components/PageNav.vue'
import { useArticleState } from '@/store/index'
import { getArticleList } from '@/api/api'

const ArticleState = useArticleState()
const pageSize = computed(() => ArticleState.pageSize)
const pageNum = computed(() => ArticleState.pageNum)
const total = computed(() => ArticleState.total)
const getArticle = () => {
  // 获取文章列表
  getArticleList
    .getList({
      pageSize: ArticleState.pageSize,
      pageNum: ArticleState.pageNum
    })
    .then((res) => {
      ArticleState.setArticleList(res.data)
    })
}
const pageChange = async (current: number, pagesize: number) => {
  await ArticleState.setPage(current, pagesize)
  await getArticle()
}
</script>
<style scoped>
.standard-page-box {
  border-radius: 12px;
  padding: 24px;
  width: 1000px;
  margin: 0 auto;
}
.art-show-none {
  width: 100%;
  height: 200px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  font-size: 20px;
  color: var(--theme-color-font1);
}
.art-show-item {
  border-radius: 20px;
  margin-bottom: 16px;
  overflow: hidden;
  user-select: none;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: var(--theme-bg1);
}

.art-show-item:hover {
  transform: scale(1.02);
}
.art-show-title {
  font-size: 24px;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--theme-color-font);
}
.art-show-date {
  background-color: var(--theme-bg2);
  padding: 0 10px;
  border-radius: 10px;
  transition: all 0.2s;
  color: var(--theme-color-font1);
  height: 30px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
@media all and (max-width: 1240px) {
  .standard-page-box {
    border-radius: 12px;
    width: unset;
    margin: 0 auto;
  }
  .art-show-title {
    font-size: 16px;
    padding: 6px 14px;
    width: 100%;
    min-height: 0;
  }
  .art-show-date {
    display: none;
  }
}
</style>
