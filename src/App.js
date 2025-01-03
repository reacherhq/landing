import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import { toJS } from 'mobx'
import { observer, Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import InnerHTML from 'dangerously-set-html-content'
import removeMd from 'remove-markdown'

import {
  AuthManager,
  ThemeManager,
  AuthenticatedRoute,
  theme,

  // third-party auth flow
  AuthGitHubPage,
  AuthGooglePage,
  AuthSpotifyPage,
  AuthLinkedInPage,
  AuthTwitterPage,
  AuthStripePage
} from 'react-saasify'

import {
  // marketing site
  HomePage,
  PricingPage,
  NotFoundPage,

  // auth flow
  LoginPage,
  LogoutPage,
  SignupPage,

  // authenticated webapp
  DashboardPage
} from './pages'

import deployment from 'lib/deployment'

const saasifyConfig = {
  deployment,
  coupons: deployment.coupons,
  name: deployment.saas.name,
  logo: deployment.saas.logo,
  header: {
    links: [
      {
        label: 'Docs',
        href: 'https://docs.reacher.email'
      },
      {
        label: 'Pricing',
        href: 'https://app.reacher.email/pricing'
      },
      {
        label: 'Blog',
        href: 'https://app.reacher.email/en/blog/smtp'
      },
      {
        label: (
          <small>
            <img
              style={{ width: '1rem', marginBottom: '0.3rem' }}
              alt='github'
              src='/img/github-mark.svg'
            />
            &nbsp;4.4K
          </small>
        ),
        href: 'https://github.com/reacherhq/check-if-email-exists'
      }
    ],
    actions: ({ auth }) => {
      return auth.isAuthenticated
        ? [
            {
              href: 'https://app.reacher.email/dashboard',
              type: 'primary',
              icon: 'home',
              label: 'Dashboard'
            },
            {
              to: '/logout',
              type: 'secondary',
              icon: 'logout',
              label: 'Log out'
            }
          ]
        : [
            {
              href: 'https://app.reacher.email/login',
              type: 'secondary',
              label: 'Log in'
            },
            {
              href: 'https://app.reacher.email/signup',
              type: 'primary',
              label: 'Get started'
            }
          ]
    }
  },
  footer: {
    columns: [
      {
        label: 'Sitemap',
        links: [
          {
            label: 'Home',
            to: '/'
          },
          {
            label: 'Pricing',
            href: 'https://app.reacher.email/pricing'
          },
          ({ auth }) =>
            auth.isAuthenticated
              ? {
                  label: 'Dashboard',
                  href: 'https://app.reacher.email/dashboard'
                }
              : {
                  label: 'Get started',
                  href: 'https://app.reacher.email/signup'
                },
          ({ auth }) =>
            auth.isAuthenticated
              ? {
                  label: 'Account',
                  href: 'https://app.reacher.email/dashboard'
                }
              : null
        ]
      },
      {
        label: 'Docs',
        links: [
          {
            label: 'Getting Started',
            href: 'https://docs.reacher.email/getting-started/quickstart'
          },
          {
            label: 'Self-Host',
            href: 'https://docs.reacher.email/self-hosting/install'
          },
          {
            label: 'Proxies',
            href: 'https://docs.reacher.email/self-hosting/proxies'
          },
          {
            label: 'Mentions Légales 🇫🇷',
            href: 'https://app.reacher.email/legal/mentions'
          },
          {
            label: 'CGU-CGV 🇫🇷',
            href: 'https://app.reacher.email/legal/terms'
          },
          {
            label: 'Politique de Confidentialité 🇫🇷',
            href: 'https://app.reacher.email/legal/privacy'
          }
        ]
      },
      {
        label: 'Contact',
        links: [
          {
            label: 'Email',
            href: 'mailto:amaury@reacher.email'
          },
          {
            label: 'Github',
            href: 'https://github.com/reacherhq/check-if-email-exists'
          }
        ]
      }
    ]
  }
}

@observer
export default class App extends Component {
  render() {
    const { saas } = deployment

    const fonts = toJS(ThemeManager.theme.fonts)
    const themeClassName = `theme-${ThemeManager.theme['@name']}`
    const themeRootClassName = ThemeManager.theme.rootClassName

    return (
      <Provider auth={AuthManager} config={saasifyConfig}>
        <Helmet>
          <title>
            {saas.name}
            {saas.heading ? ` - ${removeMd(saas.heading)}` : ''}
          </title>

          {saas.favicon && <link rel='shortcut icon' href={saas.favicon} />}

          <meta
            name='description'
            content='Reacher is a real-time, powerful, white-label email verification API service to reduce your bounce rate and avoid spam sign-ups. We check SMTP responses, MX records, catch-all and disposable addresses.'
          />

          {saas.scripts &&
            saas.scripts.map((src) => (
              <script key={src} src={src} type='text/javascript' />
            ))}

          {saas.styles &&
            saas.styles.map((src) => (
              <link key={src} rel='stylesheet' type='text/css' href={src} />
            ))}

          {fonts &&
            fonts.map((font) => (
              <link
                key={font}
                href={`https://fonts.googleapis.com/css?family=${font}&display=swap`}
                rel='stylesheet'
              />
            ))}

          {saas.cx && <link rel='chrome-webstore-item' href={saas.cx} />}
        </Helmet>

        {saas.htmlPreBody &&
          saas.htmlPreBody.map((src, index) => (
            <InnerHTML key={index} html={src} />
          ))}

        <BodyClassName
          className={theme(null, themeClassName, themeRootClassName)}
        >
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage} />

              <Route path='/pricing' component={PricingPage} />

              <Route path='/login' component={LoginPage} />
              <Route path='/signup' component={SignupPage} />

              <Route path='/auth/github' component={AuthGitHubPage} />
              <Route path='/auth/google' component={AuthGooglePage} />
              <Route path='/auth/spotify' component={AuthSpotifyPage} />
              <Route path='/auth/linkedin' component={AuthLinkedInPage} />
              <Route path='/auth/twitter' component={AuthTwitterPage} />
              <Route path='/auth/stripe' component={AuthStripePage} />

              <AuthenticatedRoute path='/dashboard' component={DashboardPage} />
              <AuthenticatedRoute path='/account' component={DashboardPage} />
              <AuthenticatedRoute path='/checkout' component={DashboardPage} />
              <AuthenticatedRoute path='/logout' component={LogoutPage} />

              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </BodyClassName>

        {saas.htmlPostBody &&
          saas.htmlPostBody.map((src, index) => (
            <InnerHTML key={index} html={src} />
          ))}
      </Provider>
    )
  }
}
