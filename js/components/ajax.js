import React, { Component } from 'react'

export class Ajax extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: '',
    }
  }

  componentWillMount () {
    fetch('./giphy.json')
      .then((response) => response.json())
      .then((json) => json.data[0].images.original.url)
      .then((image) => {
        this.setState({
          image,
        })
      })
  }

  render() {
    return this.state.image ? (
      <img src={this.state.image} />
    ) : (
      null
    )
  }
}
