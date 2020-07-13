import React, {useState} from 'react';
import {Modal} from "../Modal";
import Slider from "./Slider/Slider";
import styles from './ProjectSampleModal.module.scss';

export default function ProjectSampleModal({isOpened, onCloseModal}) {
    // const [isOpened, setIsOpened] = useState(false);

    return (<Modal isOpen={isOpened} onCloseModal={onCloseModal}>
        <Slider/>
    </Modal>);
}
