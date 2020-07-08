import React from 'react';
import styles from './NavBar.module.scss';
import Logo from '../../assets/images/logo.svg';

export default function NavBar() {
    return <header className={styles.header}>
        <a href="/" className={styles.logo}>
            <img src={Logo} alt="Logo" className={styles.logoImg} />
        </a>
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navItemLink}>Главная</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#" className={styles.navItemLink}>Услуги</a>
                </li>
                {/*<li className={styles.navItem}>*/}
                {/*    <a href="#" className={styles.navItemLink}>Портфолио</a>*/}
                {/*</li>*/}
                <li className={styles.navItem}>
                    <a href="#" className={styles.navItemLink}>Контакты</a>
                </li>
            </ul>
        </nav>
    </header>
}
