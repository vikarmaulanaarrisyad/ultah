"use client";
import { useState } from 'react';
import styles from './DestinyCalculator.module.css';

export default function DestinyCalculator() {
  const [formData, setFormData] = useState({
    name1: 'Vikar Maulana',
    date1: '',
    name2: 'Emi Fatikha',
    date2: ''
  });
  
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!formData.date1 || !formData.date2) {
      alert("Isi tanggal lahirnya dulu ya Adik sayang...");
      return;
    }

    setIsCalculating(true);
    setResult(null);

    // Fake calculation delay for dramatic effect
    setTimeout(() => {
      setIsCalculating(false);
      setResult({
        score: "99.99%",
        title: "Pasangan Sejiwa (Soulmates) 🔗",
        description: `Berdasarkan perhitungan numerologi alam semesta, kombinasi energi dari ${formData.name1} dan ${formData.name2} menghasilkan resonansi frekuensi yang sangat langka. Angka kalian menunjukkan bahwa kalian tidak bertemu karena kebetulan, melainkan karena takdir yang sudah ditulis rapi sejak lama. Mas adalah tempat berlindung, dan Adik adalah rumahnya. Kalian adalah dua kepingan teka-teki yang diciptakan khusus untuk saling melengkapi selamanya.`
      });
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Kalkulator Takdir Alam Semesta 🔮</h2>
      <p className={styles.subtitle}>
        Mari kita buktikan secara "ilmiah" mengapa kita memang ditakdirkan bersama.
      </p>

      <div className={styles.calculatorCard}>
        <form onSubmit={handleCalculate} className={styles.formArea}>
          <div className={styles.inputGroup}>
            <div className={styles.personCard}>
              <h3>🧔🏻‍♂️ Pihak Pria</h3>
              <input 
                type="text" 
                value={formData.name1} 
                onChange={e => setFormData({...formData, name1: e.target.value})}
                className={styles.inputField}
              />
              <label>Tanggal Lahir</label>
              <input 
                type="date" 
                value={formData.date1}
                onChange={e => setFormData({...formData, date1: e.target.value})}
                className={styles.inputField}
              />
            </div>

            <div className={styles.heartConnector}>
              <div className={styles.pulseHeart}>💖</div>
            </div>

            <div className={styles.personCard}>
              <h3>👩🏻‍🦰 Pihak Wanita</h3>
              <input 
                type="text" 
                value={formData.name2} 
                onChange={e => setFormData({...formData, name2: e.target.value})}
                className={styles.inputField}
              />
              <label>Tanggal Lahir</label>
              <input 
                type="date" 
                value={formData.date2}
                onChange={e => setFormData({...formData, date2: e.target.value})}
                className={styles.inputField}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={`${styles.calcBtn} ${isCalculating ? styles.disabled : ''}`}
            disabled={isCalculating}
          >
            {isCalculating ? "Membaca Bintang... ✨" : "Hitung Takdir Kita 🔍"}
          </button>
        </form>

        {isCalculating && (
          <div className={styles.loadingArea}>
            <div className={styles.spinner}></div>
            <p>Menganalisis pergerakan planet...</p>
            <p>Menghitung garis waktu kosmik...</p>
          </div>
        )}

        {result && !isCalculating && (
          <div className={styles.resultArea}>
            <div className={styles.scoreCircle}>
              <span>{result.score}</span>
            </div>
            <h3 className={styles.resultTitle}>{result.title}</h3>
            <p className={styles.resultDesc}>{result.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
