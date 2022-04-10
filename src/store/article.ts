import { defineStore } from 'pinia'

export const useArticleState = defineStore({
  id: 'article', // id必填，且需要唯一
  state: () => {
    return {
      list: [],
      total: 0,
      pageSize: 10,
      pageNum: 1
    }
  },
  actions: {
    setArticleList(res: any) {
      this.list = res.list
      this.total = res.total
      this.pageNum = res.pageNum
      this.pageSize = res.pageSize
    },
    setPage(pageNum: number, pageSize: number) {
      this.pageNum = pageNum
      this.pageSize = pageSize
    }
  }
})

export default {}
