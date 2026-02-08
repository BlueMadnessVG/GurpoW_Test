import { NavLink as RouterNavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

function NavLink({
  to,
  children,
  className = "",
  activeClassName = styles.navigation_link_content_active,
}: NavLinkProps) {
  return (
    <motion.div
      className={`${styles.navlink_container}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <RouterNavLink
        to={to}
        className={({ isActive }) =>
          `${styles.navigation_link_content} ${className} ${isActive ? activeClassName : ""}`
        }
      >
        {({ isActive }) => (
          <span className={styles.navigation_link_content}>
            {children}
            <motion.span
              initial={false}
              animate={{
                width: isActive ? "100%" : "0%",
                opacity: isActive ? 1 : 0,
              }}
              whileHover={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.2 }}
              className={styles.navlink_underline}
            />
          </span>
        )}
      </RouterNavLink>
    </motion.div>
  );
}

export default NavLink;
