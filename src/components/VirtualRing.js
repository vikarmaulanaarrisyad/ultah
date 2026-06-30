"use client";
import { useState } from 'react';
import styles from './VirtualRing.module.css';

export default function VirtualRing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Sebuah Janji Masa Depan 💍</h2>
      <p className={styles.subtitle}>
        Coba sentuh perlahan kotak beludru merah di bawah ini...
      </p>

      <div className={styles.ringScene} onClick={() => setIsOpen(true)}>
        <div className={`${styles.ringBox} ${isOpen ? styles.open : ''}`}>
          {/* Bagian tutup kotak */}
          <div className={styles.boxLid}></div>
          
          {/* Cincin yang bersinar dari dalam */}
          <div className={`${styles.theRing} ${isOpen ? styles.glowRing : ''}`}>
            💎
          </div>
          
          {/* Bagian bawah kotak */}
          <div className={styles.boxBase}></div>
        </div>
      </div>

      <div className={`${styles.messageArea} ${isOpen ? styles.showMsg : ''}`}>
        <p className={styles.promiseText}>
          "Mas mungkin belum bisa menyematkan cincin sungguhan di jari manismu hari ini. 
          Tapi biarkan cincin virtual ini menjadi simbol keseriusan dan komitmen Mas."
        </p>
        <h3 className={styles.highlightText}>
          Tunggu Mas ya, Adik sayang. <br/> One day, this will be real. ❤️
        </h3>
      </div>
    </div>
  );
}
