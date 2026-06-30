"use client";
import { useState } from 'react';
import styles from './BloomingRose.module.css';

export default function BloomingRose() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      emoji: "🌱",
      title: "Sebuah Bibit Cinta...",
      desc: "Tekan bibit ini untuk melihatnya tumbuh."
    },
    {
      emoji: "🌿",
      title: "Mulai Berakar Kuat...",
      desc: "Sama seperti perasaan Mas yang semakin dalam setiap harinya. Terus tekan ya..."
    },
    {
      emoji: "🥀",
      title: "Membentuk Kelopak Indah...",
      desc: "Menghadapi berbagai hal bersama, membuat ikatan kita semakin indah. Sekali lagi..."
    },
    {
      emoji: "🌹",
      title: "Mekar Sepenuhnya Untuk Adik Sayang!",
      desc: "Bunga ini melambangkan cinta Mas yang sudah mekar sempurna dan hanya dipersembahkan untuk Emi Fatikha seorang. ❤️"
    }
  ];

  const handleClick = () => {
    if (stage < stages.length - 1) {
      setStage(stage + 1);
    } else {
      // Optional: reset or do something else
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Satu Tangkai Bunga Untuk Adik 🌸</h2>
      <p className={styles.subtitle}>Mas punya sesuatu yang spesial, coba ketuk perlahan.</p>
      
      <div className={styles.roseWrapper} onClick={handleClick}>
        <div className={`${styles.emojiContainer} ${stage === 3 ? styles.bloom : ''}`} key={stage}>
          {stages[stage].emoji}
        </div>
        
        <div className={styles.textContainer} key={`text-${stage}`}>
          <h3 className={styles.stageTitle}>{stages[stage].title}</h3>
          <p className={styles.stageDesc}>{stages[stage].desc}</p>
        </div>

        {stage < 3 && (
          <div className={styles.pulseIndicator}>👆 Ketuk di sini</div>
        )}
      </div>
    </div>
  );
}
