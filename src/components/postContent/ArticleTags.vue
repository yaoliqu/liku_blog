<template>
  <div class="standard-page-tags">
    <span
      v-for="item in reactiveData"
      class="tag theme-color-1 common-hover"
      :key="item"
    >
      {{ item }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults, defineProps, watch, ref } from 'vue'

interface IProps {
  tags: string
}
const props = withDefaults(defineProps<IProps>(), {
  tags: ''
})
const reactiveData: any = ref([])

watch(
  () => props.tags,
  (val) => {
    reactiveData.value = val.split(',') || []
  }
)
</script>

<style>
.standard-page-tags {
  margin-top: 60px;
  color: var(--theme-color-font);
}

.tag {
  display: inline-block;
  margin: 0 10px 10px 0;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  border-radius: 12px;
  user-select: none;
  font-size: 16px;
  cursor: pointer;
}

@media all and (max-width: 1240px) {
  .standard-page-tags {
    margin-top: 30px;
  }

  .tag {
    margin: 0 5px 5px 0;
    height: 26px;
    line-height: 26px;
    padding: 0 8px;
    border-radius: 10px;
    font-size: 12px;
  }
}
</style>
