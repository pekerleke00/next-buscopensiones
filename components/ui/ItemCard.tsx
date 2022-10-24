import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

import styles from './styles/itemCard.module.scss';

interface Props {
    item: any
}

export const ItemCard = (props: Props) => {

    const { item } = props;

    const router = useRouter();

    const handleClick = () => {
        router.push(`/pen/${item.id}`)
    }

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.image} style={{'backgroundImage': `url(/index1.jpg)`}}></div>
            <span className={styles.badge}>{item.type}</span>
            <div className={styles.info}>
                <h4>{item.name}</h4>
                <small>{item.address}</small>
            </div>
        </div>
    )
}
