import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section } from 'react-saasify'
import styles from './styles.module.css'

/* SOCIAL ICONS */

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.3C22 6.6 17.5 2 12 2z" />
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 5.9c-.7.3-1.4.5-2.1.6a3.7 3.7 0 0 0 1.6-2.1 7.4 7.4 0 0 1-2.3.9A3.7 3.7 0 0 0 12 8.1a10.5 10.5 0 0 1-7.6-3.9 3.7 3.7 0 0 0 1.1 5 3.6 3.6 0 0 1-1.7-.5v.1a3.7 3.7 0 0 0 3 3.6 3.8 3.8 0 0 1-1.7.1 3.7 3.7 0 0 0 3.4 2.6A7.5 7.5 0 0 1 2 18.4a10.6 10.6 0 0 0 5.7 1.7c6.8 0 10.5-5.6 10.5-10.5v-.5A7.5 7.5 0 0 0 22 5.9z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 21h4V9H3v12zM14.5 9a4.5 4.5 0 0 0-3.5 1.7V9H7v12h4v-6.3c0-1.7.3-3.4 2.4-3.4s2.1 1.9 2.1 3.5V21h4v-7.1c0-3.5-.7-4.9-4-4.9z" />
  </svg>
)

/* FOOTER */

export class Footer extends Component {
  render() {
    return (
      <Section id="footer" className={styles.footer}>
        <div className={styles.container}>

          {/* TOP */}
          <div className={styles.topBar}>
            <span className={styles.star}>4.4k</span>
            <nav className={styles.topNav}>
              <a href="https://www.no2bounce.com/pricing">Pricing</a>
              <a href="https://reacherdocs.no2bounce.com/">Docs</a>
              <a href="https://app.no2bounce.com/en/blog/smtp">Blog</a>
            </nav>
          </div>

          <div className={styles.divider} />

          {/* MAIN */}
          <div className={styles.grid}>

            <div className={styles.brand}>
              <div className={styles.logo}>
                <img
                  src="/img/reacher-64.png"
                  alt="Reacher logo"
                  className={styles.logoImage}
                />

                <div className={styles.logoText}>
                  <strong className={styles.brandName}>Reacher</strong>
                  <span className={styles.ownedBy}>Owned by no2bounce</span>
                </div>
              </div>

              <p>
                Developed by Amaury.
              </p>

              <p>
                The open-source email verification API built for developers.
              </p>

              <div className={styles.socials}>
                <a href="https://github.com/reacherhq"><GitHubIcon /></a>
                <a href="https://x.com/no2bounce"><TwitterIcon /></a>
                <a href="https://linkedin.com/company/no2bounce"><LinkedInIcon /></a>
              </div>
            </div>

            <div>
              <h4 style={{ color: "white" }}>Product</h4>
              <a href="https://github.com/reacherhq">Open Source</a>
              <a href="https://app.no2bounce.com">Hosted Service</a>
              <Link to="/smtp_proxies_for_email_verification">SMTP Proxies</Link>
              <Link to="/catch-all_email_verification">Catch-All Verification</Link>
              <a href="https://www.no2bounce.com/pricing">Pricing</a>
            </div>

            <div>
              <h4 style={{ color: "white" }}>Resources</h4>
              <a href="https://reacherdocs.no2bounce.com/">Documentation</a>
              <a href="https://app.no2bounce.com/en/blog/smtp">Blog</a>
              <a href="https://reacherdocs.no2bounce.com/advanced/openapi">API Reference</a>
              <a href="https://github.com/reacherhq">Community</a>
            </div>

            <div>
              <h4 style={{ color: "white" }}>Company</h4>
              <a href="https://www.no2bounce.com">About</a>
              <a href="mailto:teams@no2bounce.com">Contact</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>

          </div>

          <div className={styles.divider} />

          {/* BOTTOM */}
          <div className={styles.bottom}>
            <span>© 2026 Reacher. All rights reserved.</span>
            <nav>
              <a href="https://github.com/reacherhq">4.4k GitHub Stars</a>
              <a href="https://www.no2bounce.com/pricing">Pricing</a>
              <a href="https://reacherdocs.no2bounce.com/">Docs</a>
              <a href="https://app.no2bounce.com/en/blog/smtp">Blog</a>
            </nav>
          </div>

        </div>
      </Section>
    )
  }
}
