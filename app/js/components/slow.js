import React, { Component } from 'react'

export class Slow extends Component {
  render() {
    const start = new Date()
    while (new Date() - start < 3000);
    return <span>I render slowly...</span>
  }
}
