import React, { Component } from 'react'

// now with jQuery! for extra source-map fun.
export class MoreErrors extends Component {
  render() {
    try {
      $(function() {
        throw new Error('jQueryWhoops!')
      })
    } catch (e) {
      newrelic.noticeError(e)
    }
    return <span>We threw a jQuery-flavored error!</span>
  }
}
