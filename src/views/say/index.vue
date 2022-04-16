<template>
  <PageTitle title="自言自语" />
  <div class="standard-page-box theme-color">
    <div class="say-item" :key="item.id" v-for="item in sayList">
      <div class="say-avatar-box animated bounceInLeft">
        <img :src="avatarUrl" alt="avatar" class="say-avatar" />
      </div>
      <div class="say-content-box">
        <div class="animated bounceInRight">
          <div class="say-content theme-color-1">
            {{ item.content }}
            <span class="say-content-date theme-color-2 common-hover">
              {{ moment(parseInt(item.date, 10)).format('YYYY-MM-DD HH:mm:ss') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import moment from 'moment'
import PageTitle from '@/components/PageTitle.vue'
import { getArticleList } from '@/api/api'
import { avatarUrl } from '@/utils/constant'

const sayList: any = ref([])
getArticleList.getSay({}).then((res) => {
  if (res) {
    sayList.value = res.data
  }
})
</script>
<style scoped>
.standard-page-box {
  width: 1000px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 40px;
  font-size: 20px;
  color: #fff;
}
.say-item {
  min-height: 90px;
  display: flex;
  margin-bottom: 20px;
}
.say-item:last-child {
  margin-bottom: 0;
}

.say-avatar-box,
.say-avatar {
  width: 60px;
  height: 60px;
}
.say-avatar {
  border-radius: 14px;
  -webkit-user-drag: none;
}

.say-content-box {
  margin-left: 20px;
  flex: 1;
}
.say-content {
  border-radius: 14px;
  display: flex;
  min-height: 90px;
  justify-content: flex-start;
  align-items: center;
  word-break: break-all;
  padding: 20px 20px 44px 20px;
  position: relative;
  transition: all 0.2s;
  color: var(--theme-color-font1);
}
.say-content:hover {
  transform: scale(1.02);
}

.say-content-date {
  padding: 0 10px;
  border-radius: 10px;
  transition: all 0.2s;
  color: var(--theme-color-font1);
  height: 30px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  user-select: none;
}

@media all and (max-width: 1240px) {
  .standard-page-box {
    width: 100%;
    font-size: 14px;
    padding: 10px;
  }
  .say-avatar-box,
  .say-avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .say-content-box {
    margin-left: 10px;
  }
  .say-content {
    font-size: 14px;
    border-radius: 12px;
    min-height: 0;
    padding: 10px;
  }
  .say-content-date {
    display: none;
  }
  .say-item {
    min-height: 0;
    margin-bottom: 10px;
  }
}
</style>
