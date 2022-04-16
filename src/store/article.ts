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
      pageNum_search: 1,
      total_classes: 0,
      pageSize_classes: 10,
      pageNum_classes: 1,
      total_tags: 0,
      pageSize_tags: 10,
      pageNum_tags: 1
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
    },
    setArticleList_classes(res: any) {
      this.total_classes = res.total
      this.pageSize_classes = res.pageSize
      this.pageNum_classes = res.pageNum
    },
    setPage_classes(pageNum: number, pageSize: number) {
      this.pageNum_classes = pageNum
      this.pageSize_classes = pageSize
    },
    setArticleList_tags(res: any) {
      this.total_tags = res.total
      this.pageSize_tags = res.pageSize
      this.pageNum_tags = res.pageNum
    },
    setPage_tags(pageNum: number, pageSize: number) {
      this.pageNum_tags = pageNum
      this.pageSize_tags = pageSize
    }
  }
})

export default {}
