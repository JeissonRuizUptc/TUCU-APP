import React from "react";
import GoogleMaps from "simple-react-google-maps";

const MapService = () => {
    return (
        <div>
            <GoogleMaps
                apiKey={"AIzaSyB1neMDXyhuhNwYDs3WBmnEEkyUJL2M6XA"}
                style={{ height: "60vh", width: "100%px" }}
                zoom={17}
                center={{
                    lat: 5.549070,
                    lng: -73.358475,
                }}
                markers={
                    [{ lat: 5.549070, lng: -73.358475 },
                    { lat: 5.548172, lng: -73.357142 }]}
                    
            />
        </div>
    )
}

export default MapService;