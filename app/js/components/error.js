import React, { Component } from 'react'

export class Error extends Component {
  render() {
    if (window.newrelic) {
      try {
        throw new Error('Failed to load resource')
      } catch(e) {
        window.newrelic.noticeError(e)
      }
    }
    return <span>We threw an error!</span>
  }
}
