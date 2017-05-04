import React, { Component } from 'react'

export class Links extends Component {
  render() {
    return (
      <div>
        <h3>Monitoring</h3>
        <ul>
          <li><a target='_blank' href='https://staging.newrelic.com/accounts/550352/browser/575530'>Pro Staging</a></li>
          <li><a target='_blank' href='https://staging.newrelic.com/accounts/847846/browser/308368'>Lite Staging</a></li>
          <li><a target='_blank' href='https://rpm.newrelic.com/accounts/1343512/browser/34738942'>Pro Production</a></li>
          <li><a target='_blank' href='https://rpm.newrelic.com/accounts/1461294/browser/27274125'>Lite Production</a></li>
          <li><a target='_blank' href='https://rpm.newrelic.com/accounts/550352/browser/950582'>Bookstein Staging</a></li>
          <li><a target='_blank' href='https://rpm.newrelic.com/accounts/1343512/browser/51251091'>Bookstein Production</a></li>
        </ul>
        <h3>Synthetics</h3>
        <ul>
          <li><a target='_blank' href='https://staging-synthetics.newrelic.com/accounts/550352/monitors/88690821-04cc-4694-9e10-d8e47ec1dd9a'>Synthetics</a></li>
        </ul>
        <h3>GitHub</h3>
        <ul>
          <li><a target='_blank' href='https://github.com/blainesch/synthetic-multiverse'>Repo</a></li>
        </ul>
        <h3>Source Maps</h3>
        <ul>
          <li>
            <a href='http://blainesch.com/synthetic-multiverse/bundle.map.js'>Synthetic Multiverse source map</a>
          </li>
          <li>
            <a href='http://blainesch.com/synthetic-multiverse/vendor/jquery.min.map'>jQuery 3.1.1 source map</a>
          </li>
        </ul>
      </div>
    )
  }
}
