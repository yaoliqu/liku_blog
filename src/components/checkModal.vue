TS
<template>
  <div>
    <a-modal
      width="400px"
      :visible="visible"
      @update:visible="visible = $event"
      :title="props.title"
      @ok="handleOk"
      :cancelText="'取消'"
      :destroyOnClose="true"
      :keyboard="false"
      :maskClosable="false"
      :okText="'确定'"
    >
      <a-input
        @update:value="value = $event"
        :value="value"
        type="password"
        placeholder="请输入密码"
      />
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { ref, watch, withDefaults, defineProps, defineEmits } from 'vue'

interface IProps {
  visibles: boolean
  title: string
}
const props = withDefaults(defineProps<IProps>(), {
  visibles: false,
  title: '请输入密码'
})
const emits = defineEmits(['visibleChange', 'handleOk'])
const visible = ref<boolean>(props.visibles)
const value = ref<string>('')
watch(
  () => props.visibles,
  (val) => {
    visible.value = val
  }
)
watch(visible, (val) => {
  if (!val) {
    value.value = ''
  }
  emits('visibleChange', visible.value)
})

const handleOk = () => {
  if (value.value) {
    emits('handleOk', value.value)
  } else {
    message.info('不能为空·')
  }
}
</script>

<style>
.ant-modal-content {
  border-radius: 30px !important;
}
.ant-modal-header {
  border-radius: 30px 30px 0 0 !important;
}
.ant-modal-content,
.ant-modal-header {
  background-color: var(--theme-bg) !important;
  border-bottom: unset !important;
}
.ant-modal-title {
  color: var(--theme-color-font) !important;
}
.ant-modal-footer {
  border-top: unset !important;
}
.ant-modal-body {
  height: 70px !important;
}
.ant-btn {
  background-color: var(--theme-color-btn) !important;
  border-color: var(--theme-bg2) !important;
  color: var(--theme-color-font) !important;
}
.ant-modal-close {
  color: var(--theme-color-font) !important;
}
</style>
