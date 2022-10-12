import React from "react";
import Container from "react-bootstrap/Container";
import { MapContainer, TileLayer} from 'react-leaflet'

function SectionMap() {
    return(
        <React.Fragment>
            <section className="body-map">
                <Container className="map">
                    <MapContainer id='map' center={[51.505, -0.09]} zoom={13}>                    
                        <TileLayer 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </MapContainer>                    
                </Container>
            </section>
        </React.Fragment>
    )
}

export default SectionMap;