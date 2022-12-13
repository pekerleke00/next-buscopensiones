import React from 'react'
import dynamic from 'next/dynamic';
import { Filter } from './Filter';
import { Favorites } from './Favorites';

import styles from './styles/sidebar.module.scss'

interface Props {
    location: String,
    itemsQuantity: number;
}

export const Sidebar = (props: Props) => {
    const { location, itemsQuantity } = props;

    const AdWithNoSSR = dynamic(() => import("../ads/GoogleAd"), {
        ssr: false
    });

    return (
        <div className={styles.container}>
            <h3>{location} <small>{itemsQuantity} resultados</small></h3>

            {/* <p className={styles.filterTitle}>Ordenar por:</p>
            <p>Populares</p>
            <p>Fecha de publicacion</p>
            <p>Menor precio</p>
            <p>Mayor Precio</p>

            <br /> */}

            <Filter title="Ver solo:" filters={['femenina', 'masculina', 'mixta']} query="f" />

            {/* <AdWithNoSSR currentPath="sidebar"/> */}

            <div className={styles.adMockup}></div> <br />

            <Favorites />
        </div>
    )
}
