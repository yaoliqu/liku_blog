import { createPinia } from 'pinia'
import { useArticleState } from './article'
import { usecommonState } from './common'

const store = createPinia()
export { useArticleState, usecommonState }

export default store
