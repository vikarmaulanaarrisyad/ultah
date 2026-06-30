"use client";
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import FloatingHearts from '../components/FloatingHearts';
import styles from './page.module.css';

export default function Home() {
  // Target: 1 Juli 2026 pukul 00:00 (WIB)
  const TARGET_DATE = "2026-07-01T00:00:00+07:00";

  return (
    <main className={styles.main}>
      <FloatingHearts />
      <div className={styles.content}>
        <CountdownTimer targetDate={TARGET_DATE} />
      </div>
    </main>
  );
}
