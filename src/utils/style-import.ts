import { App } from 'vue'
// import { ElIcon, ElLoading, ElCard, ElButton } from 'element-plus'
import { DatePicker, BackTop } from 'ant-design-vue'

export default function styleImport(app: App) {
  ;[DatePicker, BackTop].forEach((v) => {
    app.use(v)
  })
  return app
}
