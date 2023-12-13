import { Component } from 'react'
import { withTracker } from 'lib/with-tracker'

@withTracker
export class PricingPage extends Component {
  render() {
    // Redirect to new pricing page
    window.location.href = 'https://app.reacher.email/pricing'
    return 'Redirecting...'
  }
}
