import store from '../../store'
import { Role } from '@/types'
import { Route } from 'vue-router'

export default (to: Route, from: Route, next: any): void => {
  const role = store.state.role
  if (role === Role.ADMIN || role === Role.EDITOR || role === Role.VIEWER) {
    next()
  } else {
    next('/login')
  }
}
