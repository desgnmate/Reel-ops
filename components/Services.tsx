'use client';

import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  viewportSettings,
} from '@/lib/animations';
import Button from './ui/Button';
import styles from './Services.module.css';
import type { ServiceContent } from '@/lib/cms/types';

export default function Services({
  label,
  title,
  services,
  ctaLabel,
  pastProjectsLabel,
}: {
  label: string;
  title: string;
  services: ServiceContent[];
  ctaLabel: string;
  pastProjectsLabel: string;
}) {
  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>
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

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.card}
              variants={fadeInUp}
            >
              <span className={styles.cardNumber}>{index + 1}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <Button variant="solid" href="#contact">
            {ctaLabel}
          </Button>
          <a href="#projects" className={styles.pastLink}>
            {pastProjectsLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
