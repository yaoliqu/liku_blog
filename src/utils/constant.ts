import moment from 'moment'
import { articleNavIfc, personInfoType } from '@/common/types'

// 博客title
export const title: string = 'LIKU'
// 头像
export const avatarUrl: string = './avatar.jpeg'

export const navArr: articleNavIfc[] = [
  { id: 0, name: '主页', to: '/home' },
  { id: 1, name: '文章', to: '/article' },
  { id: 2, name: '分类', to: '/classes' },
  { id: 3, name: '标签', to: '/tags' },
  // { id: 4, name: '图库', to: '/gallery' },
  { id: 5, name: '说说', to: '/say' },
  { id: 6, name: '关于', to: '/about' }
  // { id: 2, name: '留言', to: '/msg' },
  // { id: 3, name: '友链', to: '/link' },
  // { id: 4, name: '作品', to: '/show' },
  // { id: 5, name: '建站', to: '/log' },
]
export const mobileNavArr: articleNavIfc[] = [
  { id: 0, name: '主页', to: '/home' },
  { id: 1, name: '文章', to: '/article' },
  { id: 2, name: '分类', to: '/classes' },
  { id: 3, name: '标签', to: '/tags' },
  // { id: 4, name: '图库', to: '/gallery' },
  { id: 5, name: '说说', to: '/say' },
  { id: 6, name: '关于', to: '/about' }
  // { id: 6, name: '留言', to: '/msg' },
  // { id: 7, name: '友链', to: '/link' },
  // { id: 8, name: '作品', to: '/show' },
  // { id: 9, name: '建站', to: '/log' },
]

// 个人信息
export const personInfo: personInfoType = {
  github: 'https://github.com/yaoliqu',
  qq: '1611563593',
  wechat: 'yaoliqu'
}

export const noNetWorkArtiicle = [
  {
    classes: '网络挂了',
    content: `网络出现了点问题，请稍后重试。抱歉！！！`,
    date: moment().format('YYYY-MM-DD'),
    tagslists: [{ id: 1, tags: '崩溃了' }],
    title: '网络崩溃了~',
    id: 'bf4a0bf261d026b90202b1c831d8b4c9',
    url: ''
  }
]
