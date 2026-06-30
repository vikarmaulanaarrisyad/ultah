"use client";
import { useState, useEffect } from 'react';
import styles from './FinalSurprise.module.css';

export default function FinalSurprise() {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // prevent scrolling
      
      const timers = [
        setTimeout(() => setStage(1), 2000), // "Adik Sayang..."
        setTimeout(() => setStage(2), 5000), // "Sebelum hari ini berakhir..."
        setTimeout(() => setStage(3), 9000), // "Mas cuma mau bilang..."
        setTimeout(() => setStage(4), 13000), // "Terima kasih sudah bertahan sejauh ini."
        setTimeout(() => setStage(5), 18000), // "Terima kasih sudah memilih Mas."
        setTimeout(() => setStage(6), 23000), // "Apapun yang terjadi ke depannya..."
        setTimeout(() => setStage(7), 28000), // "Kita hadapi sama-sama ya?"
        setTimeout(() => setStage(8), 33000), // "I love you. Selamat ulang tahun." + Heart
      ];

      return () => {
        timers.forEach(t => clearTimeout(t));
        document.body.style.overflow = 'auto';
      };
    } else {
      setStage(0);
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <p className={styles.triggerText}>Masih ada satu hal lagi...</p>
      <button className={styles.triggerBtn} onClick={() => setIsOpen(true)}>
        Sentuh layar ini perlahan
      </button>

      {isOpen && (
        <div className={styles.cinematicOverlay}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>Kembali</button>
          
          <div className={styles.textSequence}>
            <p className={`${styles.textItem} ${stage >= 1 ? styles.visible : ''}`}>Adik Sayang...</p>
            <p className={`${styles.textItem} ${stage >= 2 ? styles.visible : ''}`}>Sebelum hari ini benar-benar berakhir...</p>
            <p className={`${styles.textItem} ${stage >= 3 ? styles.visible : ''}`}>Mas cuma mau bilang satu hal dari lubuk hati yang paling dalam.</p>
            
            <p className={`${styles.textItem} ${styles.highlight} ${stage >= 4 ? styles.visible : ''}`}>
              Terima kasih, sudah berjuang sejauh ini.
            </p>
            
            <p className={`${styles.textItem} ${stage >= 5 ? styles.visible : ''}`}>Terima kasih sudah memilih Mas untuk menjadi tempatmu pulang dan bersandar.</p>
            <p className={`${styles.textItem} ${stage >= 6 ? styles.visible : ''}`}>Apapun rintangan yang ada di depan nanti...</p>
            <p className={`${styles.textItem} ${styles.highlight} ${stage >= 7 ? styles.visible : ''}`}>
              Janji ya, kita akan selalu hadapi semuanya sama-sama?
            </p>
            
            <div className={`${styles.finale} ${stage >= 8 ? styles.visibleFinale : ''}`}>
              <div className={styles.beatingHeart}>❤️</div>
              <p>I love you. Selamat ulang tahun, duniaku.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
