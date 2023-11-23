import React, { Component } from 'react'

import styles from './styles.module.css'

export class Bf2023 extends Component {
  render() {
    return (
      <div className={styles.banner}>
        BLACK FRIDAY:{' '}
        <strong>
          <u>20% off everything</u>
        </strong>{' '}
        for first 3 months. Code:{' '}
        <strong>
          BLACKFRIDAY2023 &nbsp;&nbsp;&nbsp;
          <a href='https://app.reacher.email?utm_campaign=BLACKFRIDAY2023'>
            Sign up now →
          </a>
        </strong>
        .
      </div>
    )
  }
}
