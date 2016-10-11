import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import { Login } from './components/login'

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/login'>login</Link></li>
          <li><Link to='/broken'>broken</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <span>Home!</span>
    )
  }
}

class NoMatch extends Component {
  render() {
    return (
      <span>ruff</span>
    )
  }
}

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
)

render(routes, document.getElementById('react'))
