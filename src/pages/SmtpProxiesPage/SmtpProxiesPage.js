import React, { Component } from 'react'
import { Section, NavHeader, NavFooter, ScrollToTopOnMount } from 'react-saasify'
import { theme } from 'react-saasify'
import { withTracker } from 'lib/with-tracker'

import styles from './styles.module.css'

@withTracker
export class SmtpProxiesPage extends Component {
    render() {
        const sections = [
            { id: 'introduction', label: 'Introduction' },
            { id: 'request-access', label: 'Request Access' },
            { id: 'what-are-proxies', label: 'What Are Port 25 SMTP Proxies?' },
            { id: 'how-it-works', label: 'How SMTP Email Verification Works' },
            { id: 'verification-stack', label: 'The Reacher Verification Stack' },
            { id: 'why-it-fails', label: 'Why SMTP Verification Fails' },
            { id: 'provider-behaviour', label: 'SMTP Provider Behaviour' },
            { id: 'why-proxies-needed', label: 'Why SMTP Proxies Are Needed' },
            { id: 'how-proxies-work', label: 'How Reacher SMTP Proxies Work' },
            { id: 'using-with-reacher', label: 'Using Reacher Proxies with Reacher' },
            { id: 'infrastructure', label: 'SMTP Verification Infrastructure' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'use-cases', label: 'Typical Use Cases' }
        ]

        return (
            <div className={theme(styles, 'proxies-page')}>
                <NavHeader fixed />

                <ScrollToTopOnMount />

                <div className={styles.container}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarTitle}>Reacher Port 25 SMTP Proxies</div>
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
                            <h1>Reacher Port 25 SMTP Proxies</h1>
                            <h3>Introduction</h3>
                            <p>Reliable SMTP proxy infrastructure designed specifically for email verification.</p>
                            <p>Run Reacher at scale without managing IP pools, IP reputation, or SMTP infrastructure yourself.</p>
                            <p>Reacher Port 25 SMTP Proxies provide the network layer that allows verification tools to connect reliably to mail servers.</p>
                            <p>Works seamlessly with Reacher and can also be used with other SMTP verification tools.</p>
                        </section>

                        <section id='request-access'>
                            <h2>Request Access</h2>
                            <p>Submit an enquiry to request access to Reacher Port 25 SMTP Proxies.</p>
                            <div className={styles.enquiryBox}>
                                <p>Please contact us at <a href="mailto:support@no2bounce.com">support@no2bounce.com</a> to request access.</p>
                                <p>We typically respond within one business day.</p>
                            </div>
                            <p>Typical process:</p>
                            <ol>
                                <li>Submit the enquiry form</li>
                                <li>We review your verification requirements</li>
                                <li>You receive proxy endpoint credentials and setup instructions</li>
                            </ol>
                        </section>

                        <section id='what-are-proxies'>
                            <h2>What Are Port 25 SMTP Proxies?</h2>
                            <p>Port 25 SMTP proxies allow email verification systems to connect reliably to remote mail servers using the standard SMTP port.</p>
                            <p>They are commonly used by systems performing:</p>
                            <ul>
                                <li>SMTP email verification</li>
                                <li>Mailbox existence checks</li>
                                <li>Email validation APIs</li>
                            </ul>
                            <p>Without proxy infrastructure, many verification requests fail due to rate limits, IP reputation filtering, or port 25 restrictions. With our proxies, you don’t need port 25 open on your servers.</p>
                            <p>Reacher Port 25 SMTP Proxies provide managed infrastructure designed specifically for these workloads.</p>
                        </section>

                        <section id='how-it-works'>
                            <h2>How SMTP Email Verification Works</h2>
                            <p>SMTP verification checks whether an email address exists by communicating directly with the destination mail server.</p>
                            <p>Typical process:</p>
                            <div className={styles.workflow}>
                                <div className={styles.workflowItem}>Application (Reacher verification engine)</div>
                                <div className={styles.workflowArrow}>↓</div>
                                <div className={styles.workflowItem}>SMTP connection to recipient mail server</div>
                                <div className={styles.workflowArrow}>↓</div>
                                <div className={styles.workflowItem}>Mail server response</div>
                                <div className={styles.workflowArrow}>↓</div>
                                <div className={styles.workflowItem}>Verification result (valid / invalid / unknown)</div>
                            </div>
                            <p>When performing large numbers of verification checks, these connections can be blocked or limited by mail servers.</p>
                            <p>Reacher Port 25 SMTP Proxies provide the infrastructure layer that allows these connections to succeed reliably.</p>
                        </section>

                        <section id='verification-stack'>
                            <h2>The Reacher Verification Stack</h2>
                            <p>Reliable email verification often requires more than just a verification engine.</p>
                            <div className={styles.workflow}>
                                <div className={styles.workflowItem}>
                                    <strong>Reacher</strong>
                                    <br />Open‑source email verification engine
                                </div>
                                <div className={styles.workflowArrow}>↓</div>
                                <div className={styles.workflowItem}>
                                    <strong>Reacher Port 25 SMTP Proxies</strong>
                                    <br />SMTP infrastructure for reliable verification
                                </div>
                                <div className={styles.workflowArrow}>↓</div>
                                <div className={styles.workflowItem}>
                                    <strong>No2Bounce</strong>
                                    <br />Catch‑all email detection
                                </div>
                            </div>
                            <p>Each layer solves a different challenge in the verification process.</p>
                        </section>

                        <section id='why-it-fails'>
                            <h2>Why SMTP Verification Fails</h2>
                            <p>Common issues include:</p>
                            <dl>
                                <dt>Greylisting</dt>
                                <dd>Mail servers temporarily reject connections from unknown IP addresses and require retries after a delay.</dd>
                                <dt>Rate limiting</dt>
                                <dd>High volumes of verification requests from a single IP can trigger throttling or connection blocks.</dd>
                                <dt>IP reputation filtering</dt>
                                <dd>Servers may reject or restrict traffic from IPs with limited reputation or unknown history.</dd>
                                <dt>Port 25 restrictions</dt>
                                <dd>Many cloud providers block outbound SMTP traffic entirely.</dd>
                            </dl>
                            <p>These protections are designed to stop spam, but they also make reliable verification difficult without the right infrastructure.</p>
                        </section>

                        <section id='provider-behaviour'>
                            <h2>SMTP Provider Behaviour</h2>
                            <p>Different email providers respond differently to SMTP verification requests.</p>
                            <ul>
                                <li><strong>Google Workspace / Gmail:</strong> Often returns temporary responses such as “450 Requested mail action not taken”. This frequently indicates the mailbox exists but the server is applying temporary throttling.</li>
                                <li><strong>Microsoft 365 / Exchange Online:</strong> Often applies connection throttling or greylisting when repeated verification requests originate from the same IP. A common issue with Microsoft 365 is Spamhaus blocks.</li>
                                <li><strong>Proofpoint:</strong> Proofpoint-protected domains may delay responses or temporarily reject verification traffic when repeated connections are detected. Proofpoint also uses its own internal block list, and it is extremely difficult to remove an IP address from their list.</li>
                                <li><strong>Mimecast:</strong> Commonly implements greylisting with responses. Like Microsoft, another common issue with Mimecast is Spamhaus blocks.</li>
                                <li><strong>Catch-all domains:</strong> Some domains accept all email addresses, even ones that do not exist. In these cases SMTP servers may always return a successful response.</li>
                            </ul>
                        </section>

                        <section id='why-proxies-needed'>
                            <h2>Why SMTP Proxies Are Needed</h2>
                            <p>SMTP proxies provide a managed infrastructure layer between your verifier and mail servers.</p>
                            <p>Instead of sending all verification requests from a single server, connections are distributed across a large pool of managed infrastructure.</p>
                            <p>This improves:</p>
                            <ul>
                                <li>Connection success rates</li>
                                <li>Resilience to rate limits</li>
                                <li>Long‑term IP reputation</li>
                                <li>Reliability of verification results</li>
                            </ul>
                        </section>

                        <section id='how-proxies-work'>
                            <h2>How Reacher SMTP Proxies Work</h2>
                            <ul>
                                <li><strong>Single endpoint:</strong> You connect to one proxy endpoint. Routing and infrastructure are handled automatically.</li>
                                <li><strong>Large IP pools:</strong> Verification requests are routed through a rotating pool of high‑reputation IP addresses.</li>
                                <li><strong>Smart MX routing:</strong> Traffic is automatically routed through different infrastructure pools depending on the destination mail system such as Microsoft 365, Google Workspace, Proofpoint and Mimecast.</li>
                                <li><strong>Continuous monitoring:</strong> Infrastructure is monitored for IP reputation, blacklist status and connection reliability.</li>
                            </ul>
                        </section>

                        <section id='using-with-reacher'>
                            <h2>Using Reacher Proxies with Reacher</h2>
                            <p>Reacher supports proxy configuration directly within its API settings.</p>
                            <p>Example configuration:</p>
                            <pre>
                                proxy_host<br />
                                proxy_port<br />
                                proxy_username<br />
                                proxy_password
                            </pre>
                            <p>Once configured, Reacher will automatically route verification requests through the proxy infrastructure.</p>
                            <p>Reacher SMTP Proxies can also be used with other SMTP verification tools.</p>
                        </section>

                        <section id='infrastructure'>
                            <h2>SMTP Verification Infrastructure</h2>
                            <p>Reliable SMTP verification requires more than just verification software.</p>
                            <p>It requires infrastructure capable of connecting consistently to large numbers of mail servers across the internet.</p>
                            <p>Key requirements include:</p>
                            <ul>
                                <li>Outbound Port 25 connectivity</li>
                                <li>Trusted IP reputation</li>
                                <li>Connection retry logic</li>
                                <li>Intelligent routing across mail providers</li>
                            </ul>
                            <p>Reacher Port 25 SMTP Proxies provide this infrastructure layer so that verification systems can operate reliably at scale.</p>
                        </section>

                        <section id='pricing'>
                            <h2>Pricing</h2>
                            <p>Plans start from:</p>
                            <h3>$49 per month</h3>
                            <p>Includes:</p>
                            <p>Up to 300,000 SMTP verification connections per month.</p>
                            <p>Higher‑volume plans are available for larger verification workloads.</p>
                        </section>

                        <section id='use-cases'>
                            <h2>Typical Use Cases</h2>
                            <p>Commonly used by:</p>
                            <ul>
                                <li>SaaS platforms performing automated email verification</li>
                                <li>CRM systems validating contact lists</li>
                                <li>Data providers verifying large email datasets</li>
                                <li>Agencies performing bulk list cleaning</li>
                                <li>Developers building verification APIs</li>
                            </ul>
                        </section>

                        <section id='request-access-footer'>
                            <h2>Request Access</h2>
                            <p>Submit an enquiry to request access to Reacher Port 25 SMTP Proxies.</p>
                            <div className={styles.enquiryBox}>
                                <p>Please contact us at <a href="mailto:support@no2bounce.com">support@no2bounce.com</a> to request access.</p>
                                <p>We typically respond within one business day.</p>
                            </div>
                        </section>
                    </main>
                </div>

                <NavFooter />
            </div>
        )
    }
}
