import React, { Component } from 'react'
import { Section } from 'react-saasify'
import styles from './styles.module.css'

/* ICONS */

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
  </svg>
)


const ForkIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2a3 3 0 0 0 0 6c.3 0 .6 0 .9-.1V11a4 4 0 0 0 3 3.9V18a3 3 0 1 0 2 0v-3.1a4 4 0 0 0 3-3.9V7.9c.3.1.6.1.9.1a3 3 0 1 0-3-3 3 3 0 0 0 1 2.2V11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7.2A3 3 0 0 0 7 2z" />
  </svg>
)


const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM2 20a7 7 0 0 1 14 0zm14 0a5 5 0 0 1 6 0z" />
  </svg>
)


const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2z" />
  </svg>
)


/* STAT CARD */

const StatCard = ({ icon: Icon, value, label, color }) => (
  <div className={styles.statCard}>
    <div className={`${styles.statIcon} ${styles[color]}`}>
      <Icon />
    </div>
    <div className={styles.statValue}>{value}</div>
    <div className={styles.statLabel}>{label}</div>
  </div>
)

/* MAIN SECTION */

export class CommunitySection extends Component {
  render() {
    return (
      <Section id="community">
        <div className={styles.wrapper}>

          <h2 className={styles.title}>
            Built in the open. Supported by the community.
          </h2>

          <p className={styles.subtitle}>
            Reacher is developed in public on GitHub. Contributions and feedback
            from the community drive the roadmap. Proxy revenue helps fund
            ongoing open-source development.
          </p>

          {/* STATS */}
          <div className={styles.statsGrid}>
            <StatCard icon={StarIcon} value="4.4k+" label="GitHub Stars" color="yellow" />
            <StatCard icon={ForkIcon} value="250+" label="Forks" color="blue" />
            <StatCard icon={UsersIcon} value="50+" label="Contributors" color="green" />
            <StatCard icon={ChatIcon} value="1.2k+" label="Community Members" color="purple" />
          </div>

          {/* TESTIMONIALS */}
          <div className={styles.testimonials}>
            <div className={styles.testimonialCard}>
              <div className={styles.avatar}>JD</div>
              <div>
                <strong>John Doe</strong>
                <div className={styles.role}>CTO, TechStartup Inc.</div>
              </div>
              <p>
                “Reacher saved us thousands in email verification costs. The
                open-source version works perfectly for our needs, and the
                community is incredibly helpful.”
              </p>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.avatarGreen}>SK</div>
              <div>
                <strong>Sarah Kim</strong>
                <div className={styles.role}>Lead Developer, EmailPro</div>
              </div>
              <p>
                “The performance is outstanding. We process millions of emails
                monthly with Reacher + Proxy, and it’s been rock solid.”
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaRow}>
            <a href="https://github.com/reacherhq/reacher" className={styles.primaryCta}>
              Join GitHub Community
            </a>
            <a href="#" className={styles.secondaryCta}>
              Join Discord Server
            </a>
          </div>

        </div>
      </Section>
    )
  }
}
