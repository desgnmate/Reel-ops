'use client';

import { motion } from 'framer-motion';
import { fadeInUp, viewportSettings } from '@/lib/animations';
import styles from './Contact.module.css';

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/* November 2024 calendar data (from the design) */
const CALENDAR_DAYS = [
  0, 0, 0, 0, 1, 2, 3,
  4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 0,
];

const ACTIVE_DAYS = [12, 13, 14];

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <img
        src="/images/book-a-call-bg.jpg"
        alt="Background"
        className={styles.bgImage}
      />
      <div className={styles.bgOverlay} />

      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <h2 className={styles.title}>Let&apos;s Chat</h2>
          <p className={styles.subtitle}>
            Find a time using Calendly below, answer some basic questions, and
            lets discuss your project
          </p>
        </motion.div>

        {/* Calendar widget */}
        <motion.div
          className={styles.widget}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {/* Left panel — meeting info */}
          <div className={styles.widgetLeft}>
            <div>
              <p className={styles.widgetName}>Hamza Ehsan</p>
              <h3 className={styles.widgetTitle}>Discovery</h3>
            </div>

            <div className={styles.widgetMeta}>
              <div className={styles.widgetMetaItem}>
                <svg
                  className={styles.widgetMetaIcon}
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" fill="none" />
                  <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
                30 min
              </div>
              <div className={styles.widgetMetaItem}>
                <svg
                  className={styles.widgetMetaIcon}
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
                  <circle cx="8" cy="8" r="2" fill="currentColor" />
                </svg>
                Web conferencing details provided upon confirmation.
              </div>
            </div>

            <p className={styles.widgetDesc}>
              This meeting is for an introductory chat to discuss a potential
              project.
            </p>
          </div>

          {/* Right panel — calendar */}
          <div className={styles.widgetRight}>
            <div className={styles.calendarHeader}>
              <div>
                <p className={styles.calendarLabel}>Select a Date &amp; Time</p>
                <p className={styles.calendarTitle}>November 2024</p>
              </div>
              <div className={styles.calendarNav}>
                <button className={styles.calendarNavBtn} aria-label="Previous month">
                  ‹
                </button>
                <button className={styles.calendarNavBtn} aria-label="Next month">
                  ›
                </button>
              </div>
            </div>

            {/* Day labels */}
            <div className={styles.calendarGrid}>
              {DAY_LABELS.map((d) => (
                <span key={d} className={styles.calendarDayLabel}>
                  {d}
                </span>
              ))}

              {/* Days */}
              {CALENDAR_DAYS.map((day, i) => {
                if (day === 0) {
                  return (
                    <span
                      key={`empty-${i}`}
                      className={`${styles.calendarDay} ${styles.calendarDayEmpty}`}
                    />
                  );
                }

                const isActive = ACTIVE_DAYS.includes(day);
                return (
                  <span
                    key={day}
                    className={`${styles.calendarDay} ${isActive ? styles.calendarDayActive : ''}`}
                  >
                    {day}
                  </span>
                );
              })}
            </div>

            {/* Timezone */}
            <div className={styles.timezone}>
              <p className={styles.timezoneLabel}>Time zone</p>
              <p className={styles.timezoneValue}>
                UK, Ireland, Lisbon Time (8:24am)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
