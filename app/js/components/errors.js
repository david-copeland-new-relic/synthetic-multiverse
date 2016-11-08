import React, { Component } from 'react'

export class Errors extends Component {
  render() {
    throw new Error('Whoops!')
    return <span>We threw an error!</span>
  }
}
