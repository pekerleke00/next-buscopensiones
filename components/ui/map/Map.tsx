import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "./Marker";
import { Marker as MarkerModel } from "../../../models/Position";
import "leaflet/dist/leaflet.css";

interface Props {
    lat: number,
    lng: number,
    zoom?: number,
    markers: MarkerModel[]
}

const Map = (props: Props) => {
    const { lat, lng, zoom, markers } = props;

    return (
        <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #ccc' }}>
            <MapContainer
                center={[lat, lng]} zoom={zoom || 12} scrollWheelZoom={false} dragging={false}
                style={{ height: 300, zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.mapbox.com/styles/v1/pekerleke/cl9sv5mov007814mqiz619x8a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGVrZXJsZWtlIiwiYSI6ImNrbWI5MWozeTF6YWEycHFzbXpjZTh6NDcifQ.cekgpPQTIlVlKx0NDjbH8w"
                />
                {
                    markers.map(marker => (
                        <Marker
                            key={marker.id}
                            position={[marker.lat, marker.lng]}
                            icon={marker.icon}
                            name={marker.name}
                        />
                    ))
                }
            </MapContainer>
        </div>
    );
};

export default Map;