"use client";
import { useState } from 'react';
import styles from './Storybook.module.css';

const pages = [
  {
    title: "Bab 1: Skenario Semesta 🌌",
    content: "Di antara miliaran manusia dan jutaan kemungkinan di bumi, semesta menyusun skenario terindahnya. Awalnya, kita hanyalah dua orang asing yang berjalan di jalur masing-masing. Namun takdir memiliki rencananya sendiri, mempertemukan kita di waktu yang paling tepat."
  },
  {
    title: "Bab 2: Jatuh Cinta Pada Hal Kecil 🍂",
    content: "Mas mulai menyadari ada yang berbeda. Bukan karena hal-hal besar, melainkan dari hal-hal kecil. Caramu tersenyum, caramu bercerita tentang harimu, tawamu yang renyah... semua itu pelan-pelan menyusup dan menetap di hati Mas, membuat Mas selalu ingin melihatnya lagi dan lagi."
  },
  {
    title: "Bab 3: Definisi 'Pulang' 🏡",
    content: "Bersamamu, Mas belajar bahwa 'rumah' bukanlah sekadar bangunan pelindung. Rumah adalah kamu. Tempat di mana Mas bisa merebahkan segala lelah, tempat di mana Mas merasa diterima seutuhnya. Di dekatmu, semua terasa tenang dan nyaman."
  },
  {
    title: "Bab 4: Lembaran Kosong Kita 📖",
    content: "Buku ini adalah tentang kita, tapi ceritanya belum selesai. Masih banyak lembaran kosong di depan sana. Mas berharap, kita akan terus mengisi halaman-halaman berikutnya bersama-sama. Tertawa bersama, tumbuh bersama, dan menua bersama. Selamat ulang tahun, Adik Tersayang."
  }
];

export default function Storybook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const turnPage = (direction) => {
    if (isFlipping) return;
    
    if (direction === 'next' && currentPage < pages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 400); // matches CSS transition
    } else if (direction === 'prev' && currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Buku Cerita Kita 📖</h2>
      <p className={styles.subtitle}>Sebuah dongeng nyata yang ditulis oleh semesta, khusus untuk kita.</p>

      <div className={styles.bookWrapper}>
        <div className={`${styles.bookPage} ${isFlipping ? styles.flipping : ''}`}>
          <div className={styles.pageContent}>
            <span className={styles.pageNumber}>Halaman {currentPage + 1} dari {pages.length}</span>
            <h3 className={styles.chapterTitle}>{pages[currentPage].title}</h3>
            <div className={styles.divider}></div>
            <p className={styles.chapterText}>{pages[currentPage].content}</p>
          </div>
        </div>

        <div className={styles.controls}>
          <button 
            className={`${styles.navBtn} ${currentPage === 0 ? styles.disabled : ''}`}
            onClick={() => turnPage('prev')}
            disabled={currentPage === 0 || isFlipping}
          >
            ← Sebelumnya
          </button>
          
          <button 
            className={`${styles.navBtn} ${currentPage === pages.length - 1 ? styles.disabled : ''}`}
            onClick={() => turnPage('next')}
            disabled={currentPage === pages.length - 1 || isFlipping}
          >
            Selanjutnya →
          </button>
        </div>
      </div>
    </div>
  );
}
