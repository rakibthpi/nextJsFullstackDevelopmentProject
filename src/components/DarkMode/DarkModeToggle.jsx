"use client"
import React, { useContext } from 'react';
import styles from './DarkModeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '../../../context/ThemContext';

const DarkModeToggle = () => {
    const { mode, taggle } = useContext(ThemeContext)
    console.log(mode);
    return (
        <div>
            <div onClick={taggle} className={styles.container}>
                <div className={styles.icon}>
                    <Image src='/moon.png' width={15} height={15} alt='photos'></Image>
                </div>
                <div className={styles.icon}><Image src='/sun.png' width={15} height={15} alt='photos'></Image></div>
                <div className={styles.ball} style={mode === "dark" ? { left: "2px" } : { right: "2px" }} />
            </div>
        </div>
    );
};

export default DarkModeToggle;