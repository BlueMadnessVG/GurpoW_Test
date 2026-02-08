// components/UserMenu/UserMenu.tsx
import { motion } from "framer-motion";
import UserMenuModal from "@/components/ui/UserMenuModal/UserMenuModal";
import { useModalContext } from "@/context/modal.context";
import styles from "./UserMenu.module.css";

function UserMenu() {
  const { state: isOpen, setState: setIsOpen } = useModalContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  const buttonVariants = {
    hover: { scale: 1.08 },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <motion.button
        className={styles.userMenuButton}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.span
          className={styles.hamburgerLine}
          variants={topLineVariants}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        <motion.span
          className={styles.hamburgerLine}
          variants={middleLineVariants}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
        />
        
        <motion.span
          className={styles.hamburgerLine}
          variants={bottomLineVariants}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.button>
      
      <UserMenuModal />
    </>
  );
}

export default UserMenu;