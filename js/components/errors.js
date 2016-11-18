import React, { Component } from 'react'

export class Errors extends Component {
  render() {
    try {
      throw new Error('Whoops!')
    } catch (e) {
      newrelic.noticeError(e)
    }
    return <span>We threw an error!</span>
  }
}
