import React from 'react'
import dynamic from 'next/dynamic';
import { getNearByInfoByLocation } from '../utils/nearByInfo';
import { Item } from '../../models/Item';

import styles from './styles/itemInfo.module.scss'

interface Props {
    item: Item,
    location: string
}

const MapWithNoSSR = dynamic(() => import("./map/Map"), {
    ssr: false
});

export const ItemInfo = (props: Props) => {

    const { item, location } = props;

    const nearByInfo = getNearByInfoByLocation(location);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div>
                    <p className={styles.infoItem}>
                        <label>Contacto</label>
                        <span>{item?.contact}</span>
                    </p>
                    <p className={styles.infoItem}>
                        <label>Tarifas</label>
                        <span>{item?.priceDescription || 'Consultar'}</span>
                    </p>
                </div>

                <div>
                    {
                        item?.address && (
                            <p className={styles.infoItem}>
                                <label>Ubicacion</label>
                                <span>{item?.address}</span>
                            </p>
                        )
                    }
                    {
                        item?.web && (
                            <p className={styles.infoItem}>
                                <label>Web</label>
                                <span>{item?.web}</span>
                            </p>
                        )
                    }
                </div>
            </div>
            <div className={styles.mapContainer}>
                <MapWithNoSSR
                    lat={item.lat}
                    lng={item.lng}
                    zoom={15}
                    markers={[
                        {
                            lat: item.lat,
                            lng: item.lng,
                            id: item.id,
                            name: item.name,
                            icon: '/marker.svg',
                        },
                        ...nearByInfo.map(info => {
                            return {
                                id: info.name,
                                lat: info.lat,
                                lng: info.lng,
                                icon: '/building.png',
                                name: info.name
                            }
                        })
                    ]}
                />
            </div>
        </div>
    )
}
