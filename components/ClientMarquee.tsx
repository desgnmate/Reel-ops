import styles from './ClientMarquee.module.css';

export default function ClientMarquee({
  label,
  clients,
}: {
  label: string;
  clients: string[];
}) {
  return (
    <section className={styles.marquee}>
      <p className={styles.label}>{label}</p>
      <div className={styles.track}>
        {/* Duplicate the list for seamless infinite scroll */}
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.trackInner}>
            {clients.map((client) => (
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
