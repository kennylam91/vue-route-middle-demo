import store from '../../store'
import { Role } from '@/types'
import { Route } from 'vue-router'

export default (to: Route, from: Route, next: any): void => {
  if (store.state.role === Role.ADMIN || store.state.role === Role.EDITOR) {
    next()
  } else {
    next('/login')
  }
}
