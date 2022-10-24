import React from 'react'
import { Marker as LeafletMarker, Popup } from "react-leaflet";
import L from "leaflet";

interface Props {
    position: [number, number],
}

export const Marker = (props: Props) => {

    const {position} = props;

    return (
        <LeafletMarker position={position} icon={L.icon({
            iconUrl: '/marker.svg',
            iconSize: [30, 30],
            iconAnchor: [12, 30],
            popupAnchor: [0, -30],
        })}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </LeafletMarker>
    )
}
