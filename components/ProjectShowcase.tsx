'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, viewportSettings } from '@/lib/animations';
import type { ProjectContent } from '@/lib/cms/types';
import styles from './ProjectShowcase.module.css';

export default function ProjectShowcase({
  label,
  title,
  projects,
}: {
  label: string;
  title: string;
  projects: ProjectContent[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProjects = projects.length;

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalProjects - 1));
      setActiveIndex(clamped);
    },
    [totalProjects]
  );

  return (
    <section className={styles.section} id="projects">
      {/* Header */}
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

        <div className={styles.headerRight}>
          <span className={styles.counter}>
            <span className={styles.counterActive}>
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className={styles.counterSep}>/</span>
            <span className={styles.counterTotal}>
              {String(totalProjects).padStart(2, '0')}
            </span>
          </span>

          <div className={styles.arrows}>
            <button
              className={styles.arrow}
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              className={styles.arrow}
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === totalProjects - 1}
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>
      </motion.div>

      {/* Coverflow Carousel */}
      <div className={styles.carousel}>
        <div className={styles.track}>
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            return (
              <ProjectCard
                key={project.number}
                project={project}
                offset={offset}
                isActive={offset === 0}
                onClick={() => goTo(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Individual project card (Coverflow layout)
   ============================================ */

function ProjectCard({
  project,
  offset,
  isActive,
  onClick,
}: {
  project: ProjectContent;
  offset: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  // Motion variants for Coverflow positioning
  const variants = {
    active: {
      x: '0%',
      scale: 1,
      opacity: 1,
      zIndex: 10,
      filter: 'brightness(1)',
    },
    left: {
      x: '-65%',
      scale: 0.85,
      opacity: 0.8,
      zIndex: 5,
      filter: 'brightness(0.3)',
    },
    right: {
      x: '65%',
      scale: 0.85,
      opacity: 0.8,
      zIndex: 5,
      filter: 'brightness(0.3)',
    },
    hiddenLeft: {
      x: '-110%',
      scale: 0.7,
      opacity: 0,
      zIndex: 0,
      filter: 'brightness(0)',
    },
    hiddenRight: {
      x: '110%',
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
      <div className={styles.imageWrapper}>
        {/* Stats Toggle Button (Top Right) */}
        {isActive && (
          <button 
            className={styles.playButton} 
            onClick={(e) => {
              e.stopPropagation();
              setShowStats(!showStats);
            }}
            aria-label="Toggle Stats"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </button>
        )}

        {/* Media */}
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image}
            loop
            muted
            playsInline
            className={styles.image}
            draggable={false}
          />
        ) : (
          <img
            src={project.image}
            alt={project.name}
            className={styles.image}
            draggable={false}
          />
        )}

        {/* Bottom Dark Gradient */}
        <div className={styles.gradientOverlay} />

        {/* Stats Overlay */}
        <AnimatePresence>
          {isActive && showStats && project.stats.length > 0 && (
            <motion.div
              className={styles.statsOverlay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {project.stats.map((stat, si) => (
                <div key={si} className={styles.stat}>
                  <span className={styles.statLabel}>{stat.label}</span>
                  <span
                    className={`${styles.statValue} ${
                      stat.positive ? styles.statPositive : ''
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text Content */}
        <div className={styles.cardContent}>
          <h3 className={styles.projectName}>{project.name}</h3>
          <p className={styles.projectType}>
            {project.type} / {project.tags[0]}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
