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
          initial={false}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        <motion.span
          className={styles.hamburgerLine}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
        />
        
        <motion.span
          className={styles.hamburgerLine}
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