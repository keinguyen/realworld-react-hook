import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import routes from './routes/'
import HookProvider from './hooks/'

import './App.scss'

export default function () {
  return (
    <HashRouter>
      <HookProvider>
        <Header />

        <Switch>
          {routes.map(({ path, component }, i) => (
            <Route path={path} component={component} key={i} />
          ))}
        </Switch>

        <Footer />
      </HookProvider>
    </HashRouter>
  )
}
