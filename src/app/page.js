"use client";
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import FloatingHearts from '../components/FloatingHearts';
import styles from './page.module.css';

export default function Home() {
  // For testing purposes, setting countdown to 10 seconds from when the component loads
  // Originally: const TARGET_DATE = "2026-07-01T00:00:00";
  const [TARGET_DATE, setTargetDate] = React.useState(null);
  React.useEffect(() => {
    setTargetDate(new Date(Date.now() + 10000).toISOString());
  }, []);

  if (!TARGET_DATE) return null;

  return (
    <main className={styles.main}>
      <FloatingHearts />
      <div className={styles.content}>
        <CountdownTimer targetDate={TARGET_DATE} />
      </div>
    </main>
  );
}
