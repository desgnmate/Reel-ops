import styles from './ClientMarquee.module.css';

const CLIENTS = [
  'Tactical Gear Co.',
  'Tier 1 Athletics',
  'Brus Media',
  'Empire Rentals',
  'Vanguard Fitness',
  'Desert Storm LLC',
  'Iron Republic',
  'Apex Dynamics',
];

export default function ClientMarquee() {
  return (
    <section className={styles.marquee}>
      <p className={styles.label}>Past Clients</p>
      <div className={styles.track}>
        {/* Duplicate the list for seamless infinite scroll */}
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.trackInner}>
            {CLIENTS.map((client) => (
              <span key={`${copy}-${client}`} className={styles.logoText}>
                {client}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
