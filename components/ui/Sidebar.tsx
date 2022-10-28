import React from 'react'

import styles from './styles/sidebar.module.scss'
import { GoogleAd } from './ads/GoogleAd';

interface Props {
    location: String
}

export const Sidebar = (props: Props) => {

    const {location} = props;

    return (
        <div className={styles.container}>
            <h3>{location} <small>1000 resultados</small></h3>

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

            <GoogleAd currentPath="sidebar"/>
            <div className={styles.adMockup}></div>
        </div>
    )
}
