import { navigationItems } from "@/utils/constants/navigation.constants";
import NavLink from "@/components/navigation/NavLink/NavLink";
import styles from "./Navigation.module.css";

function Navigation() {
  const filteredItems = navigationItems.slice(1);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {filteredItems.map((item) => (
          <li key={item.id} className={styles.navigation_item}>
            <NavLink
              to={item.path}
              className={styles.navigation_link}
              activeClassName={styles.navigation_link_content_active}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
