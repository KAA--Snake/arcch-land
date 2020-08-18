import React from "react";
import styles from "./MiniProjectService.module.scss";
import plan from "../../assets/images/plan.jpg";
import mini_project from "../../assets/images/mini_project.jpg";

export default function MiniProjectService() {
    return <div className={styles.sectionPlan}>
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
}
