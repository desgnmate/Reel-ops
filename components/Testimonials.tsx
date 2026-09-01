'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportSettings } from '@/lib/animations';
import styles from './Testimonials.module.css';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Reel Ops Didn\u2019t Just Deliver A Video; They Delivered A Weapon For Our Marketing Arsenal.",
    name: 'David Dimiglio',
    role: 'CEO',
    company: 'Precision Industries',
  },
  {
    quote:
      "Working with Reel OPS was a game-changer. Our brand visibility skyrocketed within the first month of the campaign launch.",
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'Apex Dynamics',
  },
  {
    quote:
      "The production quality is unmatched. Every frame was intentional, every cut was precise. They turned our vision into reality.",
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Iron Republic',
  },
  {
    quote:
      "They don\u2019t just make content\u2014they build narratives that move people. Our engagement rate tripled after working with them.",
    name: 'Jessica Rivera',
    role: 'Brand Manager',
    company: 'Tier 1 Athletics',
  },
  {
    quote:
      "From concept to delivery, Reel OPS operated with military precision. On time, on budget, and beyond expectations.",
    name: 'Ryan Torres',
    role: 'COO',
    company: 'Vanguard Fitness',
  },
];

const STATS = [
  { value: '4.9/5', label: 'Client Rating' },
  { value: '100%', label: 'On-Time Delivery' },
  { value: '98%', label: 'Would Recommend' },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(index, total - 1)));
    },
    [total]
  );

  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className={styles.headerLeft}>
            <p className={styles.label}>Testimonials</p>
            <h2 className={styles.title}>Client Stories</h2>
          </div>

          <div className={styles.headerRight}>
            <span className={styles.counter}>
              <span className={styles.counterActive}>
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className={styles.counterSep}>/</span>
              <span className={styles.counterTotal}>
                {String(total).padStart(2, '0')}
              </span>
            </span>

            <div className={styles.arrows}>
              <button
                className={styles.arrow}
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                className={styles.arrow}
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === total - 1}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Coverflow Carousel */}
        <div className={styles.carousel}>
          <div className={styles.track}>
            {TESTIMONIALS.map((testimonial, index) => {
              const offset = index - activeIndex;
              return (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  offset={offset}
                  onClick={() => goTo(index)}
                />
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className={styles.stats}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   Individual testimonial card (Coverflow)
   ============================================ */

function TestimonialCard({
  testimonial,
  offset,
  onClick,
}: {
  testimonial: Testimonial;
  offset: number;
  onClick: () => void;
}) {
  const variants = {
    active: {
      x: '0%',
      scale: 1,
      opacity: 1,
      zIndex: 10,
      filter: 'brightness(1)',
    },
    left: {
      x: '-55%',
      scale: 0.88,
      opacity: 0.8,
      zIndex: 5,
      filter: 'brightness(0.4)',
    },
    right: {
      x: '55%',
      scale: 0.88,
      opacity: 0.8,
      zIndex: 5,
      filter: 'brightness(0.4)',
    },
    hiddenLeft: {
      x: '-100%',
      scale: 0.7,
      opacity: 0,
      zIndex: 0,
      filter: 'brightness(0)',
    },
    hiddenRight: {
      x: '100%',
      scale: 0.7,
      opacity: 0,
      zIndex: 0,
      filter: 'brightness(0)',
    },
  };

  let state = 'active';
  if (offset === -1) state = 'left';
  else if (offset === 1) state = 'right';
  else if (offset < -1) state = 'hiddenLeft';
  else if (offset > 1) state = 'hiddenRight';

  return (
    <motion.div
      className={styles.card}
      variants={variants}
      initial={false}
      animate={state}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={Math.abs(offset) <= 1 ? onClick : undefined}
      style={{
        cursor: Math.abs(offset) === 1 ? 'pointer' : 'default',
        pointerEvents: Math.abs(offset) > 1 ? 'none' : 'auto',
      }}
    >
      <div className={styles.cardInner}>
        {/* Quote Icon */}
        <svg
          className={styles.quoteIcon}
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
        </svg>

        {/* Quote Text */}
        <blockquote className={styles.quote}>
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Attribution */}
        <div className={styles.attribution}>
          <div className={styles.authorInitial}>
            {testimonial.name.charAt(0)}
          </div>
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>{testimonial.name}</span>
            <span className={styles.authorRole}>
              {testimonial.role}, {testimonial.company}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
