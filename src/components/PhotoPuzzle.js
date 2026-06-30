"use client";
import { useState, useEffect } from 'react';
import styles from './PhotoPuzzle.module.css';

export default function PhotoPuzzle() {
  const size = 3; // 3x3 grid
  const numTiles = size * size;
  
  const [tiles, setTiles] = useState([]);
  const [selectedTile, setSelectedTile] = useState(null);
  const [isSolved, setIsSolved] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  // Initialize ordered tiles for preview
  useEffect(() => {
    const initialTiles = Array.from({ length: numTiles }, (_, i) => ({
      id: i,
      correctPos: i,
      currentPos: i,
    }));
    setTiles(initialTiles);
  }, [numTiles]);

  const startGame = () => {
    let newTiles = Array.from({ length: numTiles }, (_, i) => ({
      id: i,
      correctPos: i,
      currentPos: i,
    }));
    
    // Shuffle the currentPos
    let shuffledPositions = [...Array(numTiles).keys()];
    for (let i = shuffledPositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPositions[i], shuffledPositions[j]] = [shuffledPositions[j], shuffledPositions[i]];
    }
    
    // Assign shuffled positions
    newTiles.forEach((tile, index) => {
      tile.currentPos = shuffledPositions[index];
    });

    setTiles(newTiles);
    setIsStarted(true);
    setIsSolved(false);
    setSelectedTile(null);
  };

  const handleTileClick = (clickedTile) => {
    if (!isStarted || isSolved) return;
    
    if (selectedTile === null) {
      setSelectedTile(clickedTile.id);
    } else {
      // If clicking the same tile, deselect
      if (selectedTile === clickedTile.id) {
        setSelectedTile(null);
        return;
      }

      // Swap logic
      const selectedTileObj = tiles.find(t => t.id === selectedTile);
      
      const newTiles = tiles.map(t => {
        if (t.id === selectedTile) return { ...t, currentPos: clickedTile.currentPos };
        if (t.id === clickedTile.id) return { ...t, currentPos: selectedTileObj.currentPos };
        return t;
      });
      
      setTiles(newTiles);
      setSelectedTile(null);
      
      // Check win condition
      if (newTiles.every(t => t.correctPos === t.currentPos)) {
        setIsSolved(true);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Potongan Hati Kita 🧩</h2>
      <p className={styles.subtitle}>
        {!isStarted 
          ? "Mari kita susun kembali kenangan kita. Tekan tombol di bawah untuk mengacak foto ini." 
          : isSolved 
            ? "Yeay! Berhasil menyusunnya!"
            : "Ketuk dua kepingan foto secara bergantian untuk menukar posisinya."}
      </p>

      <div className={`${styles.boardWrapper} ${isSolved ? styles.solvedGlow : ''}`}>
        <div className={styles.puzzleBoard}>
          {Array.from({ length: numTiles }).map((_, index) => {
            const tile = tiles.find(t => t.currentPos === index);
            if (!tile) return null; // safety check
            
            const col = tile.correctPos % size;
            const row = Math.floor(tile.correctPos / size);
            
            return (
              <div 
                key={tile.id}
                className={`${styles.tile} ${selectedTile === tile.id ? styles.selected : ''} ${isSolved ? styles.noBorder : ''}`}
                onClick={() => handleTileClick(tile)}
                style={{
                  backgroundPosition: `${col * 50}% ${row * 50}%`
                }}
              >
                {/* Visual feedback if selected */}
                {selectedTile === tile.id && <div className={styles.selectionOverlay}></div>}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.controls}>
        {!isStarted ? (
          <button className={styles.playBtn} onClick={startGame}>Acak Foto & Mulai Main</button>
        ) : isSolved ? (
          <div className={styles.successMessage}>
            <h3>Sempurna! ✨</h3>
            <p>Sama seperti puzzle ini, sejauh apapun kita terpisah atau diacak oleh keadaan, pada akhirnya kita akan selalu menyatu dan melengkapi satu sama lain. ❤️</p>
            <button className={styles.replayBtn} onClick={startGame}>Main Lagi</button>
          </div>
        ) : (
          <button className={styles.giveUpBtn} onClick={() => setIsStarted(false)}>Nyerah deh</button>
        )}
      </div>
      
      <p className={styles.devNote}>
        *Psst Mas Vikar: Nanti ganti fotonya di file PhotoPuzzle.module.css ya!
      </p>
    </div>
  );
}
