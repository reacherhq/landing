import React, { Component } from 'react'
import { theme } from 'react-saasify'
import { withTracker } from 'lib/with-tracker'

import {
  NavHeader,
  NavFooter,
  ScrollToTopOnMount,
  PricingSection,
  EnterpriseSection
} from 'components'

import styles from './styles.module.css'
import { Bf2022 } from '../../components/Bf2022/Bf2022'

@withTracker
export class PricingPage extends Component {
  render() {
    return (
      <div className={theme(styles, 'pricing-page')}>
        <ScrollToTopOnMount />

        <NavHeader />
        <Bf2022 />

        <div className={theme(styles, 'main')}>
          <div className={theme(styles, 'main-body')}>
            <PricingSection />
          </div>
        </div>

        <EnterpriseSection />

        <NavFooter />
      </div>
    )
  }
}
