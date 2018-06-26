import Api from '@/services/Api'
import Vue from 'vue'
const vm = new Vue()

export default {
  serviceURL: 'article/',

  info (credentials) {
    return Api.post((this.serviceURL + 'info'), credentials)
  },
  delete (credentials) {
    return Api.post((this.serviceURL + 'do_delete'), credentials)
  },
  create (newInfo) {
    return Api.post((this.serviceURL + 'do_create'), newInfo)
  },
  update (newInfo) {
    return Api.post((this.serviceURL + 'do_update'), newInfo)
  },
  articles (token) {
    return Api.post((this.serviceURL + 'articles'), token)
  },

  // 错误处理 //
  handleErr (res) {
    const data = Api.handleError(res)
    if (data) {
      vm.$message.error(data.message)
    }
  }
}
