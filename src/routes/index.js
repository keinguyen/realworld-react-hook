import loadable from '@loadable/component'

import Loader from '../components/Loader'
import _home from './modules/home'
import _signup from './modules/signup'
import _signin from './modules/signin'

export const home = _home
export const signup = _signup
export const signin = _signin

const _routes = [
  signup,
  signin,
  home
]

const routes = _routes.map((route) => {
  const _route = {...route}

  if (_route.async) {
    const path = _route.component
    _route.component = loadable(() => import(`../${path}`), {
      fallback: Loader()
    })
  }

  return _route
})

export default routes
