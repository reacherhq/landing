import React, { Component } from 'react'

import { CTAButton, Section } from 'react-saasify'

import styles from './styles.module.css'

export class CTASection extends Component {
  render() {
    return (
      <Section id='cta' {...this.props} className={styles.section}>
        <h2 className={styles.title}>What other people say about Reacher</h2>
        <div className={styles.refs}>
          <a
            href='https://geekflare.com/email-verification-api/#anchor-reacher'
            rel='noreferrer'
            target='_blank'
          >
            <img
              alt='geekflare'
              className={styles.geekflare}
              src='/assets/geekflare.webp'
            />
          </a>

          <a
            href='https://www.producthunt.com/products/reacher#reacher-2'
            rel='noreferrer'
            target='_blank'
          >
            <img
              alt='product-hunt'
              className={styles.producthunt}
              src='/assets/producthunt.png'
            />
          </a>

          <a
            href=' https://www.blogdumoderateur.com/tools/reacher/'
            rel='noreferrer'
            target='_blank'
          >
            <img alt='bdm' className={styles.bdm} src='/assets/bdm.png' />
          </a>
        </div>
        <a className={styles.cta} href='https://app.reacher.email/signup'>
          <CTAButton>Get started for free</CTAButton>
        </a>
      </Section>
    )
  }
}
