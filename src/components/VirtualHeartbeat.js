"use client";
import { useState, useRef, useEffect } from 'react';
import styles from './VirtualHeartbeat.module.css';

export default function VirtualHeartbeat() {
  const [isHolding, setIsHolding] = useState(false);
  const intervalRef = useRef(null);

  const startHeartbeat = () => {
    setIsHolding(true);
    
    // Initial vibration for supported devices (mostly Android)
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([100, 100, 100, 500]); // Duk... Duk.....
    }

    // Set interval for continuous heartbeat vibration
    intervalRef.current = setInterval(() => {
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([100, 100, 100, 500]);
      }
    }, 800);
  };

  const stopHeartbeat = () => {
    setIsHolding(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Stop vibration
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(0);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div 
        className={`${styles.heartWrapper} ${isHolding ? styles.active : ''}`}
        onMouseDown={startHeartbeat}
        onMouseUp={stopHeartbeat}
        onMouseLeave={stopHeartbeat}
        onTouchStart={startHeartbeat}
        onTouchEnd={stopHeartbeat}
      >
        <div className={styles.heart}>❤️</div>
        <p className={styles.instruction}>
          {isHolding ? "Rasakan detaknya..." : "Sentuh & Tahan Hatiku"}
        </p>
      </div>

      <div className={`${styles.message} ${isHolding ? styles.show : ''}`}>
        Selama jantung ini masih bisa berdetak,<br/>
        ia akan selalu berdetak untukmu.
      </div>
    </div>
  );
}
