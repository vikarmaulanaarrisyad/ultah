"use client";
import { useState } from 'react';
import styles from './SunriseSlider.module.css';

export default function SunriseSlider() {
  const [level, setLevel] = useState(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Kaulah Matahariku 🌅</h2>
      <p className={styles.subtitle}>Geser tuas di bawah ini perlahan ke arah kanan...</p>

      <div className={styles.skyWrapper}>
        {/* Latar Belakang Gelap (Malam) */}
        <div className={styles.nightSky}></div>
        
        {/* Latar Belakang Terang (Matahari Terbit) */}
        <div 
          className={styles.sunriseSky} 
          style={{ opacity: level / 100 }}
        ></div>
        
        {/* Matahari */}
        <div 
          className={styles.sun} 
          style={{ 
            bottom: `${(level * 0.7) - 20}%`,
            opacity: level > 10 ? (level / 100) + 0.2 : 0,
            transform: `scale(${1 + (level/200)})`
          }}
        ></div>
        
        {/* Pesan Rahasia */}
        <div 
          className={styles.message} 
          style={{ 
            opacity: level > 50 ? (level - 50) / 50 : 0,
            transform: `translate(-50%, ${level > 50 ? '-50%' : '-40%'})`
          }}
        >
          Sama seperti matahari terbit ini,<br/>
          kamu adalah cahaya yang selalu mengusir<br/>
          kegelapan di hidup Mas. ❤️
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <span className={styles.icon}>🌑</span>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={level} 
          onChange={(e) => setLevel(e.target.value)}
          className={styles.slider}
        />
        <span className={styles.icon}>☀️</span>
      </div>
    </div>
  );
}
