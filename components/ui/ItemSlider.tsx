import React from 'react'
import Slider from 'react-slick';
import { Picture } from '../../models/Item'

import styles from './styles/itemSlider.module.scss';

interface Props {
    pictures: Picture[]
}

export const ItemSlider = (props: Props) => {
    const { pictures } = props;

    const settings = {
        infinite: true,
        arrows: false
    };

    return (
        <div className={styles.slider}>
            <Slider {...settings} style={{ margin: '-20px -20px 20px -20px' }}>
                {
                    pictures.map((picture, index) => (
                        <div key={picture.path} className={styles.imageContainer}>
                            <img src={picture.path.replace('..', 'https://buscopensiones.com')} alt="Image 2" />
                            <span>{index+1}/{pictures.length}</span>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
