import { defineStore } from 'pinia'
import setTheme from '@/utils/themeUtil'

export const usecommonState = defineStore({
  id: 'commonState', // id必填，且需要唯一
  state: () => {
    return {
      jinrishiju: 'id必填，且需要唯一,id必填，且需要唯一',
      navShow: true,
      homeArticesList: [],
      themeStatus: false
    }
  },
  actions: {
    getPoem(text: string) {
      this.jinrishiju = text || '获取失败'
    },
    setNavShow(status: boolean) {
      this.navShow = status
    },
    setThemeStatus(status: boolean) {
      this.themeStatus = !status
      setTheme(!status)
    }
  }
})

export default {}
