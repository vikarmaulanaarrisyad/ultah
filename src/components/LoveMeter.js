"use client";
import { useState, useEffect } from 'react';
import styles from './LoveMeter.module.css';

export default function LoveMeter() {
  const [clicks, setClicks] = useState(0);
  const [shake, setShake] = useState(false);
  
  const maxClicks = 15;
  const percentage = Math.min((clicks / maxClicks) * 100, 100);
  
  const handleTap = () => {
    if (clicks < maxClicks) {
      setClicks(clicks + 1);
    }
  };

  useEffect(() => {
    if (percentage === 100) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }, [percentage]);

  const getMessage = () => {
    if (percentage === 0) return "Coba ketuk tombol di bawah terus-menerus!";
    if (percentage < 30) return "Hmm, masih jauh nih...";
    if (percentage < 60) return "Wah, makin penuh! Sayang banget ya berarti?";
    if (percentage < 90) return "Sedikit lagi meledak!! 💥";
    return "TAK TERHINGGA! ♾️❤️ Cinta Mas nggak bisa diukur!";
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Seberapa Besar Sayang Mas? 🌡️</h2>
      <p className={styles.subtitle}>Mari kita ukur seberapa besar kadar cinta Mas untuk Adik Emi.</p>

      <div className={`${styles.meterWrapper} ${shake ? styles.shake : ''}`}>
        <div className={styles.thermometer}>
          <div className={styles.glass}>
            <div 
              className={styles.fluid} 
              style={{ height: `${percentage}%` }}
            ></div>
          </div>
          <div className={styles.bulb}></div>
        </div>

        <div className={styles.infoArea}>
          <div className={styles.percentageText}>
            {percentage === 100 ? '∞' : `${Math.round(percentage)}%`}
          </div>
          <p className={styles.statusMessage}>{getMessage()}</p>
          
          {percentage < 100 && (
            <button className={styles.tapButton} onClick={handleTap}>
              Ketuk Untuk Mengukur! 👆
            </button>
          )}
          {percentage === 100 && (
            <div className={styles.celebration}>🎉 Wah, meterannya sampai rusak! 🎉</div>
          )}
        </div>
      </div>
    </div>
  );
}
