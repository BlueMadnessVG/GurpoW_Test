import styles from "./header.module.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import UserMenu from "./UserMenu/UserMenu";
import { useIsTabletOrLarger } from "@/hooks/useMediaQuery";

interface HeaderProps {
  showNav?: boolean;
  showUserMenu?: boolean;
}

function Header({ showNav = false, showUserMenu = false }: HeaderProps) {
  const isTabletOrLarger = useIsTabletOrLarger();
  const shouldShowNav = showNav && isTabletOrLarger;

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Logo />
        {shouldShowNav && <Navigation />}
        {showUserMenu && <UserMenu />}
      </div>
    </header>
  );
}

export default Header;
