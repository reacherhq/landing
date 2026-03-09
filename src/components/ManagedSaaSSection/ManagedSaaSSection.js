import React, { Component } from 'react'
import { Section } from 'react-saasify'
import styles from './styles.module.css'

/* SVG ICONS */
const LightningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

const CreditCardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M14 4l6 6-8 8H6v-6l8-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <div className={styles.featureItem}>
    <div className={styles.iconWrap}>
      <Icon />
    </div>
    <div>
      <strong>{title}</strong>
      <p>{desc}</p>
    </div>
  </div>
)

export class ManagedSaaSSection extends Component {
  render() {
    return (
      <Section id="managed-saas">
        <div className={styles.wrapper}>
          {/* LEFT */}
          <div className={styles.left}>
            <span className={styles.badge}>Open Source</span>

            <h2 className={styles.title}>
              No time to self-host? Use our managed SaaS
            </h2>

            <p className={styles.subtitle}>
              For teams that want email verification without managing servers,
              we provide a hosted version of Reacher.
            </p>

            <div className={styles.features}>
              <FeatureItem
                icon={LightningIcon}
                title="Start in minutes"
                desc="Get up and running without any infrastructure setup"
              />

              <FeatureItem
                icon={CreditCardIcon}
                title="Simple, pay-as-you-go pricing"
                desc="Only pay for what you use, no hidden fees"
              />

              <FeatureItem
                icon={UsersIcon}
                title="Ideal for small teams and less technical users"
                desc="No DevOps required, we handle everything"
              />

              <FeatureItem
                icon={RocketIcon}
                title="Proven to handle millions of requests per day"
                desc="Battle-tested infrastructure at scale"
              />
            </div>

            <a
              href="https://app.no2bounce.com/signup"
              className={styles.cta}
            >
              Try Hosted Reacher
            </a>
          </div>

          {/* RIGHT CODE BLOCK */}
          <div className={styles.codeBlock}>
            <div className={styles.windowDots}>
              <span />
              <span />
              <span />
            </div>

            <pre>
              <code>{`curl --location 'https://connect.no2bounce.com/v2/n2b_validate_bulk'\\
  --header 'apitoken: YOUR_API_KEY_HERE' \\
  --header 'Content-Type: application/json' \\
  --data-raw '{
    "emails": [
      "teams@no2bounce.com"
    ]
  }'`}</code>
            </pre>
          </div>
        </div>
      </Section>
    )
  }
}
