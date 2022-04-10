<template>
  <PageTitle :title="'所有文章'" />
  <div class="standard-page-box articles theme-color">
    <Search @getArticle="getArticle" />
    <ArticlesShow :list="ArticleList" />
    <PageNav
      :pageSize="pageSize"
      :pageNum="pageNum"
      :total="total"
      @pageChange="pageChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import Search from '@/components/articleCntent/Search.vue'
import ArticlesShow from '@/components/articleCntent/ArticlesShow.vue'
import PageNav from '@/components/PageNav.vue'
import { getArticleList } from '@/api/api'
import { useArticleState } from '@/store/index'

const ArticleState = useArticleState()
const pageSize = computed(() => ArticleState.pageSize_search)
const pageNum = computed(() => ArticleState.pageNum_search)
const total = computed(() => ArticleState.total_search)
const ArticleList = ref([])
const getsechArticle = (title = null) => {
  // 获取文章列表
  getArticleList
    .getList({
      pageSize: ArticleState.pageSize_search,
      pageNum: ArticleState.pageNum_search,
      title
    })
    .then((res) => {
      ArticleState.setArticleList_search(res.data)
      ArticleList.value = res.data.list
    })
}
const pageChange = async (current: number, pagesize: number) => {
  await ArticleState.setPage_search(current, pagesize)
  await getsechArticle()
}
const getArticle = (e: any) => {
  getsechArticle(e)
}
getsechArticle()
</script>

<style>
.standard-page-box {
  width: 1000px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 40px;
  font-size: 20px;
  color: #fff;
}

@media all and (max-width: 1240px) {
  .standard-page-box {
    width: 100%;
    font-size: 14px;
    padding: 10px;
  }
  .standard-page-title {
    width: 100%;
    height: 280px;
    padding: 0 20px;
  }

  .article-title {
    font-size: 26px;
  }
  .article-class,
  .article-date {
    font-size: 14px;
    height: 26px;
    line-height: 26px;
    margin-right: 20px;
    border-radius: 10px;
    margin-top: 10px;
  }
}
</style>
