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
              Hari ini adalah hari yang sangat spesial. Bukan hanya untukmu, tapi juga untukku, 
              karena di hari inilah seseorang yang sangat berarti bagiku dilahirkan ke dunia.
            </p>
            <p>
              Terima kasih sudah menjadi bagian terindah dalam hidupku. 
              Semoga di umurmu yang baru ini, kamu selalu diberikan kebahagiaan, 
              kesehatan, dan semua impianmu dapat terwujud.
            </p>
            <p>
              Aku akan selalu ada di sini, mendukungmu dan mencintaimu di setiap langkahmu.
            </p>
            <p className={styles.signature}>With all my love, <br/> Your Love ❤️</p>
          </div>
        </div>

        <PhotoAlbum />
      </div>
    </main>
  );
}
