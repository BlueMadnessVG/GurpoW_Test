import styles from "./header.module.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import UserMenu from "./UserMenu/UserMenu";
import { useIsDesktop } from "@/hooks/useMediaQuery";

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
          {!shouldShowNav && <UserMenu />}
          <Logo />
        </div>

        {shouldShowNav && <Navigation />}
        <div>
          <span>Login button</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
