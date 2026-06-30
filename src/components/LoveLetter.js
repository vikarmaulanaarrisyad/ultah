"use client";
import { useState, useEffect } from 'react';
import styles from './LoveLetter.module.css';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  
  const fullText = `Mungkin kata-kata ini tidak akan pernah cukup untuk menggambarkan seberapa besar arti Adik buat Mas. Tapi lewat surat kecil ini, Mas ingin Adik tahu betapa bersyukurnya Mas memilikimu.

Setiap senyummu adalah semangatku. Setiap bahagiamu adalah tujuanku. Di hari spesial ini, Mas berdoa semoga dunia selalu bersikap baik sama Adik. Jangan pernah lelah untuk mengejar mimpimu, karena Mas akan selalu ada di belakangmu, menjadi pendukung nomor satumu.

Selamat ulang tahun, cintaku. Mari kita ciptakan lebih banyak kenangan indah bersama di tahun-tahun berikutnya. I love you, more than words can say.`;

  useEffect(() => {
    if (isOpen) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 30); // 30ms per character
      return () => clearInterval(interval);
    } else {
      setDisplayedText(""); // Reset when closed
    }
  }, [isOpen, fullText]);

  return (
    <div className={styles.container}>
      <button 
        className={styles.envelopeButton} 
        onClick={() => setIsOpen(true)}
      >
        <span className={styles.envelopeIcon}>💌</span>
        <span className={styles.buttonText}>Ada Pesan Rahasia untuk Adik...</span>
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div 
            className={styles.letterContainer} 
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
            <div className={styles.paper}>
              <p className={styles.salutation}>Teruntuk Adik Tersayang,</p>
              
              <div className={styles.letterBody}>
                {displayedText.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Show closing only when typing is nearly done */}
              <div style={{ opacity: displayedText.length > fullText.length - 10 ? 1 : 0, transition: 'opacity 1s ease-in' }}>
                <p className={styles.closing}>
                  Peluk hangat dari Mas,<br/>
                  <strong>Vikar Maulana Arrisyad</strong> ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
