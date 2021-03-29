import store from '../../store'
import { Route } from 'vue-router'

export default (to: Route, from: Route, next: any): void => {
  if (store.state.isPaid) {
    next()
  } else {
    next('/login')
  }
}
