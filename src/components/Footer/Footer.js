import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import styles from './Footer.module.scss';

export default function Footer() {
    return <footer className={styles.footer}>
        <div className={styles.name}>
            <div>Дизайнер интерьера</div>
            <div>Наталья Козлова</div>
        </div>
        <div className={styles.info}>
            <address>
                <div className={styles.creds}>
                    <a href="mailto:viggo20@mail.ru">viggo20@mail.ru</a>
                    <a href="tel:+79622418648">+79622418648</a>
                </div>
            </address>
        </div>
        <a href="/" className={styles.logo}>
            <img src={Logo} alt="Logo" className={styles.logoImg} />
        </a>

    </footer>
}
