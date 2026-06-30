"use client";
import { useState } from 'react';
import styles from './ReasonsToLove.module.css';

export default function ReasonsToLove() {
  const reasons = [
    "Senyum Adik yang selalu bikin Mas semangat setiap pagi.",
    "Cara Adik tertawa lepas yang sangat menggemaskan.",
    "Perhatian-perhatian kecil Adik yang bikin Mas merasa sangat dicintai.",
    "Adik selalu tahu cara membuat suasana jadi lebih menyenangkan.",
    "Sifat penyayang Adik ke semua orang.",
    "Tatapan mata Adik yang bikin Mas selalu jatuh cinta lagi dan lagi.",
    "Cara Adik mendukung setiap mimpi dan langkah Mas.",
    "Adik adalah pendengar terbaik yang pernah Mas miliki.",
    "Adik selalu sabar menghadapi Mas.",
    "Karena Adik adalah Adik. Sederhana, tapi itu lebih dari cukup buat Mas."
  ];

  const [flipped, setFlipped] = useState(Array(10).fill(false));

  const toggleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>10 Alasan Mas Mencintai Adik</h2>
      <p className={styles.subtitle}>Sentuh kartunya untuk membuka rahasia...</p>
      
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className={`${styles.card} ${flipped[index] ? styles.flipped : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <span>Alasan #{index + 1}</span>
                <span className={styles.icon}>💖</span>
              </div>
              <div className={styles.cardBack}>
                <p>{reason}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
