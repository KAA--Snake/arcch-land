import React from 'react';
import './swiper.css';
import Swiper from 'react-id-swiper';
import slide1 from '../../assets/images/top_slider/1.jpg';
import slide2 from '../../assets/images/top_slider/2.jpg';
import slide3 from '../../assets/images/top_slider/3.jpg';
import slide4 from '../../assets/images/top_slider/4.jpg';
import slide5 from '../../assets/images/top_slider/5.jpg';
import styles from './TopSlider.module.scss';

export default function TopSlider() {
    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        coverflowEffect: {
            rotate: -30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        // pagination: {
        //     el: '.swiper-pagination'
        // }
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
            </Swiper>
        </div>

    )
}
