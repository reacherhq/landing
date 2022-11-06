import React, { Component } from 'react'

import { Section } from 'react-saasify'

import styles from './styles.module.css'

export class IndieSection extends Component {
  render() {
    return (
      <Section id='cta' {...this.props}>
        <div className={styles.container}>
          <img alt='amaury' className={styles.pic} src='/img/amaury.jpg' />
          <p className={styles.paragraph}>
            Hi, I'm{' '}
            <a href='http://amaurym.com/' rel='noreferrer' target='_blank'>
              Amaury
            </a>
            , the developer of Reacher.
            <br />I built Reacher to provide an open-source alternative to the
            other big players in the email verification space, and I am
            committed to making sure you love Reacher. If there is any way I can
            help, email me directly at{' '}
            <a href='mailto:amaury@reacher.email'>amaury@reacher.email</a>.
          </p>
        </div>
      </Section>
    )
  }
}
