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
    const pages = ['./api/giphy1.json', './api/giphy2.json', './api/giphy3.json']
    const sortedPages = pages.sort(() => {
      return 0.5 - Math.random()
    })
    retrieve(sortedPages[0])
      .then((response) => JSON.parse(response))
      .then((json) => json.data[0].url)
      .then((first) => {
        retrieve(sortedPages[1])
          .then((response) => JSON.parse(response))
          .then((json) => json.data[0].url)
          .then((second) => {
            retrieve(sortedPages[2])
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

  makeAjaxCall = () => {
    retrieve('./api/giphy1.json')
      .then((response) => JSON.parse(response))
      .then((json) => {
        var images = this.state.images.slice(0)
        images.push(json.data[0].url)
        this.setState({
          images,
        })
      })

    if (typeof newrelic == 'object') {
      newrelic.interaction().setName('ajaxNotRouteChange').save()
    }
  }

  render() {
    return (
      <div className='images'>
        { this.state.images.map((image, i) => {
          return <img src={image} key={i} />
        }) }
        <button onClick={this.makeAjaxCall}>Show me more doggies!</button>
      </div>
    )
  }
}
