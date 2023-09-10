"use client"
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 1,
        title: "Deshboard",
        url: "/deshboard"
    },
]
const Navbar = () => {
    const handleLogout = () => {
        console.log("LogOut btn area")
    }
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">Logo</Link>
            </div>
            <div className={styles.links}>
                <ul>
                    {
                        links.map(link => <Link key={link.id} href={link.url}>{link.title}</Link>)
                    }
                </ul>
                <button className={styles.logOut} onClick={() => { handleLogout() }}>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;