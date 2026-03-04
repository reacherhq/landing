import { Component } from 'react'
import { withTracker } from 'lib/with-tracker'

@withTracker
export class PricingPage extends Component {
  render() {
    // Redirect to new pricing page
    window.location.href = 'https://app.no2bounce.com/pricing'
    return 'Redirecting...'
  }
}
