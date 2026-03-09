import React, { Component } from 'react'
import { Section, NavHeader, NavFooter, ScrollToTopOnMount } from 'react-saasify'
import { theme } from 'react-saasify'
import { withTracker } from 'lib/with-tracker'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

@withTracker
export class PricingPage extends Component {
  render() {
    const sections = [
      { id: 'introduction', label: 'Introduction' },
      { id: 'self-hosted', label: 'Self-Hosted Reacher (Free)' },
      { id: 'hosted', label: 'Hosted Reacher + Catch-All' },
      { id: 'smtp-infrastructure', label: 'SMTP Infrastructure' },
      { id: 'ecosystem', label: 'The Reacher Ecosystem' },
      { id: 'choosing', label: 'Choosing the Right Option' },
      { id: 'get-started', label: 'Get Started' }
    ]

    return (
      <div className={theme(styles, 'proxies-page')}>
        <NavHeader fixed />

        <ScrollToTopOnMount />

        <div className={styles.container}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarTitle}>Reacher Pricing</div>
            <nav className={styles.sidebarNav}>
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className={styles.sidebarLink}>
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className={styles.content}>
            <section id='introduction'>
              <h1>Reacher Pricing</h1>
              <h3>Introduction</h3>
              <p>Reacher is an open-source email verification engine.</p>
              <p>You can run it yourself for free, or use managed services built around the Reacher ecosystem.</p>
            </section>

            <section id='self-hosted'>
              <h2>Self-Hosted Reacher (Free)</h2>
              <p>Reacher is available as open-source software under the MIT License.</p>
              <p>You can:</p>
              <ul>
                <li>Download the source code</li>
                <li>Run the verifier on your own infrastructure</li>
                <li>Integrate it into your own applications</li>
                <li>Modify the code as needed</li>
              </ul>
              <div className={styles.ctaBox}>
                <p><strong>GitHub repository:</strong></p>
                <a href='https://github.com/reacherhq/check-if-email-exists' className={styles.ctaButtonLarge}>
                  View on GitHub
                </a>
              </div>
              <p>Many developers use the self-hosted version of Reacher for:</p>
              <ul>
                <li>Building email verification APIs</li>
                <li>Validating contact lists</li>
                <li>Verifying emails in SaaS applications</li>
                <li>Experimenting with SMTP-based verification</li>
              </ul>
            </section>

            <section id='hosted'>
              <h2>Hosted Reacher + Catch-All Verification</h2>
              <p>If you prefer a fully managed hosted solution, you can use No2Bounce.</p>
              <p>No2Bounce provides:</p>
              <ul>
                <li>Hosted email verification powered by Reacher</li>
                <li>Catch-all email verification</li>
                <li>A web interface and API</li>
                <li>Usage-based pricing</li>
              </ul>
              <div className={styles.ctaBox}>
                <p><strong>Create a No2Bounce account:</strong></p>
                <a href='https://app.no2bounce.com' className={styles.ctaButtonLarge}>
                  Try No2Bounce Catch-all verifier
                </a>
              </div>
            </section>

            <section id='smtp-infrastructure'>
              <h2>SMTP Infrastructure</h2>
              <p>High-volume email verification often requires reliable SMTP infrastructure.</p>
              <p>Mail servers frequently limit or block verification traffic from unknown IP addresses.</p>
              <p>Reacher Port 25 SMTP Proxies provide:</p>
              <ul>
                <li>Managed IP pools</li>
                <li>Automatic rotation</li>
                <li>MX-aware routing</li>
                <li>Infrastructure optimized for verification workloads</li>
              </ul>
              <p>Learn more on the <Link to="/smtp_proxies_for_email_verification">Reacher Proxies page</Link>.</p>
            </section>

            <section id='ecosystem'>
              <h2>The Reacher Ecosystem</h2>
              <div className={styles.workflow}>
                <div className={styles.workflowItem}>
                  <strong>Reacher</strong>
                  <br />Open-source SMTP email verification
                </div>
                <div className={styles.workflowArrow}>↓</div>
                <div className={styles.workflowItem}>
                  <strong>Reacher Port 25 SMTP Proxies</strong>
                  <br />Infrastructure for reliable SMTP verification
                </div>
                <div className={styles.workflowArrow}>↓</div>
                <div className={styles.workflowItem}>
                  <strong>No2Bounce</strong>
                  <br />Catch-all email verification
                </div>
              </div>
            </section>

            <section id='choosing'>
              <h2>Choosing the Right Option</h2>
              <div className={styles.boxGrid}>
                <div className={styles.choiceBox}>
                  <h4>Use self-hosted Reacher if:</h4>
                  <ul>
                    <li>You want full control over your infrastructure</li>
                    <li>You are comfortable running your own verification servers</li>
                    <li>You are building your own verification system</li>
                  </ul>
                </div>
                <div className={styles.choiceBox}>
                  <h4>Use No2Bounce if:</h4>
                  <ul>
                    <li>You want a fully hosted verification service</li>
                    <li>You want catch-all email verification</li>
                    <li>You prefer usage-based pricing</li>
                  </ul>
                </div>
                <div className={styles.choiceBox}>
                  <h4>Use Reacher Proxies if:</h4>
                  <ul>
                    <li>You run large-scale SMTP verification</li>
                    <li>You need reliable SMTP connectivity</li>
                    <li>You want managed proxy infrastructure</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id='get-started'>
              <h2>Get Started</h2>
              <div className={styles.ctaList}>
                <div className={styles.ctaItem}>
                  <strong>Self-host Reacher:</strong>
                  <br />
                  <a href='https://github.com/reacherhq/check-if-email-exists'>https://github.com/reacherhq/check-if-email-exists</a>
                </div>
                <div className={styles.ctaItem}>
                  <strong>Use the hosted verification service:</strong>
                  <br />
                  <a href='https://app.no2bounce.com'>app.no2bounce.com</a>
                </div>
                <div className={styles.ctaItem}>
                  <strong>Explore SMTP proxy infrastructure:</strong>
                  <br />
                  Visit the <Link to="/smtp_proxies_for_email_verification">Reacher Proxies page</Link>.
                </div>
              </div>
            </section>
          </main>
        </div>

        <NavFooter />
      </div>
    )
  }
}
