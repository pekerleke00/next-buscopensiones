import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useRouter } from 'next/router';
import { Item, Picture } from '../../models/Item';

import styles from './styles/itemCard.module.scss';

interface Props {
    item: Item
}

export const ItemCard = (props: Props) => {

    const { item } = props;

    const [favorites, setFavorites] = useState<Item[]>([])

    const router = useRouter();

    const handleClick = () => {
        router.push(`/pen/${item._id}`)
    }

    const getPicture = () => {
        const picture = item.pictures.find((picture: Picture) => picture.mainPicture) || item.pictures[0]
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
                    favorites?.find((favorite: Item) => favorite.id === item.id)
                        ? <AiFillHeart />
                        : <AiOutlineHeart />
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
