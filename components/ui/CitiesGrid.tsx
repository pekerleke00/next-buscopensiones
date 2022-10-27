import React from 'react'
import { useRouter } from 'next/router';

import styles from './styles/citiesGrid.module.scss'

interface Props {
    cities: any[]
}

export const CitiesGrid = (props: Props) => {

    const { cities } = props;

    const router = useRouter();

    const handleClick = (cityName: string) => {
        router.push(`/localidad/${cityName}`)
    }

    return (
        <div className={styles.container}>
            {
                cities.map(city => (
                    <div key={city.name} className={styles.cityCard} onClick={() => handleClick(city.name)} style={{'backgroundImage': `url(${city.image})`}}>
                        <div className={styles.gradient}></div>
                        <span>
                            {city.label}
                        </span>
                    </div>
                ))
            }
        </div>
    )

    // pegada a base para listado items
}
