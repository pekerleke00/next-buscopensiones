import { useRouter } from 'next/router';
import React from 'react'
import { Item } from '../../models/Item';

import styles from './styles/itemCard.module.scss';

interface Props {
    item: Item
}

export const ItemCard = (props: Props) => {

    const { item } = props;

    const router = useRouter();

    const handleClick = () => {
        router.push(`/pen/${item.id}`)
    }

    const getPicture = () => {
        const picture = item.pictures.find((picture: any) => picture.mainPicture) || item.pictures[0]
        return picture ? encodeURI(picture.path.replace('..', 'https://buscopensiones.com')) : '/index1.jpg'
    }

    // const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    // const handleFavorite = (e: any) => {
    //     e.stopPropagation();
    //     localStorage.setItem('favorites', JSON.stringify([...favorites, item]));
    //     console.log(favorites)
    //     favorites.push(item);
    //     console.log(favorites)
    // }

    return (
        <div className={styles.container} onClick={handleClick}>
            <div
                className={styles.image}
                style={{ 'backgroundImage': `url(${getPicture()}` }}
            ></div>
            <span className={styles.badge}>{item.type}</span>
            {/* <div className={styles.favoriteField} onClick={handleFavorite}>
                {
                    favorites.find((favorite: any) => favorite.id === item.id)
                    && (
                        <img src="/heart-solid.svg" alt="favorite" />
                    )
                    || (
                        <img src="/heart-regular.svg" alt="favorite" />
                    )
                }
            </div> */}
            <div className={styles.info}>
                <h4>{item.name}</h4>
                <small>{item.address}</small>
                <small>{item.location}</small>
            </div>
        </div>
    )
}
