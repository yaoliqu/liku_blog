// eslint-disable-next-line max-classes-per-file
import { request } from './index'

export class UserService {
  // 模块一
  /**
   * @description 用户登录
   * @param {string} username - 用户名
   * @return {HttpResponse} result
   */
  static async login1(params) {
    // 接口一
    return request('/login', params, 'post')
  }

  static async login2(params) {
    // 接口二
    return request('/login', params, 'post')
  }

  static async login3(params) {
    // 接口三
    return request('/login', params, 'post')
  }
}

export class landRelevant {
  // 模块二
  /**
   * @description 获取地列表
   * @return {HttpResponse} result
   */
  static async landList(params) {
    return request('/land_list_info', params, 'get')
  }
}

export class Test {
  static async test(params: any) {
    // 接口三
    return request('/api/abc', params, 'get')
  }
}
