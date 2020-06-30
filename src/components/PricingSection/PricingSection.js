import React, { Component } from 'react'

import { observer } from 'mobx-react'

import { PricingPlan, Section, theme } from 'react-saasify'

import plans, { formatPrice } from 'lib/pricing-plans'

import styles from './styles.module.css'

// Tiers for the pay-as-you-fo-v1 plan.
const payg = plans[1].original.requests

/**
 * @see https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
 */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Given the number of emails, calculate the price.
 */
function calculatePrice(emails = 0) {
  // Find the tier we fall in.
  const tier =
    payg.tiers.find((tier) => emails <= +tier.upTo) ||
    payg.tiers[payg.tiers.length - 1]

  return emails * +tier.unitAmount
}

@observer
export class PricingSection extends Component {
  state = {
    emails: 1000
  }

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
          <PricingPlan
            className={theme(styles, 'plan')}
            key={plans[1].slug} // pay-as-you-go-v1
            plan={{
              ...plans[1],
              context: null, // Remove top section hack.
              desc: (
                <div>
                  <span>
                    <label htmlFor='emails'>ESTIMATE LOOKUPS/MONTH:</label>
                    <input
                      className={styles.emailsInput}
                      min={0}
                      name='emails'
                      onChange={({ target: { value } }) =>
                        this.setState({ emails: value })
                      }
                      step={1}
                      type='number'
                      value={this.state.emails}
                    />
                  </span>
                </div>
              ),
              features: [
                <div className={styles.tableWrapper} key='tableWrapper'>
                  <table className={styles.table}>
                    <thead className={styles.tableHead}>
                      <tr>
                        <th>Lookups/mo</th>
                        <th>Price per lookup</th>
                        <th>Max price for tier</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payg.tiers.map((tier, index) => (
                        <tr key={tier.upTo}>
                          <td>
                            {index === 0
                              ? 0
                              : numberWithCommas(
                                  +payg.tiers[index - 1].upTo + 1
                                )}{' '}
                            - {numberWithCommas(tier.upTo).replace('inf', '∞')}
                          </td>
                          <td>${formatPrice(tier.unitAmount)}</td>
                          <td>
                            {tier.upTo === 'inf'
                              ? '∞'
                              : `$${formatPrice(
                                  (+tier.upTo + 1) * +tier.unitAmount
                                )}`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>,
                ...plans[1].features
              ],
              // Dynamic pricing.
              price: `$${formatPrice(
                Math.round(calculatePrice(this.state.emails))
              )}*`
            }}
          />
        </div>
        <p className={styles.emailsWarning}>
          * The price above is indicative. The price tier you fall in will be
          determined by how many actual lookups you do for that month.
        </p>
      </Section>
    )
  }
}
