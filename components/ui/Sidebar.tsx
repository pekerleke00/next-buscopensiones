import React from 'react'
import dynamic from 'next/dynamic';

import styles from './styles/sidebar.module.scss'

interface Props {
    location: String,
    itemsQuantity: number;
}

export const Sidebar = (props: Props) => {

    const AdWithNoSSR = dynamic(() => import("./ads/GoogleAd"), {
        ssr: false
    });

    const {location, itemsQuantity} = props;

    return (
        <div className={styles.container}>
            <h3>{location} <small>{itemsQuantity} resultados</small></h3>

            <p className={styles.filterTitle}>Ordenar por:</p>
            <p>Populares</p>
            <p>Fecha de publicacion</p>
            <p>Menor precio</p>
            <p>Mayor Precio</p>

            <br />

            <p className={styles.filterTitle}>Ver solo:</p>
            <p>Femeninas</p>
            <p>Masculinas</p>
            <p>Mixtas</p>

            {/* <AdWithNoSSR currentPath="sidebar"/> */}
            <div className={styles.adMockup}></div>
        </div>
    )
}
