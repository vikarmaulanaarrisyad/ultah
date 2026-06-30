"use client";
import Image from 'next/image';
import styles from './PhotoAlbum.module.css';

export default function PhotoAlbum() {
  // We use placeholder images from Unsplash with romantic themes
  const photos = [
    { src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop', alt: 'Romantic Moments' },
    { src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop', alt: 'Beautiful Memories' },
    { src: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=600&auto=format&fit=crop', alt: 'Together Forever' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop', alt: 'Love and Joy' },
    { src: 'https://images.unsplash.com/photo-1621252171044-6330ce1c8d55?q=80&w=600&auto=format&fit=crop', alt: 'Candlelight' },
    { src: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=600&auto=format&fit=crop', alt: 'Sunset Love' },
  ];

  return (
    <div className={styles.albumContainer}>
      <h2 className={styles.title}>Galeri Kenangan Kita</h2>
      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <div key={index} className={styles.photoWrapper} style={{animationDelay: `${index * 0.15}s`}}>
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
    </div>
  );
}
