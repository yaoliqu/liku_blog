import { defineStore } from 'pinia'
import setTheme from '@/utils/themeUtil'

export const usecommonState = defineStore({
  id: 'commonState', // id必填，且需要唯一
  state: () => {
    return {
      navShow: true,
      themeStatus:
        sessionStorage.getItem('themeStatus') === 'true' ? true : false || false,
      artCount: 0,
      tagsCount: 0,
      classCount: 0,
      tagsList: [],
      saySay: '😁'
    }
  },
  actions: {
    setNavShow(status: boolean) {
      this.navShow = status
    },
    setThemeStatus(status: boolean) {
      this.themeStatus = !status
      sessionStorage.setItem('themeStatus', JSON.stringify(!status))
      setTheme(!status)
    },
    setTypeCount(res: any) {
      this.artCount = res.artCount
      this.tagsCount = res.tagsCount
      this.classCount = res.classCount
      this.tagsList = res.tagsList
      this.saySay = res.saySay?.content || '😁'
    }
  }
})

export default {}
