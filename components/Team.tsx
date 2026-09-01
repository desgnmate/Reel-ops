'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, viewportSettings } from '@/lib/animations';
import styles from './Team.module.css';

export default function Team() {
  return (
    <section className={styles.team} id="team">
      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <p className={styles.label}>Team</p>
          <h2 className={styles.title}>Our Workforce</h2>
        </motion.div>

        {/* CEO Section — two columns */}
        <div className={styles.ceoSection}>
          {/* Left: Image + Stats */}
          <motion.div
            className={styles.ceoLeft}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <div className={styles.ceoImageWrapper}>
              <img
                src="/images/ceo-v2.jpeg"
                alt="CEO of Reel OPS Media"
                className={styles.ceoImage}
              />
              <div className={styles.ceoImageOverlay}>
                <div className={styles.ceoInfo}>
                  <span className={styles.ceoName}>Isaac</span>
                  <span className={styles.ceoTag}>Founder & CEO</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio + credentials */}
          <motion.div
            className={styles.ceoRight}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h3 className={styles.ceoRole}>CEO</h3>

            <p className={styles.ceoBio}>
              Isaac has been in the video space since 2019. He&apos;s been behind the
              lens for over 5 years and counting. He&apos;s produced, directed and
              filmed some of the most watched videos in Arizona. Whether it&apos;s
              your work done, or figure it out.
            </p>

            <div className={styles.ceoCredentials}>
              <div className={styles.credential}>
                <span className={styles.credLabel}>Code Name</span>
                <span className={styles.credValue}>Overlord</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credLabel}>Specializes in</span>
                <span className={styles.credValue}>Brand Strategy</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credLabel}>Company Affiliation</span>
                <span className={styles.credValue}>Reel OPS Media</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credLabel}>Work Experience</span>
                <span className={styles.credValue}>10+ Years</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credLabel}>Operators</span>
                <span className={styles.credValue}>15+ On Stand-By</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credLabel}>Coffee&apos;s Sipped</span>
                <span className={styles.credValue}>10,563+</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
