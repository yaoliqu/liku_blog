<template>
  <div
    :class="drawerShow ? 'nav-mobile-mask nav-mobile-mask-in' : 'nav-mobile-mask'"
  ></div>
  <div
    :class="
      drawerShow ? 'nav-mobile theme-color nav-mobile-in' : 'nav-mobile theme-color'
    "
  >
    <div class="nav-mobile-avatar-box">
      <img :src="avatarUrl" alt="avatar" class="nav-mobile-avatar" />
    </div>
    <div class="nav-nobile-bottom">飞鸟小站</div>
    <div
      v-for="(item, index) in navArr"
      :key="index"
      :class="
        pathname === item.to ? 'nav-mobile-item nav-mobile-active' : 'nav-mobile-item'
      "
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { avatarUrl, navArr } from '@/utils/constant'

export default defineComponent({
  props: {
    drawerShow: Boolean,
    setdrawerShow: Function
  },
  setup(props) {
    const router = useRouter()

    const propsData = reactive({
      drawerShow: props.drawerShow
    })
    const pathname = router.currentRoute.value.path
    return {
      ...toRefs(propsData),
      avatarUrl,
      navArr,
      pathname
    }
  }
})
</script>

<style scoped>
.nav-mobile-mask {
  display: none;
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  right: -100vw;
  width: 100%;
  height: 100%;
  /* transition: all 0.3s; */
}
.nav-mobile-mask-in {
  right: 0;
}
.nav-mobile {
  display: none;
  position: fixed;
  height: 100%;
  width: 100px;
  top: 0;
  right: -100px;
  z-index: 999;
  box-shadow: none;
  transition: all 0.3s;
}
.nav-mobile-in {
  right: 0;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.7);
}

.nav-mobile-avatar-box {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgb(170, 159, 159); */
  margin-bottom: 40px;
}

.nav-mobile-avatar {
  width: 70px;
  height: 70px;
  border-radius: 10px;
}
.nav-mobile-item {
  height: 34px;
  /* background-color: rgb(224, 112, 247); */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
  user-select: none;
  transition: all 0.2s;
}
.nav-mobile-active,
.nav-mobile-item:hover {
  /* 副色1 */
  background-color: rgb(19, 19, 26);
}

.nav-nobile-bottom {
  position: absolute;
  bottom: 4px;
  width: 100%;
  color: #fff;
  font-size: 14px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

@media all and (max-width: 1240px) {
  .nav-mobile-mask,
  .nav-mobile {
    display: block;
  }
}
</style>
