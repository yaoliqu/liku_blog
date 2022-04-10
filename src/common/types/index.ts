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
  date: string
  tags: any
  title: string
  url: string
  id: string
  isshow?: number
}

export interface personInfoType {
  github: string
  qq: string
  wechat: string
}

export interface IAxiosResponse {
  data: any
  msg?: any
  code?: any
}
