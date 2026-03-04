import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ReactMarkdown from 'react-markdown'

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
            href={saas.repo}
            data-sa-link-event="landing-hero-github"
          >
            <CTAButton dark>
              Get Started (GitHub)
            </CTAButton>
          </a>

          <a
            href="https://app.no2bounce.com/signup"
            data-sa-link-event="landing-hero-hosted"
          >
            <CTAButton outline>
              Try Hosted Reacher
            </CTAButton>
          </a>

          <a
            href="https://proxy25.com"
            data-sa-link-event="landing-hero-proxies"
          >
            <CTAButton outline>
              Scale with Proxies →
            </CTAButton>
          </a>
        </div>
      </Section>
    )
  }
}
