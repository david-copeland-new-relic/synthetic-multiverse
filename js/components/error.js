import React, { Component } from 'react'

export class Error extends Component {
  render() {
    if (window.newrelic) {
      window.newrelic.noticeError(new Error('Failed to load resource'))
    }
    return <span>We threw an error!</span>
  }
}
