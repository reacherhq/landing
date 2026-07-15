import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import styles from './CustomNavHeader.module.css'

// SVG Icons
const GithubIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const CloudIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>;
const CardIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
const LinkIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;

const NAV_LINKS = [
  { label: 'Open Source', href: 'https://github.com/reacherhq/check-if-email-exists', icon: <GithubIcon /> },
  { label: 'Hosted Service', href: 'https://app.no2bounce.com', icon: <CloudIcon /> },
  { label: 'Pricing', to: '/pricing', icon: <CardIcon /> },
  { label: 'Proxies', to: '/smtp_proxies_for_email_verification', icon: <LinkIcon /> },
  { label: 'Catch-All', to: '/catch-all_email_verification', icon: <MailIcon /> },
]

@inject('auth')
@observer
class CustomNavHeader extends Component {
  state = {
    open: false,
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this._onScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll)
  }

  _isMobile = () => {
    return typeof window !== 'undefined' && window.innerWidth < 768
  }

  _onScroll = () => {
    const scrolled = window.scrollY > 10
    if (scrolled !== this.state.scrolled) {
      this.setState({ scrolled })
    }
  }

  _toggle = () => {
    this.setState((s) => ({ open: !s.open }))
  }

  _close = () => {
    if (this.state.open) {
      this.setState({ open: false })
    }
  }

  _renderLink(link, mobile = false) {
    const { location } = this.props
    const isActive = link.to && location && location.pathname === link.to

    if (mobile) {
      // Rebuilt navigation flow: Use native <a> tags for mobile to force a clean 
      // page load. This entirely bypasses the iOS Safari client-side routing crash.
      if (link.to) {
        return (
          <a
            key={link.label}
            href={link.to}
            className={styles.dropdownLink}
            onClick={this._close}
          >
            <span className={styles.dropdownLinkIcon}>{link.icon}</span>
            {link.label}
          </a>
        )
      }
      return (
        <a
          key={link.label}
          href={link.href}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.dropdownLink}
          onClick={this._close}
        >
          <span className={styles.dropdownLinkIcon}>{link.icon}</span>
          {link.label}
        </a>
      )
    }

    if (link.to) {
      return (
        <a
          key={link.label}
          href={link.to}
          className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
        >
          {link.label}
        </a>
      )
    }
    return (
      <a
        key={link.label}
        href={link.href}
        target='_blank'
        rel='noopener noreferrer'
        className={styles.link}
      >
        {link.label}
      </a>
    )
  }

  render() {
    const { auth } = this.props
    const { open, scrolled } = this.state

    return (
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <a href='/' className={styles.logo} onClick={this._close}>
            <img
              src='/img/reacher-64.png'
              alt='Reacher Logo'
              className={styles.logoImg}
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <div className={styles.logoText}>
              <span className={styles.logoName}>Reacher</span>
              <span className={styles.logoSub}>
                Owned by&nbsp;
                <img
                  src='https://staticassest.s3.eu-west-2.amazonaws.com/crm/logov2.png'
                  alt='no2bounce'
                  className={styles.logoSubImg}
                />
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className={styles.links}>
            {NAV_LINKS.map((link) => this._renderLink(link))}
          </div>

          {/* Desktop Actions */}
          <div className={styles.actions}>
            {auth.isAuthenticated ? (
              <>
                <a
                  href='https://app.no2bounce.com/dashboard'
                  className={styles.btnCta}
                >
                  Dashboard
                </a>
                <a href='/logout' className={styles.btnLogin}>
                  Log out
                </a>
              </>
            ) : (
              <>
                <a
                  href='https://app.no2bounce.com/login'
                  className={styles.btnLogin}
                >
                  Log in
                </a>
                <a
                  href='https://app.no2bounce.com/signup'
                  className={styles.btnCta}
                >
                  Get started
                </a>
              </>
            )}
          </div>

          {/* Hamburger — mobile only */}
          <button
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            onClick={this._toggle}
            aria-label='Toggle navigation menu'
            aria-expanded={open}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>

        {/* Mobile Dropdown — position:absolute → page content NEVER moves
            This is the key fix for the iOS Safari blank screen bug. */}
        {open && (
          <div className={styles.dropdown}>
            {NAV_LINKS.map((link) => this._renderLink(link, true))}

            <div className={styles.dropdownDivider} />

            <div className={styles.dropdownActions}>
              {auth.isAuthenticated ? (
                <>
                  <a
                    href='https://app.no2bounce.com/dashboard'
                    className={styles.dropdownBtnCta}
                    onClick={this._close}
                  >
                    Dashboard
                  </a>
                  <a
                    href='/logout'
                    className={styles.dropdownBtnLogin}
                    onClick={this._close}
                  >
                    Log out
                  </a>
                </>
              ) : (
                <>
                  <a
                    href='https://app.no2bounce.com/login'
                    className={styles.dropdownBtnLogin}
                    onClick={this._close}
                  >
                    Log in
                  </a>
                  <a
                    href='https://app.no2bounce.com/signup'
                    className={styles.dropdownBtnCta}
                    onClick={this._close}
                  >
                    Get started free →
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    )
  }
}

// withRouter gives us location for active link detection
export default withRouter(CustomNavHeader)
export { CustomNavHeader }
