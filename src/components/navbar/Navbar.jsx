"use client"
import Link from 'next/link';
import React from 'react';
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
        <div className=''>
            <div>
                <Link href="/">Logo</Link>
            </div>
            <div>
                <ul>
                    {
                        links.map(link => <Link key={link.id} href={link.url}>{link.title}</Link>)
                    }
                </ul>
                <button onClick={() => { handleLogout() }}>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;