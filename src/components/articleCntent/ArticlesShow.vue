<template>
  <div class="art-show-none" v-if="list.length == 0">暂时没有相应文章...</div>
  <div v-else>
    <div class="animated bounceInUp" v-for="item in list" :key="item.id">
      <div class="art-show-item" @click="showOneArticle(item)">
        <div class="art-show-title">{{ item.title }}</div>
        <span class="art-show-date common-hover">
          {{ moment(parseInt(item.date, 10)).format('YYYY-MM-DD') }}
        </span>
      </div>
    </div>
  </div>
  <checkModal :visibles="visible" @visibleChange="visibleChange" @handleOk="handleOk" />
</template>

<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue'
import moment from 'moment'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import Md5 from 'js-md5'
import checkModal from '@/components/checkModal.vue'
import { getArticleList } from '@/api/api'

const salt = 'liku'
const router = useRouter()
const props = defineProps({
  list: []
})
const list = computed(() => props.list)
const visible = ref<boolean>(false)
const articleId = ref<string>('')
const showOneArticle = (item) => {
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
<style>
.art-show-item {
  border-radius: 20px;
  margin-bottom: 16px;
  overflow: hidden;
  user-select: none;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  background-color: var(--theme-bg1);
}

.art-show-item:hover {
  transform: scale(1.02);
}

.art-show-none {
  height: 200px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--theme-color-font1);
}

.art-show-title {
  font-size: 24px;
  padding: 10px 20px;
  width: 86%;
  min-height: 70px;
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
  .art-show-item {
    margin-bottom: 10px;
    border-radius: 12px;
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
