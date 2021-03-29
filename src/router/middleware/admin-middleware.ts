import store from '../../store'
import { Role } from '@/types'
import { Route } from 'vue-router'

export default (to: Route, from: Route, next: any): void => {
  if (store.state.role === Role.ADMIN) {
    next()
  } else {
    next('/login')
  }
}
