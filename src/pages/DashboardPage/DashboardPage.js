import React, { Component } from 'react'
import { theme } from 'react-saasify'
import { observer, inject } from 'mobx-react'
import { withTracker } from 'lib/with-tracker'
import { Redirect } from 'react-router-dom'

import plans from 'lib/pricing-plans'

import {
  NavHeader,
  NavFooter,
  ScrollToTopOnMount,
  DashboardSection,
  OnboardingSection
} from 'components'

import styles from './styles.module.css'

@withTracker
@inject('config')
@inject('auth')
@observer
export class DashboardPage extends Component {
  render() {
    const { config, auth } = this.props
    const { deployment } = config
    const { saas } = deployment

    if (!plans.context.hasFreeTier && !auth.consumer?.plan) {
      return <Redirect to={`/checkout?plan=${plans[0].slug}`} />
    }

    return (
      <div className={theme(styles, 'dashboard-page')}>
        <ScrollToTopOnMount />

        <NavHeader fixed />

        <DashboardSection />

        <OnboardingSection />

        <NavFooter />
      </div>
    )
  }
}
