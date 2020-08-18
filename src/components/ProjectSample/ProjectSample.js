import React, {useState} from "react";
import styles from "./ProjectSample.module.scss";
import ProjectSampleModal from "./ProjectSampleModal/ProjectSampleModal";

export default function ProjectSample() {
    const [projectSampleModalIsOpened, setProjectSampleModalOpened] = useState(false);
    return <div className={styles.sectionSample}>
        <div className={styles.contentWrap}>
            <h3 className={styles.sectionSampleHeader}>Пример полного дизайн-проекта</h3>
            <div className={styles.sectionSampleContent} onClick={() => {
                setProjectSampleModalOpened(true)
            }}>
                <div className={`${styles.sectionSampleContentItem} ${styles.item5}`}></div>
                <div className={`${styles.sectionSampleContentItem} ${styles.item4}`}></div>
                <div className={`${styles.sectionSampleContentItem} ${styles.item3}`}></div>
                <div className={`${styles.sectionSampleContentItem} ${styles.item2}`}></div>
                <div className={`${styles.sectionSampleContentItem} ${styles.item1}`}></div>
            </div>
        </div>
        <ProjectSampleModal
            isOpened={projectSampleModalIsOpened}
            onCloseModal={()=>{setProjectSampleModalOpened(false)}}
        />
    </div>
}
