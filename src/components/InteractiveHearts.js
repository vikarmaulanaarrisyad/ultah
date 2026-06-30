"use client";
import { useEffect, useState } from 'react';
import styles from './InteractiveHearts.module.css';

export default function InteractiveHearts() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setClicks((prev) => [...prev, newClick]);

      // Remove the heart after animation ends (1s)
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={styles.container}>
      {clicks.map((click) => (
        <div
          key={click.id}
          className={styles.floatingHeart}
          style={{ left: click.x, top: click.y }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
