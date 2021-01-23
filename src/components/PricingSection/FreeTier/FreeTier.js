import React, { Component, Fragment } from 'react'

import { observer } from 'mobx-react'

import { Divider, PricingPlan, theme } from 'react-saasify'
import infinity from 'react-saasify/src/assets/infinity.svg'

import plans from 'lib/pricing-plans'

import styles from './styles.module.css'

const plan = plans[0] // free-tier

@observer
export class FreeTier extends Component {
  render() {
    return (
      <PricingPlan
        className={theme(styles, 'plan')}
        key={plan.slug} // self-host
        context={null}
        plan={{
          ...plan,
          context: null, // Remove top section hack.
          desc: null,
          features: [
            <div className={theme(styles, 'pricing')} key="api-calls">
              <div />
              <div className={theme(styles, 'column')}>Price</div>

              <div className={theme(styles, 'column')}>Rate Limit</div>

              {plan.requests && (
                <Fragment>
                  <div className={theme(styles, 'emphasis')}>API Calls</div>

                  <div className={theme(styles, 'column-content')}>{plan.requests.price}</div>

                  <div className={theme(styles, 'column-content')}>{plan.requests.rateLimit}</div>
                </Fragment>
              )}
            </div>,
            <Divider key='divider' />,
            ...plan.features,
          ],
          price: plan.price
        }}
      />
    )
  }
}
