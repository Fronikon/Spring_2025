import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const setActive = ({ isActive }: { isActive: boolean; isPending: boolean }): string =>
  !isActive ? styles.link : `${styles.link} ${styles.active}`;

const Header: React.FC = () => {
  return (
    <div className={styles['header-container']}>
      <div className={`container ${styles.header}`}>
        <nav className={styles['nav-menu']}>
          <NavLink role={'linkToHome'} className={setActive} to="/" end>
            Home
          </NavLink>
          <NavLink role={'linkToAbout'} className={setActive} to="/about" end>
            About
          </NavLink>
          <NavLink role={'linkToForms'} className={setActive} to="/forms" end>
            Forms
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
