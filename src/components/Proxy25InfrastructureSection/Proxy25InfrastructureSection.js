import React, { Component } from 'react'
import { Section } from 'react-saasify'
import styles from './styles.module.css'

/* SVG ICONS */

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M4 19V5" stroke="currentColor" strokeWidth="2" />
    <path d="M10 19V9" stroke="currentColor" strokeWidth="2" />
    <path d="M16 19V3" stroke="currentColor" strokeWidth="2" />
    <path d="M22 19H2" stroke="currentColor" strokeWidth="2" />
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

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M3 12h18" stroke="currentColor" strokeWidth="2" />
    <path d="M12 3a15 15 0 0 1 0 18" stroke="currentColor" strokeWidth="2" />
    <path d="M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="2" />
  </svg>
)

/* FEATURE ITEM */

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <div className={styles.featureCard}>
    <div className={styles.iconWrap}>
      <Icon />
    </div>
    <h4>{title}</h4>
    <p>{desc}</p>
  </div>
)

/* MAIN SECTION */

export class Proxy25InfrastructureSection extends Component {
  render() {
    return (
      <Section id="proxy25-infrastructure">
        <div className={styles.wrapper}>

          {/* BADGE */}
          <span className={styles.badge}>
            Global Infrastructure
          </span>

          {/* TITLE */}
          <h2 className={styles.title}>
            Verify at scale with Proxy global infrastructure
          </h2>

          {/* SUBTITLE */}
          <p className={styles.subtitle}>
            Our proxies are designed specifically for high-volume email
            verification. Use them with Reacher — or with any other tool.
          </p>

          {/* FEATURES GRID */}
          <div className={styles.featuresGrid}>
            <FeatureItem
              icon={ShieldIcon}
              title="Prevent throttling and greylisting"
              desc="Rotate through our global IP pool to avoid rate limits"
            />

            <FeatureItem
              icon={ChartIcon}
              title="Improve accuracy and reliability"
              desc="Better deliverability checks with distributed verification"
            />

            <FeatureItem
              icon={NetworkIcon}
              title="Handle 10M+ requests per day"
              desc="Enterprise-grade infrastructure that scales with you"
            />

            <FeatureItem
              icon={GlobeIcon}
              title="Flexible plans for any scale"
              desc="From startups to enterprises, we've got you covered"
            />
          </div>

          {/* CTA */}
          {/* <a
            href="https://proxy25.com"
            className={styles.cta}
          >
            Explore Proxy.com
          </a> */}

        </div>
      </Section>
    )
  }
}
