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
          <li><a target='_blank' href='https://synthetics.newrelic.com/accounts/1343512/monitors/aa65b9d0-8852-4d8c-b549-3e6b6bcf2e26'>Synthetics</a></li>
          <li><a target='_blank' href='https://staging-synthetics.newrelic.com/accounts/1/monitors/7b69cf4c-2be0-4949-bb8b-476f451d746c'>Staging Synthetics</a></li>
        </ul>
      </div>
    )
  }
}
