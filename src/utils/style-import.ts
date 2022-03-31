import { App } from 'vue'
// import { ElIcon, ElLoading, ElCard, ElButton } from 'element-plus'
import { DatePicker, BackTop, Pagination, Popover, Switch } from 'ant-design-vue'

export default function styleImport(app: App) {
  ;[DatePicker, BackTop, Pagination, Popover, Switch].forEach((v) => {
    app.use(v)
  })
  return app
}
