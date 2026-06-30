"use client";
import { useState, useEffect } from 'react';
import styles from './LovePadlock.module.css';

export default function LovePadlock() {
  const [isLocked, setIsLocked] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    // Check local storage on initial load
    const savedState = localStorage.getItem('lovePadlockLocked');
    if (savedState === 'true') {
      setIsLocked(true);
    }
  }, []);

  const handleLock = () => {
    if (isLocked) return;
    
    setIsLocked(true);
    setShowHearts(true);
    localStorage.setItem('lovePadlockLocked', 'true');
    
    // Hide hearts after animation
    setTimeout(() => {
      setShowHearts(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Gembok Cinta Kita 🔐</h2>
      <p className={styles.subtitle}>
        Layaknya tradisi di Pont des Arts, Paris. Mari kita kunci hati kita berdua di sini.
      </p>

      <div className={styles.padlockWrapper} onClick={handleLock}>
        {showHearts && (
          <div className={styles.heartBurst}>
            <span>❤️</span><span>💖</span><span>💕</span><span>💞</span>
          </div>
        )}
        
        <div className={`${styles.padlock} ${isLocked ? styles.lockedState : styles.unlockedState}`}>
          <div className={styles.shackle}></div>
          <div className={styles.body}>
            <div className={styles.engraving}>
              V <br/> <span className={styles.smallHeart}>❤️</span> <br/> E
            </div>
            <div className={styles.keyhole}></div>
          </div>
        </div>
      </div>

      <div className={styles.statusArea}>
        {!isLocked ? (
          <p className={styles.instruction}>Ketuk gemboknya untuk mengunci hati kita!</p>
        ) : (
          <div className={styles.successMessage}>
            <h3>Terkunci Selamanya! 🔒</h3>
            <p>Hati kita sudah terkunci bersama. Kuncinya sudah Mas buang jauh ke dasar lautan. Nggak ada yang bisa memisahkan kita. ❤️</p>
          </div>
        )}
      </div>
    </div>
  );
}
