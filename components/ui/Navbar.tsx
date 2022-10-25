import { useState } from 'react';
import Link from 'next/link'

import styles from "./styles/navbar.module.scss";
import classNames from 'classnames';
import Localidad from '../../pages/localidad/[localidad]';

export const Navbar = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <nav>
            <div className={styles.menuContainer}>
                <Link href={'/'}>
                    <img className={styles.logo} src="/logo.png" alt="logo" />
                </Link>

                <div className={classNames(styles.menuIcon, { [styles.change]: showMore })} onClick={() => setShowMore(prevValue => !prevValue)}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>
            </div>

            {
                showMore && (
                    <div className={styles.submenu}>
                        <div className={styles.items} onClick={() => setShowMore(false)}>
                            <Link href={'/'}>
                                Inicio
                            </Link>
                            <Link href={'/about'}>
                                Nosotros
                            </Link>
                            <Link href={'/search'}>
                                Buscar
                            </Link>
                            <hr />
                            <Link href={'/localidad/la_plata'}>
                                La Plata
                            </Link>
                            <Link href={'/localidad/buenos_aires'}>
                                Buenos Aires
                            </Link>
                            <Link href={'/localidad/rosario'}>
                                Rosario
                            </Link>
                            <Link href={'/localidad/cordoba'}>
                                Cordoba
                            </Link>
                            <Link href={'/localidad/mendoza'}>
                                Mendoza
                            </Link>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}
