<template>
  <div class="Home-box">
    <div class="home-top-img">
      <span class="home-top-title animated bounceInDown">{{ name }}</span>
      <span class="home-top-poem animated bounceInUp">{{ desText }}</span>
    </div>
    <div class="home-body">
      <div class="home-main">
        <ArtList />
        <PageNav
          :pageSize="pageSize"
          :pageNum="pageNum"
          :total="total"
          @pageChange="pageChange"
        />
      </div>
      <div class="home-aside">
        <BlogCard />
        <SocialCard />
        <BlogData />
        <MyNotice />
        <ClockCard />
        <TagCard />
        <!-- <SiteCard /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import ArtList from '@/components/homeContent/ArtList.vue'
import PageNav from '@/components/PageNav.vue'
import BlogCard from '@/components/homeContent/BlogCard.vue'
import SocialCard from '@/components/homeContent/SocialCard.vue'
import BlogData from '@/components/homeContent/BlogData.vue'
import MyNotice from '@/components/homeContent/MyNotice.vue'
import ClockCard from '@/components/homeContent/ClockCard.vue'
import TagCard from '@/components/homeContent/TagCard.vue'
// import SiteCard from '@/components/Blog/Content/SiteCard.vue'
import { title } from '@/utils/constant'
import { getGobalStatus, getArticleList } from '@/api/api'
import { usecommonState, useArticleState } from '@/store/index'

const ArticleState = useArticleState()

const name = title
const desText = ref<String>('')
// 获取描述
getGobalStatus.getDesc({}).then((res) => {
  desText.value = res.data
})
// 文章，分类，标签总数等主页右侧
getArticleList.getTypeCount({}).then((res) => {
  usecommonState().setTypeCount(res.data)
})
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
getArticle()
</script>

<style>
.home-body {
  display: flex;
}

.home-main {
  width: calc(100% - 260px);
  /* min-height: calc(100vh - 60px - 120px); */
  min-height: calc(100vh - 120px);
  padding-right: 20px;
}

.home-aside {
  width: 260px;
  color: var(--theme-color-font);
}

.home-top-img {
  height: 100vh;
  color: var(--theme-color-font);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
}
.home-top-img span {
  text-shadow: var(--text-shadow);
}

.home-top-title {
  font-size: 56px;
  font-family: 'yu400';
  font-weight: 700;
}

.home-top-poem {
  font-size: 28px;
  font-family: 'yu100';
}

@media all and (max-width: 1240px) {
  .home-top-title {
    font-size: 48px;
  }
  .home-top-poem {
    font-size: 20px;
  }
  .home-aside {
    display: none;
  }
  .home-main {
    padding-right: 0;
    width: 100%;
    min-height: calc(60vh - 120px);
  }
}
</style>
