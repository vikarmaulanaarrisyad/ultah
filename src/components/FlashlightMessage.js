"use client";
import { useRef, useState } from 'react';
import styles from './FlashlightMessage.module.css';

export default function FlashlightMessage() {
  const wrapperRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleMove = (e) => {
    if (!wrapperRef.current) return;
    
    // Get mouse/touch coordinates relative to the wrapper
    const rect = wrapperRef.current.getBoundingClientRect();
    
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    wrapperRef.current.style.setProperty('--x', `${x}px`);
    wrapperRef.current.style.setProperty('--y', `${y}px`);
    
    if (!isActive) setIsActive(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Pesan Rahasia di Ruang Gelap 🔦</h2>
      <p className={styles.subtitle}>Gunakan jarimu untuk menyinari dan mencari tahu pesan tersembunyi ini...</p>

      <div 
        className={styles.flashlightWrapper} 
        ref={wrapperRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onTouchStart={handleMove}
      >
        <div className={styles.secretText}>
          <p>
            Bahkan di saat-saat paling gelap sekalipun,<br/>
            ketika dunia terasa berat dan membingungkan,<br/>
            kamu tidak perlu takut sendirian.
          </p>
          <p style={{ marginTop: '1rem', color: '#ff4d6d' }}>
            Karena Mas akan selalu ada di sini,<br/>
            menjadi cahaya yang selalu menemukanmu. ❤️
          </p>
        </div>

        <div className={`${styles.darkMask} ${isActive ? styles.active : ''}`}></div>

        <div className={`${styles.instruction} ${isActive ? styles.hidden : ''}`}>
          [ Gesek layar di area hitam ini ]
        </div>
      </div>
    </div>
  );
}
