import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Item } from '../../../models/Item'

import styles from './styles/favorites.module.scss'

export const Favorites = () => {

    const [favorites, setfavorites] = useState<Item[]>([])

    const router = useRouter();

    useEffect(() => {
        setfavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
    }, [])

    if (!favorites.length) return null

    const handleFavoriteClick = (id: string) => {
        router.push(`/pen/${id}`);
    }

    return (
        <div>
            <h4 className={styles.title}>Publicaciones favoritas</h4>
            <div>
                {
                    favorites.slice(-5).map((favItem: Item) => (
                        <div className={styles.favoriteContainer}
                            onClick={() => handleFavoriteClick(favItem._id)}
                            key={favItem.id}
                        >
                            <img src={favItem.pictures[0]?.path ? encodeURI(favItem.pictures[0].path.replace('..', 'https://buscopensiones.com')) : '/index1.jpg'} />
                            <span className={styles.name}>{favItem.name} - {favItem.location}</span>
                        </div>
                    ))
                }
                {
                    favorites.length > 5 && (
                        <Link href={'/saved'}>
                            <button className={styles.viewMore}>Ver mas</button>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
