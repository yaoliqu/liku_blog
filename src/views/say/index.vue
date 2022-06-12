<template>
  <PageTitle title="自言自语" />
  <div class="standard-page-box theme-color">
    <template v-if="sayList.length">
      <div class="say-item" :key="item.id" v-for="item in sayList">
        <div class="say-avatar-box animated bounceInLeft">
          <img :src="avatarUrl" alt="avatar" class="say-avatar" />
        </div>
        <div class="say-content-box">
          <div class="animated bounceInRight">
            <div class="say-content theme-color-1">
              <span> {{ item.content }}</span>
              <div class="box" v-if="item.imgList && item.imgList.length">
                <div class="imageBox">
                  <!-- <img v-for="(img, index) in item.imgList" :key="index" :src="img" /> -->
                  <a-image-preview-group>
                    <a-image
                      v-for="(img, index) in item.imgList"
                      :key="index"
                      :src="img"
                      fallback="data:image/png;base64,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"
                    />
                  </a-image-preview-group>
                </div>
              </div>
              <span class="say-content-date theme-color-2 common-hover">
                {{ moment(parseInt(item.date, 10)).format('YYYY-MM-DD HH:mm:ss') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else style="text-align: center">暂无可见内容</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import moment from 'moment'
import PageTitle from '@/components/PageTitle.vue'
import { getArticleList } from '@/api/api'
import { avatarUrl } from '@/utils/constant'

const sayList: any = ref([])
const data = [
  {
    id: 1,
    content: 'aaa',
    date: '1651494042000',
    imgList: [
      'https://img2.baidu.com/it/u=550475879,3082425513&fm=253&fmt=auto&app=138&f=GIF?w=480&h=472',
      'https://img2.baidu.com/it/u=550475879,3082425513&fm=253&fmt=auto&app=138&f=GIF?w=480&h=472',
      'https://img1.baidu.com/it/u=1655937564,1101300183&fm=253&fmt=auto&app=138&f=JPEG?w=825&h=500',
      'https://img0.baidu.com/it/u=4175036418,1807422850&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=325',
      'https://img1.baidu.com/it/u=1370149264,408331583&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=477',
      'https://img2.baidu.com/it/u=550475879,3082425513&fm=253&fmt=auto&app=138&f=GIF?w=480&h=472',
      'https://img1.baidu.com/it/u=1655937564,1101300183&fm=253&fmt=auto&app=138&f=JPEG?w=825&h=500',
      'https://img1.baidu.com/it/u=1655937564,1101300183&fm=253&fmt=auto&app=138&f=JPEG?w=825&h=500',
      'https://img1.baidu.com/it/u=1655937564,1101300183&fm=253&fmt=auto&app=138&f=JPEG?w=825&h=500',
      'https://img1.baidu.com/it/u=1655937564,1101300183&fm=253&fmt=auto&app=138&f=JPEG?w=825&h=500',
      'https://img1.baidu.com/it/u=1655937564,1101300183&fm=253&fmt=auto&app=138&f=JPEG?w=825&h=500',
      'https://img0.baidu.com/it/u=4175036418,1807422850&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=325'
    ]
  },
  {
    id: 2,
    content:
      'bbb暂无相应分类暂无相应分类暂无相应分类暂无相应分类暂无相应分类暂无相应分类暂无相应分类暂无相应分类暂无相应分类暂无相应分类',
    date: '1651494042000',
    imgList: []
  },
  {
    id: 3,
    content: 'ccc',
    date: '1651494042000',
    imgList: ['https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF']
  }
]

getArticleList.getSay({}).then((res) => {
  if (res) {
    // sayList.value = res.data
    sayList.value = data
  }
})
</script>
<style scoped lang="less">
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
  /* align-items: center; */
  flex-direction: column;
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

.box {
  display: flex;
  flex-wrap: wrap;
}

.imageBox {
  position: relative;
  overflow: hidden;
  margin-bottom: 2%;
  margin-top: 3%;
  width: 80%;
  :deep(img) {
    padding: 8px;
    border-radius: 4px;
    width: 100%;
  } /* 2/3 */
  :deep(.ant-image:nth-child(1):nth-last-child(2)),
  :deep(.ant-image:nth-child(2):nth-last-child(1)),
  :deep(.ant-image:nth-child(1):nth-last-child(3)),
  :deep(.ant-image:nth-child(2):nth-last-child(2)),
  :deep(.ant-image:nth-child(3):nth-last-child(1)) {
    width: 32%;
  }

  /* 4 */
  :deep(.ant-image:nth-child(1):nth-last-child(4)),
  :deep(.ant-image:nth-child(2):nth-last-child(3)),
  :deep(.ant-image:nth-child(3):nth-last-child(2)),
  :deep(.ant-image:nth-child(4):nth-last-child(1)) {
    width: 49%;
  }

  /*  5张以上图片  */
  :deep(.ant-image:nth-child(1):nth-last-child(n + 5)),
  :deep(.ant-image:nth-child(1):nth-last-child(n + 5) ~ .ant-image) {
    width: 32%;
  }
}

// .imageBox img {
//   padding: 8px;
//   border-radius: 4px;
//   width: 100%;
// }
// /* 2/3 */
// .imageBox img:nth-child(1):nth-last-child(2),
// .imageBox img:nth-child(2):nth-last-child(1),
// .imageBox img:nth-child(1):nth-last-child(3),
// .imageBox img:nth-child(2):nth-last-child(2),
// .imageBox img:nth-child(3):nth-last-child(1) {
//   width: 32%;
// }

// /* 4 */
// .imageBox img:nth-child(1):nth-last-child(4),
// .imageBox img:nth-child(2):nth-last-child(3),
// .imageBox img:nth-child(3):nth-last-child(2),
// .imageBox img:nth-child(4):nth-last-child(1) {
//   width: 49%;
// }

// /*  5张以上图片  */
// .imageBox img:nth-child(1):nth-last-child(n + 5),
// .imageBox img:nth-child(1):nth-last-child(n + 5) ~ img {
//   width: 32%;
// }

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
    /* display: none; */
    padding: 0 10px;
    border-radius: 10px;
    transition: all 0.2s;
    color: var(--theme-color-font1);
    height: 20px;
    position: absolute;
    right: 10px;
    bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    user-select: none;
  }
  .say-item {
    min-height: 0;
    margin-bottom: 10px;
  }
  .box {
    margin-bottom: 20px;
  }
  .imageBox {
    position: relative;
    overflow: hidden;
    margin-bottom: 2%;
    width: 95%;
    margin-top: 3%;
  }
  .imageBox .ant-image {
    padding: 2px;
    border-radius: 4px;
    width: 100%;
  }
}
</style>
