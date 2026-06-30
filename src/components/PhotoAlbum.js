"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './PhotoAlbum.module.css';

export default function PhotoAlbum() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // We use placeholder images from Unsplash with romantic themes
  const photos = [
    { src: '/foto/foto1.jpeg', alt: 'Kenangan Indah 1' },
    { src: '/foto/foto2.jpeg', alt: 'Momen Spesial 2' },
    { src: '/foto/foto3.jpeg', alt: 'Bersama Selalu 3' },
    { src: '/foto/foto4.jpeg', alt: 'Cerita Kita 4' },
    { src: '/foto/foto5.jpeg', alt: 'Tawa dan Cinta 5' },
    { src: '/foto/foto6.jpeg', alt: 'Hingga Nanti 6' },
  ];

  return (
    <div className={styles.albumContainer}>
      <h2 className={styles.title}>Galeri Kenangan Kita</h2>
      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className={styles.photoWrapper} 
            style={{animationDelay: `${index * 0.15}s`}}
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image 
              src={photo.src} 
              alt={photo.alt} 
              width={300} 
              height={300} 
              className={styles.image}
              unoptimized
            />
            <div className={styles.overlay}>
              <span>{photo.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className={styles.lightbox} onClick={() => setSelectedPhoto(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedPhoto(null)}>✕</button>
            <Image 
              src={selectedPhoto.src} 
              alt={selectedPhoto.alt} 
              width={800} 
              height={800} 
              className={styles.lightboxImage}
              unoptimized
            />
            <p className={styles.lightboxCaption}>{selectedPhoto.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
