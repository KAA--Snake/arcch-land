import React from 'react';
import './swiper.css';
import Swiper from 'react-id-swiper';
import slide1 from '../../../assets/images/sample/1.jpg';
import slide2 from '../../../assets/images/sample/2.jpg';
import slide3 from '../../../assets/images/sample/3.jpg';
import slide4 from '../../../assets/images/sample/4.jpg';
import slide5 from '../../../assets/images/sample/5.jpg';
import slide6 from '../../../assets/images/sample/6.jpg';
import slide7 from '../../../assets/images/sample/7.jpg';
import slide8 from '../../../assets/images/sample/8.jpg';
import slide9 from '../../../assets/images/sample/9.jpg';
import slide10 from '../../../assets/images/sample/10.jpg';
import slide11 from '../../../assets/images/sample/11.jpg';
import slide12 from '../../../assets/images/sample/12.jpg';
import slide13 from '../../../assets/images/sample/13.jpg';
import slide14 from '../../../assets/images/sample/14.jpg';
import slide15 from '../../../assets/images/sample/15.jpg';
import slide16 from '../../../assets/images/sample/16.jpg';
import slide17 from '../../../assets/images/sample/17.jpg';
import slide18 from '../../../assets/images/sample/18.jpg';
import slide19 from '../../../assets/images/sample/19.jpg';
import slide20 from '../../../assets/images/sample/20.jpg';
import slide21 from '../../../assets/images/sample/21.jpg';
import slide22 from '../../../assets/images/sample/22.jpg';
import slide23 from '../../../assets/images/sample/23.jpg';
import slide24 from '../../../assets/images/sample/24.jpg';
import styles from './Slider.module.scss';

export default function Slider() {
    const params = {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        // spaceBetween: 10,
        loop: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true
        },
        // coverflowEffect: {
        //     rotate: -30,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true
        // },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    }
    return (
        <div className={styles.root}>
            <Swiper {...params}>
                <div className={styles.slide} style={{backgroundImage: slide1}}>
                    <img src={slide1} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide2}}>
                    <img src={slide2} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide3}}>
                    <img src={slide3} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide4}}>
                    <img src={slide4} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide5}}>
                    <img src={slide5} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide6}}>
                    <img src={slide6} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide7}}>
                    <img src={slide7} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide8}}>
                    <img src={slide8} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide9}}>
                    <img src={slide9} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide10}}>
                    <img src={slide10} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide11}}>
                    <img src={slide11} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide12}}>
                    <img src={slide12} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide13}}>
                    <img src={slide13} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide14}}>
                    <img src={slide14} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide15}}>
                    <img src={slide15} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide16}}>
                    <img src={slide16} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide17}}>
                    <img src={slide17} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide18}}>
                    <img src={slide18} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide19}}>
                    <img src={slide19} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide20}}>
                    <img src={slide20} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide21}}>
                    <img src={slide21} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide22}}>
                    <img src={slide22} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide23}}>
                    <img src={slide23} alt=""/>
                </div>
                <div className={styles.slide} style={{backgroundImage: slide24}}>
                    <img src={slide24} alt=""/>
                </div>

            </Swiper>
        </div>

    )
}
