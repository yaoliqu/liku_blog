import { defineStore } from 'pinia'

export const useArticleState = defineStore({
  id: 'article', // id必填，且需要唯一
  state: () => {
    return {
      list: [],
      total: 0,
      pageSize: 10,
      pageNum: 1,
      total_search: 0,
      pageSize_search: 10,
      pageNum_search: 1
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
    },
    setArticleList_search(res: any) {
      this.total_search = res.total
      this.pageNum_search = res.pageNum
      this.pageSize_search = res.pageSize
    },
    setPage_search(pageNum: number, pageSize: number) {
      this.pageNum_search = pageNum
      this.pageSize_search = pageSize
    }
  }
})

export default {}
