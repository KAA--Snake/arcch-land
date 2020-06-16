import React from 'react';
import NavBar from './components/NavBar/NavBar';
import TopSlider from './components/TopSlider/TopSlider';
import styles from './App.module.scss';
import stage1 from './assets/images/service/1.jpg';
import stage2 from './assets/images/service/2.jpg';
import stage3 from './assets/images/service/3.jpg';
import stage4 from './assets/images/service/4.jpg';

function App() {
  return (
    <div id="App" className={styles.App}>
        <NavBar />
        <TopSlider/>
        <div className={styles.sectionTopOuter}>
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

        <div className={styles.sectionStages}>
            <div className={styles.contentWrap}>
                <h3 className={styles.sectionStagesHeader}>Процесс создания интерьера. <br/> Этапы работы над полным дизайн-проектом</h3>
                <div className={styles.stageWrap}>
                    <div className={styles.stageItem}>
                        <img src={stage1} className={styles.stageItemImg} alt=""/>
                        <div className={styles.stageItemNum}>1</div>
                        <div className={styles.stageItemHeader}>ЭСКИЗНЫЙ ПРОЕКТ</div>
                        <div className={styles.stageItemText}>первый этап проектирования интерьера. На этом этапе происходит знакомство дизайнера и клиента.</div>
                        <button className={styles.stageItemMoreBtn}>Подробнее</button>
                    </div>

                    <div className={styles.stageItem}>
                        <img src={stage2} className={styles.stageItemImg} alt=""/>
                        <div className={styles.stageItemNum}>2</div>
                        <div className={styles.stageItemHeader}>ВИЗУАЛИЗАЦИЯ ИНТЕРЬЕРА</div>
                        <div className={styles.stageItemText}>На втором этапе концепция интерьера  и объёмно-пространственное решение детализируются и визуализируются.</div>
                        <button className={styles.stageItemMoreBtn}>Подробнее</button>
                    </div>

                    <div className={styles.stageItem}>
                        <img src={stage3} className={styles.stageItemImg} alt=""/>
                        <div className={styles.stageItemNum}>3</div>
                        <div className={styles.stageItemHeader}>РАБОЧИЙ ПРОЕКТ</div>
                        <div className={styles.stageItemText}>В рабочий проект входят все чертежи, необходимые для реализации проекта.</div>
                        <button className={styles.stageItemMoreBtn}>Подробнее</button>
                    </div>

                    <div className={styles.stageItem}>
                        <img src={stage4} className={styles.stageItemImg} alt=""/>
                        <div className={styles.stageItemNum}>4</div>
                        <div className={styles.stageItemHeader}>ПОДБОР И СПЕЦИФИКАЦИИ</div>
                        <div className={styles.stageItemText}>На этом этапе выбираются все отделочные материалы и составляется подробная спецификация.</div>
                        <button className={styles.stageItemMoreBtn}>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
