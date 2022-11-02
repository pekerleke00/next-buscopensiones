import React from 'react'
import { Marker as LeafletMarker, Popup } from "react-leaflet";
import L from "leaflet";

interface Props {
    position: [number, number],
    icon?: string,
    name?: string
}

export const Marker = (props: Props) => {

    const { position, icon, name } = props;

    return (
        <LeafletMarker position={position} icon={L.icon({
            iconUrl: icon || '/marker.png',
            iconSize: [30, 30],
            iconAnchor: [12, 30],
            popupAnchor: [0, -30],
        })}>
            {
                name && (
                    <Popup>
                        { name }
                    </Popup>
                )
            }
        </LeafletMarker>
    )
}
