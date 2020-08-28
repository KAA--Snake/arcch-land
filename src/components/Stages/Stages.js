import styles from "./Stages.module.scss";
import React, {useState} from 'react';
import stage1 from "../../assets/images/service/1.jpg";
import stage2 from "../../assets/images/service/2.jpg";
import stage3 from "../../assets/images/service/3.jpg";
import stage4 from "../../assets/images/service/4.jpg";
import StageModal from "./StageModal/StageModal";

export default function Stages() {
    const [stageOpened, setStageOpened] = useState(null);
    const onCloseStage = () => {
        setStageOpened(null);
    }
    const onOpenStage = (stage) => {
        setStageOpened(stage);
    }
    return <div className={styles.sectionStages}>
        <div className={styles.contentWrap}>
            <h3 className={styles.sectionStagesHeader}>Процесс создания интерьера:</h3>
            <div className={styles.stageWrap}>
                <div className={styles.stageItem}>
                    <img src={stage1} className={styles.stageItemImg} alt=""/>
                    <div className={styles.stageItemNum}>1</div>
                    <div className={styles.stageItemHeader}>ЭСКИЗНЫЙ ПРОЕКТ</div>
                    <div className={styles.stageItemText}>Знакомство дизайнера и клиента, составление технического
                        задания на проектирование, замер помещения и фотосъёмка, прорабатываются варианты планировочного
                        решения.
                    </div>
                    <button className={styles.stageItemMoreBtn} onClick={() => {
                        onOpenStage(1)
                    }}>Подробнее
                    </button>
                </div>

                <div className={styles.stageItem}>
                    <img src={stage2} className={styles.stageItemImg} alt=""/>
                    <div className={styles.stageItemNum}>2</div>
                    <div className={styles.stageItemHeader}>ВИЗУАЛИЗАЦИЯ ИНТЕРЬЕРА</div>
                    <div className={styles.stageItemText}>Детальная визуализация концепции интерьера с подобранными
                        материалами, мебелью, светильниками и другими предметами интерьера.
                    </div>
                    <button className={styles.stageItemMoreBtn} onClick={() => {
                        onOpenStage(2)
                    }}>Подробнее
                    </button>
                </div>

                <div className={styles.stageItem}>
                    <img src={stage3} className={styles.stageItemImg} alt=""/>
                    <div className={styles.stageItemNum}>3</div>
                    <div className={styles.stageItemHeader}>РАБОЧИЙ ПРОЕКТ</div>
                    <div className={styles.stageItemText}>Рабочий проект представляет собой альбом чертежей, необходимых
                        для реализации проекта строительной бригадой.
                    </div>
                    <button className={styles.stageItemMoreBtn} onClick={() => {
                        onOpenStage(3)
                    }}>Подробнее
                    </button>
                </div>

                <div className={styles.stageItem}>
                    <img src={stage4} className={styles.stageItemImg} alt=""/>
                    <div className={styles.stageItemNum}>4</div>
                    <div className={styles.stageItemHeader}>ПОДБОР И СПЕЦИФИКАЦИИ</div>
                    <div className={styles.stageItemText}>Окончательный подбор и уточнение всех отделочных материалов,
                        сантехники, светильников и мебели.
                    </div>
                    <button className={styles.stageItemMoreBtn} onClick={() => {
                        onOpenStage(4)
                    }}>Подробнее
                    </button>
                </div>
            </div>
        </div>
        <StageModal isOpened={stageOpened} onCloseModal={onCloseStage}/>
    </div>
}
