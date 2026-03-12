import styles from "./HeroSection.module.css";
import heroVideo from "@/assets/videos/videoplayback.webm";

function HeroSection() {
  return (
    <div className={styles.HeroSection__container}>
      <video
        className={styles.HeroSection__video}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/webm" />
      </video>

      <div className={styles.HeroSection__overlay} />

      <div className={styles.HeroSection__content}>
        <h1>Encuentra el Fiat perfecto</h1>
        <p>Diseño, potencia y tecnología para cada camino.</p>

        <button className={styles.cta}>Cotizar ahora</button>
      </div>
    </div>
  );
}

export default HeroSection;
