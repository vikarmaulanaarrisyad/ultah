"use client";
import { useState } from 'react';
import styles from './MemoryJar.module.css';

export default function MemoryJar() {
  const [currentNote, setCurrentNote] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const notes = [
    "Senyum Adik adalah hal terindah yang pernah Mas lihat.",
    "Jangan pernah lupa kalau Adik sangat berharga bagi Mas.",
    "Masih ingat pertama kali kita ketemu? Dari saat itu Mas tahu Adik spesial.",
    "Hari ini capek ya? Tarik napas dalam-dalam, Mas selalu ada di sini buat Adik.",
    "Adik itu jauh lebih kuat dari yang Adik bayangkan. Mas bangga banget!",
    "Bahkan di hari yang buruk sekalipun, Adik tetap jadi yang terbaik untuk Mas.",
    "Coba lihat ke cermin sekarang, ada wanita paling cantik sedunia di sana.",
    "Nggak ada yang bisa menggantikan posisi Adik di hati Mas.",
    "Terima kasih sudah jadi pendengar yang baik buat Mas.",
    "Setiap kali ngobrol sama Adik, beban rasanya hilang semua.",
    "Cinta Mas ke Adik bertambah setiap detiknya.",
    "Adik adalah definisi sempurna di mata Mas.",
    "Apapun masalahnya, kita hadapi berdua ya? Jangan sendirian.",
    "You are my today and all of my tomorrows."
  ];

  const drawNote = () => {
    if (isDrawing) return;
    setIsDrawing(true);
    setCurrentNote(null);

    // Simulate drawing time
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * notes.length);
      setCurrentNote(notes[randomIndex]);
      setIsDrawing(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Toples Senyum Adik 🫙</h2>
      <p className={styles.subtitle}>
        Di dalam toples virtual ini ada ratusan gulungan kertas kecil dari Mas.
        Ambil satu setiap kali Adik merasa sedih, lelah, atau merindukan Mas!
      </p>

      <div className={styles.jarContainer} onClick={drawNote}>
        <div className={`${styles.jar} ${isDrawing ? styles.shaking : ''}`}>
          <div className={styles.lid}></div>
          <div className={styles.jarBody}>
            {/* Visual representation of folded papers */}
            <div className={styles.paper1}></div>
            <div className={styles.paper2}></div>
            <div className={styles.paper3}></div>
            <div className={styles.paper4}></div>
            <div className={styles.paper5}></div>
            <div className={styles.jarLabel}>Smiles<br />Inside</div>
          </div>
        </div>
        <p className={styles.hintText}>Ketuk toples untuk mengambil kertas!</p>
      </div>

      <div className={styles.noteArea}>
        {isDrawing && <p className={styles.loadingText}>Mas sedang memilihkan pesan untuk Adik...</p>}

        {currentNote && !isDrawing && (
          <div className={styles.drawnNote}>
            <p className={styles.noteText}>"{currentNote}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
