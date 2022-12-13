import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { Picture } from '../../models/Item';

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

import styles from './styles/itemGallery.module.scss'

interface Props {
    pictures: Picture[]
}

export const ItemGallery = (props: Props) => {

    const { pictures } = props

    const [index, setIndex] = useState(-1);

    const slides = pictures.map(({ path }, index) => ({
        src: encodeURI(path.replace('..', 'https://buscopensiones.com')),
        title: `${index + 1}/${pictures.length}`
    }));


    const handleClick = (index: number) => setIndex(index);

    return (
        <div className={styles.container}>
            {
                pictures.map((picture, index) => (
                    <div
                        key={picture.path}
                        className={styles.imageContainer}
                        onClick={() => handleClick(index)}
                        style={{ 'backgroundImage': `url(${encodeURI(picture.path.replace('..', 'https://buscopensiones.com'))}` }}
                    ></div>
                ))
            }

            <Lightbox
                className={styles.lightBox}
                styles={{
                    container: { backgroundColor: "rgba(0, 0, 0, .8)", backdropFilter: "blur(3px)" },
                    thumbnail: { border: 0 },
                }}
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                carousel={{ finite: false, preload: 2, padding: "0px", spacing: "1%", imageFit: "contain" }}
                plugins={[Thumbnails, Captions]}
            />
        </div>
    )
}
