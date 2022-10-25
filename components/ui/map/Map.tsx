import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "./Marker";

interface Marker {
    lat: number,
    lng: number,
    id: number
}

interface Props {
    lat: number,
    lng: number,
    zoom?: number,
    markers: Marker[]
}

const Map = (props: Props) => {
    const { lat, lng, zoom, markers } = props;

    return (
        <div style={{ borderRadius: 10, overflow: 'hidden' }}>
            <MapContainer
                center={[lat, lng]} zoom={zoom || 12} scrollWheelZoom={true}
                style={{ height: 200, zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                    // https://api.mapbox.com/styles/v1/pekerleke/ckpkipeex4ynb17mpoeo83z1s.html?title=view&access_token=pk.eyJ1IjoicGVrZXJsZWtlIiwiYSI6ImNrbWI5MWozeTF6YWEycHFzbXpjZTh6NDcifQ.cekgpPQTIlVlKx0NDjbH8w&zoomwheel=true&fresh=true#9/40.72/-73.97
                />
                {
                    markers.map(marker => (
                        <Marker key={marker.id} position={[marker.lat, marker.lng]}/>
                    ))
                }
            </MapContainer>
        </div>
    );
};

export default Map;