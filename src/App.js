import React from 'react';
import NavBar from './components/NavBar/NavBar';
import TopSlider from './components/TopSlider/TopSlider';
import styles from './App.module.scss';

function App() {
  return (
    <div id="App">
        <NavBar />
        <TopSlider/>
        <div className={styles.contentWrap}>
            <div className={styles.sectionTop}>
                <div className={styles.sectionTopHeader}>
                    <h1>Natalya Kozlova</h1>
                    <h2>TVER</h2>
                </div>

                <p className={styles.paragraph}>
                    Интерьер вашего дома, квартиры или офиса можно сделать более комфортным, функциональным и уникальным. Вы сможете увидеть новые возможности знакомого пространства.
                    Проекты разрабатываются с точки зрения удобства и эстетически приятного взаимодействия среды с людьми: будь это небольшая студия или приусадебный участок, дизайн подстроится под ваши потребности, с учётом всех требований к дизайну архитектурной среды.
                    От Вас необходимо только поделиться предпочтениями в стилистике дизайна и рассказать, что бы Вы хотели увидеть, какую атмосферу в среде создать.
                </p>

            </div>
        </div>
    </div>
  );
}

export default App;
