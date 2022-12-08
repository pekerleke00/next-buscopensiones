import React, { useState } from 'react'
import { Filter } from '../sidebar/Filter';

import styles from "./styles/mobileTopBar.module.scss";

interface Props {
    location: String,
    itemsQuantity: number;
}

export const MobileTopBar = (props: Props) => {
    const { location, itemsQuantity } = props;

    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>{location}</h3>
                <span>{itemsQuantity} resultados</span>
            </div>

            <div>
                <span onClick={() => setShowFilters(true)}>
                    Filtrar {/*(1)*/}
                </span>

                {
                    showFilters && (
                        <div className={styles.filtersModal}>
                            <h3>Filtros</h3>
                            <span className={styles.closeModal} onClick={() => setShowFilters(false)}>×</span>
                            <Filter title="Ver solo:" filters={['femenina', 'masculina', 'mixta']} query="f" onChange={() => setShowFilters(false)}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
