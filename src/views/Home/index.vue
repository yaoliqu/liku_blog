<template>
  <div class="Home-box">
    <div class="home-top-img">
      <span class="home-top-title animated bounceInDown">{{ name }}</span>
      <span class="home-top-poem animated bounceInUp">{{ userStore.jinrishiju }}</span>
    </div>
    <div class="home-body">
      <div class="home-main">
        <ArtList />
        <PageNav />
      </div>
      <div class="home-aside">
        <BlogCard />
        <SocialCard />
        <BlogData />
        <MyNotice />
        <ClockCard />
        <TagCard />
        <SiteCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArtList from './ArtList.vue'
import PageNav from './PageNav.vue'
import BlogCard from '@/components/Blog/Content/BlogCard.vue'
import SocialCard from '@/components/Blog/Content/SocialCard.vue'
import BlogData from '@/components/Blog/Content/BlogData.vue'
import MyNotice from '@/components/Blog/Content/MyNotice.vue'
import ClockCard from '@/components/Blog/Content/ClockCard.vue'
import TagCard from '@/components/Blog/Content/TagCard.vue'
import SiteCard from '@/components/Blog/Content/SiteCard.vue'
import { title } from '@/utils/constant'
import { usecommonState } from '@/store/common'

const userStore = usecommonState()
const name = title
</script>

<style>
.home-body {
  display: flex;
}

.home-main {
  width: calc(100% - 260px);
  /* min-height: calc(100vh - 60px - 120px); */
  min-height: calc(100vh - 120px);
  padding-right: 20px;
}

.home-aside {
  width: 260px;
  color: var(--theme-color-font);
}

.home-top-img {
  height: 100vh;
  color: var(--theme-color-font);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
}
.home-top-img span {
  text-shadow: var(--text-shadow);
}

.home-top-title {
  font-size: 56px;
  font-family: 'yu400';
  font-weight: 700;
}

.home-top-poem {
  font-size: 28px;
  font-family: 'yu100';
}

@media all and (max-width: 1240px) {
  .home-top-title {
    font-size: 48px;
  }
  .home-top-poem {
    font-size: 20px;
  }
  .home-aside {
    display: none;
  }
  .home-main {
    padding-right: 0;
    width: 100%;
  }
}
</style>
