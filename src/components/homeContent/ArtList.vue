<template>
  <div class="animated bounceInLeft" v-for="item in articlesList" :key="item.id">
    <div class="article-item theme-color" @click="showOneArticle(item)">
      <h1 class="article-item-title">{{ item.title }}</h1>
      <div class="article-item-abstract">{{ item.content }}</div>
      <div class="article-item-info">
        <span class="article-item-date theme-color-1 common-hover">
          {{ item.date }}
        </span>
        <div class="article-item-tags">
          <span
            class="article-item-tag theme-color-1 common-hover"
            v-for="tag in item.tagslists"
            :key="tag.id"
          >
            {{ tag.tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <checkModal :visibles="visible" @visibleChange="visibleChange" @handleOk="handleOk" />
</template>

<script lang="ts" setup>
import moment from 'moment'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import Md5 from 'js-md5'
import { articleListIFC } from '@/common/types'
import { noNetWorkArtiicle } from '@/utils/constant'
import { useArticleState } from '@/store/index'
import checkModal from '@/components/checkModal.vue'
import { getArticleList } from '@/api/api'

const salt = 'liku'
const router = useRouter()
const ArticleState = useArticleState()
const articlesList = computed(() =>
  ArticleState.list.length
    ? ArticleState.list.map((i: articleListIFC) => ({
        ...i,
        content: i.content
          .replace(/<a(.*?)>(.*?)<\/a>/g, '$2')
          .replace(/[# |**|`|>]/g, '')
          .replace(/\\n/gm, ' '),
        date: moment(parseInt(i.date, 10)).format('YYYY-MM-DD')
      }))
    : noNetWorkArtiicle
)
const visible = ref<boolean>(false)
const articleId = ref<string>('')
const showOneArticle = (item: articleListIFC) => {
  if (item.isshow === 0) {
    visible.value = true
    articleId.value = item.id
  } else {
    router.push({ name: 'post', query: { id: item.id } })
  }
}
const visibleChange = (e: boolean) => {
  visible.value = e
}
const handleOk = (e: string) => {
  getArticleList
    .checkPwd({
      id: articleId.value,
      pwd: Md5(e + salt)
    })
    .then((res) => {
      if (res.code === 200) {
        sessionStorage.setItem('pwd', Md5(e + salt))
        router.push({ name: 'post', query: { id: articleId.value } })
        visible.value = false
      } else {
        message.error(res.msg)
      }
    })
}
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
