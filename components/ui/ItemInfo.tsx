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
                    <p className={styles.infoItem}>
                        <label>Ubicacion</label>
                        <span>{item?.address}</span>
                    </p>
                    {
                        item?.web && (
                            <p className={styles.infoItem}>
                                <label>Web</label>
                                <a target='_blank' rel='noreferrer' href={item?.web}>{item?.web}</a>
                            </p>
                        )
                    }
                </div>
            </div>
            <div className={styles.mapContainer}>
                <MapWithNoSSR
                    lat={parseFloat(item.lat)}
                    lng={parseFloat(item.lng)}
                    zoom={17}
                    markers={[{ lat: parseFloat(item.lat), lng: parseFloat(item.lng), id: item.id }]}
                />
            </div>
        </div>
    )
}
