import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { Header } from './components/header'
import { Home } from './components/home'
import { Ajax } from './components/ajax'
import { Error } from './components/error'
import { Slow } from './components/slow'

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
      <Route path="error" component={Error}/>
      <Route path="slow" component={Slow}/>
    </Route>
  </Router>
)

render(routes, document.getElementById('react'))
