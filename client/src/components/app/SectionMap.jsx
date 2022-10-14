import React from "react";
//import Container from "react-bootstrap/Container";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

function SectionMap() {
    return(
        <div className="body-map">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id='map'>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" crossOrigin='*' 
            />
            <Marker position={[51.505, -0.09]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
}

export default SectionMap;