<template>
  <div class="Search-box">
    <div class="animated bounceInDown search1">
      <div class="search-input-box">
        <a-input-search
          :value="value"
          @update:value="value = $event"
          placeholder="搜索文章..."
          class="search-input theme-color-1"
          @search="onSearch"
          enter-button="搜索"
        />
        <div class="clear-btn common-hover" @click="resetSearch">
          <div>重置</div>
        </div>
      </div>
    </div>
    <!-- <div class="search-class-tag-box animated bounceInLeft">
                <Select
                    showSearch
                    size="large"
                    bordered={false}
                    style={{ width: '360px' }}
                    placeholder="请选择文章分类"
                    value={searchClass}
                    onChange={value => {
                        searchByClass(value);
                        setSearchClass(value);
                        setArticlePage(1);
                    }}
                    class="select-class theme-color-1"
                    dropdownclass="select-dropdown theme-color-1"
                >
                    {classes.map(item => (
                        <Option key={item.class}>{item.class}</Option>
                    ))}
                </Select>

                <div class="blank"></div>

                <Select
                    mode="multiple"
                    showSearch
                    showArrow
                    size="large"
                    maxTagCount={4}
                    bordered={false}
                    style={{ width: '500px' }}
                    placeholder="请选择文章标签"
                    value={searchTag}
                    onChange={value => {
                        searchByTag(value);
                        setSearchTag(value);
                        setArticlePage(1);
                    }}
                    class="select-tag theme-color-1"
                    dropdownclass="select-dropdown theme-color-1"
                >
                    {tags.map(item => (
                        <Option key={item.tag}>{item.tag}</Option>
                    ))}
                </Select>
            </div> -->
  </div>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { ref, defineEmits } from 'vue'

const emits = defineEmits(['getArticle'])

const value = ref(null)
const onSearch = (e: string) => {
  if (e) {
    // console.log(e)
    emits('getArticle', e)
  } else {
    message.error('请输入搜索内容')
  }
}
const resetSearch = () => {
  value.value = null
  emits('getArticle', null)
}
</script>

<style lang="less">
.Search-box {
  margin: 24px 0;

  .search-input-box {
    height: 50px;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
  }

  .search-input {
    height: 50px;
    flex: 1;
    border-radius: 12px;
    /* padding: 20px; */
    text-align: center;
  }
  .ant-input-affix-wrapper {
    background-color: unset;
    border-radius: 12px;
  }
  .ant-input-group {
    height: 100%;
    background-color: unset;
    border-radius: 12px;
  }
  .ant-input {
    height: 100%;
    background-color: unset;
    /* border: unset; */
    border-radius: 12px;
    color: var(--theme-color-font) !important;
  }
  .ant-btn-primary {
    height: 100%;
    background-color: var(--theme-bg);
    border: unset;
    // border-left: 1px solid #999;
    color: var(--theme-color-font) !important;
  }
  .ant-input-group-addon {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    .ant-input-search-button {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      border: 1px solid #fff !important;
      border-left: unset !important;
    }
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    color: var(--theme-color-font) !important;
    background: var(--theme-hover) !important;
    border-color: var(--theme-hover) !important;
  }
  .ant-input:hover,
  .ant-input:focus {
    border-color: unset;
  }
  .clear-btn {
    height: 50px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 12px; */
    transition: all 0.2s;
    user-select: none;
    /* margin-left: 20px; */
    cursor: pointer;
    color: var(--theme-color-font);
    // border-left: 1px solid #999;
    font-size: 14px;
  }

  .search-class-tag-box {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ant-select {
    border-radius: 12px;
  }
  .ant-select-selection-item {
    color: #fff;
    font-size: 18px !important;
  }
  .ant-select-selection-placeholder {
    font-size: 18px !important;
  }
  .blank {
    height: 40px;
    width: 20px;
  }

  .select-class {
    flex: 2;
    /* height: 50px; */
  }
  .select-tag {
    flex: 3;
    /* height: 50px; */
  }
  .select-tag .ant-select-selection-item {
    border: 0 !important;
    border-radius: 8px !important;
  }

  .select-dropdown {
    border-radius: 12px;
    /* 副色1 */
    background-color: rgb(19, 19, 26);
  }

  .ant-select-item-option-active,
  .ant-select-item-option-selected {
    /* 副色2 */
    background-color: rgb(69, 69, 88) !important;
  }

  .select-tag .ant-select-selection-item {
    /* 副色2 */
    background-color: rgb(69, 69, 88) !important;
  }

  .ant-select-item-option {
    color: #fff !important;
    border-radius: 8px !important;
    margin-bottom: 4px !important;
    margin-left: 6px !important;
    margin-right: 6px !important;
    font-size: 16px !important;
  }
  .ant-select-item-option:last-child {
    margin-bottom: 0 !important;
  }

  .ant-select-selection-item-remove svg path {
    fill: #fff !important;
  }

  @media all and (max-width: 1240px) {
    .search-input-box {
      height: 30px;
      margin-bottom: 10px;
    }

    .search-input {
      height: 30px;
      padding: 0;
      flex: 1;
      font-size: 16px;
    }
    .clear-btn {
      height: 30px;
      width: 60px;
      /* margin-left: 6px; */
    }
    .search-class-tag-box {
      display: none;
    }
  }
}
</style>
