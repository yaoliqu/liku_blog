// eslint-disable-next-line max-classes-per-file
import { request } from './index'

const urlPrefix = 'front'

export class getGobalStatus {
  static async getDesc(params: any) {
    // 获取描述
    return request(`${urlPrefix}/describeList/getOne`, params, 'get')
  }
}
export class getArticleList {
  static async getList(params: any) {
    // 获取文章
    return request(`${urlPrefix}/articleList/pages`, params, 'get')
  }

  static async getTypeCount(params: any) {
    // 文章，分类，标签总数
    return request(`${urlPrefix}/articleList/typeCount`, params, 'get')
  }

  static async getArticleById(params: any) {
    // 获取文章详情
    return request(`${urlPrefix}/articleList/getArticleById`, params, 'get')
  }

  static async checkPwd(params: any) {
    // 私密文章验证
    return request(`${urlPrefix}/articleList/checkPwd`, params, 'post')
  }

  static async getAbout(params: any) {
    // 关于
    return request(`${urlPrefix}/articleList/about`, params, 'get')
  }

  static async getSay(params: any) {
    // 关于
    return request(`${urlPrefix}/articleList/say`, params, 'get')
  }

  static async getClassList(params: any) {
    // 获取分类列表
    return request(`${urlPrefix}/articleList/classList`, params, 'get')
  }

  static async getClassListDetail(params: any) {
    // 获取分类列表详情
    return request(`${urlPrefix}/articleList/classListDetail`, params, 'get')
  }
}

// export class UserService {
//   // 模块一
//   /**
//    * @description 用户登录
//    * @param {string} username - 用户名
//    * @return {HttpResponse} result
//    */
//   static async login1(params) {
//     // 接口一
//     return request('/login', params, 'post')
//   }

//   static async login2(params) {
//     // 接口二
//     return request('/login', params, 'post')
//   }

//   static async login3(params) {
//     // 接口三
//     return request('/login', params, 'post')
//   }
// }

// export class landRelevant {
//   // 模块二
//   /**
//    * @description 获取地列表
//    * @return {HttpResponse} result
//    */
//   static async landList(params) {
//     return request('/land_list_info', params, 'get')
//   }
// }
