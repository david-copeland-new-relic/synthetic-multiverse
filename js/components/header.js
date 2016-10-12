import React, { Component } from 'react'
import { Link } from 'react-router'

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Demo Application</h1>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='ajax' activeClassName='active'>Ajax</Link></li>
          <li><Link to='error' activeClassName='active'>Error</Link></li>
          <li><Link to='slow' activeClassName='active'>Slow</Link></li>
        </ul>
      </div>
    )
  }
}
