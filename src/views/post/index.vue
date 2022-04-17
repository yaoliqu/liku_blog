<template>
  <div class="Article-box">
    <div class="animated bounceInDown">
      <div class="standard-page-title">
        <h1 class="article-title">{{ contentData?.title }}</h1>
        <div class="article-info-box">
          <span class="article-class theme-color common-hover">
            {{ contentData?.classes }}</span
          >
          <span class="article-date theme-color common-hover">
            {{ moment(parseInt(contentData?.date, 10)).format('YYYY-MM-DD') }}
          </span>
        </div>
      </div>
    </div>

    <div class="standard-page-box theme-color">
      <ArticleContent :content="contentData?.content" />
      <ArticleTags :tags="contentData?.tagslists" />
      <div class="Divider"></div>
      <div class="updateTime" v-if="contentData?.updateTime">
        更新于 {{ contentData?.updateTime }}
      </div>
    </div>
    <!-- <ArticleAside content={content} /> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import moment from 'moment'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import ArticleContent from '@/components/postContent/ArticleContent.vue'
import ArticleTags from '@/components/postContent/ArticleTags.vue'
import { getArticleList } from '@/api/api'

const router = useRouter()
const contentData: any = ref({})

const getList = () => {
  getArticleList
    .getArticleById({
      id: router.currentRoute.value.query.id,
      pwd: sessionStorage.getItem('pwd')
    })
    .then((res) => {
      if (res.code === 200) {
        contentData.value = res.data
      } else {
        message.error(res.msg)
        router.go(-1)
      }
    })
}
watch(
  () => router.currentRoute.value,
  (val, prev) => {
    if (val.path === prev.path) {
      getList()
    }
  }
)
getList()
</script>

<style>
.standard-page-title {
  width: 1000px;
  margin: 0 auto;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  color: var(--theme-color-font);
}

.standard-page-box {
  width: 1000px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 40px;
  font-size: 20px;
  color: #fff;
}

.article-title {
  margin: 0;
  font-size: 50px;
  font-weight: 700;
  font-family: 'FiraCode', 'yu400';
  color: var(--theme-color-font);
}

.article-class {
  cursor: pointer;
}

.article-class,
.article-date {
  display: inline-block;
  font-size: 18px;
  height: 40px;
  padding: 0 10px;
  line-height: 40px;
  margin-right: 20px;
  border-radius: 14px;
  user-select: none;
  transition: all 0.2s;
}
.Divider {
  margin: 24px 0;
  height: 3px;
  background-image: linear-gradient(to right, rgb(134, 134, 134) 50%, transparent 50%);
  background-size: 28px 3px;
  background-repeat: repeat-x;
}
.updateTime {
  display: flex;
  justify-content: center;
  margin: 24px auto;
  color: var(--theme-color-font);
}
@media all and (max-width: 1240px) {
  .Divider {
    margin: 16px 0;
    height: 2px;
  }
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
