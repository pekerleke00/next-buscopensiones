import Link from 'next/link'
import React from 'react'

import styles from "./navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.menuContainer}>
            <Link href={'/'}>Home</Link>
            <Link href={'/localidad'}>Localidad</Link>
            <Link href={'/item'}>Item</Link>
        </nav>
    )
}
