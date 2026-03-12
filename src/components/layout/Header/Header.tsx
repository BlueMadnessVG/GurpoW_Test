import styles from "./header.module.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import UserMenu from "./UserMenu/UserMenu";

interface HeaderProps {
  showNav?: boolean;
  showUserMenu?: boolean;
}

function Header({ showNav = false, showUserMenu = false }: HeaderProps) {
  const isDesktop = useIsDesktop();
  const shouldShowNav = showNav && isDesktop;

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_logoContainer}>
          {!shouldShowNav && <MobileMenu />}
          <Logo />
        </div>

        {shouldShowNav && <Navigation />}
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
