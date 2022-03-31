<template>
  <div class="animated bounceInRight">
    <div class="aside-card SocialCard-box theme-color">
      <a
        class="social-btn common-hover"
        :href="personInfo.github"
        target="_blank"
        rel="noreferrer"
      >
        <github-outlined />
      </a>
      <a-popover
        class="social-btn common-hover"
        color="rgb(97, 147, 187)"
        :content="personInfo.wechat"
        overlayclass="social-btn-card"
      >
        <wechat-outlined />
      </a-popover>

      <a-popover
        class="social-btn common-hover"
        color="rgb(97, 147, 187)"
        :content="personInfo.qq"
        overlayclass="social-btn-card"
      >
        <qq-outlined />
      </a-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { GithubOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
import { personInfo } from '@/utils/constant'

export default defineComponent({
  setup() {
    return {
      personInfo
    }
  },
  components: {
    GithubOutlined,
    WechatOutlined,
    QqOutlined
  }
})
</script>

<style>
.SocialCard-box {
  height: 80px;
  font-size: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.csdn-icon {
  width: 30px;
  height: 30px;
}

.social-btn {
  color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
}
.social-btn:hover {
  color: #fff;
}

.csdn-icon path {
  fill: #fff;
  transition: all 0.2s;
}
/* .csdn-btn:hover .csdn-icon path {
    fill: rgb(88, 88, 88);
} */

.QR-code {
  width: 140px;
  height: 140px;
}

.social-btn-card {
  border-radius: 20px;
  overflow: hidden;
  padding: 0;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.5);
}
</style>
