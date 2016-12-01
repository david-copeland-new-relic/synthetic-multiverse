import React, { Component } from 'react'

// now with jQuery! for extra source-map fun.
export class MoreErrors extends Component {
  componentWillMount () {
    try {
      $(function() {
        throw new Error('jQueryWhoops!')
      })
    } catch (e) {
      newrelic.noticeError(e)
    }
  }

  render() {
    return <span>We threw a jQuery-flavored error!</span>
  }
}
