<template>
  <nav class="nav-pc theme-color" :id="navShow ? '' : 'hiddenNav'">
    <div class="nav-content">
      <div class="home-btn common-hover">
        <HomeOutlined @click="router.replace('/')" />
      </div>
      <div class="setThemeBtn">
        <span>暗黑 </span>
        <a class="admin-btn">
          <a-switch
            :checked="checked"
            @update:checked="checked = $event"
            @change="changeTheme(checked)"
          />
        </a>
        <span>明亮</span>
      </div>
      <div v-for="item in navArr" :key="item.id">
        <router-link
          :to="item.to"
          :class="
            navArr.length - 1 ? 'nav-btn common-hover margin-0' : 'nav-btn common-hover'
          "
          >{{ item.name }}</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { navArr } from '@/utils/constant'
import { usecommonState } from '@/store/common'

export default defineComponent({
  name: 'Nav',
  components: {
    HomeOutlined
  },
  setup() {
    const store = usecommonState()
    const router = useRouter()
    document.body.onmousewheel = () => {
      store.setNavShow((window as any).event.wheelDeltaY > 0)
    }
    const navShow = computed(() => store.navShow)
    const checked = computed(() => store.themeStatus)

    const changeTheme = (e: boolean) => {
      store.setThemeStatus(e)
    }
    return {
      navShow,
      checked,
      navArr,
      router,
      changeTheme
    }
  }
})
</script>

<style scoped>
.nav-pc {
  width: 100%;
  height: 60px;
}

.nav-pc {
  position: fixed;
  top: 0;
  z-index: 9;
  box-shadow: 0 0 18px #000;
  transition: all 0.3s;
}
#hiddenNav {
  top: -60px;
  box-shadow: none;
}

.nav-content {
  position: relative;
  /* width: 1300px; */
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-btn,
.home-btn,
.admin-btn {
  height: 44px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-right: 20px;
  border-radius: 14px;
  color: var(--theme-color-font);
  transition: all 0.2s;
  user-select: none;
}

.nav-btn:hover,
.home-btn:hover,
.admin-btn:hover,
.articels-second-item:hover {
  color: var(--theme-color-font);
}

.margin-0 {
  margin-right: 0;
}

.home-btn {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  font-size: 26px;
  width: 60px;
  cursor: pointer;
}
.setThemeBtn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  font-size: 16px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--theme-color-font);
}

.admin-btn {
  /* position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%); */
  font-size: 26px;
  width: 60px;
}

.articles-btn {
  position: relative;
}

.articels-second {
  position: absolute;
  z-index: -10;
  top: -130px;
  height: 100px;
  width: 100%;
  transition: all 0.3s;
}
.articles-btn:hover .articels-second {
  top: 50px;
}
.articels-second-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 34px;
  margin-bottom: 6px;
  border-radius: 10px;
  user-select: none;
  color: var(--theme-color-font);
}

@media all and (max-width: 1240px) {
  .nav-pc {
    display: none;
  }
}
.ant-switch-checked {
  background-color: var(--theme-hover);
}
</style>
