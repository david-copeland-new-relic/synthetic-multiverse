import React, { Component } from 'react'

export class Slow extends Component {
  render() {
    const start = new Date()
    while (new Date() - start < 1500);
    return <span>I render slowly...</span>
  }
}
