<template>
  <PageTitle :title="title" />
  <div class="standard-page-box theme-color animated bounceInLeft">
    <template v-if="list.length">
      <div class="animated bounceInUp" :key="item.id" v-for="item in list">
        <div class="art-show-item theme-color-1" @click="showOneArticle(item)">
          <div class="art-show-title">{{ item.title }}</div>
          <span class="art-show-date common-hover">
            {{ moment(parseInt(item.date, 10)).format('YYYY-MM-DD HH:mm:ss') }}
          </span>
        </div>
      </div>
      <PageNav
        :pageSize="pageSize"
        :pageNum="pageNum"
        :total="total"
        @pageChange="pageChange"
      />
    </template>
    <div class="art-show-none" v-else>
      暂时没有相应{{
        router.currentRoute.value.query.type === 'classes' ? '分类' : '标签'
      }}...
    </div>
  </div>
  <checkModal :visibles="visible" @visibleChange="visibleChange" @handleOk="handleOk" />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import moment from 'moment'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import Md5 from 'js-md5'
import PageTitle from '@/components/PageTitle.vue'
import PageNav from '@/components/PageNav.vue'
import { useArticleState } from '@/store/index'
import { getArticleList } from '@/api/api'
import checkModal from '@/components/checkModal.vue'

const salt = 'liku'
const title: any = ref('')
const router = useRouter()
const list: any = ref([])
const ArticleState = useArticleState()
const pageSize = computed(() =>
  router.currentRoute.value.query.type === 'classes'
    ? ArticleState.pageSize_classes
    : ArticleState.pageSize_tags
)
const pageNum = computed(() =>
  router.currentRoute.value.query.type === 'classes'
    ? ArticleState.pageNum_classes
    : ArticleState.pageNum_tags
)
const total = computed(() =>
  router.currentRoute.value.query.type === 'classes'
    ? ArticleState.total_classes
    : ArticleState.total_tags
)

const getClassArticle = () => {
  // 获取class文章列表
  getArticleList
    .getClassListDetail({
      pageSize: ArticleState.pageSize_classes,
      pageNum: ArticleState.pageNum_classes,
      classes: router.currentRoute.value.query.classes
    })
    .then((res) => {
      if (res) {
        ArticleState.setArticleList_classes(res.data)
        list.value = res.data.list
      }
    })
}
const getTagsArticle = () => {
  // 获取tags文章列表
  getArticleList
    .getTagsListdetail({
      pageSize: ArticleState.pageSize_tags,
      pageNum: ArticleState.pageNum_tags,
      tagId: router.currentRoute.value.query.id
    })
    .then((res) => {
      ArticleState.setArticleList_tags(res.data)
      list.value = res.data.list
    })
}
const pageChange = async (current: number, pagesize: number) => {
  if (router.currentRoute.value.query.type === 'classes') {
    await ArticleState.setPage_classes(current, pagesize)
    await getClassArticle()
  } else {
    await ArticleState.setPage_tags(current, pagesize)
    await getTagsArticle()
  }
}

if (router.currentRoute.value.query.type === 'classes') {
  title.value = router.currentRoute.value.query.classes
  getClassArticle()
} else {
  title.value = router.currentRoute.value.query.tags
  getTagsArticle()
}
const visible = ref<boolean>(false)
const articleId = ref<string>('')
const showOneArticle = (item: any) => {
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
