import React, { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import TopSlider from './components/TopSlider/TopSlider';
import ProjectSampleModal from './components/ProjectSampleModal/ProjectSampleModal';
import { Modal } from './components/Modal';
import styles from './App.module.scss';
import stage1 from './assets/images/service/1.jpg';
import stage2 from './assets/images/service/2.jpg';
import stage3 from './assets/images/service/3.jpg';
import stage4 from './assets/images/service/4.jpg';
import plan from './assets/images/plan.jpg';
import mini_project from './assets/images/mini_project.jpg';
import architect from './assets/images/architect.jpg';
import autor_nadzor from './assets/images/autor_nadzor.jpg';
import building_works from './assets/images/building_works.jpg';

function App() {
    const [projectSampleModalIsopened, setProjectSampleModalOpened] = useState(false);
    return (
    <div id="App" className={styles.App}>
        <NavBar />
        <TopSlider/>
        <div className={styles.sectionTopOuter}>
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

        <div className={styles.sectionStages}>
            <div className={styles.contentWrap}>
                <h3 className={styles.sectionStagesHeader}>Процесс создания интерьера:</h3>
                <div className={styles.stageWrap}>
                    <div className={styles.stageItem}>
                        <img src={stage1} className={styles.stageItemImg} alt=""/>
                        <div className={styles.stageItemNum}>1</div>
                        <div className={styles.stageItemHeader}>ЭСКИЗНЫЙ ПРОЕКТ</div>
                        <div className={styles.stageItemText}>Знакомство дизайнера и клиента, составление технического задания на проектирование, замер помещения и фотосъёмка, прорабатываются варианты планировочного решения.</div>
                        <button className={styles.stageItemMoreBtn}>Подробнее</button>
                    </div>

                    <div className={styles.stageItem}>
                        <img src={stage2} className={styles.stageItemImg} alt=""/>
                        <div className={styles.stageItemNum}>2</div>
                        <div className={styles.stageItemHeader}>ВИЗУАЛИЗАЦИЯ ИНТЕРЬЕРА</div>
                        <div className={styles.stageItemText}>Детальная визуализация концепции интерьера с подобранными материалами, мебелью, светильниками и другими предметами интерьера.</div>
                        <button className={styles.stageItemMoreBtn}>Подробнее</button>
                    </div>

                    <div className={styles.stageItem}>
                        <img src={stage3} className={styles.stageItemImg} alt=""/>
                        <div className={styles.stageItemNum}>3</div>
                        <div className={styles.stageItemHeader}>РАБОЧИЙ ПРОЕКТ</div>
                        <div className={styles.stageItemText}>Рабочий проект представляет собой альбом чертежей, необходимых для реализации проекта строительной бригадой.</div>
                        <button className={styles.stageItemMoreBtn}>Подробнее</button>
                    </div>

                    <div className={styles.stageItem}>
                        <img src={stage4} className={styles.stageItemImg} alt=""/>
                        <div className={styles.stageItemNum}>4</div>
                        <div className={styles.stageItemHeader}>ПОДБОР И СПЕЦИФИКАЦИИ</div>
                        <div className={styles.stageItemText}>Окончательный подбор и уточнение всех отделочных  материалов,  сантехники, светильников и мебели.</div>
                        <button className={styles.stageItemMoreBtn}>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.sectionSample}>
            <div className={styles.contentWrap}>
                <h3 className={styles.sectionSampleHeader}>Пример полного дизайн-проекта</h3>
                <div className={styles.sectionSampleContent} onClick={() => {setProjectSampleModalOpened(true)}}>
                    <div className={`${styles.sectionSampleContentItem} ${styles.item5}`}></div>
                    <div className={`${styles.sectionSampleContentItem} ${styles.item4}`}></div>
                    <div className={`${styles.sectionSampleContentItem} ${styles.item3}`}></div>
                    <div className={`${styles.sectionSampleContentItem} ${styles.item2}`}></div>
                    <div className={`${styles.sectionSampleContentItem} ${styles.item1}`}></div>
                </div>
            </div>
        </div>
        <div className={styles.sectionPlan}>
            <div className={styles.contentWrap}>
                <div className={styles.sectionPlanContent}>
                    <div className={styles.plan}>
                        <img className={styles.planImg} src={plan} alt=""/>
                        <div className={styles.planText}>
                            <h3>Планировочное решение</h3>
                            <p>Планировочное решение это основа интерьера. Нет ничего важнее правильной организации пространства. Если вы сомневаетесь, что справитесь с этой задачей самостоятельно, но не можете позволить себе дизайн проект, закажите только планировочное решение. Это будет лучшим вложением. Я предложу вам несколько вариантов планировочного решения и доработаю итоговый план.</p>
                            <p>Данное предложение доступно при условии самостоятельного замера помещения и по удалённой схеме работы (Mail, Skype, WhatsApp).</p>
                            <p>В итоге вы получите: варианты планировки (3-4 варианта) и итоговую планировку</p>
                        </div>
                    </div>

                    <div className={styles.miniProject}>
                        <img className={styles.miniProjectImg} src={mini_project} alt=""/>
                        <div className={styles.miniProjectText}>
                            <h3>Мини-проект</h3>
                            <p>Для выполнения небольшого объёма работы, например одной комнаты, не обязательно искать сложных путей, достаточно замерить помещение, сделать фотографии и описать свои желания. Я предложу вам несколько планировочных решений и на основе одного из них подготовлю мини-проект.</p>
                            <p>Данное предложение доступно при условии самостоятельного замера помещения площадью до 25 кв.м. и по удалённой схеме работы (Mail, Skype, WhatsApp).</p>
                            <p>Что вы получите:</p>
                            <p>варианты планировки (3-4 варианта)</p>
                            <p>итоговая планировка</p>
                            <p>визуализация помещения в масштабе (1-2шт.)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.sectionDopServices}>
            <div className={styles.contentWrap}>
                <h3 className={styles.sectionDopServicesHeader}>Дополнительные услуги</h3>
                <div className={styles.sectionDopServicesContent}>
                    <div className={styles.item}>
                        <div className={styles.itemHeader}>Авторский надзор</div>
                        <img className={styles.itemImg} src={autor_nadzor} alt=""/>
                        <div className={styles.itemText}>
                            Авторский надзор включает в себя выезды на объект для осуществления контроля над ходом строительных работ, внесение корректировок в проектную документацию, взаимодействие с подрядчиками и заказ чистовых отделочных материалов.
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.itemHeader}>Архитектура</div>
                        <img className={styles.itemImg} src={architect} alt=""/>
                        <div className={styles.itemText}>
                            Если вы только задумываетесь о строительстве собственного дома, я готова предложить вам комплекс услуг по разработке дизайн-проекта вашего дома с нуля.
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.itemHeader}>Строительные работы</div>
                        <img className={styles.itemImg} src={building_works} alt=""/>
                        <div className={styles.itemText}>
                            За время своей работы в области дизайна интерьера я наработала бесценные контакты. Я могу предложить вам только проверенную временем строительную бригаду. Работая с ней, вам удастся избежать многих трудностей.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal isOpen={false}>content</Modal>
        <ProjectSampleModal
            isOpened={projectSampleModalIsopened}
            onCloseModal={()=>{setProjectSampleModalOpened(false)}}
        />
    </div>
  );
}

export default App;
