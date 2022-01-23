import { articleNavIfc } from '@/common/types'
// 博客背景图片
export const blogBackGroundImgs: string[] = [
  'https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210818111500.jpg',
  'https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210818111501.png',
  'https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210818111502.jpg',
  'https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20211126190312.jpg',
  'https://pic.netbian.com/uploads/allimg/160814/102935-14711417759dfa.jpg'
]
// 头像
export const avatarUrl: string =
  'https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20201204121004.jpg'
// 背景图选择
export const imgNum = 4

export const articleNavList: articleNavIfc[] = [
  { id: 0, name: '找文章', to: '/articles' },
  { id: 1, name: '分类', to: '/classes' },
  { id: 2, name: '标签', to: '/tags' }
]

export const navArr = [
  { id: 0, name: '图库', to: '/gallery' },
  { id: 1, name: '说说', to: '/say' },
  { id: 2, name: '留言', to: '/msg' },
  { id: 3, name: '友链', to: '/link' },
  { id: 4, name: '作品', to: '/show' },
  { id: 5, name: '建站', to: '/log' },
  { id: 6, name: '关于', to: '/about' }
]
