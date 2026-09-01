'use client';

import { motion } from 'framer-motion';
import {
  heroTextReveal,
  heroSubtextReveal,
  heroButtonReveal,
} from '@/lib/animations';
import Button from './ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background cinematic video */}
      <div className={styles.heroBg}>
        <video
          src="/videos/hero-bg.mp4"
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
            Reel OPS Media
          </motion.p>

          <motion.h1
            className={styles.heroTitle}
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
          >
            Next Level
            <br />
            Content
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            variants={heroSubtextReveal}
            initial="hidden"
            animate="visible"
          >
            Driving real business growth through strategic video and media
            marketing. We turn your vision into content that converts.
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            variants={heroButtonReveal}
            initial="hidden"
            animate="visible"
          >
            <Button variant="outline" href="#projects">
              View Projects
            </Button>
            <Button variant="solid" href="#contact">
              Book A Demo
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
