'use client';

import { motion } from 'framer-motion';
import { fadeInUp, viewportSettings } from '@/lib/animations';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Large brand name */}
        <motion.div
          className={styles.brand}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <img
            src="/images/logo-stacked-white.png"
            alt="Reel OPS Media"
            className={styles.brandLogo}
          />
        </motion.div>

        {/* Operation hours */}
        <div className={styles.info}>
          <p className={styles.infoLabel}>Operation Hours</p>
          <p className={styles.infoValue}>Monday to Friday</p>
        </div>

        {/* Social links */}
        <div className={styles.socials}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Tagline */}
        <motion.p
          className={styles.tagline}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          Be the reason you stand out. Get a leg up in your space.
        </motion.p>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Reel OPS Media. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="/terms" className={styles.legalLink}>
              Terms of Service
            </a>
          </div>
          <p className={styles.credit}>
            Developed by{' '}
            <a
              href="https://desgnmate.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.creditLink}
            >
              Desgnmate.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
