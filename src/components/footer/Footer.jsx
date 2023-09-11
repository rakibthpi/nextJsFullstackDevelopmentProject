import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.content}>@2023 Rakib. All rights reserved.</h3>
            <div className={styles.social_icon}>
                <Link href="#" className={styles.icon}>
                    <Image src="/1.png" fill={true} alt='icon' ></Image>
                </Link>
                <Link href="#" className={styles.icon}>
                    <Image src="/2.png" fill={true} alt='icon' ></Image>
                </Link>
                <Link href="#" className={styles.icon}>
                    <Image src="/3.png" fill={true} alt='icon' ></Image>
                </Link>
                <Link href="#" className={styles.icon}>
                    <Image src="/4.png" fill={true} alt='icon' ></Image>
                </Link>
            </div>
        </div >
    );
};

export default Footer;