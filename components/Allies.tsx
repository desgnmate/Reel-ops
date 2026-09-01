'use client';

import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  viewportSettings,
} from '@/lib/animations';
import styles from './Allies.module.css';

const ALLIES = [
  { name: 'Tier 1', image: '/images/ally-tier1.jpg', role: 'Production Partner' },
  { name: 'Brus Media', image: '/images/ally-brus.jpg', role: 'Post-Production' },
  { name: 'Empire Rentals', image: '/images/ally-empire.jpg', role: 'Equipment & Gear' },
];

const CONTRACTORS = [
  { role: 'Camera Operator', count: 2 },
  { role: 'Lighting Expert', count: 1 },
  { role: 'Audio Specialist', count: 1 },
  { role: 'Editor', count: 1 },
  { role: 'Drone Pilot', count: 1 },
];

export default function Allies() {
  return (
    <section className={styles.allies}>
      <div className={styles.inner}>
        {/* Header row */}
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className={styles.headerLeft}>
            <p className={styles.label}>Network</p>
            <h2 className={styles.title}>Allies</h2>
          </div>
          <p className={styles.headerDesc}>
            We don&apos;t work alone. Our trusted network of partners and
            contractors ensures every project gets the specialized
            talent it needs.
          </p>
        </motion.div>

        {/* Two-column layout: partners + contractors */}
        <div className={styles.content}>
          {/* Partner cards */}
          <motion.div
            className={styles.grid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {ALLIES.map((ally) => (
              <motion.div
                key={ally.name}
                className={styles.card}
                variants={scaleIn}
              >
                <img
                  src={ally.image}
                  alt={ally.name}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardRole}>{ally.role}</span>
                  <span className={styles.cardName}>{ally.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contractors sidebar */}
          <motion.div
            className={styles.contractorPanel}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <div className={styles.contractorHeader}>
              <span className={styles.contractorCount}>6</span>
              <div>
                <p className={styles.contractorTitle}>Contractors</p>
                <p className={styles.contractorSub}>On-call talent pool</p>
              </div>
            </div>

            <div className={styles.contractorList}>
              {CONTRACTORS.map((c) => (
                <div key={c.role} className={styles.contractorItem}>
                  <span className={styles.contractorRole}>{c.role}</span>
                  <span className={styles.contractorDots} />
                  <span className={styles.contractorNum}>×{c.count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
