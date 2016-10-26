import React, { Component } from 'react'

export class Links extends Component {
  render() {
    return (
      <div>
        <h3>Monitoring</h3>
        <ul>
          <li><a target='_blank' href='https://staging.newrelic.com/accounts/550352/browser/575530'>Pro Staging</a></li>
          <li><a target='_blank' href='https://staging.newrelic.com/accounts/835096/browser/575591'>Lite Staging</a></li>
          <li><a target='_blank' href='https://rpm.newrelic.com/accounts/1/browser/27679902'>Pro Production</a></li>
          <li><a target='_blank' href='https://rpm.newrelic.com/accounts/1461294/browser/27274125'>Lite Production</a></li>
        </ul>
        <h3>Synthetics</h3>
        <ul>
          <li><a target='_blank' href='https://staging-synthetics.newrelic.com/accounts/550352/monitors/88690821-04cc-4694-9e10-d8e47ec1dd9a'>Synthetics</a></li>
        </ul>
        <h3>GitHub</h3>
        <ul>
          <li><a target='_blank' href='https://github.com/blainesch/synthetic-multiverse'>Repo</a></li>
        </ul>
      </div>
    )
  }
}
