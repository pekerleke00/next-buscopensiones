import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbRadar2 } from "react-icons/tb";

import styles from "./styles/itemButtonGuides.module.scss";

interface Props {
    mapRef: any
    nearByRef: any
}

export const ItemButtonGuides = (props: Props) => {
    const { mapRef, nearByRef } = props;
    return (
        <div className={styles.container}>
            <p onClick={() => mapRef.current.scrollIntoView({top: 100, behavior: "smooth" })}>
                <FaMapMarkerAlt /> <span>Ver en mapa</span>
            </p>
            <p onClick={() => nearByRef.current.scrollIntoView({ behavior: "smooth" })}>
                <TbRadar2 /> <span>Universidades cercanas</span>
            </p>
        </div>
    )
}
