"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CountdownTimer.module.css';

export default function CountdownTimer({ targetDate }) {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  const [isTension, setIsTension] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    setIsClient(true);
    let transitionTimer = null;
    
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeftObj = {};

      if (difference <= 10000 && difference > 0) {
        setIsTension(true);
      }

      if (difference > 0) {
        timeLeftObj = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        // Countdown finished, trigger animation then redirect
        if (!hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setIsTransitioning(true); // this triggers re-render for UI
          
          // Use a direct timeout outside of the effect's cleanup if possible, 
          // or just don't put isTransitioning in the deps array.
          // Since we use router, router is in deps. 
          setTimeout(() => {
            router.push('/birthday');
          }, 3000);
        }
        return null;
      }
      return timeLeftObj;
    };

    const initialTimeLeft = calculateTimeLeft();
    if (initialTimeLeft) {
        setTimeLeft(initialTimeLeft);
    }

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      // Removed clearTimeout so the redirect timeout doesn't get cancelled on cleanup!
    };
  }, [targetDate, router]);

  if (!isClient) {
    return null; // Prevent hydration mismatch
  }

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <>
      <div className={`glass-panel ${styles.countdownContainer} ${isTension ? styles.tensionMode : ''} ${isTransitioning ? styles.fadeOut : ''}`}>
        <h2 className={styles.title}>
          {isTension ? "Siap-siap..." : "Sebuah Rahasia Akan Terbuka Dalam..."}
        </h2>
        
        <div className={styles.timeWrapper}>
        <div className={styles.timeBox}>
          <span className={styles.number}>{formatNumber(timeLeft.days)}</span>
          <span className={styles.label}>Hari</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBox}>
          <span className={styles.number}>{formatNumber(timeLeft.hours)}</span>
          <span className={styles.label}>Jam</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBox}>
          <span className={styles.number}>{formatNumber(timeLeft.minutes)}</span>
          <span className={styles.label}>Menit</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBox}>
          <span className={styles.number}>{formatNumber(timeLeft.seconds)}</span>
          <span className={styles.label}>Detik</span>
        </div>
      </div>
      
      <div className={styles.teaserText}>
        <p>Tersenyumlah, ada sebuah kejutan istimewa yang sedang menunggumu saat waktunya tiba nanti.</p>
        <p>Sesuatu yang disiapkan khusus untuk wanita paling spesial di hati Mas.</p>
        <p className={styles.teaserSignature}>Dari: Vikar Maulana Arrisyad ❤️</p>
      </div>
      
      </div>
      
      {/* Flash overlay for transition */}
      <div className={`${styles.transitionOverlay} ${isTransitioning ? styles.active : ''}`}></div>
    </>
  );
}
