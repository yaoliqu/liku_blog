<template>
  <div
    :class="drawerShow ? 'nav-mobile-mask nav-mobile-mask-in' : 'nav-mobile-mask'"
    @click="setdrawerShow"
  ></div>
  <div
    :class="
      drawerShow ? 'nav-mobile theme-color nav-mobile-in' : 'nav-mobile theme-color'
    "
  >
    <div class="nav-mobile-avatar-box">
      <img :src="avatarUrl" alt="avatar" class="nav-mobile-avatar" />
    </div>
    <!-- 这里是bottom -->
    <div class="nav-nobile-bottom">liku的秘密基地</div>
    <div
      v-for="(item, index) in mobileNavArr"
      :key="index"
      :class="
        router.currentRoute.value.path === item.to
          ? 'nav-mobile-item nav-mobile-active'
          : 'nav-mobile-item'
      "
      @click="goDetail(item.to)"
    >
      {{ item.name }}
    </div>
    <a class="nav-mobile-item">
      <a-switch
        :checked="checked"
        @update:checked="checked = $event"
        checked-children="暗"
        un-checked-children="亮"
        @change="changeTheme(checked)"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
import { avatarUrl, mobileNavArr } from '@/utils/constant'
import { usecommonState } from '@/store/common'

export default defineComponent({
  props: {
    drawerShow: Boolean
  },
  setup(props, { emit }) {
    const store = usecommonState()
    const router = useRouter()
    const setdrawerShow = () => {
      emit('setdrawerShow', false)
    }
    const reactiveData = reactive({
      checked: computed(() => store.themeStatus)
    })
    const changeTheme = (e: boolean) => {
      store.setThemeStatus(e)
    }
    const goDetail = (path: string) => {
      router.push(path)
    }
    return {
      avatarUrl,
      mobileNavArr,
      setdrawerShow,
      ...toRefs(reactiveData),
      changeTheme,
      goDetail,
      router
    }
  }
})
</script>

<style scoped>
.nav-mobile-mask {
  display: none;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
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
  width: 128px;
  top: 0;
  right: -128px;
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
  color: var(--theme-color-font);
  user-select: none;
  transition: all 0.2s;
}
.nav-mobile-active,
.nav-mobile-item:not(:last-child):hover {
  /* 副色1 */
  background-color: var(--theme-bg1);
}

.nav-nobile-bottom {
  position: absolute;
  bottom: 4px;
  width: 100%;
  color: var(--theme-color-font);
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
.ant-switch-checked {
  background-color: var(--theme-hover);
}
</style>
