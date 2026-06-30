"use client";
import styles from './GoldenTicket.module.css';

export default function GoldenTicket() {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Tiket Perjalanan Masa Depan 🎫</h2>
      <p className={styles.subtitle}>Sebuah janji nyata untuk menemanimu mengarungi hari esok, apa pun yang terjadi.</p>

      <div className={styles.ticketWrapper}>
        <div className={styles.ticket}>
          
          <div className={styles.ticketLeft}>
            <div className={styles.ticketHeader}>
              <span>FIRST CLASS VIP</span>
              <span className={styles.flightNo}>FLIGHT: LOVE-2026</span>
            </div>
            
            <div className={styles.passengerRow}>
              <div className={styles.infoBlock}>
                <span className={styles.label}>PASSENGERS (2)</span>
                <span className={styles.value}>Adik Tersayang & Vikar Maulana</span>
              </div>
            </div>

            <div className={styles.routeRow}>
              <div className={styles.infoBlock}>
                <span className={styles.label}>FROM</span>
                <span className={styles.city}>HARI INI</span>
              </div>
              <div className={styles.planeIcon}>✈️</div>
              <div className={styles.infoBlock}>
                <span className={styles.label}>TO</span>
                <span className={styles.city}>BAHAGIA SELAMANYA</span>
              </div>
            </div>

            <div className={styles.detailsRow}>
              <div className={styles.infoBlock}>
                <span className={styles.label}>DATE</span>
                <span className={styles.valueSmall}>Setiap Hari</span>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.label}>TIME</span>
                <span className={styles.valueSmall}>Sepanjang Waktu</span>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.label}>SEAT</span>
                <span className={styles.valueSmall}>Berdampingan</span>
              </div>
            </div>
          </div>

          <div className={styles.ticketDivider}>
            <div className={styles.holeTop}></div>
            <div className={styles.holeBottom}></div>
          </div>

          <div className={styles.ticketRight}>
            <div className={styles.barcodeBox}>
              <div className={styles.barcode}></div>
              <span className={styles.barcodeText}>VALID FOR A LIFETIME</span>
            </div>
            <div className={styles.stamp}>
              APPROVED
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
