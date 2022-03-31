<template>
  <div class="Blog-box">
    <Nav />
    <Content />
    <Footer />
    <a-back-top :duration="700" :visibilityHeight="300" class="BackTop" @click="goBack">
      <div class="back-top-btn theme-color common-hover">
        <VerticalAlignTopOutlined />
      </div>
    </a-back-top>
    <NavMobile :drawerShow="drawerShow" @setdrawerShow="setdrawerShow" />

    <div class="nav-btn-mobile common-hover" @click="setdrawerShow(true)">
      <MenuOutlined />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VerticalAlignTopOutlined, MenuOutlined } from '@ant-design/icons-vue'
import Nav from './Nav/index.vue'
import Content from './Content/index.vue'
import Footer from './Footer/index.vue'
import NavMobile from './NavMobile/index.vue'
import { usecommonState } from '@/store/common'

const userStore = usecommonState()
const drawerShow = ref<boolean>(false)
const goBack = () => {
  userStore.setNavShow(true)
}
const setdrawerShow = (status: boolean) => {
  drawerShow.value = status
}
</script>

<style scoped>
.Blog-box {
  /* min-height: calc(100vh - 60px - 120px); */
  min-height: calc(100vh - 120px);
  position: relative;
  font-family: 'yu100';
  background-position: center 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: var(--background-image);
}

.back-top-btn {
  height: 50px;
  width: 50px;
  border-radius: 14px;
  color: var(--theme-color-font);
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-btn-mobile {
  display: none;
}

@media all and (max-width: 1240px) {
  .BackTop {
    display: none;
  }
  .nav-btn-mobile {
    display: block;
    position: fixed;
    width: 38px;
    height: 38px;
    color: var(--theme-color-font);
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 18px;
    user-select: none;
  }
}
</style>
