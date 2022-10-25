import { useRouter } from 'next/router';
import React from 'react'

import styles from './styles/itemCard.module.scss';

interface Props {
    item: any,
    location: string
}

export const ItemCard = (props: Props) => {

    const { item, location } = props;

    const router = useRouter();

    const handleClick = () => {
        router.push(`/pen/${item.id}`)
    }

    const getPicture = () => {
        const picture = item.pictures.find((picture: any) => picture.mainPicture) || item.pictures[0]
        return picture ? encodeURI(picture.path.replace('..', 'https://buscopensiones.com')) : '/index1.jpg'
    }

    return (
        <div className={styles.container} onClick={handleClick}>
            <div
                className={styles.image}
                style={{'backgroundImage': `url(${getPicture()}`}}
            ></div>
            <span className={styles.badge}>{item.type}</span>
            <div className={styles.info}>
                <h4>{item.name}</h4>
                <small>{item.address} • {location}</small>
            </div>
        </div>
    )
}
