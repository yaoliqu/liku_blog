<template>
  <div class="Content-box">
    <Nav />
    <div class="content-center">
      <div class="Blog-box">
        <router-view />
      </div>
    </div>
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
import Nav from './components/Nav.vue'
import Footer from './components/footer.vue'
import NavMobile from './components/NavMobile.vue'
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
.Content-box {
  /* min-height: calc(100vh - 60px - 120px); */
  min-height: calc(100vh - 120px);
  margin-bottom: 40px;
  background-position: center 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: var(--background-image);
}

.content-center {
  /* min-height: calc(100vh - 60px - 120px); */
  min-height: calc(100vh - 120px);
  /* width: 1300px; */
  width: 1200px;
  margin: auto;
}

@media all and (max-width: 1240px) {
  .content-center {
    width: 100%;
    /* padding: 0 10px; */
    min-height: 95vh;
  }
}

.Blog-box {
  /* min-height: calc(100vh - 60px - 120px); */
  min-height: calc(100vh - 120px);
  position: relative;
  font-family: 'yu100';
  padding: 10px;
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
