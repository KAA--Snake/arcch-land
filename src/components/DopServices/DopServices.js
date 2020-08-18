import React from "react";
import styles from "./DopServices.module.scss";
import autor_nadzor from "../../assets/images/autor_nadzor.jpg";
import architect from "../../assets/images/architect.jpg";
import building_works from "../../assets/images/building_works.jpg";

export default function DopServices() {
    return <div className={styles.sectionDopServices}>
        <div className={styles.contentWrap}>
            <h3 className={styles.sectionDopServicesHeader}>Дополнительные услуги</h3>
            <div className={styles.sectionDopServicesContent}>
                <div className={styles.item}>
                    <div className={styles.itemHeader}>Авторский надзор</div>
                    <img className={styles.itemImg} src={autor_nadzor} alt=""/>
                    <div className={styles.itemText}>
                        Авторский надзор включает в себя выезды на объект для осуществления контроля над ходом
                        строительных работ, внесение корректировок в проектную документацию, взаимодействие с
                        подрядчиками и заказ чистовых отделочных материалов.
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>Архитектура</div>
                    <img className={styles.itemImg} src={architect} alt=""/>
                    <div className={styles.itemText}>
                        Если вы только задумываетесь о строительстве собственного дома, я готова предложить вам комплекс
                        услуг по разработке дизайн-проекта вашего дома с нуля.
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.itemHeader}>Строительные работы</div>
                    <img className={styles.itemImg} src={building_works} alt=""/>
                    <div className={styles.itemText}>
                        За время своей работы в области дизайна интерьера я наработала бесценные контакты. Я могу
                        предложить вам только проверенную временем строительную бригаду. Работая с ней, вам удастся
                        избежать многих трудностей.
                    </div>
                </div>
            </div>
        </div>
    </div>
}
