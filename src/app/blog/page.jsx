import Button from '@/components/Button/Button';
import Image from 'next/image';
import styles from './page.module.css';
import React from 'react';
import Link from 'next/link';

// Blog page 

const Blog = () => {
    return (
        <div className={styles.mainContainer}>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imgItem}>
                    <Image src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1600" fill={true} className={styles.img} alt="catagory"></Image>
                </div>
                <div className={styles.content}>
                    <h3>Creative Portfolio</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quae officiis laudantium ex sit ducimus dicta. Eligendi earum fugiat maxime facere nihil cum eius omnis.</p>
                    <Button url="#" text="See More"></Button>
                </div>

            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imgItem}>
                    <Image src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1600" fill={true} className={styles.img} alt="catagory"></Image>
                </div>
                <div className={styles.content}>
                    <h3>Creative Portfolio</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quae officiis laudantium ex sit ducimus dicta. Eligendi earum fugiat maxime facere nihil cum eius omnis.</p>
                    <Button url="#" text="See More"></Button>
                </div>

            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imgItem}>
                    <Image src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1600" fill={true} className={styles.img} alt="catagory"></Image>
                </div>
                <div className={styles.content}>
                    <h3>Creative Portfolio</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quae officiis laudantium ex sit ducimus dicta. Eligendi earum fugiat maxime facere nihil cum eius omnis.</p>
                    <Button url="#" text="See More"></Button>
                </div>

            </Link>
        </div>
    );
};

export default Blog;