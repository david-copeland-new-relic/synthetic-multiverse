import React, { Component } from 'react'

export class Links extends Component {
  render() {
    return (
      <div>
        <h3>Monitoring</h3>
        <ul>
          <li><a target='_blank' href='https://staging.newrelic.com/accounts/550352/browser/575530'>Pro Stagin</a></li>
          <li><a target='_blank' href='https://staging.newrelic.com/accounts/835096/browser/575591'>Lite Stagin</a></li>
          <li><a target='_blank' href='https://rpm.newrelic.com/accounts/1/browser/27679902'>Pro Production</a></li>
          <li><a target='_blank' href='https://rpm.newrelic.com/accounts/1449208/browser/27679991'>Lite Production</a></li>
        </ul>
        <h3>Synthetics</h3>
        <ul>
          <li><a target='_blank' href='https://staging-synthetics.newrelic.com/accounts/550352/monitors/d243ac17-084a-4df4-abd2-b7a653476a5d'>Synthetics</a></li>
        </ul>
      </div>
    )
  }
}
