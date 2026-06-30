"use client";
import styles from './LoveCoupons.module.css';

export default function LoveCoupons() {
  const coupons = [
    {
      title: "Kupon Traktiran",
      description: "Berlaku untuk 1x makan makanan kesukaan Adik Sayang sepuasnya tanpa batas!",
      icon: "🍝",
      color: "#ff758f"
    },
    {
      title: "Kupon Anti-Ngambek",
      description: "Kapanpun Adik Sayang lagi bete, tunjukkan kupon ini dan Mas janji bakal mendengarkan, nemenin, dan bikin Adik Sayang senyum lagi.",
      icon: "🥺",
      color: "#ff4d6d"
    },
    {
      title: "Kupon Pelukan",
      description: "Berlaku seumur hidup. Tukarkan kapan saja Adik Sayang butuh sandaran dan pelukan hangat.",
      icon: "🫂",
      color: "#c9184a"
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Hadiah Kecil Untuk Adik Sayang 🎟️</h2>
      <p className={styles.subtitle}>
        Selain doa dan cinta, Mas juga punya beberapa kupon spesial yang bisa Adik Sayang tukarkan kapan saja!
      </p>
      
      <div className={styles.couponWrapper}>
        {coupons.map((coupon, index) => (
          <div key={index} className={styles.couponCard} style={{ '--coupon-color': coupon.color }}>
            <div className={styles.couponLeft}>
              <span className={styles.icon}>{coupon.icon}</span>
            </div>
            <div className={styles.couponRight}>
              <h3 className={styles.couponTitle}>{coupon.title}</h3>
              <p className={styles.couponDesc}>{coupon.description}</p>
              <div className={styles.barcode}>||| | || ||| | | |||</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
