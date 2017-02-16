import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { Header } from './components/header'
import { Home } from './components/home'
import { Ajax } from './components/ajax'
import { Errors } from './components/errors'
import { Slow } from './components/slow'
import { Links } from './components/links'
import { MoreErrors } from './components/more-errors'

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

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="ajax" component={Ajax}/>
      <Route path="error" component={Errors}/>
      <Route path="more-error" component={MoreErrors}/>
      <Route path="slow" component={Slow}/>
      <Route path="links" component={Links}/>
    </Route>
  </Router>
)

render(routes, document.getElementById('react'))
