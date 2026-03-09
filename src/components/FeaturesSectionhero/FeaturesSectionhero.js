import React, { Component } from 'react'
import { Section } from 'react-saasify'
import styles from './styles.module.css'

const CheckIcon = () => (
  <span className={styles.checkIcon}>
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.4 3.4 6.8-6.8a1 1 0 0 1 1.4 0z" />
    </svg>
  </span>
)

export class FeaturesSectionhero extends Component {
  render() {
    return (
      <Section id="features-hero" className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <h2 className={styles.title}>
              Reacher is free, open-source, and built for developers
            </h2>

            <p className={styles.subtitle}>
              Reacher gives you a fast, reliable email verification API that you
              can host yourself at no cost.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <CheckIcon />
                <span>MIT licensed — no commercial restrictions</span>
              </div>

              <div className={styles.featureItem}>
                <CheckIcon />
                <span>Written in Rust, built for performance</span>
              </div>

              <div className={styles.featureItem}>
                <CheckIcon />
                <span>Simple REST API with clear docs</span>
              </div>

              <div className={styles.featureItem}>
                <CheckIcon />
                <span>Backed by an active community</span>
              </div>
            </div>

            <a
              href="https://github.com/reacherhq/check-if-email-exists"
              className={styles.githubButton}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Section>
    )
  }
}

