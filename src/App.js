import React, { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import TopSlider from './components/TopSlider/TopSlider';
import TopSection from './components/TopSection/TopSection';
import Stages from './components/Stages/Stages';
import ProjectSample from './components/ProjectSample/ProjectSample';
import MiniProjectService from './components/MiniProjectService/MiniProjectService';
import DopServices from './components/DopServices/DopServices';
import Footer from './components/Footer/Footer';
import { Modal } from './components/Modal';
import styles from './App.module.scss';
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
    const [projectSampleModalIsOpened, setProjectSampleModalOpened] = useState(false);
    return (
    <div id="App" className={styles.App}>
        <NavBar />
        <TopSlider/>
        <TopSection/>
        <Stages/>
        <ProjectSample/>
        <MiniProjectService/>
        <DopServices/>
        <ContactForm/>
        <Footer/>
        <Modal isOpen={false}>content</Modal>
    </div>
  );
}

export default App;
