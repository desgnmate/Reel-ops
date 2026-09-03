'use client';

import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  viewportSettings,
} from '@/lib/animations';
import type { AllyContent, ContractorContent } from '@/lib/cms/types';
import styles from './Allies.module.css';

export default function Allies({
  label,
  title,
  description,
  allies,
  contractorCount,
  contractorTitle,
  contractorSubtitle,
  contractors,
}: {
  label: string;
  title: string;
  description: string;
  allies: AllyContent[];
  contractorCount: number;
  contractorTitle: string;
  contractorSubtitle: string;
  contractors: ContractorContent[];
}) {
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
            <p className={styles.label}>{label}</p>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <p className={styles.headerDesc}>{description}</p>
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
            {allies.map((ally) => (
              <motion.div
                key={ally.name}
                className={styles.card}
                variants={scaleIn}
              >
                <img
                  src={ally.image}
                  alt={ally.imageAlt}
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
              <span className={styles.contractorCount}>{contractorCount}</span>
              <div>
                <p className={styles.contractorTitle}>{contractorTitle}</p>
                <p className={styles.contractorSub}>{contractorSubtitle}</p>
              </div>
            </div>

            <div className={styles.contractorList}>
              {contractors.map((c) => (
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
