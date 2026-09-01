'use client';

import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  viewportSettings,
} from '@/lib/animations';
import Button from './ui/Button';
import styles from './Services.module.css';

const SERVICES = [
  {
    title: 'Meet And Greet',
    description:
      'Book a call and lets discuss your idea.',
  },
  {
    title: 'Strategy Session',
    description:
      'Book a call and lets discuss your idea.',
  },
  {
    title: 'Content Creation',
    description:
      'Book a call and lets discuss your idea.',
  },
  {
    title: 'Analyses',
    description:
      'Book a call and lets discuss your idea.',
  },
];

export default function Services() {
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
          <p className={styles.label}>Services</p>
          <h2 className={styles.title}>What We Do</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {SERVICES.map((service, index) => (
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
            See Packages
          </Button>
          <a href="#projects" className={styles.pastLink}>
            See Past Projects Below
          </a>
        </motion.div>
      </div>
    </section>
  );
}
