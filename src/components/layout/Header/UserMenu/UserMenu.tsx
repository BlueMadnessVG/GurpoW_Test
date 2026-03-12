import styles from "./UserMenu.module.css";
import { MdOutlineLanguage, MdOutlinePerson } from "react-icons/md";
import { motion } from "framer-motion";

function UserMenu() {
  return (
    <div className={styles.UserMenu__container}>
      <button
        type="button"
        aria-label="Change language"
        className={styles.UserMenu__button}
      >
        <MdOutlineLanguage className={styles.UserMenu__icon} />
      </button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        aria-label="Open account menu"
        className={`${styles.UserMenu__button} ${styles.UserMenu__icon_account}`}
      >
        <MdOutlinePerson className={styles.UserMenu__icon} />
      </motion.button>
    </div>
  );
}

export default UserMenu;
