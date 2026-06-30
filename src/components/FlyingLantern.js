"use client";
import { useState } from 'react';
import styles from './FlyingLantern.module.css';

export default function FlyingLantern() {
  const [wish, setWish] = useState('');
  const [lanterns, setLanterns] = useState([]);

  const handleLaunch = async () => {
    if (wish.trim() === '') return;
    
    // Simpan teks harapan sebelum dikosongkan
    const currentWish = wish;
    
    const newLantern = {
      id: Date.now(),
      text: wish,
      leftOffset: Math.random() * 60 + 20, // 20% to 80% horizontal position
    };
    
    setLanterns([...lanterns, newLantern]);
    setWish('');
    
    // Kirim pesan secara rahasia ke Email via FormSubmit AJAX
    try {
      await fetch("https://formsubmit.co/ajax/vikarmaulana2905@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "✨ Harapan Ulang Tahun Emi (Lentera)",
            Harapan_Emi: currentWish
        })
      });
    } catch (error) {
      console.error("Gagal mengirim email", error);
    }

    // Cleanup lantern after animation finishes (10s)
    setTimeout(() => {
      setLanterns(prev => prev.filter(l => l.id !== newLantern.id));
    }, 10000);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Lentera Harapan Kita 🏮</h2>
      <p className={styles.subtitle}>
        Tulis harapan Adik di ulang tahun ini, dan mari kita terbangkan ke langit bersama-sama.
      </p>

      <div className={styles.skyArea}>
        {lanterns.map(lantern => (
          <div 
            key={lantern.id} 
            className={styles.lantern} 
            style={{ left: `${lantern.leftOffset}%` }}
          >
            <div className={styles.lanternBody}></div>
            <div className={styles.lanternFlame}></div>
            <div className={styles.lanternLight}></div>
            <div className={styles.lanternText}>{lantern.text}</div>
          </div>
        ))}

        <div className={styles.interactionArea}>
          <textarea 
            className={styles.wishInput}
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            placeholder="Tulis harapan Adik di sini..."
            maxLength={100}
          />
          <button 
            className={`${styles.launchBtn} ${wish.trim() === '' ? styles.disabled : ''}`} 
            onClick={handleLaunch}
            disabled={wish.trim() === ''}
          >
            Terbangkan Lenteranya ✨
          </button>
        </div>
      </div>
      
      {lanterns.length > 0 && (
        <p className={styles.successMessage}>
          Harapan Adik sudah mengudara. Alam semesta sedang mendengarkannya, dan Mas akan selalu mengaminkannya. ❤️
        </p>
      )}
    </div>
  );
}
