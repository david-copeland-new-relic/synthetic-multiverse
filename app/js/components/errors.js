import React, { Component } from 'react'

export class Errors extends Component {
  componentWillMount () {
    throw new Error('Whoops!')
  }

  render() {
    return <span>We threw an error!</span>
  }
}
