import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

const Button = ({ url, text }) => {
    console.log(text)
    return (
        <div>
            <Link href={url}>
                <button className={styles.container}>{text}</button>
            </Link>
        </div>
    );
};

export default Button;