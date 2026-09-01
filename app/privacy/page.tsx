import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — Reel OPS Media',
  description:
    'Learn how Reel OPS Media collects, uses, and protects your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.legalPage}>
      <div className={styles.inner}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>

        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated — April 2026</p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.text}>
            Reel OPS Media (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) respects your privacy and is committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or engage our services.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <p className={styles.text}>
            We may collect the following types of information:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Name, email address, and phone number when you fill out a contact
              form or book a call
            </li>
            <li className={styles.listItem}>
              Company name and project details related to your inquiry
            </li>
            <li className={styles.listItem}>
              Usage data such as browser type, device information, and pages
              visited through cookies and analytics tools
            </li>
            <li className={styles.listItem}>
              Any other information you voluntarily provide to us
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            3. How We Use Your Information
          </h2>
          <p className={styles.text}>
            We use the information we collect to:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Respond to your inquiries and schedule consultations
            </li>
            <li className={styles.listItem}>
              Provide, maintain, and improve our services
            </li>
            <li className={styles.listItem}>
              Send you project updates and relevant communications
            </li>
            <li className={styles.listItem}>
              Analyze website usage to improve user experience
            </li>
            <li className={styles.listItem}>
              Comply with legal obligations
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Information Sharing</h2>
          <p className={styles.text}>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with trusted service
            providers who assist us in operating our website and conducting our
            business, provided they agree to keep this information confidential.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Data Security</h2>
          <p className={styles.text}>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Cookies</h2>
          <p className={styles.text}>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience. You can set your browser to
            refuse all or some cookies, but this may affect your ability to
            use certain features of our site.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Your Rights</h2>
          <p className={styles.text}>
            You have the right to access, correct, or delete the personal
            information we hold about you. You may also opt out of receiving
            marketing communications at any time by contacting us directly.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Changes to This Policy</h2>
          <p className={styles.text}>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. We
            encourage you to review this policy periodically.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Contact Us</h2>
          <p className={styles.text}>
            If you have any questions about this Privacy Policy, please
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
