import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const Category = ({ params }) => {
    console.log(params)
    return (
        <div>
            <h4 className={styles.cTitle}>{params.category}</h4>
            <div className={styles.CategoryItems}>
                <div className={styles.cContent}>
                    <h3>Creative Portfolio</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quae officiis laudantium ex sit ducimus dicta. Eligendi earum fugiat maxime facere nihil cum eius omnis.</p>
                    <Button url="#" text="See More"></Button>
                </div>
                <div className={styles.cImg}>
                    <Image src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1600" fill={true} className={styles.imgItem} alt="catagory"></Image>
                </div>
            </div>
            <div className={styles.CategoryItems}>
                <div className={styles.cContent}>
                    <h3>Creative Portfolio</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quae officiis laudantium ex sit ducimus dicta. Eligendi earum fugiat maxime facere nihil cum eius omnis.</p>
                    <Button url="#" text="See More"></Button>
                </div>
                <div className={styles.cImg}>
                    <Image src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1600" fill={true} className={styles.imgItem} alt="catagory"></Image>
                </div>
            </div>
            <div className={styles.CategoryItems}>
                <div className={styles.cContent}>
                    <h3>Creative Portfolio</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quae officiis laudantium ex sit ducimus dicta. Eligendi earum fugiat maxime facere nihil cum eius omnis.</p>
                    <Button url="#" text="See More"></Button>
                </div>
                <div className={styles.cImg}>
                    <Image src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1600" fill={true} className={styles.imgItem} alt="catagory"></Image>
                </div>
            </div>
        </div>
    );
};

export default Category;