"use client";
import { useEffect, useState } from 'react';
import styles from './RosePetals.module.css';

export default function RosePetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate petals with random properties
    const newPetals = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 20,
      animationDelay: Math.random() * 15,
      size: 15 + Math.random() * 15,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className={styles.petalContainer}>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={styles.petal}
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          {/* Simple Rose Petal SVG */}
          <svg viewBox="0 0 512 512" fill="var(--primary-color)">
            <path d="M256,0C150,50,0,150,0,300c0,117,100,212,256,212s256-95,256-212C512,150,362,50,256,0z" opacity="0.7"/>
          </svg>
        </div>
      ))}
    </div>
  );
}
