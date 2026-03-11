// components/UserMenu/UserMenu.tsx
import { motion, type Variants } from "framer-motion";
import UserMenuModal from "@/components/ui/UserMenuModal/UserMenuModal";
import { useModalContext } from "@/context/modal.context";
import styles from "./UserMenu.module.css";

function UserMenu() {
  const { state: isOpen, setState: setIsOpen } = useModalContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const lineVariants: Variants = {
    closed: (custom: number) => ({
      rotate: 0,
      y: custom === 0 ? -8 : custom === 2 ? 8 : 0,
      opacity: 1,
    }),
    open: (custom: number) => ({
      rotate: custom === 0 ? 45 : custom === 2 ? -45 : 0,
      y: 0,
      opacity: custom === 1 ? 0 : 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <>
      <motion.button
        className={styles.userMenuButton}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        whileHover="hover"
        whileTap="tap"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.span
          className={styles.hamburgerLine}
          variants={lineVariants}
          custom={0}
          initial={false}
        />

        <motion.span
          className={styles.hamburgerLine}
          variants={lineVariants}
          custom={1}
          initial={false}
        />

        <motion.span
          className={styles.hamburgerLine}
          variants={lineVariants}
          custom={2}
          initial={false}
        />
      </motion.button>

      <UserMenuModal />
    </>
  );
}

export default UserMenu;
