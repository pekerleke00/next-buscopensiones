import React from 'react'

import styles from './styles/itemGallery.module.scss'

interface Props {
    pictures: any[]
}

export const ItemGallery = (props: Props) => {
    
    const { pictures } = props

    return (
        <div className={styles.container}>
            {
                pictures.map(picture => (
                    <div
                        key={picture.path}
                        className={styles.imageContainer}
                        style={{'backgroundImage': `url(${encodeURI(picture.path.replace('..', 'https://buscopensiones.com'))}`}}
                    ></div>
                ))
            }
        </div>
    )
}
