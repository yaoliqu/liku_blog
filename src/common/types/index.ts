export interface NavItem {
  path: string
  name: string
  isActive: boolean
}

export interface articleNavIfc {
  id: number
  name: string
  to: string
}

export interface articleListIFC {
  classes: string
  content: string
  date: number
  tags: string[]
  title: string
  titleEng: string
  url: string
  _id: string
  _openid: string
}

export interface personInfoType {
  github: string
  qq: string
  wechat: string
}

export interface IAxiosResponse {
  data: any
  msg?: string
  code?: number
}
