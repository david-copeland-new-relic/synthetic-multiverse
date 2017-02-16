import React, { Component } from 'react'

// now with jQuery! for extra source-map fun.
export class MoreErrors extends Component {
  componentWillMount () {
    $(function() {
      throw new Error('jQueryWhoops!')
    })
  }

  render() {
    return <span>We threw a jQuery-flavored error!</span>
  }
}
