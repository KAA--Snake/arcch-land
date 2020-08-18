import styles from "./TopSection.module.scss";
import React from "react";

export default function TopSection() {
return <div className={styles.sectionTopOuter}>
    <div className={styles.contentWrap}>
        <div className={styles.sectionTop}>
            <div className={styles.sectionTopHeader}>
                <h1>Дизайнер интерьера</h1>
                <h2>Наталья Козлова</h2>
            </div>
            <p className={styles.paragraph}>Интерьер вашего дома, квартиры или офиса можно сделать более комфортным, функциональным и уникальным. Вы сможете увидеть новые возможности знакомого пространства.</p>
            <p className={styles.paragraph}>Проекты разрабатываются с точки зрения удобства и эстетически приятного взаимодействия среды с людьми: будь это небольшая студия или приусадебный участок, дизайн подстроится под ваши потребности, с учётом всех требований к дизайну архитектурной среды.</p>
            <p className={styles.paragraph}>От Вас необходимо только поделиться предпочтениями в стилистике дизайна и рассказать, что бы Вы хотели увидеть, какую атмосферу в среде создать.</p>
        </div>
    </div>
</div>
}
