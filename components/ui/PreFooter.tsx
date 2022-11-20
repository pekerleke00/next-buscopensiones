import React from 'react'

import styles from './styles/prefooter.module.scss';
import { useState, useEffect } from 'react';
import { Item } from '../../models/Item';
import { useRouter } from 'next/router';

export const PreFooter = () => {
    const [favorites, setfavorites] = useState<Item[]>([])

    const router = useRouter();

    const handleFavoriteClick = (id: number) => {
        router.push(`/pen/${id}`);
    }

    useEffect(() => {
        setfavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
    }, [])

    return (
        <div>
            <div className={styles.favoritesContainer}>
                {
                    !!favorites.length && (
                        <>
                            <h3>Publicaciones guardadas</h3>
                            <div className={styles.cardsContainer}>
                                {
                                    favorites.map((favItem: Item) => (
                                        <div className={styles.imageContainer} onClick={() => handleFavoriteClick(favItem.id)}>
                                            <img src={favItem.pictures[0].path ? encodeURI(favItem.pictures[0].path.replace('..', 'https://buscopensiones.com')) : '/index1.jpg'} />
                                            <span className={styles.name}>{favItem.name} - {favItem.location}</span>
                                            {/* <span className={styles.location}>{favItem.location}</span> */}
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )
                }
            </div>
            <div className={styles.container}>
                <div>
                    <h3>Sobre el proyecto</h3>
                    <p>BuscoPensiones.com nace con el fin de resolver la problematica de encontrar lugar donde transitar los estudios en las distintas universidades de argentina. Para esto nosotros, que tambien somos estudiantes, creamos esta pagina para hacer mas facil la busqueda de pensiones, residencias u otros tipos de alberges universitarios concentrandolos en un solo lugar.</p>
                </div>
                <div>
                    <h3>Sobre las publicaciones</h3>
                    <p>{`Las pensiones que se encuentran cargadas en esta pagina NO son propiedad de BuscoPensiones.com, ni se recibe dinero de ningun tipo de parte de las mismas por su publicacion.\n
                    Si te interesa colaborar para que este proyecto sigua en pie podes hacerlo simplemete dejando like y recomendando la pagina a cualquier persona que creas que la pueda nesesitar.`}</p>
                </div>
            </div>
        </div>
    )
}
