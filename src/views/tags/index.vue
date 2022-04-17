<template>
  <PageTitle title="标签" />
  <div class="standard-page-box theme-color tags-box animated bounceInLeft">
    <template v-if="tagsList.length">
      <span
        @click="toSomeArts(item)"
        class="theTag tags-item common-hover"
        :key="item.id"
        v-for="item in tagsList"
        >{{ item.tag }}
      </span>
    </template>

    <div class="art-show-none" v-else>暂时没有相应标签..</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageTitle from '@/components/PageTitle.vue'
import { getArticleList } from '@/api/api'

const tagsList: any = ref([])
// 获取分类列表
getArticleList.getTagsList({}).then((res) => {
  if (res) {
    tagsList.value = res.data
  }
})
const router = useRouter()
const toSomeArts = (item: any) => {
  router.push({
    name: 'classtagList',
    query: { tags: item.tag, id: item.id, type: 'tags' }
  })
}
</script>

<style scoped>
.standard-page-box {
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
.theTag {
  display: inline-block;
  padding: 0 10px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  user-select: none;
  transition: all 0.2s;
  color: var(--theme-color-font1);
  border-radius: 12px;
  cursor: pointer;
}
.tags-box {
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.tags-item {
  font-size: 22px;
  padding: 0 14px;
  margin: 10px 0;
}

@media all and (max-width: 1240px) {
  .standard-page-box {
    border-radius: 12px;
    width: unset;
    margin: 0 auto;
  }
  .tags-box {
    min-height: 0;
  }

  .tags-item {
    font-size: 16px;
    padding: 0 12px;
    margin: 4px 0;
  }
}
</style>
