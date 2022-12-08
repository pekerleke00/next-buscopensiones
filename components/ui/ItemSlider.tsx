import React from 'react'
import { Picture } from '../../models/Item'
import Slider from 'react-slick';

import styles from './styles/itemSlider.module.scss';
import classNames from 'classnames';

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
                    pictures.map(picture => (
                        <div key={picture.path} className={styles.imageContainer}>
                            <img src={picture.path.replace('..', 'https://buscopensiones.com')} alt="Image 2" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
