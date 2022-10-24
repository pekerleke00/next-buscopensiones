import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "./Marker";

interface Props {
    lat: number,
    lng: number,
    zoom?: number
}

const Map = (props: Props) => {
    const { lat, lng, zoom } = props;

    return (
        <div style={{ borderRadius: 10, overflow: 'hidden' }}>
            <MapContainer
                center={[lat, lng]} zoom={zoom || 12} scrollWheelZoom={true}
                style={{ height: 200 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                    // https://api.mapbox.com/styles/v1/pekerleke/ckpkipeex4ynb17mpoeo83z1s.html?title=view&access_token=pk.eyJ1IjoicGVrZXJsZWtlIiwiYSI6ImNrbWI5MWozeTF6YWEycHFzbXpjZTh6NDcifQ.cekgpPQTIlVlKx0NDjbH8w&zoomwheel=true&fresh=true#9/40.72/-73.97
                />
                <Marker position={[-34.92118961176567, -57.95460784313747]}/>
                <Marker position={[-34.91766878309747, -57.97263345519593]}/>
                <Marker position={[-34.91175724684713, -57.93551041734848]}/>
                <Marker position={[-34.926080302355444, -57.93486356751884]}/>
                <Marker position={[-34.93247166134219, -57.95490058286617]}/>
                <Marker position={[-34.92355461240556, -57.98087947788139]}/>
                <Marker position={[-34.9348566894459, -57.94014843620254]}/>
            </MapContainer>
        </div>
    );
};

export default Map;