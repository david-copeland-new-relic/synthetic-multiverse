import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { Header } from './components/header'
import { Home } from './components/home'
import { Ajax } from './components/ajax'
import { Error } from './components/error'
import { Slow } from './components/slow'
import { Links } from './components/links'

import promise from 'es6-promise'

promise.polyfill()

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

function trackRouteChange (prev, next) {
  if (!window.newrelic) return
  const nextRouteName = next.routes.map((route) => route.path).filter(Boolean).join('')
  const routeName = nextRouteName
  const interaction = newrelic.interaction()

  if (newrelic.setCurrentRouteName) {
    newrelic.setCurrentRouteName(routeName)
  } else {
    interaction.setName(routeName)
  }

  Object.keys(next.params).forEach((key) => interaction.setAttribute(key, next.params[key]))
}

function trackLoad (nextState, replace) {
  trackRouteChange(nextState, nextState)
}

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} onEnter={trackLoad} onChange={trackRouteChange}>
      <IndexRoute component={Home} />
      <Route path="ajax" component={Ajax}/>
      <Route path="error" component={Error}/>
      <Route path="slow" component={Slow}/>
      <Route path="links" component={Links}/>
    </Route>
  </Router>
)

render(routes, document.getElementById('react'))
