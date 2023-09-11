// 'use client'
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import img from 'public/contact.png';
import Button from '@/components/Button/Button';
// Contact page 

const Contact = () => {
    console.log("rakib hosen test")
    return (
        <div>
            <h1 style={{ textAlign: 'center', paddingBottom: '50px' }}> Let's Keep in Touch</h1>
            <div className={styles.container}>
                <div className={styles.imgItem}>
                    <Image className={styles.img} src={img} fill={true} alt='photos'></Image>
                </div>
                <div className={styles.form}>
                    <input className={styles.input} type="text" name="name" placeholder='Name' />
                    <input className={styles.input} type="email" name="email" placeholder='Email' />
                    <textarea name="message" placeholder='Message' className={styles.textArea} ></textarea>

                    <Button type="submit" url="#" text="Submit"></Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;