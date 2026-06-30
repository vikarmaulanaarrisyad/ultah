import FloatingHearts from '../../components/FloatingHearts';
import PhotoAlbum from '../../components/PhotoAlbum';
import styles from './page.module.css';

export default function BirthdayPage() {
  return (
    <main className={styles.main}>
      <FloatingHearts />
      
      <div className={styles.content}>
        <div className={`glass-panel ${styles.greetingCard}`}>
          <h1 className={styles.title}>Selamat Ulang Tahun, Sayang!</h1>
          
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
            <p className={styles.signature}>With all my love, <br/> Mas ❤️</p>
          </div>
        </div>

        <PhotoAlbum />
      </div>
    </main>
  );
}
