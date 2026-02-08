import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/fiat-logo.png';
import styles from './Logo.module.css';

function Logo() {
  return (
    <NavLink to="/" className={styles.logo_link}>
      <img src={logo} alt="Logo" className={styles.logo_image} />
    </NavLink>
  )
}

export default Logo