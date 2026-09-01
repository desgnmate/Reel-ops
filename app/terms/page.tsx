import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — Reel OPS Media',
  description:
    'Terms and conditions governing the use of Reel OPS Media services and website.',
};

export default function TermsOfService() {
  return (
    <main className={styles.legalPage}>
      <div className={styles.inner}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>

        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated — April 2026</p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Agreement to Terms</h2>
          <p className={styles.text}>
            By accessing or using the Reel OPS Media website and services, you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use our website or services.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Services</h2>
          <p className={styles.text}>
            Reel OPS Media provides video production, content creation, brand
            strategy, and related media services. The specific scope, timeline,
            and deliverables for each project will be outlined in a separate
            agreement or statement of work.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Intellectual Property</h2>
          <p className={styles.text}>
            All content on this website, including text, graphics, logos,
            images, videos, and software, is the property of Reel OPS Media
            and is protected by applicable intellectual property laws. You may
            not reproduce, distribute, or create derivative works without our
            prior written consent.
          </p>
          <p className={styles.text}>
            Upon full payment for services rendered, clients will receive the
            agreed-upon usage rights for deliverables as specified in the
            project agreement.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Client Responsibilities</h2>
          <p className={styles.text}>
            Clients agree to:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Provide accurate and complete information required for project
              execution
            </li>
            <li className={styles.listItem}>
              Respond to communications and approve deliverables in a timely
              manner
            </li>
            <li className={styles.listItem}>
              Ensure they have the rights to any materials provided to us for
              use in projects
            </li>
            <li className={styles.listItem}>
              Make payments according to the agreed-upon schedule
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Payment Terms</h2>
          <p className={styles.text}>
            Payment terms will be outlined in individual project agreements.
            Unless otherwise specified, a deposit is required before work
            commences, with the remaining balance due upon project completion.
            Late payments may be subject to additional fees.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Cancellation &amp; Refunds</h2>
          <p className={styles.text}>
            Cancellation policies are outlined in individual project agreements.
            Deposits are generally non-refundable as they cover pre-production
            planning and resource allocation. Any refunds for partially
            completed work will be assessed on a case-by-case basis.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
          <p className={styles.text}>
            Reel OPS Media shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from or related
            to your use of our services or website. Our total liability shall
            not exceed the amount paid by you for the specific service giving
            rise to the claim.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Use of Website</h2>
          <p className={styles.text}>
            You agree not to use our website for any unlawful purpose or in
            any way that could damage, disable, or impair the website. You may
            not attempt to gain unauthorized access to any part of the website
            or its related systems.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Third-Party Links</h2>
          <p className={styles.text}>
            Our website may contain links to third-party websites. We are not
            responsible for the content, privacy practices, or terms of any
            third-party sites. We encourage you to review the policies of any
            external sites you visit.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Changes to Terms</h2>
          <p className={styles.text}>
            We reserve the right to modify these Terms of Service at any time.
            Changes will be effective immediately upon posting to this page.
            Your continued use of our website and services constitutes
            acceptance of any modified terms.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Governing Law</h2>
          <p className={styles.text}>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the State of Arizona, without regard
            to its conflict of law provisions.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Contact Us</h2>
          <p className={styles.text}>
            If you have any questions about these Terms of Service, please
            contact us:
          </p>
          <div className={styles.contactInfo}>
            <p>
              Reel OPS Media
              <br />
              Email:{' '}
              <a href="mailto:hello@reelopsmedia.com">hello@reelopsmedia.com</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
