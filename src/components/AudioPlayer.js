"use client";
import { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.css';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Attempt to auto-play (browsers often block this, so the button is needed)
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set volume to 50%
    }
  }, []);

  return (
    <div className={styles.audioContainer} onClick={togglePlay}>
      <audio 
        ref={audioRef} 
        loop 
        // A beautiful romantic piano instrumental (Royalty Free placeholder from Pixabay)
        src="https://cdn.pixabay.com/download/audio/2022/02/07/audio_2d66f6424e.mp3?filename=romantic-piano-10147.mp3" 
      />
      <div className={`${styles.musicButton} ${isPlaying ? styles.playing : ''}`}>
        {isPlaying ? '⏸️' : '🎵'}
      </div>
      {!isPlaying && (
        <span className={styles.tooltip}>Putar Musik Biar Baper</span>
      )}
    </div>
  );
}
