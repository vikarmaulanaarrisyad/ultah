"use client";
import { useState } from 'react';
import styles from './LovePlaylist.module.css';

export default function LovePlaylist() {
  const [activeTrack, setActiveTrack] = useState(0);

  const playlist = [
    {
      title: "Penjaga Hati",
      artist: "Nadhif Basalamah",
      reason: "Karena sejak pertama kenal, Mas tahu Adiklah orang yang tepat untuk menjaga hati ini.",
      cover: "❤️"
    },
    {
      title: "Sempurna",
      artist: "Andra and The Backbone",
      reason: "Lagu ini mendeskripsikan persis apa yang Mas lihat setiap kali menatap mata Adik.",
      cover: "✨"
    },
    {
      title: "Nothing's Gonna Change My Love for You",
      artist: "George Benson",
      reason: "Sebuah janji bahwa sebesar apapun rintangannya, perasaan Mas ke Adik nggak akan pernah berubah.",
      cover: "♾️"
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Playlist Cinta Kita 🎶</h2>
      <p className={styles.subtitle}>
        Lagu-lagu yang liriknya selalu mengingatkan Mas tentang betapa beruntungnya memiliki Adik di hidup ini.
      </p>

      <div className={styles.playerWrapper}>
        <div className={styles.vinylContainer}>
          <div className={`${styles.vinyl} ${activeTrack !== null ? styles.spinning : ''}`}>
            <div className={styles.vinylCenter}>
              <span className={styles.vinylIcon}>{playlist[activeTrack].cover}</span>
            </div>
          </div>
          <div className={styles.tonearm}></div>
        </div>

        <div className={styles.trackList}>
          {playlist.map((track, index) => (
            <div 
              key={index} 
              className={`${styles.trackItem} ${activeTrack === index ? styles.active : ''}`}
              onClick={() => setActiveTrack(index)}
            >
              <div className={styles.trackInfo}>
                <div className={styles.trackTitle}>{track.title}</div>
                <div className={styles.trackArtist}>{track.artist}</div>
              </div>
              <div className={styles.playIcon}>
                {activeTrack === index ? '🎵' : '▶️'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.reasonCard}>
        <h3 className={styles.reasonTitle}>Kenapa lagu ini?</h3>
        <p className={styles.reasonText}>"{playlist[activeTrack].reason}"</p>
      </div>
    </div>
  );
}
