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

  DocsPage,
  TermsPage,
  PrivacyPage,
  SmtpProxiesPage,
  CatchAllPage,

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
  name: (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2 }}>
      <span style={{ fontWeight: 700 }}>{deployment.saas.name}</span>
      <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.60rem', color: '#948c8c', marginTop: '4px', gap: '4px' }}>
        Owned by
        <img
          src="https://staticassest.s3.eu-west-2.amazonaws.com/crm/logov2.png"
          alt="Owned by Logo"
          style={{ height: '12px', objectFit: 'contain', paddingBottom: '2px' }}
        />
      </span>
    </div>

  ),


  logo: deployment.saas.logo,
  header: {

    links: [
      {
        label: 'Open Source',
        href: 'https://github.com/reacherhq/check-if-email-exists'
      },
      {
        label: 'Hosted Service',
        href: 'https://app.no2bounce.com'
      },
      {
        label: 'Pricing',
        to: '/pricing'
      },
      {
        label: 'Proxies',
        to: '/smtp_proxies_for_email_verification'
      },
      {
        label: 'Catch-All',
        to: '/catch-all_email_verification'
      },
      // {
      //   label: (
      //     <small>
      //       <img
      //         style={{ width: '1rem', marginBottom: '0.3rem' }}
      //         alt='github'
      //         src='/img/github-mark.svg'
      //       />
      //       &nbsp;4.4K
      //     </small>
      //   ),
      //   href: 'https://github.com/reacherhq/check-if-email-exists'
      // }
    ],
    actions: ({ auth }) => {
      return auth.isAuthenticated
        ? [
          {
            href: 'https://app.no2bounce.com/dashboard',
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
            href: 'https://app.no2bounce.com/login',
            type: 'secondary',
            label: 'Log in'
          },
          {
            href: 'https://app.no2bounce.com/signup',
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
            to: '/pricing'
          },
          ({ auth }) =>
            auth.isAuthenticated
              ? {
                label: 'Dashboard',
                href: 'https://app.no2bounce.com/dashboard'
              }
              : {
                label: 'Get started',
                href: 'https://app.no2bounce.com/signup'
              },
          ({ auth }) =>
            auth.isAuthenticated
              ? {
                label: 'Account',
                href: 'https://app.no2bounce.com/dashboard'
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
            href: 'https://app.no2bounce.com/legal/mentions'
          },
          {
            label: 'CGU-CGV 🇫🇷',
            href: 'https://app.no2bounce.com/legal/terms'
          },
          {
            label: 'Politique de Confidentialité 🇫🇷',
            href: 'https://app.no2bounce.com/legal/privacy'
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

              <Route path='/docs' component={DocsPage} />
              <Route path='/terms' component={TermsPage} />
              <Route path='/privacy' component={PrivacyPage} />

              <Route path='/login' component={LoginPage} />
              <Route path='/signup' component={SignupPage} />

              <Route path='/smtp_proxies_for_email_verification' component={SmtpProxiesPage} />
              <Route path='/catch-all_email_verification' component={CatchAllPage} />

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
