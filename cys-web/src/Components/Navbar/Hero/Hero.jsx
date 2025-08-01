import React from 'react';
import Slider from 'react-slick';
import styles from './Hero.module.css';

const slides = [
    {
        id: 1,
        src: 'src/assets/f1.jpg',
        tagline: '',
        subtitle: ''
    },
    {
        id: 2,
        src: 'https://via.placeholder.com/1600x800?text=CTF+Challenge',
        tagline: 'Unleash Your Skills. Conquer the CTF.',
        subtitle: 'Join our thrilling Capture The Flag challenges.'
    },
    {
        id: 3,
        src: 'https://via.placeholder.com/1600x800?text=Community+and+Collaboration',
        tagline: 'Build Connections. Share Knowledge.',
        subtitle: 'Become part of a vibrant cybersecurity community.'
    },
];

const Hero = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
    };

    return (
        <section id="home" className={styles.heroSection}>
            <Slider {...sliderSettings} className={styles.sliderContainer}>
                {slides.map(slide => (
                    <div key={slide.id} className={styles.slide}>
                        <img src={slide.src} alt={slide.tagline} className={styles.backgroundMedia} />
                        <div className={styles.overlay}></div>
                        <div className={styles.content}>
                            <h2 className={styles.tagline}>{slide.tagline}</h2>
                            <p className={styles.subtitle}>{slide.subtitle}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Hero;
