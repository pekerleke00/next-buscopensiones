import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Item } from '../../models/Item';
import { getCityInfo } from '../utils/citiesInfo';

import styles from './styles/itemTitle.module.scss';


interface Props {
    item: Item
}

export const ItemTitle = (props: Props) => {

    const { item } = props

    const router = useRouter();

    const [favorites, setFavorites] = useState<Item[]>();

    const handleBack = () => {
        router.push(`/localidad/${getCityInfo(item?.location)?.name}`)
    }

    const handleToggleFavorite = () => {
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
        setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
    }, [])

    return (
        <div className={styles.container}>
            <span className={styles.goBackButton} onClick={handleBack}>Volver a {item?.location}</span>
            <h1>
                {item?.name}
            </h1>

            <div className={styles.description}>
                {item.description}
            </div>

            <div className={styles.favorite} onClick={handleToggleFavorite}>
                {
                    favorites?.find((favorite: Item) => favorite.id === item.id)
                        ? <AiFillHeart />
                        : <AiOutlineHeart />
                }
            </div>
        </div>
    )
}
