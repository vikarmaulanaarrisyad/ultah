"use client";
import { useEffect, useState } from 'react';
import styles from './FloatingHearts.module.css';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate a fixed number of hearts on client-side to prevent hydration mismatch
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 20,
      animationDelay: Math.random() * 10,
      size: 10 + Math.random() * 20
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className={styles.heartsContainer}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={styles.heart}
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`
          }}
        >
          <svg viewBox="0 0 32 29.6" fill="var(--primary-color)">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
        </div>
      ))}
    </div>
  );
}
