import { Modal } from "@/components/ui/Modal/Modal";
import { useModalContext } from "@/context/modal.context";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import styles from "./UserMenuModal.module.css";

function UserMenuModal() {
  const { setState: setIsOpen } = useModalContext();

  const handleClose = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { id: 1, path: "/profile", label: "My Profile" },
    { id: 2, path: "/settings", label: "Settings" },
    { id: 3, path: "/orders", label: "My Orders" },
    { id: 4, path: "/favorites", label: "Favorites" },
    { id: 5, path: "/help", label: "Help Center" },
    { id: 6, path: "/logout", label: "Sign Out", isButton: true },
  ];

  return (
    <Modal>
      <motion.div
        className={styles.userMenuModal__Container}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_e, info) => {
          if (info.offset.x < -100) {
            handleClose();
          }
        }}
      >
        <div className={styles.userMenuModal__Header}>
          <div className={styles.userMenuModal__UserInfo}>
            <div className={styles.userMenuModal__Avatar}>U</div>
            <div>
              <h3 className={styles.userMenuModal__UserName}>John Doe</h3>
              <p className={styles.userMenuModal__UserEmail}>
                john@example.com
              </p>
            </div>
          </div>
          <button
            className={styles.userMenuModal__CloseButton}
            onClick={handleClose}
            type="button"
            aria-label="Close menu"
          >
            x
          </button>
        </div>

        <nav className={styles.userMenuModal__Nav}>
          <ul className={styles.userMenuModal__NavList}>
            {menuItems.map((item) => (
              <li key={item.id} className={styles.userMenuModal__NavItem}>
                {item.isButton ? (
                  <button
                    className={styles.userMenuModal__Button}
                    onClick={() => {
                      console.log("Sign out clicked");
                      handleClose();
                    }}
                  >
                    <span className={styles.userMenuModal__Label}>
                      {item.label}
                    </span>
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${styles.userMenuModal__Link} ${
                        isActive ? styles.userMenuModal__LinkActive : ""
                      }`
                    }
                    onClick={handleClose}
                  >
                    <span className={styles.userMenuModal__Label}>
                      {item.label}
                    </span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.userMenuModal__Footer}>
        </div>
      </motion.div>
    </Modal>
  );
}

export default UserMenuModal;
