import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

if (typeof global === 'undefined') {
  window.global = window
}

// Third-party scripts (like Brevo chat widget) sometimes accidentally leak minified 
// variables to the global scope, overwriting `window.h`. Since react-saasify relies 
// on global.h to render, this causes a "h is not a function" crash on route changes.
const restoreH = () => {
  if (typeof window.h !== 'function') {
    window.h = React.createElement.bind(React)
  }
}
window.h = React.createElement.bind(React)
global.h = window.h

// Restore it during interactions and navigation just in case a widget wiped it out
window.addEventListener('popstate', restoreH, true)
window.addEventListener('hashchange', restoreH, true)
window.addEventListener('click', restoreH, true)
window.addEventListener('touchstart', restoreH, true)

import 'styles/fonts.css'
import 'styles/global.css'
import 'react-saasify'
import 'react-saasify/dist/index.css'
import './lib/init'

import App from './App'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
          <h2>Application Error</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
)
