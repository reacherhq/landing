import React, { Component } from 'react'
import { Section } from 'react-saasify'
import styles from './styles.module.css'

/* ICONS */

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.3C22 6.6 17.5 2 12 2z" />
  </svg>
)

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M7 18h10a4 4 0 0 0 .4-8A5 5 0 0 0 7 9.5 3.5 3.5 0 0 0 7 18z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" />
    <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" />
    <rect x="9" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" />
    <path d="M6 9v4h6" stroke="currentColor" strokeWidth="2" />
    <path d="M18 9v4h-6" stroke="currentColor" strokeWidth="2" />
  </svg>
)

/* MAIN COMPONENT */

export class ThreePathsSection extends Component {
  render() {
    return (
      <Section id="three-paths">
        <div className={styles.wrapper}>

          {/* HEADER */}
          <h2 className={styles.title}>
            Three Paths. One Ecosystem.
          </h2>
          <p className={styles.subtitle}>
            Choose the solution that fits your needs
          </p>

          {/* GRID */}
          <div className={styles.grid}>

            {/* OPEN SOURCE */}
            <div className={styles.card}>
              <div className={styles.icon}>
                <GithubIcon />
              </div>

              <h3>Open Source</h3>
              <p className={styles.cardDesc}>
                Download & self-host for free
              </p>

              <ul className={styles.list}>
                <li>MIT License</li>
                <li>Full control</li>
                <li>No usage limits</li>
                <li>Community support</li>
              </ul>

              <a
                href="https://github.com/reacherhq/reacher"
                className={styles.cta}
              >
                Get Started
              </a>
            </div>

            {/* HOSTED (FEATURED) */}
            <div className={`${styles.card} ${styles.cardFeatured}`}>
              <span className={styles.popular}>Most Popular</span>

              <div className={styles.icon}>
                <CloudIcon />
              </div>

              <h3>Hosted</h3>
              <p className={styles.cardDesc}>
                Use our managed service
              </p>

              <ul className={styles.list}>
                <li>No infrastructure</li>
                <li>Pay-as-you-go</li>
                <li>Instant setup</li>
                <li>Premium support</li>
              </ul>

              <a
                href="https://app.no2bounce.com/signup"
                className={styles.cta}
              >
                Start Free Trial
              </a>
            </div>

            {/* PROXIES */}
            <div className={styles.card}>
              <div className={styles.icon}>
                <NetworkIcon />
              </div>

              <h3>Proxies</h3>
              <p className={styles.cardDesc}>
                Scale with Proxy, works with any verifier
              </p>

              <ul className={styles.list}>
                <li>Global network</li>
                <li>10M+ requests/day</li>
                <li>Any verification tool</li>
                <li>Enterprise-grade</li>
              </ul>

              <a
                href="https://proxy25.com"
                className={styles.cta}
              >
                Explore Proxy
              </a>
            </div>

          </div>
        </div>
      </Section>
    )
  }
}
