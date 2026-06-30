"use client";
import { useState } from 'react';
import styles from './OpenWhen.module.css';

export default function OpenWhen() {
  const [activeLetter, setActiveLetter] = useState(null);

  const letters = [
    {
      id: 1,
      title: "Buka saat Adik sedang rindu Mas...",
      icon: "🥺",
      message: "Mas juga rindu Adik kok! Jarak atau kesibukan mungkin kadang bikin kita nggak bisa terus bareng, tapi percayalah hati Mas selalu ada di dekat Adik. Langsung chat Mas sekarang ya! ❤️"
    },
    {
      id: 2,
      title: "Buka saat Adik sedang sedih...",
      icon: "😢",
      message: "Hei... Jangan sedih ya sayang. Mas tahu kadang dunia ini keras dan bikin capek. Tapi Adik harus ingat kalau Adik nggak sendirian. Mas selalu siap sedia jadi tempat bersandar dan pendengar setia buat semua keluh kesah Adik."
    },
    {
      id: 3,
      title: "Buka saat Adik butuh semangat...",
      icon: "💪",
      message: "Adik itu hebat! Mas selalu bangga sama semua usaha dan pencapaian Adik. Jangan pernah ragu sama diri sendiri ya. Tarik napas panjang, tersenyum, dan maju terus. Adik pasti bisa, dan Mas akan selalu mendukung dari belakang!"
    },
    {
      id: 4,
      title: "Buka saat Adik merasa insecure...",
      icon: "🪞",
      message: "Di mata Mas, Adik adalah wanita paling cantik dan sempurna dengan segala kelebihan maupun kekurangan yang Adik miliki. Tolong jangan pernah membandingkan dirimu dengan orang lain. You are more than enough, sayang."
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Surat Rahasia "Buka Saat..." 💌</h2>
      <p className={styles.subtitle}>
        Mas sudah menyiapkan beberapa surat rahasia. Buka sesuai dengan perasaan Adik saat ini ya!
      </p>

      <div className={styles.grid}>
        {letters.map((letter) => (
          <div key={letter.id} className={styles.envelopeCard} onClick={() => setActiveLetter(letter)}>
            <div className={styles.envelopeIcon}>{letter.icon}</div>
            <h3 className={styles.envelopeTitle}>{letter.title}</h3>
            <p className={styles.clickText}>Klik untuk membuka</p>
          </div>
        ))}
      </div>

      {activeLetter && (
        <div className={styles.modalOverlay} onClick={() => setActiveLetter(null)}>
          <div className={styles.letterModal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActiveLetter(null)}>✕</button>
            <div className={styles.iconLarge}>{activeLetter.icon}</div>
            <h3 className={styles.modalTitle}>{activeLetter.title}</h3>
            <p className={styles.modalMessage}>{activeLetter.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
