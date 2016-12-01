import React, { Component } from 'react'

export class Errors extends Component {
  componentWillMount () {
    try {
      throw new Error('Whoops!')
    } catch (e) {
      newrelic.noticeError(e)
    }
  }

  render() {
    return <span>We threw an error!</span>
  }
}
