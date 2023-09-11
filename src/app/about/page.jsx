import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

// About page 

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.img}>
                    <Image className={styles.singleImg} src="https://images.pexels.com/photos/2465877/pexels-photo-2465877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill={true} alt='photos'></Image>
                    <div className={styles.imgText}>
                        <h1>Digital Storytellers</h1>
                        <h2>Handcrafting award winning digital experiences</h2>
                    </div>
                </div>


            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    <h3 className={styles.title}>Who are we?</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sequi explicabo corporis, nemo distinctio dolores? Dolores eaque repellat quidem ut!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, nihil! Officiis, necessitatibus recusandae quos minima quas commodi magnam rem, facere nemo, voluptates voluptate. Reiciendis qui sint, sapiente asperiores fugit fugiat ea repudiandae id cupiditate. Facere?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus corporis quidem ducimus consequatur. Quam aliquam beatae libero! Pariatur dolorem eligendi blanditiis, ad odit officiis.</p>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.title}>What We Do?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis iusto expedita velit. Unde molestias officiis alias eum iusto repellendus adipisci.</p>
                    <ul className={styles.list}>
                        <p>- Creative Illustrations</p>
                        <p>- Dynamic Websites</p>
                        <p>- Fast and Handy Mobile Apps</p>
                    </ul>
                    <Button url="/contact" text="Contect"></Button>
                </div>
            </div>
        </div >
    );
};

export default About;