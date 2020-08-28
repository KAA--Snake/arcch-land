import React, {useState} from 'react';
import {Modal} from "../../Modal";
import stage1 from "../../../assets/images/service/1.jpg";
import stage2 from "../../../assets/images/service/2.jpg";
import stage3 from "../../../assets/images/service/3.jpg";
import stage4 from "../../../assets/images/service/4.jpg";
import styles from './StageModal.module.scss';

export default function StageModal({isOpened, onCloseModal}) {
    return (<Modal isOpen={!!isOpened} onCloseModal={onCloseModal}>
        {isOpened === 1 && (<>
            <div className={styles.header}>ЭСКИЗНЫЙ ПРОЕКТ</div>
            <div className={styles.content}>
                <img src={stage1} alt="" className={styles.img}/>
                <p className={styles.text}>
                    Выбирается итоговый вариант планировки, который ложится в основу концепции интерьера (стилистика,
                    цветовое решение, идея), утверждаются все конструктивные решения, определяются виды используемых
                    материалов, расположение мебели, светильников и других предметов интерьера.
                </p>
                <p className={styles.text}>
                    Что вы получите:
                    <ul className={styles.list}>
                        <li className={styles.listItem}>обмерный план помещения</li>
                        <li className={styles.listItem}>варианты планировки (3-4 варианта)</li>
                        <li className={styles.listItem}>итоговая планировка</li>
                    </ul>
                </p>
            </div>
        </>)}
        {isOpened === 2 && (<>
            <div className={styles.header}>ВИЗУАЛИЗАЦИЯ ИНТЕРЬЕРА</div>
            <div className={styles.content}>
                <img src={stage2} alt="" className={styles.img}/>
                <p className={styles.text}>
                    Визуализация помогает клиенту лучше понять стилистику, цветовую гамму интерьера, используемые
                    материалы и освещение. Визуализация представляет собой реалистические масштабные изображения
                    интерьера. На данном этапе можно внести корректировки в цветовую гамму интерьера и используемые
                    материалы, чтобы добиться лучшего результата.
                </p>
                <p className={styles.text}>
                    Что вы получите:
                    <ul className={styles.list}>
                        <li className={styles.listItem}>3д визуализации интерьера (2-3 ракурса на каждое помещение)</li>
                    </ul>
                </p>
            </div>
        </>)}
        {isOpened === 3 && (<>
            <div className={styles.header}>РАБОЧИЙ ПРОЕКТ</div>
            <div className={styles.content}>
                <img src={stage3} alt="" className={styles.img}/>
                <p className={styles.text}>
                    В альбоме собраны планы демонтажа, монтажа, расстановки мебели и сантехники, план потолка,
                    освещения, выключателей и розеток, развертки стен и раскладка плитки и т.д. В чертежах указываются
                    точные размеры всех элементов интерьера, типы и количество отделочных материалов.
                </p>
                <p className={styles.text}>
                    Клиент имеет полное представление об объёме работ и бюджете ремонта, так как для этого есть вся
                    необходимая информация. Можно начинать ремонт.
                </p>
                <p className={styles.text}>
                    Что вы получите:
                    <ul className={styles.list}>
                        <li className={styles.listItem}>полный альбом чертежей, необходимых для реализации проекта</li>
                    </ul>
                </p>
            </div>
        </>)}
        {isOpened === 4 && (<>
            <div className={styles.header}>ПОДБОР И СПЕЦИФИКАЦИИ</div>
            <div className={styles.content}>
                <img src={stage4} alt="" className={styles.img}/>
                <p className={styles.text}>
                    Составляются подробные спецификации, в которых  указано точное количество, производитель, артикул, стоимость, сроки поставки и место, где элемент можно заказать. Для индивидуальных конструкций интерьера составляется техническое задание,  рассчитывается их стоимость  и сроки изготовления.
                </p>
                <p className={styles.text}>
                    Что вы получите:
                    <ul className={styles.list}>
                        <li className={styles.listItem}>спецификации по отделочным материалам</li>
                        <li className={styles.listItem}>спецификации по сантехнике</li>
                        <li className={styles.listItem}>спецификации по светильникам</li>
                        <li className={styles.listItem}>спецификации по мебели и другим предметам интерьера</li>
                    </ul>
                </p>
            </div>
        </>)}
    </Modal>);
}
