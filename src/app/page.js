import CountdownTimer from '../components/CountdownTimer';
import FloatingHearts from '../components/FloatingHearts';
import styles from './page.module.css';

export default function Home() {
  // Target Date: 1 July 2026, 00:00:00 (Local Time)
  const TARGET_DATE = "2026-07-01T00:00:00";

  return (
    <main className={styles.main}>
      <FloatingHearts />
      <div className={styles.content}>
        <CountdownTimer targetDate={TARGET_DATE} />
      </div>
    </main>
  );
}
