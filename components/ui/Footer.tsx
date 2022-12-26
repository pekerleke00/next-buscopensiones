import Link from 'next/link';
import React from 'react'

import styles from './styles/footer.module.scss';

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <h3>Localidades</h3>
                <Link className={styles.link} href={'/localidad/la_plata'}>La Plata</Link>
                <Link className={styles.link} href={'/localidad/buenos_aires'}>Buenos Aires Capital</Link>
                <Link className={styles.link} href={'/'}>Rosario</Link>
                <Link className={styles.link} href={'/'}>Cordoba</Link>
                <Link className={styles.link} href={'/'}>Mendoza</Link>
            </div>

            <div>
                <h3>Links</h3>
                <Link className={styles.link} href={'/'}>Nosotros</Link>
                <Link className={styles.link} href={'/'}>Publicar hospedaje</Link>
            </div>

            <div>
                <h3>Contacto</h3>
                <Link className={styles.link} href={'/'}>buscopensiones@gmail.com</Link>
            </div>
        </div>
    )
}
