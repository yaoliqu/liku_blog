<template>
  <div class="animated bounceInRight">
    <div class="aside-card SiteCard-box theme-color">
      <div class="site-data-item common-hover">
        <span class="site-data-key">总浏览量</span>
        <span class="site-data-value">{siteCount}次</span>
      </div>
      <div class="site-data-item common-hover">
        <span class="site-data-key">运行时间</span>
        <span class="site-data-value">{runTime}天</span>
      </div>
    </div>
  </div>
</template>

<style>
.SiteCard-box {
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.site-data-item {
  height: 36px;
  width: 220px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
}

.site-data-key {
  margin-left: 10px;
}

.site-data-value {
  margin-right: 10px;
}
</style>
