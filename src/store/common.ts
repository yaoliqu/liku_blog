import { defineStore } from 'pinia'
import setTheme from '@/utils/themeUtil'

export const usecommonState = defineStore({
  id: 'commonState', // id必填，且需要唯一
  state: () => {
    return {
      jinrishiju: '',
      navShow: true,
      homeArticesList: [],
      themeStatus: false
    }
  },
  actions: {
    setPoem(text: string) {
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
