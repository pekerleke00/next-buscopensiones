import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { Item } from '../../../models/Item';
import { useRouter } from 'next/router';
import { Filter } from './Filter';

import styles from './styles/sidebar.module.scss'

interface Props {
    location: String,
    itemsQuantity: number;
}

export const Sidebar = (props: Props) => {
    const { location, itemsQuantity } = props;

    const [favorites, setfavorites] = useState<Item[]>([])

    const AdWithNoSSR = dynamic(() => import("../ads/GoogleAd"), {
        ssr: false
    });

    const router = useRouter();

    const handleFavoriteClick = (id: number) => {
        router.push(`/pen/${id}`);
    }

    useEffect(() => {
        setfavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
    }, [])

    return (
        <div className={styles.container}>
            <h3>{location} <small>{itemsQuantity} resultados</small></h3>

            {/* <p className={styles.filterTitle}>Ordenar por:</p>
            <p>Populares</p>
            <p>Fecha de publicacion</p>
            <p>Menor precio</p>
            <p>Mayor Precio</p>

            <br /> */}

            <Filter title="Ver solo:" filters={['femenina', 'masculina', 'mixta']} query="f"/>

            {/* <AdWithNoSSR currentPath="sidebar"/> */}
            <div className={styles.adMockup}></div>

            {
                !!favorites.length && (
                    <>
                        <h4>Publicaciones favoritas</h4>
                        <div className={styles.cardsContainer}>
                            {
                                favorites.map((favItem: Item) => (
                                    <div style={{display: 'flex', alignItems: 'center', marginBottom: 10}} className={styles.imageContainer} onClick={() => handleFavoriteClick(favItem.id)} key={favItem.id}>
                                        <img style={{width:  40}} src={favItem.pictures[0]?.path ? encodeURI(favItem.pictures[0].path.replace('..', 'https://buscopensiones.com')) : '/index1.jpg'} />
                                        <span className={styles.name}>{favItem.name} - {favItem.location}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}
