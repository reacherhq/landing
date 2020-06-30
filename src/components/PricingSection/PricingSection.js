import React, { Component } from 'react'

import { observer } from 'mobx-react'

import { PricingPlan, Section, theme } from 'react-saasify'

import plans from 'lib/pricing-plans'

import { PayAsYouGo } from '../PayAsYouGo'

import styles from './styles.module.css'

@observer
export class PricingSection extends Component {
  render() {
    return (
      <Section
        id='pricing'
        title='Pricing'
        subtitle={
          <span>
            Free. Unlimited. <b>Pay as you Grow.</b>
          </span>
        }
        stretch
        {...this.props}
      >
        <div className={theme(styles, 'plans')}>
          <PricingPlan
            className={theme(styles, 'plan')}
            key={plans[0].slug} // free
            plan={plans[0]}
          />
          <PayAsYouGo />
        </div>
        <p className={styles.emailsWarning}>
          * The price above is indicative. The price tier you fall in will be
          determined by how many actual lookups you do for that month.
        </p>
      </Section>
    )
  }
}
