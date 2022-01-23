import NumFactoryStateTypes from './modules/NumFactory/types'

export default interface RootStateTypes {
  text: string
  navShow: boolean
}

export interface AllStateTypes extends RootStateTypes {
  numFactoryModule: NumFactoryStateTypes
}
