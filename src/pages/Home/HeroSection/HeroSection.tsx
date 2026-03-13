import { useRef } from "react";
import styles from "./HeroSection.module.css";
import heroVideo from "@/assets/videos/videoplayback.webm";
import { useInView, motion, type Variants } from "motion/react";

function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

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

      <motion.div
        ref={contentRef}
        className={styles.HeroSection__content}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <h1 className={styles.HeroSection__title}>
            Encuentra el Fiat perfecto
          </h1>
          <p className={styles.HeroSection__subtitle}>
            Diseño italiano, potencia moderna y tecnología pensada para cada
            camino.
          </p>
        </motion.div>

        <motion.div
          className={styles.HeroSection__actions}
          variants={itemVariants}
        >
          <button className={styles.HeroSection__primaryBtn}>
            Cotizar ahora
          </button>
          <button className={styles.HeroSection__secondaryBtn}>
            Ver modelos
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
