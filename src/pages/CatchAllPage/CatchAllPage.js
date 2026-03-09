import React, { Component } from 'react'
import { Section, NavHeader, NavFooter, ScrollToTopOnMount } from 'react-saasify'
import { theme } from 'react-saasify'
import { withTracker } from 'lib/with-tracker'

import styles from './styles.module.css'

@withTracker
export class CatchAllPage extends Component {
    render() {
        const sections = [
            { id: 'introduction', label: 'Introduction' },
            { id: 'what-is-catch-all', label: 'What Is a Catch-All Email Domain?' },
            { id: 'why-exists', label: 'Why Catch-All Domains Exist' },
            { id: 'why-smtp-fails', label: 'Why SMTP Verification Cannot Verify Catch-All Emails' },
            { id: 'the-problem', label: 'The Catch-All Problem' },
            { id: 'verifying-catch-all', label: 'Verifying Emails on Catch-All Domains' },
            { id: 'verification-stack', label: 'The Reacher Verification Stack' },
            { id: 'detection-vs-verification', label: 'Catch-All Detection vs Catch-All Verification' },
            { id: 'when-useful', label: 'When Catch-All Verification Is Useful' },
            { id: 'faq', label: 'Frequently Asked Questions' },
            { id: 'cta-footer', label: 'Verify Emails on Catch-All Domains' }
        ]

        return (
            <div className={theme(styles, 'proxies-page')}>
                <NavHeader fixed />

                <ScrollToTopOnMount />

                <div className={styles.container}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarTitle}>Catch-All Email Verification</div>
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
                            <h1>Catch-All Email Verification (No2Bounce)</h1>
                            <h3>Introduction</h3>
                            <p>Verify email addresses on catch-all domains where normal SMTP verification cannot determine mailbox validity.</p>
                            <p>Standard verification tools such as Reacher can detect when a domain behaves as a catch-all system, but they cannot determine whether a specific address inside that domain actually belongs to a real user.</p>
                            <p>No2Bounce provides advanced catch-all email verification, helping teams evaluate addresses that SMTP verification alone cannot classify.</p>

                            <div className={styles.ctaBox}>

                                <a href='https://app.no2bounce.com' className={styles.ctaButtonLarge}>Try No2Bounce Catch-all verifier</a>
                            </div>
                        </section>

                        <section id='what-is-catch-all'>
                            <h2>What Is a Catch-All Email Domain?</h2>
                            <p>A catch-all email domain is configured to accept messages sent to any address within the domain, even if the mailbox does not exist.</p>
                            <p>Example:</p>
                            <ul className={styles.exampleList}>
                                <li>john@domain.com</li>
                                <li>fake123@domain.com</li>
                                <li>anything@domain.com</li>
                                <li>randomaddress@domain.com</li>
                            </ul>
                            <p>The mail server may respond positively to all of these addresses during SMTP verification, making it impossible for standard verification systems to determine whether the mailbox actually exists.</p>
                        </section>

                        <section id='why-exists'>
                            <h2>Why Catch-All Domains Exist</h2>
                            <p>Organizations sometimes configure catch-all domains so that emails sent to unknown addresses are not lost.</p>
                            <p>Common reasons include:</p>
                            <ul>
                                <li>preventing lost customer emails</li>
                                <li>simplifying internal mail routing</li>
                                <li>capturing messages sent to incorrect addresses</li>
                            </ul>
                            <p>While useful for organizations, this configuration creates challenges for email verification systems.</p>
                        </section>

                        <section id='why-smtp-fails'>
                            <h2>Why SMTP Verification Cannot Verify Catch-All Emails</h2>
                            <p>SMTP verification works by connecting directly to a mail server and asking whether a mailbox exists.</p>
                            <p>Normally the server responds with:</p>
                            <pre>
                                250 OK<br />
                                or<br />
                                550 mailbox not found
                            </pre>
                            <p>However catch-all domains often return a successful response for any email address.</p>
                            <p>Example:</p>
                            <ul className={styles.exampleList}>
                                <li>john@company.com → 250 OK</li>
                                <li>fake123@company.com → 250 OK</li>
                                <li>random@company.com → 250 OK</li>
                            </ul>
                            <p>SMTP verification therefore cannot distinguish between real and non-existent addresses on catch-all domains.</p>
                        </section>

                        <section id='the-problem'>
                            <h2>The Catch-All Problem</h2>
                            <p>Detecting a catch-all domain is only the first step.</p>
                            <p>Many verification tools, including Reacher, can determine whether a domain behaves as a catch-all system.</p>
                            <p>However, once a domain is identified as catch-all, traditional SMTP verification cannot determine whether individual addresses inside that domain are valid.</p>
                            <p>This leaves teams with addresses classified as 'unknown' or 'catch-all', which are difficult to evaluate.</p>
                        </section>

                        <section id='verifying-catch-all'>
                            <h2>Verifying Emails on Catch-All Domains</h2>
                            <p>No2Bounce analyzes addresses within catch-all domains to estimate whether they are likely associated with real users.</p>
                            <p>This additional analysis helps teams:</p>
                            <ul>
                                <li>prioritise high-probability addresses</li>
                                <li>reduce unnecessary outreach to invalid recipients</li>
                                <li>improve campaign deliverability</li>
                                <li>make better decisions about how to treat catch-all addresses</li>
                            </ul>
                        </section>

                        <section id='verification-stack'>
                            <h2>The Reacher Verification Stack</h2>
                            <div className={styles.workflow}>
                                <div className={styles.workflowItem}>
                                    <strong>Reacher</strong>
                                    <br />SMTP email verification engine
                                </div>
                                <div className={styles.workflowArrow}>↓</div>
                                <div className={styles.workflowItem}>
                                    <strong>Reacher Port 25 SMTP Proxies</strong>
                                    <br />Infrastructure for reliable SMTP verification
                                </div>
                                <div className={styles.workflowArrow}>↓</div>
                                <div className={styles.workflowItem}>
                                    <strong>No2Bounce</strong>
                                    <br />Verification for addresses on catch-all domains
                                </div>
                            </div>
                        </section>

                        <section id='detection-vs-verification'>
                            <h2>Catch-All Detection vs Catch-All Verification</h2>
                            <p>SMTP verification determines whether a mailbox appears reachable.</p>
                            <p>Catch-all detection determines whether a domain accepts all addresses.</p>
                            <p>Catch-all verification evaluates whether an address on that domain likely belongs to a real user.</p>
                            <p>Typical stack:</p>
                            <ul>
                                <li><strong>SMTP verification</strong> → Reacher</li>
                                <li><strong>SMTP infrastructure</strong> → Reacher Proxies</li>
                                <li><strong>Catch-all verification</strong> → No2Bounce</li>
                            </ul>
                        </section>

                        <section id='when-useful'>
                            <h2>When Catch-All Verification Is Useful</h2>
                            <p>Catch-all analysis is particularly valuable for:</p>
                            <ul>
                                <li>outbound sales campaigns</li>
                                <li>marketing list cleaning</li>
                                <li>CRM contact validation</li>
                                <li>SaaS platforms performing automated verification</li>
                                <li>data providers validating large datasets</li>
                            </ul>
                        </section>

                        <section id='faq'>
                            <h2>Frequently Asked Questions</h2>
                            <div className={styles.faqItem}>
                                <h4>What is a catch-all email domain?</h4>
                                <p>A catch-all domain accepts messages sent to any address within the domain.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can email verification tools verify catch-all emails?</h4>
                                <p>Standard SMTP verification cannot reliably verify addresses on catch-all domains.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>What is the difference between catch-all detection and catch-all verification?</h4>
                                <p>Catch-all detection identifies domains that accept any address. Catch-all verification evaluates addresses inside those domains.</p>
                            </div>
                            <div className={styles.faqItem}>
                                <h4>Can I use No2Bounce with Reacher?</h4>
                                <p>Yes. Reacher performs SMTP verification while No2Bounce analyzes addresses within catch-all domains.</p>
                            </div>
                        </section>

                        <section id='cta-footer'>
                            <h2>Verify Emails on Catch-All Domains</h2>
                            <p>Standard SMTP verification cannot determine whether addresses on catch-all domains belong to real users.</p>
                            <p>No2Bounce provides additional analysis to evaluate these addresses and help teams make better decisions.</p>
                            <p>Create an account to begin verifying catch-all addresses:</p>
                            {/* <div className={styles.ctaBox}>
                                <a href='https://app.no2bounce.com' className={styles.ctaButtonLarge}>https://app.no2bounce.com</a>
                            </div> */}
                            <p>No2Bounce helps teams perform catch-all email verification and catch-all domain analysis to improve list quality and email deliverability.</p>
                        </section>
                        {/* <footer className={styles.pageFooter}>
                            <p>No2Bounce helps teams perform catch-all email verification and catch-all domain analysis to improve list quality and email deliverability.</p>
                        </footer> */}
                    </main>
                </div>

                <NavFooter />
            </div>
        )
    }
}
