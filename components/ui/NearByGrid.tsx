import React from 'react'
import { getNearByInfoByLocation } from '../utils/nearByInfo';
import { useState, useEffect } from 'react';

import styles from './styles/nearByGrid.module.scss';

interface Props {
    location: string,
    name: string,
    lat: number,
    lng: number
}

export const NearByGrid = (props: Props) => {

    const { location, name, lat, lng } = props;

    const [showMore, setShowMore] = useState(false);

    const info = getNearByInfoByLocation(location);
    if (!info.length) return null;

    const [nearByItems, setNearByItems] = useState<any[]>();

    const calcCrow = (lat1: number, lng1: number, lat2: number, lng2: number) => {
        var R = 6371;
        var dLat = toRad(lat2 - lat1);
        var dLon = toRad(lng2 - lng1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    }

    // Converts numeric degrees to radians
    const toRad = (Value: any) => {
        return Value * Math.PI / 180;
    }

    useEffect(() => {
        setNearByItems(info
            .map(item => {
                return {
                    ...item,
                    distance: calcCrow(lat, lng, item.lat, item.lng)
                }
            })
            .sort((a: any, b: any) => a.distance - b.distance))
    }, [])



    return (
        <div>
            <h3>Universidades cercanas <small>Calculado en linea recta</small></h3>
            <div className={styles.itemsContainer}>
                {
                    nearByItems?.slice(0, 4).map(item => (
                        <div className={styles.item} key={item.name}>
                            <span>{item.name}</span>
                            <small>{item.distance.toFixed(1)}km</small>
                        </div>
                    ))
                }

                {
                    showMore && nearByItems?.slice(4).map(item => (
                        <div className={styles.item} key={item.name}>
                            <span>{item.name}</span>
                            <small>{item.distance.toFixed(1)}km</small>
                        </div>
                    ))
                }
            </div>

            <button className={styles.showMoreButton} onClick={() => setShowMore(prev => !prev)}>{showMore ? 'Ver menos' : 'Ver mas'}</button>
        </div>
    )
}
