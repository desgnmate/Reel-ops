'use client';

import { motion } from 'framer-motion';
import {
  heroTextReveal,
  heroSubtextReveal,
  heroButtonReveal,
} from '@/lib/animations';
import Button from './ui/Button';
import styles from './Hero.module.css';
import type { HeroContent } from '@/lib/cms/types';

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <section className={styles.hero} id="hero">
      {/* Background cinematic video */}
      <div className={styles.heroBg}>
          <video
          src={content.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroBgVideo}
        />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroTextBlock}>
          <motion.p
            className={styles.heroLabel}
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
          >
            {content.eyebrow}
          </motion.p>

          <motion.h1
            className={styles.heroTitle}
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
          >
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            variants={heroSubtextReveal}
            initial="hidden"
            animate="visible"
          >
            {content.subtitle}
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            variants={heroButtonReveal}
            initial="hidden"
            animate="visible"
          >
            <Button variant="outline" href={content.primaryCtaHref}>
              {content.primaryCtaLabel}
            </Button>
            <Button variant="solid" href={content.secondaryCtaHref}>
              {content.secondaryCtaLabel}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll prompt */}
      <div className={styles.scrollPrompt}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
