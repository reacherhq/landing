import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ReactMarkdown from 'react-markdown'

import { Link } from 'react-router-dom'
import { CTAButton, Section, theme } from 'react-saasify'

import styles from './styles.module.css'

const allowedTypes = ['strong', 'text', 'break']

@inject('config')
@observer
export class HeroSection extends Component {
  render() {
    const { deployment } = this.props.config
    const { saas } = deployment
    const hero = saas?.sections?.hero

    return (
      <Section
        id="hero"
        align="center"
        style={{ background: "transparent" }}
        title={
          <ReactMarkdown
            source={saas.heading}
            allowedTypes={allowedTypes}
            unwrapDisallowed
          />

        }
        subtitle={
          <ReactMarkdown
            source={saas.subheading}
            allowedTypes={allowedTypes}
            unwrapDisallowed
          />
        }
        {...this.props}
      >
        {/* Optional hero image */}
        {hero?.image && (
          <img
            className={theme(styles, 'image')}
            src={hero.image}
            alt="Hero"
          />
        )}

        {/* CTA buttons */}
        <div className={styles.ctaGroup}>
          <a
            href="https://github.com/reacherhq/check-if-email-exists"
            data-sa-link-event="landing-hero-github"
            className={styles.heroLink}
          >
            <div className={styles.heroBtnDark}>
              Get Started (GitHub)
            </div>
          </a>

          <a
            href="https://app.no2bounce.com/signup"
            data-sa-link-event="landing-hero-hosted"
            className={styles.heroLink}
          >
            <div className={styles.heroBtnOutline}>
              Try Hosted Reacher
            </div>
          </a>

          <a
            href="/smtp_proxies_for_email_verification"
            data-sa-link-event="landing-hero-proxies"
            className={styles.heroLink}
          >
            <div className={styles.heroBtnOutline}>
              Scale with Proxies →
            </div>
          </a>
        </div>
      </Section>
    )
  }
}
