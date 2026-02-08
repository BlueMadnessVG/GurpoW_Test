import { navigationItems } from "@/utils/constants/navigation.constants";
import NavLink from "@/components/navigation/NavLink/NavLink";
import styles from "./Navigation.module.css";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function Navigation() {
  const breakpoints = {
    desktop: useMediaQuery({ query: "(min-width: 1024px)" }),
    tablet: useMediaQuery({
      query: "(min-width: 768px) and (max-width: 1023px)",
    }),
    mobile: useMediaQuery({ query: "(max-width: 767px)" }),
  };

  const itemsToRemove = {
    desktop: 0,
    tablet: 1,
    mobile: 2,
  };

  const currentBreakpoint = breakpoints.desktop
    ? "desktop"
    : breakpoints.tablet
      ? "tablet"
      : "mobile";

  const itemsToRemoveCount = itemsToRemove[currentBreakpoint];
  const filteredItems = navigationItems.slice(
    1,
    -itemsToRemoveCount || undefined,
  );

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
