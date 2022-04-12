<template>
  <PageTitle title="分类" />
  <div class="standard-page-box theme-color animated bounceInLeft">
    <!-- {classes
                    .filter(item => item.count > 0)
                    .map(item => (
                        <div
                            class="class-item theme-color-1"
                            key={item._id}
                            onClick={() => toSomeArts(item.class)}
                        >
                            {item.class}
                            <div class="class-count"> {item.count}</div>
                        </div>
                    ))} -->
    <div class="art-show-none">暂时没有相应分类...</div>

    <!-- <div class="class-item theme-color-1" key="{item._id}">
      JavaScript 手撕代码
      <div class="class-count">12</div>
    </div>
    <div class="class-item theme-color-1" key="{item._id}">
      JavaScript 数据结构与算法
      <div class="class-count">10</div>
    </div>
    <div class="class-item theme-color-1" key="{item._id}">
      JavaScript 数据结构与算法
      <div class="class-count">10</div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import PageTitle from '@/components/PageTitle.vue'
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
.class-item {
  position: relative;
  user-select: none;
  height: 60px;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 0 auto; */
  font-size: 22px;
  border-radius: 16px;
  transition: all 0.2s;
  padding: 0 30px;
  margin-bottom: 14px;
  color: var(--theme-color-font);
  cursor: pointer;
}
.class-item:last-child {
  margin-bottom: 0;
}
.class-item:hover {
  transform: scale(1.03);
  color: var(--theme-color-font);
}
.class-count {
  position: absolute;
  right: 20px;
}

@media all and (max-width: 1240px) {
  .standard-page-box {
    border-radius: 12px;
    width: unset;
    margin: 0 auto;
  }
  .class-item {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 12px;
    font-size: 16px;
    height: 34px;
    border-radius: 12px;
  }
  .class-count {
    font-size: 14px;
    right: 12px;
  }
}
</style>
