import React, { Component } from 'react'
import { Link } from 'react-router'

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Demo Application</h1>
        <ul>
          <li className='home'><Link to='/'>home</Link></li>
          <li className='ajax'><Link to='ajax' activeClassName='active'>Ajax</Link></li>
          <li className='error'><Link to='error' activeClassName='active'>Error</Link></li>
          <li className='slow'><Link to='slow' activeClassName='active'>Slow</Link></li>
          <li className='links'><Link to='links' activeClassName='active'>Links</Link></li>
        </ul>
      </div>
    )
  }
}
