import styles from './LoveTimeline.module.css';

export default function LoveTimeline() {
  const events = [
    {
      date: "Pertama Bertemu",
      title: "Hari Di Mana Semuanya Berawal",
      description: "Saat pertama kali Mas melihat senyum Adik, Mas tahu ada sesuatu yang spesial.",
      align: "left"
    },
    {
      date: "Jadian",
      title: "Hari Kita Menjadi Kita",
      description: "Hari di mana Adik menerima Mas untuk menjadi bagian dari perjalanan hidup Adik.",
      align: "right"
    },
    {
      date: "Momen Tak Terlupakan",
      title: "Tawa dan Tangis Bersama",
      description: "Melewati berbagai hal bersama, membuat Mas semakin yakin kalau Adik adalah orang yang tepat.",
      align: "left"
    },
    {
      date: "Hari Ini",
      title: "Ulang Tahun Adik",
      description: "Merayakan hari kelahiran bidadari kesayangan Mas. Semoga kita selalu bersama.",
      align: "right"
    }
  ];

  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.mainTitle}>Perjalanan Kita</h2>
      <div className={styles.timeline}>
        {events.map((evt, index) => (
          <div key={index} className={`${styles.timelineItem} ${styles[evt.align]}`}>
            <div className={styles.timelineContent}>
              <span className={styles.date}>{evt.date}</span>
              <h3 className={styles.title}>{evt.title}</h3>
              <p className={styles.description}>{evt.description}</p>
            </div>
            <div className={styles.dot}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
