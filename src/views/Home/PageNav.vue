<template>
  <div class="PageNav-box animated bounceInLeft">
    <a-pagination
      :current="1"
      :total="100"
      :defaultPageSize="1"
      :showSizeChanger="false"
      :showTitle="false"
    />
  </div>
</template>

<script></script>

<style>
.PageNav-box {
  height: 50px;
  user-select: none;
  text-align: center;
}

.ant-pagination {
  color: var(--theme-color-font);
  height: 100%;
}

.ant-pagination .ant-pagination-prev,
.ant-pagination .ant-pagination-next {
  width: 50px;
  height: 50px;
}

.ant-pagination .ant-pagination-item-link,
.ant-pagination .ant-pagination-item,
.ant-pagination .ant-pagination-jump-prev,
.ant-pagination .ant-pagination-jump-next {
  /* 副色1 */
  background-color: var(--theme-bg);
  border: none;
  border-radius: 10px;
  /* cursor: default; */
  color: var(--theme-color-font);
  width: 50px;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  transition: all 0.2s !important;
}

.ant-pagination .ant-pagination-item a {
  transition: all 0.2s !important;
  cursor: default;
  color: var(--theme-color-font);
}
.ant-pagination .ant-pagination-item a:hover,
.ant-pagination-item-active a,
.ant-pagination-item-ellipsis {
  color: var(--theme-color-font) !important;
}

.ant-pagination .ant-pagination-item-link:hover,
.ant-pagination .ant-pagination-item:hover,
.ant-pagination-item-active:hover,
.ant-pagination .ant-pagination-jump-prev:hover,
.ant-pagination .ant-pagination-jump-next:hover,
.ant-pagination-item-active {
  /* 按钮色 */
  background-color: var(--theme-color-btn) !important;
  color: var(--theme-color-font) !important;
}

.ant-pagination-item-link-icon svg {
  width: 18px;
  height: 18px;
  fill: var(--theme-color-font);
}

/* .ant-pagination .ant-pagination-jump-prev,
.ant-pagination .ant-pagination-jump-next {
    display: none;
} */

@media all and (max-width: 1240px) {
  .ant-pagination .ant-pagination-prev,
  .ant-pagination .ant-pagination-next {
    display: none;
  }
  .ant-pagination .ant-pagination-item-link,
  .ant-pagination .ant-pagination-item,
  .ant-pagination .ant-pagination-jump-prev,
  .ant-pagination .ant-pagination-jump-next {
    width: 24px;
    height: 24px;
    font-size: 14px;
    line-height: 24px;
  }
  .PageNav-box {
    height: 24px;
  }
}
</style>
