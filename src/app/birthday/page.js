import FloatingHearts from '../../components/FloatingHearts';
import PhotoAlbum from '../../components/PhotoAlbum';
import ReasonsToLove from '../../components/ReasonsToLove';
import LoveTimeline from '../../components/LoveTimeline';
import OpenWhen from '../../components/OpenWhen';
import LoveCoupons from '../../components/LoveCoupons';
import BloomingRose from '../../components/BloomingRose';
import MemoryJar from '../../components/MemoryJar';
import LovePadlock from '../../components/LovePadlock';
import FlyingLantern from '../../components/FlyingLantern';
import LoveMeter from '../../components/LoveMeter';
import LoveLetter from '../../components/LoveLetter';
import FinalSurprise from '../../components/FinalSurprise';
import styles from './page.module.css';

export default function BirthdayPage() {
  return (
    <main className={styles.main}>
      <FloatingHearts />
      
      <div className={styles.content}>
        <div className={`glass-panel ${styles.greetingCard}`}>
          <h1 className={styles.title}>Selamat Ulang Tahun, Adik Tersayang!</h1>
          
          <div className={styles.message}>
            <p>
              Hari ini adalah hari yang sangat spesial. Bukan hanya untuk Adik, tapi juga untuk Mas, 
              karena di hari inilah seseorang yang sangat berarti bagi Mas dilahirkan ke dunia.
            </p>
            <p>
              Terima kasih sudah menjadi bagian terindah dalam hidup Mas. 
              Semoga di umur Adik yang baru ini, Adik selalu diberikan kebahagiaan, 
              kesehatan, dan semua impian Adik dapat terwujud.
            </p>
            <p>
              Mas akan selalu ada di sini, mendukung Adik dan mencintai Adik di setiap langkah Adik.
            </p>
            <p className={styles.signature}>With all my love, <br/> Vikar Maulana Arrisyad ❤️</p>
          </div>
        </div>

        <PhotoAlbum />
        
        <ReasonsToLove />

        <LoveTimeline />

        <OpenWhen />

        <BloomingRose />

        <MemoryJar />

        <LovePadlock />

        <FlyingLantern />

        <LoveCoupons />

        <LoveMeter />

        <div className={`glass-panel ${styles.promiseCard}`}>
          <h2 className={styles.promiseTitle}>Dari Hati Mas Untuk Adik 💍</h2>
          <p className={styles.promiseText}>
            "Mas akan selalu berusaha menjadi alasan Adik tersenyum setiap harinya. 
            Mas akan terus menggenggam tangan Adik di saat senang maupun susah, mendengarkan segala keluh kesah Adik, 
            dan mencintai Adik dengan cara yang paling sederhana namun paling tulus yang Mas bisa."
          </p>
        </div>

        <LoveLetter />

        <FinalSurprise />
      </div>
    </main>
  );
}
