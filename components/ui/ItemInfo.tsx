import dynamic from 'next/dynamic';
import React from 'react'
import Map from './map/Map';

import styles from './styles/itemInfo.module.scss'

interface Props {
    item: any
}

const MapWithNoSSR = dynamic(() => import("./map/Map"), {
    ssr: false
});

export const ItemInfo = (props: Props) => {

    const { item } = props;

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.infoItem}>Contacto: {item?.contact}</span>
                <span className={styles.infoItem}>Tarifas: {item?.priceDescription}</span>
                <span className={styles.infoItem}>Ubicacion: {item?.address}</span>
                <span className={styles.infoItem}>Web: {item?.web}</span>
            </div>
            <div className={styles.mapContainer}>
                <MapWithNoSSR
                    lat={parseFloat(item.lat)}
                    lng={parseFloat(item.lng)}
                    zoom={17}
                    markers={[{lat: parseFloat(item.lat), lng: parseFloat(item.lng), id: item.id}]}
                />
            </div>
        </div>
    )
}
