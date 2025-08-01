import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>CYSCOM</div>
            <ul className={styles.navLinks}>
                <li><a href="#home">Home</a></li>
                <li><a href="#contact">Our Team</a></li>
                <li><a href="#contact">Leaderboard</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                <a href="#recruitt" className={styles.recruitbtn}>Recruitment</a>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;
