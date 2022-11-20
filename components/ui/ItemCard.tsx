import { useRouter } from 'next/router';
import React from 'react'
import { Item } from '../../models/Item';

import styles from './styles/itemCard.module.scss';
import { useState, useEffect } from 'react';

interface Props {
    item: Item
}

export const ItemCard = (props: Props) => {

    const { item } = props;

    const [favorites, setFavorites] = useState<Item[]>([])

    const router = useRouter();

    const handleClick = () => {
        router.push(`/pen/${item.id}`)
    }

    const getPicture = () => {
        const picture = item.pictures.find((picture: any) => picture.mainPicture) || item.pictures[0]
        return picture ? encodeURI(picture.path.replace('..', 'https://buscopensiones.com')) : '/index1.jpg'
    }

    const handleFavorite = (e: any) => {
        e.stopPropagation();

        let currentFavorites = [...JSON.parse(localStorage.getItem('favorites') || '[]')];

        if (currentFavorites.find((fav: Item) => fav.id === item.id)) {
            currentFavorites = currentFavorites.filter((fav: Item) => fav.id !== item.id);
        } else {
            currentFavorites.push(item);
        }

        setFavorites(currentFavorites);
        localStorage.setItem('favorites', JSON.stringify(currentFavorites));
    }

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'))
    }, [])


    return (
        <div className={styles.container} onClick={handleClick}>
            <div
                className={styles.image}
                style={{ 'backgroundImage': `url(${getPicture()}` }}
            ></div>
            <span className={styles.badge}>{item.type}</span>
            <div className={styles.favoriteField} onClick={handleFavorite}>
                {
                    <img
                        src={favorites.find((favorite: any) => favorite.id === item.id) ? "/heart-solid.svg" : "/heart-regular.svg"}
                        alt="favorite"
                    />
                }
            </div>
            <div className={styles.info}>
                <h4>{item.name}</h4>
                <small>{item.address}</small>
                <small className={item.location}>{item.location}</small>
            </div>
        </div>
    )
}
