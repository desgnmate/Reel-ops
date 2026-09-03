'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportSettings } from '@/lib/animations';
import styles from './Mission.module.css';
import type { MissionContent } from '@/lib/cms/types';

export default function Mission({ content }: { content: MissionContent }) {
  return (
    <section className={styles.mission}>
      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <motion.h2 className={styles.title} variants={fadeInUp}>
          {content.leftLine1}
          <br />
          {content.leftLine2}
        </motion.h2>

        <motion.h2 className={styles.title} variants={fadeInUp}>
          {content.rightLine1}
          <br />
          <span className={styles.accent}>{content.rightLine2}</span>
        </motion.h2>
      </motion.div>
    </section>
  );
}
