import React from 'react'

import styles from './styles/locationBanner.module.scss';

interface Props {
    location: string
}

export const LocationBanner = (props: Props) => {

    const { location } = props;

    return (
        <div className={styles.bannerContainer} style={{'backgroundImage': `url(/la_plata.jpg`}}>
            <h1>{location}</h1>
        </div>
    )
}
