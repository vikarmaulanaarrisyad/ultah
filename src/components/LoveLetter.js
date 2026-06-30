"use client";
import { useState } from 'react';
import styles from './LoveLetter.module.css';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

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
              <p className={styles.salutation}>Teruntuk Emi Fatikha Sayang,</p>
              
              <div className={styles.letterBody}>
                <p>
                  Mungkin kata-kata ini tidak akan pernah cukup untuk menggambarkan
                  seberapa besar arti Adik buat Mas. Tapi lewat surat kecil ini, 
                  Mas ingin Adik tahu betapa bersyukurnya Mas memilikimu.
                </p>
                <p>
                  Setiap senyummu adalah semangatku. Setiap bahagiamu adalah tujuanku.
                  Di hari spesial ini, Mas berdoa semoga dunia selalu bersikap baik sama Adik.
                  Jangan pernah lelah untuk mengejar mimpimu, karena Mas akan selalu ada di belakangmu,
                  menjadi pendukung nomor satumu.
                </p>
                <p>
                  Selamat ulang tahun, cintaku. Mari kita ciptakan lebih banyak kenangan
                  indah bersama di tahun-tahun berikutnya. I love you, more than words can say.
                </p>
              </div>

              <p className={styles.closing}>
                Peluk hangat dari Mas,<br/>
                <strong>Vikar Maulana Arrisyad</strong> ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
