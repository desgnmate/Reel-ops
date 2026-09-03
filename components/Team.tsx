'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, viewportSettings } from '@/lib/animations';
import type { TeamMemberContent } from '@/lib/cms/types';
import styles from './Team.module.css';

export default function Team({
  label,
  title,
  member,
}: {
  label: string;
  title: string;
  member: TeamMemberContent;
}) {
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
          <p className={styles.label}>{label}</p>
          <h2 className={styles.title}>{title}</h2>
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
                src={member.image}
                alt={member.imageAlt}
                className={styles.ceoImage}
              />
              <div className={styles.ceoImageOverlay}>
                <div className={styles.ceoInfo}>
                  <span className={styles.ceoName}>{member.name}</span>
                  <span className={styles.ceoTag}>{member.role}</span>
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
            <h3 className={styles.ceoRole}>{member.role.split(' ').pop()}</h3>

            <p className={styles.ceoBio}>{member.bio}</p>

            <div className={styles.ceoCredentials}>
              {member.credentials.map((credential) => (
                <div className={styles.credential} key={credential.label}>
                  <span className={styles.credLabel}>{credential.label}</span>
                  <span className={styles.credValue}>{credential.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
