import React, { Component } from 'react'

function retrieve(url) {
  return new Promise((resolve) => {
    var oReq = new XMLHttpRequest()
    oReq.addEventListener('load', function reqListener () {
      resolve(this.responseText)
    })
    oReq.open('GET', url)
    oReq.send()
  })
}

export class Ajax extends Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [],
    }
  }

  componentWillMount () {
    const pages = ['./giphy1.json', './giphy2.json', './giphy3.json'].sort(() => {
      return 0.5 - Math.random()
    })
    retrieve(pages[0])
      .then((response) => JSON.parse(response))
      .then((json) => json.data[0].url)
      .then((first) => {
        retrieve(pages[1])
          .then((response) => JSON.parse(response))
          .then((json) => json.data[0].url)
          .then((second) => {
            retrieve(pages[2])
              .then((response) => JSON.parse(response))
              .then((json) => json.data[0].url)
              .then((third) => {
                this.setState({
                  images: [first, second, third]
                })
              })
          })
      })
  }

  render() {
    return (
      <div className='images'>
        { this.state.images.map((image) => {
          return <img src={image} />
        }) }
      </div>
    )
  }
}
